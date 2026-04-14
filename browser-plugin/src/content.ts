import {
  ALLOWED_COLORS_RGB,
  ALLOWED_FONT_FAMILIES,
  ALLOWED_RADII,
  ALLOWED_SPACING,
  MIN_TOUCH_TARGET,
  type RGB,
} from './tokens';

// ── Types ───────────────────────────────────────────────────────────

interface Violation {
  category: 'color' | 'typography' | 'radius' | 'spacing' | 'touch';
  message: string;
  severity: 'error' | 'warning';
}

interface ElementResult {
  selector: string;
  tagName: string;
  violations: Violation[];
}

// ── Helpers ─────────────────────────────────────────────────────────

const OVERLAY_ATTR = 'data-dabc-lint';
const TOOLTIP_ATTR = 'data-dabc-tooltip';
const STYLE_ID = 'dabc-lint-styles';

const TOLERANCE = 3;

function distance(a: RGB, b: RGB): number {
  return Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
}

function isColorAllowed(rgb: RGB): boolean {
  if (rgb.r === 0 && rgb.g === 0 && rgb.b === 0) return true; // transparent / black text
  return ALLOWED_COLORS_RGB.some((c) => distance(c, rgb) <= TOLERANCE);
}

/** Parse "rgb(r, g, b)" or "rgba(r, g, b, a)" to RGB. Returns null for transparent. */
function parseCssColor(val: string): RGB | null {
  const m = val.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([.\d]+))?\s*\)/);
  if (!m) return null;
  const a = m[4] !== undefined ? parseFloat(m[4]) : 1;
  if (a === 0) return null; // fully transparent
  return { r: parseInt(m[1]), g: parseInt(m[2]), b: parseInt(m[3]) };
}

function roundPx(val: string): number {
  return Math.round(parseFloat(val) || 0);
}

function cssPath(el: Element): string {
  const parts: string[] = [];
  let current: Element | null = el;
  while (current && current !== document.documentElement) {
    let selector = current.tagName.toLowerCase();
    if (current.id) {
      selector += `#${current.id}`;
      parts.unshift(selector);
      break;
    }
    if (current.className && typeof current.className === 'string') {
      const cls = current.className.trim().split(/\s+/).slice(0, 2).join('.');
      if (cls) selector += `.${cls}`;
    }
    parts.unshift(selector);
    current = current.parentElement;
  }
  return parts.join(' > ');
}

const INTERACTIVE_TAGS = new Set(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'SUMMARY']);
const INTERACTIVE_ROLES = new Set(['button', 'link', 'tab', 'checkbox', 'radio', 'switch', 'menuitem']);

function isInteractive(el: Element): boolean {
  if (INTERACTIVE_TAGS.has(el.tagName)) return true;
  const role = el.getAttribute('role');
  if (role && INTERACTIVE_ROLES.has(role)) return true;
  if (el.hasAttribute('tabindex') && el.getAttribute('tabindex') !== '-1') return true;
  if (el.hasAttribute('onclick')) return true;
  return false;
}

// ── Checks ──────────────────────────────────────────────────────────

function checkColors(cs: CSSStyleDeclaration): Violation[] {
  const violations: Violation[] = [];

  const colorProps: [string, string][] = [
    ['color', cs.color],
    ['background-color', cs.backgroundColor],
    ['border-top-color', cs.borderTopColor],
    ['border-right-color', cs.borderRightColor],
    ['border-bottom-color', cs.borderBottomColor],
    ['border-left-color', cs.borderLeftColor],
  ];

  for (const [prop, val] of colorProps) {
    const rgb = parseCssColor(val);
    if (!rgb) continue;
    if (!isColorAllowed(rgb)) {
      violations.push({
        category: 'color',
        severity: 'error',
        message: `${prop}: rgb(${rgb.r},${rgb.g},${rgb.b}) — not in token palette`,
      });
    }
  }

  return violations;
}

function checkTypography(el: Element, cs: CSSStyleDeclaration): Violation[] {
  // Only check elements that actually contain text
  if (!el.children.length && !(el.textContent || '').trim()) return [];
  // Only check leaf text nodes or headings/paragraphs
  const isTextElement = el.children.length === 0 ||
    /^(H[1-6]|P|SPAN|LABEL|A|LI|TD|TH|CAPTION|FIGCAPTION|BLOCKQUOTE|CITE|EM|STRONG|SMALL|B|I|U|SUB|SUP)$/.test(el.tagName);
  if (!isTextElement) return [];

  const violations: Violation[] = [];
  const family = cs.fontFamily;
  const allowed = ALLOWED_FONT_FAMILIES.some((f) => family.includes(f));
  if (!allowed) {
    violations.push({
      category: 'typography',
      severity: 'error',
      message: `font-family: "${family.split(',')[0].trim()}" — use Poppins or Roboto`,
    });
  }
  return violations;
}

function checkRadius(cs: CSSStyleDeclaration): Violation[] {
  const violations: Violation[] = [];
  const corners = [
    cs.borderTopLeftRadius,
    cs.borderTopRightRadius,
    cs.borderBottomLeftRadius,
    cs.borderBottomRightRadius,
  ];

  for (const c of corners) {
    const px = roundPx(c);
    if (px > 0 && !ALLOWED_RADII.includes(px)) {
      violations.push({
        category: 'radius',
        severity: 'error',
        message: `border-radius includes ${px}px — not a valid token`,
      });
      break; // one message per element is enough
    }
  }
  return violations;
}

function checkSpacing(cs: CSSStyleDeclaration): Violation[] {
  const violations: Violation[] = [];

  const gap = roundPx(cs.gap || cs.getPropertyValue('gap'));
  if (gap > 0 && !ALLOWED_SPACING.includes(gap)) {
    violations.push({
      category: 'spacing',
      severity: 'error',
      message: `gap: ${gap}px — not a design token value`,
    });
  }

  const paddings: [string, string][] = [
    ['padding-top', cs.paddingTop],
    ['padding-right', cs.paddingRight],
    ['padding-bottom', cs.paddingBottom],
    ['padding-left', cs.paddingLeft],
  ];
  for (const [name, val] of paddings) {
    const px = roundPx(val);
    if (px > 0 && !ALLOWED_SPACING.includes(px)) {
      violations.push({
        category: 'spacing',
        severity: 'error',
        message: `${name}: ${px}px — not a design token value`,
      });
      break; // one padding warning is enough
    }
  }

  return violations;
}

function checkTouchTarget(el: Element): Violation[] {
  if (!isInteractive(el)) return [];
  const rect = el.getBoundingClientRect();
  if (rect.width < MIN_TOUCH_TARGET || rect.height < MIN_TOUCH_TARGET) {
    return [{
      category: 'touch',
      severity: 'warning',
      message: `${Math.round(rect.width)}×${Math.round(rect.height)}px — min touch target is ${MIN_TOUCH_TARGET}×${MIN_TOUCH_TARGET}px`,
    }];
  }
  return [];
}

// ── Scan ────────────────────────────────────────────────────────────

function scanPage(): ElementResult[] {
  const results: ElementResult[] = [];
  const all = document.querySelectorAll('body *');

  for (const el of all) {
    // Skip our own overlays, scripts, styles
    if (el.hasAttribute(OVERLAY_ATTR)) continue;
    if (el.hasAttribute(TOOLTIP_ATTR)) continue;
    const tag = el.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'BR' || tag === 'HR') continue;

    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') continue;

    const violations: Violation[] = [
      ...checkColors(cs),
      ...checkTypography(el, cs),
      ...checkRadius(cs),
      ...checkSpacing(cs),
      ...checkTouchTarget(el),
    ];

    if (violations.length > 0) {
      results.push({
        selector: cssPath(el),
        tagName: tag.toLowerCase(),
        violations,
      });
    }
  }

  return results;
}

// ── Overlay ─────────────────────────────────────────────────────────

function injectStyles(): void {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    [${OVERLAY_ATTR}] {
      position: relative;
    }
    [${OVERLAY_ATTR}="error"] {
      outline: 2px solid #c85535 !important;
      outline-offset: 1px;
    }
    [${OVERLAY_ATTR}="warning"] {
      outline: 2px dashed #f08e00 !important;
      outline-offset: 1px;
    }
    [${TOOLTIP_ATTR}] {
      display: none;
      position: absolute;
      top: -4px;
      left: 0;
      transform: translateY(-100%);
      background: #1f2129;
      color: #fff;
      font: 11px/1.4 Inter, -apple-system, sans-serif;
      padding: 6px 10px;
      border-radius: 6px;
      max-width: 340px;
      z-index: 2147483647;
      pointer-events: none;
      white-space: pre-line;
      box-shadow: 0 2px 8px rgba(0,0,0,0.25);
    }
    [${OVERLAY_ATTR}]:hover > [${TOOLTIP_ATTR}] {
      display: block;
    }
  `;
  document.head.appendChild(style);
}

function clearOverlays(): void {
  document.querySelectorAll(`[${OVERLAY_ATTR}]`).forEach((el) => {
    el.removeAttribute(OVERLAY_ATTR);
  });
  document.querySelectorAll(`[${TOOLTIP_ATTR}]`).forEach((el) => {
    el.remove();
  });
}

function applyOverlays(results: ElementResult[]): void {
  injectStyles();
  clearOverlays();

  const all = document.querySelectorAll('body *');
  // Build selector → result map
  const selectorMap = new Map<string, ElementResult>();
  for (const r of results) {
    selectorMap.set(r.selector, r);
  }

  for (const el of all) {
    if (el.hasAttribute(OVERLAY_ATTR) || el.hasAttribute(TOOLTIP_ATTR)) continue;
    const sel = cssPath(el);
    const result = selectorMap.get(sel);
    if (!result) continue;

    const maxSeverity = result.violations.some((v) => v.severity === 'error') ? 'error' : 'warning';
    el.setAttribute(OVERLAY_ATTR, maxSeverity);

    const tooltip = document.createElement('div');
    tooltip.setAttribute(TOOLTIP_ATTR, '');
    tooltip.textContent = result.violations.map((v) =>
      `${v.severity === 'error' ? '●' : '◐'} ${v.message}`
    ).join('\n');
    el.appendChild(tooltip);
  }
}

// ── Message Listener ────────────────────────────────────────────────

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === 'scan') {
    const results = scanPage();
    applyOverlays(results);

    // Build summary
    let errors = 0;
    let warnings = 0;
    for (const r of results) {
      for (const v of r.violations) {
        if (v.severity === 'error') errors++;
        else warnings++;
      }
    }

    sendResponse({
      type: 'scan-results',
      elements: results.length,
      errors,
      warnings,
      results,
    });
  }

  if (msg.type === 'clear') {
    clearOverlays();
    sendResponse({ type: 'cleared' });
  }

  // Return true to indicate we will send a response asynchronously
  return true;
});

import { checkColors } from './checks/colors';
import { checkTypography } from './checks/typography';
import { checkRadius } from './checks/radius';
import { checkSpacing } from './checks/spacing';
import { checkTouchTarget } from './checks/touch';
import { checkButtonHierarchy } from './checks/buttons';
import type { Violation } from './types';

// Show the UI panel
figma.showUI(__html__, { width: 400, height: 520 });

// ── Traversal ───────────────────────────────────────────────────────

function traverse(node: SceneNode, violations: Violation[]): void {
  // Per-node checks
  violations.push(...checkColors(node));
  violations.push(...checkTypography(node));
  violations.push(...checkRadius(node));
  violations.push(...checkSpacing(node));
  violations.push(...checkTouchTarget(node));

  // Recurse into children
  if ('children' in node) {
    for (const child of (node as ChildrenMixin).children) {
      traverse(child as SceneNode, violations);
    }
  }
}

// ── Run Lint ────────────────────────────────────────────────────────

function runLint(): Violation[] {
  const selection = figma.currentPage.selection;
  const nodes: readonly SceneNode[] =
    selection.length > 0 ? selection : figma.currentPage.children;

  const violations: Violation[] = [];

  for (const node of nodes) {
    traverse(node, violations);
    // Button hierarchy is checked per top-level frame
    violations.push(...checkButtonHierarchy(node));
  }

  return violations;
}

// ── Message Handling ────────────────────────────────────────────────

figma.ui.onmessage = (msg: { type: string; nodeId?: string }) => {
  if (msg.type === 'run-lint') {
    const violations = runLint();
    figma.ui.postMessage({ type: 'lint-results', violations });
  }

  if (msg.type === 'select-node' && msg.nodeId) {
    const node = figma.getNodeById(msg.nodeId);
    if (node && node.type !== 'DOCUMENT' && node.type !== 'PAGE') {
      const sceneNode = node as SceneNode;
      figma.currentPage.selection = [sceneNode];
      figma.viewport.scrollAndZoomIntoView([sceneNode]);
    }
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};

// Auto-run on open
const initialViolations = runLint();
figma.ui.postMessage({ type: 'lint-results', violations: initialViolations });

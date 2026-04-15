import { ALLOWED_COLORS_RGB, type RGB } from '../tokens';
import type { Violation } from '../types';

/** Max Euclidean distance in RGB space to consider a match (handles rounding). */
const TOLERANCE = 3;

function distance(a: RGB, b: RGB): number {
  return Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
}

function figmaColorToRgb(c: { r: number; g: number; b: number }): RGB {
  return {
    r: Math.round(c.r * 255),
    g: Math.round(c.g * 255),
    b: Math.round(c.b * 255),
  };
}

function rgbToHex(c: RGB): string {
  const hex = (n: number) => n.toString(16).padStart(2, '0');
  return `#${hex(c.r)}${hex(c.g)}${hex(c.b)}`;
}

function isAllowed(rgb: RGB): boolean {
  return ALLOWED_COLORS_RGB.some((allowed) => distance(allowed, rgb) <= TOLERANCE);
}

function checkPaints(
  paints: readonly Paint[],
  node: SceneNode,
  property: string,
): Violation[] {
  const violations: Violation[] = [];
  for (const paint of paints) {
    if (!('visible' in paint) || paint.visible === false) continue;

    if (paint.type === 'SOLID') {
      const rgb = figmaColorToRgb(paint.color);
      if (!isAllowed(rgb)) {
        violations.push({
          nodeId: node.id,
          nodeName: node.name,
          category: 'color',
          severity: 'error',
          message: `${property} uses ${rgbToHex(rgb)} — not in token palette`,
        });
      }
    }

    if (paint.type === 'GRADIENT_LINEAR' || paint.type === 'GRADIENT_RADIAL') {
      for (const stop of paint.gradientStops) {
        const rgb = figmaColorToRgb(stop.color);
        if (!isAllowed(rgb)) {
          violations.push({
            nodeId: node.id,
            nodeName: node.name,
            category: 'color',
            severity: 'error',
            message: `${property} gradient stop uses ${rgbToHex(rgb)} — not in token palette`,
          });
        }
      }
    }
  }
  return violations;
}

export function checkColors(node: SceneNode): Violation[] {
  const violations: Violation[] = [];

  if ('fills' in node && Array.isArray(node.fills)) {
    const fills = checkPaints(node.fills as readonly Paint[], node, 'Fill');
    for (let i = 0; i < fills.length; i++) violations.push(fills[i]);
  }

  if ('strokes' in node && Array.isArray(node.strokes)) {
    const strokes = checkPaints(node.strokes as readonly Paint[], node, 'Stroke');
    for (let i = 0; i < strokes.length; i++) violations.push(strokes[i]);
  }

  return violations;
}

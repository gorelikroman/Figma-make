import { ALLOWED_SPACING } from '../tokens';
import type { Violation } from '../types';

export function checkSpacing(node: SceneNode): Violation[] {
  if (!('layoutMode' in node)) return [];

  const frame = node as FrameNode;
  if (frame.layoutMode === 'NONE') return [];

  const violations: Violation[] = [];

  // Check itemSpacing (gap between children)
  if (typeof frame.itemSpacing === 'number' && !ALLOWED_SPACING.includes(Math.round(frame.itemSpacing))) {
    violations.push({
      nodeId: node.id,
      nodeName: node.name,
      category: 'spacing',
      severity: 'error',
      message: `itemSpacing is ${frame.itemSpacing}px — not a design token value`,
    });
  }

  // Check padding
  const paddings: [string, number][] = [
    ['paddingTop', frame.paddingTop],
    ['paddingRight', frame.paddingRight],
    ['paddingBottom', frame.paddingBottom],
    ['paddingLeft', frame.paddingLeft],
  ];

  for (const [name, value] of paddings) {
    if (typeof value === 'number' && value > 0 && !ALLOWED_SPACING.includes(Math.round(value))) {
      violations.push({
        nodeId: node.id,
        nodeName: node.name,
        category: 'spacing',
        severity: 'error',
        message: `${name} is ${value}px — not a design token value`,
      });
    }
  }

  return violations;
}

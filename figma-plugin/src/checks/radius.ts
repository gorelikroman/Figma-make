import { ALLOWED_RADII } from '../tokens';
import type { Violation } from '../types';

export function checkRadius(node: SceneNode): Violation[] {
  if (!('cornerRadius' in node)) return [];

  const violations: Violation[] = [];
  const r = (node as any).cornerRadius;

  if (r === figma.mixed) {
    // Check individual corners
    const corners: [string, number][] = [
      ['topLeftRadius', (node as any).topLeftRadius],
      ['topRightRadius', (node as any).topRightRadius],
      ['bottomLeftRadius', (node as any).bottomLeftRadius],
      ['bottomRightRadius', (node as any).bottomRightRadius],
    ];
    for (const [name, value] of corners) {
      if (typeof value === 'number' && !ALLOWED_RADII.includes(Math.round(value))) {
        violations.push({
          nodeId: node.id,
          nodeName: node.name,
          category: 'radius',
          severity: 'error',
          message: `${name} is ${value}px — not a valid token (${ALLOWED_RADII.join(', ')})`,
        });
      }
    }
  } else if (typeof r === 'number' && !ALLOWED_RADII.includes(Math.round(r))) {
    violations.push({
      nodeId: node.id,
      nodeName: node.name,
      category: 'radius',
      severity: 'error',
      message: `cornerRadius is ${r}px — not a valid token (${ALLOWED_RADII.join(', ')})`,
    });
  }

  return violations;
}

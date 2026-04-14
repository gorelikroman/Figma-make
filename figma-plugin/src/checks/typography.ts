import { ALLOWED_FONT_FAMILIES } from '../tokens';
import type { Violation } from '../types';

export function checkTypography(node: SceneNode): Violation[] {
  if (node.type !== 'TEXT') return [];

  const violations: Violation[] = [];
  const textNode = node as TextNode;

  // fontName can be mixed (Symbol) if multiple styles in one text node
  const fontName = textNode.fontName;
  if (fontName === figma.mixed) {
    // Check each character segment — too expensive for large text.
    // Flag as warning for manual review.
    violations.push({
      nodeId: node.id,
      nodeName: node.name,
      category: 'typography',
      severity: 'warning',
      message: 'Mixed fonts detected — verify each segment uses Poppins or Roboto',
    });
  } else {
    if (!ALLOWED_FONT_FAMILIES.includes(fontName.family)) {
      violations.push({
        nodeId: node.id,
        nodeName: node.name,
        category: 'typography',
        severity: 'error',
        message: `Font "${fontName.family}" is not allowed — use Poppins or Roboto`,
      });
    }
  }

  return violations;
}

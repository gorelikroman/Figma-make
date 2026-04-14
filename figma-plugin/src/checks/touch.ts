import { MIN_TOUCH_TARGET } from '../tokens';
import type { Violation } from '../types';

/** Node types that are typically interactive / tappable. */
const INTERACTIVE_TYPES: Set<string> = new Set([
  'INSTANCE',
  'COMPONENT',
  'COMPONENT_SET',
]);

/** Heuristic: name or component name contains one of these keywords. */
const INTERACTIVE_KEYWORDS = /button|btn|checkbox|radio|switch|toggle|input|link|tab|chip|tag/i;

function isLikelyInteractive(node: SceneNode): boolean {
  if (INTERACTIVE_TYPES.has(node.type)) return true;
  if (INTERACTIVE_KEYWORDS.test(node.name)) return true;
  // Check reactions (click handlers) if available
  if ('reactions' in node && Array.isArray((node as any).reactions) && (node as any).reactions.length > 0) {
    return true;
  }
  return false;
}

export function checkTouchTarget(node: SceneNode): Violation[] {
  if (!isLikelyInteractive(node)) return [];

  const violations: Violation[] = [];
  const w = node.width;
  const h = node.height;

  if (w < MIN_TOUCH_TARGET || h < MIN_TOUCH_TARGET) {
    violations.push({
      nodeId: node.id,
      nodeName: node.name,
      category: 'touch',
      severity: 'warning',
      message: `Size is ${Math.round(w)}×${Math.round(h)}px — minimum touch target is ${MIN_TOUCH_TARGET}×${MIN_TOUCH_TARGET}px`,
    });
  }

  return violations;
}

import type { Violation } from '../types';

/**
 * Check that each frame has at most one primary (gradient) button.
 * A "primary button" is detected by having a gradient fill (linear)
 * and being named with a common button keyword.
 */

const BUTTON_NAME = /button|btn|cta/i;

function hasPrimaryGradient(node: SceneNode): boolean {
  if (!('fills' in node) || !Array.isArray(node.fills)) return false;
  return (node.fills as readonly Paint[]).some(
    (p) => p.type === 'GRADIENT_LINEAR' && p.visible !== false,
  );
}

function isPrimaryButton(node: SceneNode): boolean {
  return BUTTON_NAME.test(node.name) && hasPrimaryGradient(node);
}

function collectPrimaryButtons(node: SceneNode): SceneNode[] {
  const buttons: SceneNode[] = [];
  if (isPrimaryButton(node)) buttons.push(node);
  if ('children' in node) {
    for (const child of (node as ChildrenMixin).children) {
      const sub = collectPrimaryButtons(child as SceneNode);
      for (let i = 0; i < sub.length; i++) buttons.push(sub[i]);
    }
  }
  return buttons;
}

export function checkButtonHierarchy(root: SceneNode): Violation[] {
  // Only meaningful for frames / groups
  if (!('children' in root)) return [];

  const primaries = collectPrimaryButtons(root);
  if (primaries.length <= 1) return [];

  return primaries.slice(1).map((btn) => ({
    nodeId: btn.id,
    nodeName: btn.name,
    category: 'button' as const,
    severity: 'warning' as const,
    message: `Multiple primary (gradient) buttons in "${root.name}" — only one primary CTA per section`,
  }));
}

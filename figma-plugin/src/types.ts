/**
 * Shared types used across all check modules.
 */

export interface Violation {
  /** The Figma node id */
  nodeId: string;
  /** Human-readable node name */
  nodeName: string;
  /** Check category */
  category: 'color' | 'typography' | 'radius' | 'spacing' | 'touch' | 'button';
  /** What went wrong */
  message: string;
  /** Severity level */
  severity: 'error' | 'warning';
}

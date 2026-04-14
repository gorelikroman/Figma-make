/**
 * Allowed design token values extracted from src/styles/tokens.css.
 * Used by all checks to validate Figma nodes against the design system.
 */

// ── Colors ──────────────────────────────────────────────────────────
// All unique hex colors from tokens.css, normalized to lowercase.
// Figma gives us RGB 0–1, so we convert these to compare.

export const ALLOWED_HEX_COLORS: string[] = [
  '#001c00','#002b00','#002e0d','#00401f','#005730','#00734a',
  '#08080a','#081a24','#0f3345','#130d1b','#174a6b','#1f140a',
  '#1f2129','#1f638c','#214d17','#257db0','#267db0','#269c6e',
  '#271a37','#2b0f26','#2b1a00','#33363d','#336e1f','#3a2852',
  '#3b0000','#3c3023','#424752','#4a8a26','#4e356e','#5296bf',
  '#545963','#570000','#591f4a','#593600','#593b21','#61091e',
  '#614289','#616975','#61a333','#631816','#707885','#73bd9c',
  '#750000','#751028','#7aba47','#7d8794','#7db0d1','#8074af',
  '#8168a1','#822e2b','#824f00','#852e6e','#8c94a3','#8d4618',
  '#966338','#99a3b2','#99d15e','#9c0000','#a3d6c2','#a44a47',
  '#a697ca','#a6b0bf','#a71c3c','#a8ccde','#af8774','#b03d94',
  '#b06900','#b3de7d','#b5bdcc','#be2352','#bfd9e8','#c0a188',
  '#c0b3d0','#c2c9d6','#c7e8d9','#c85535','#cc0000','#cdeb9c',
  '#d0c6dc','#d1d6e3','#d4e5f0','#d7b8a0','#da4a6c','#db4db8',
  '#db7a87','#db8200','#db8300','#dd3270','#ded1c2','#dee3ed',
  '#dfd9e7','#e2fcf2','#e36959','#e370c7','#e8f2f7','#e9e0d3',
  '#ead1d7','#eb94d4','#ebf0f7','#ed998c','#efecf3','#eff7d5',
  '#f08e00','#f28867','#f2b8e3','#f3c4d0','#f5bab0','#f5c9eb',
  '#f5f0eb','#f5f6f7','#f5f7fa','#f7d1cb','#f7dbf2','#f7f6f9',
  '#f7faef','#f9f7f0','#fa6e43','#faab38','#facebc','#faedf7',
  '#fafcfc','#fce9e6','#fcf5fa','#febaa1','#fec56e','#fee2d9',
  '#ffdca7','#ffe2ba','#ffedd2','#fff0f3','#fff1ec','#fff7ea',
  '#fffcf5','#ffffff',
];

// Pre-computed RGB lookup (0–255) for fast comparison
export interface RGB { r: number; g: number; b: number }

function hexToRgb(hex: string): RGB {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

export const ALLOWED_COLORS_RGB: RGB[] = ALLOWED_HEX_COLORS.map(hexToRgb);

// ── Typography ──────────────────────────────────────────────────────

export const ALLOWED_FONT_FAMILIES = ['Poppins', 'Roboto'];

export const ALLOWED_FONT_WEIGHTS = [300, 400, 500, 600, 700];

export const ALLOWED_FONT_SIZES = [
  10, 12, 14, 16, 18, 22, 28, 32, 42, 48, 52, 64, 72,
];

export const ALLOWED_LINE_HEIGHTS_RATIO = [1.1, 1.5, 1.75];

// ── Border Radius ───────────────────────────────────────────────────
// Desktop + mobile values combined

export const ALLOWED_RADII = [0, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 999];

// ── Spacing ─────────────────────────────────────────────────────────

export const ALLOWED_SPACING = [
  0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 60, 64, 68, 76, 84, 92, 100,
];

// ── Touch Targets ───────────────────────────────────────────────────

export const MIN_TOUCH_TARGET = 44;

// ── Primary Button Detection ────────────────────────────────────────
// The primary button uses a gradient from alias-primary to alias-secondary.
// In Figma this appears as a gradient fill with these approximate stop colors.

export const PRIMARY_GRADIENT_COLORS: RGB[] = [
  hexToRgb('#00734a'), // alias-primary-400
  hexToRgb('#7aba47'), // alias-secondary-400
];

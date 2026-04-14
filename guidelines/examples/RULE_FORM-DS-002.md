# Rule Card

## Metadata
- rule_id: FORM-DS-002
- title: Inline colors and inline radii are forbidden outside the token system
- status: draft
- owner:
- priority: P1
- severity: error
- scope: forms | spacing | layout

## Intent
- business_goal: Prevent visual drift — colors and radii change only via tokens so rebranding happens in one place.
- ux_goal: Maintain a consistent visual language across all forms.

## Conditions (when rule applies)
- condition_1: Any form element (container, field, button, helper text, decorative element).
- condition_2: Applies across all viewports.
- condition_3: Applies to inline styles, Tailwind arbitrary values, and CSS-in-JS.

## Must
- must_1: Colors must be specified only via CSS variables from `tokens.css`: `var(--mapped-*)`, `var(--alias-*)`, `var(--brand-*)`. Tailwind theme classes (e.g., `bg-background`, `text-foreground`) are allowed.
- must_2: Border-radius must be set only via tokens: `--size-radius-none`, `--size-radius-xxs`, `--size-radius-xs`, `--size-radius-s`, `--size-radius-m`, `--size-radius-l`, `--size-radius-xl`, `--size-radius-xxl`, `--size-radius-full`.

## Must Not
- must_not_1: Do not set hex/rgb/hsl/oklch colors directly in form components (e.g., `color: '#ff0000'`, `bg-[#cc0000]`).
- must_not_2: Do not set arbitrary border-radius values in px (e.g., `borderRadius: '14px'`, `rounded-[14px]`).

## Fallback
- fallback_if_conflict: If a needed color is missing from tokens, add the token to `tokens.css` first, then use it.
- fallback_if_missing_data: Use `--mapped-surface-card` for backgrounds, `--mapped-text-primary` for text, and `--size-radius-m` for radius by default.

## Evidence
- source_component: All design-kit components (use `var(--*)` for colors)
- source_token: src/styles/tokens.css — MAPPED TOKENS (colors) and RADIUS sections
- source_doc: README.md (Design Token System: BRAND → ALIAS → MAPPED)

## Validation Mapping
- validator_check_id: CHECK-FORM-DS-002
- expected_failure_message: "Inline color or border-radius detected outside token system. Use var(--mapped-*) for colors and var(--size-radius-*) for radius."
- autofix_policy: suggest-only

## Examples
- positive_example: `style={{ background: 'var(--mapped-surface-card)', borderRadius: 'var(--size-radius-l)' }}`
- negative_example: `style={{ background: '#f5f6f7', borderRadius: '14px' }}`

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

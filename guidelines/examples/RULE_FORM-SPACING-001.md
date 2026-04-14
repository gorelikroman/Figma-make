# Rule Card

## Metadata
- rule_id: FORM-SPACING-001
- title: Use only spacing tokens; no arbitrary px/rem/em
- status: draft
- owner:
- priority: P0
- severity: error
- scope: forms | spacing

## Intent
- business_goal: Ensure a consistent visual rhythm across forms and eliminate design drift when multiple developers or AI contribute.
- ux_goal: Consistent spacing between form elements creates a predictable scanning pattern for users.

## Conditions (when rule applies)
- condition_1: Any element inside a form (container, field, label, action group, helper text).
- condition_2: Applies across all viewports (desktop and mobile).
- condition_3: Applies to margin, padding, and gap.

## Must
- must_1: All spacing values must be set via CSS variables from `tokens.css`: `var(--size-gap-*)` or `var(--size-gap-vertical-*)`.
- must_2: Allowed gap tokens: 0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 60, 64, 68, 76, 84, 92, 100. Vertical section tokens: xxs(16/12), xs(20/16), sm(26/20), md(34/26), lg(48/32), xl(64/40), xxl(110/72) (desktop/mobile).

## Must Not
- must_not_1: Do not specify arbitrary values in px/rem/em directly (e.g., `gap: 15px`, `margin-top: 1.5rem`).
- must_not_2: Do not use Tailwind arbitrary values (e.g., `gap-[15px]`) for spacing inside forms.

## Fallback
- fallback_if_conflict: If the desired size exactly matches a token, use the token. If it falls between two tokens, choose the nearest smaller token.
- fallback_if_missing_data: If no token is specified, use `--size-gap-16` (16px) as a safe default.

## Evidence
- source_component: All design-kit components
- source_token: src/styles/tokens.css — `--size-gap-*` section and mobile overrides
- source_doc: README.md (Most Used Variables — Spacing)

## Validation Mapping
- validator_check_id: CHECK-FORM-SPACING-001
- expected_failure_message: "Arbitrary spacing value detected. Use design token var(--size-gap-*) instead of raw px/rem/em."
- autofix_policy: suggest-only

## Examples
- positive_example: `<div className="flex flex-col" style={{ gap: 'var(--size-gap-16)' }}>` or `<div className="flex flex-col gap-4">` (when 4 == 16px and matches token).
- negative_example: `<div className="flex flex-col gap-[15px]">` or `style={{ gap: '15px' }}`.

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

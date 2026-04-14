# Rule Card

## Metadata
- rule_id: FORM-SPACING-002
- title: Field gap is fixed to the token for this form type
- status: draft
- owner:
- priority: P0
- severity: warning
- scope: forms | spacing

## Intent
- business_goal: Maintain a consistent field rhythm across product forms so users don't notice transitions between screens.
- ux_goal: Uniform distances between fields simplify vertical scanning.

## Conditions (when rule applies)
- condition_1: Between adjacent form fields (input, dropdown, checkbox, radio, switcher).
- condition_2: Does not apply to gaps between sections (see FORM-SPACING-003).
- condition_3: Applies across all viewports.

## Must
- must_1: Field gap on desktop: `var(--size-gap-16)` (16px) by default. For compact forms, `var(--size-gap-12)` is allowed.
- must_2: Field gap on mobile: `var(--size-gap-16)` (16px) by default. For compact forms, `var(--size-gap-12)` is allowed.

## Must Not
- must_not_1: Do not vary the gap between fields within the same form (use one gap for the entire fields area).
- must_not_2: Do not use a gap smaller than `var(--size-gap-8)` between fields.

## Fallback
- fallback_if_conflict: If the form contains nested control groups (e.g., a checkbox group inside a field), the group's internal gap may be `var(--size-gap-8)`, but the gap between field blocks remains `var(--size-gap-16)`.
- fallback_if_missing_data: Default to `var(--size-gap-16)`.

## Evidence
- source_component: src/app/components/design-kit/MainInput.tsx (containerClassName: `flex flex-col gap-2` = 8px inside a field)
- source_token: src/styles/tokens.css — `--size-gap-12` (12px), `--size-gap-16` (16px)
- source_doc: START_HERE.md (example: `space-y-4` = 16px)

## Validation Mapping
- validator_check_id: CHECK-FORM-SPACING-002
- expected_failure_message: "Field gap is inconsistent or not using the designated form field spacing token."
- autofix_policy: suggest-only

## Examples
- positive_example: `<div className="flex flex-col" style={{ gap: 'var(--size-gap-16)' }}><MainInput .../><MainInput .../><MainDropdown .../></div>`
- negative_example: First gap 16px, second 24px, third 12px between fields inside the same fields area.

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

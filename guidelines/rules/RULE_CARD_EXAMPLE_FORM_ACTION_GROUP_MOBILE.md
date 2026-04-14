# Rule Card Example

Use this example as a filling template.

## Metadata
- rule_id: FORM-ACTIONS-ORIENTATION-001
- title: In mobile forms, the action group should be arranged in a column when primary and secondary actions are present
- status: draft
- owner: Design System Team
- priority: P1
- severity: warning
- scope: forms | buttons | layout | spacing

## Intent
- business_goal: Reduce the chance of mis-taps and increase form completion on mobile screens.
- ux_goal: Make the action hierarchy obvious so the primary action visually dominates.

## Conditions (when rule applies)
- condition_1: Context — mobile viewport.
- condition_2: The form contains at least two actions: primary and secondary.
- condition_3: Action group is located at the bottom of the form.

## Must
- must_1: The action group's orientation must be column.
- must_2: Use a tokenized vertical gap between the buttons (for example `--size-gap-12` or `--size-gap-16`).

## Must Not
- must_not_1: Do not place primary and secondary actions in a single row on mobile viewport.
- must_not_2: Do not use arbitrary spacing values outside the token system.

## Fallback
- fallback_if_conflict: If another rule requires a row layout, mobile readability takes priority and this rule remains active.
- fallback_if_missing_data: If viewport is unspecified, the rule remains a warning and does not block checks.

## Evidence
- source_component: src/app/components/design-kit/MainButton.tsx
- source_token: src/styles/tokens.css (size-gap-* tokens)
- source_doc: guidelines/AI_IMPLEMENTATION_FLOW.md

## Validation Mapping
- validator_check_id: CHECK-FORM-ACTIONS-ORIENTATION-001
- expected_failure_message: Mobile form with primary+secondary actions must use column orientation and a tokenized vertical gap.
- autofix_policy: suggest-only

## Examples
- positive_example: On mobile, a form with two buttons arranged vertically with gap set via token.
- negative_example: On mobile, a form with two buttons in one row with gap: 10px set manually.

## Approval
- proposed_by: Example Author
- reviewed_by:
- approved_by:
- approved_at:

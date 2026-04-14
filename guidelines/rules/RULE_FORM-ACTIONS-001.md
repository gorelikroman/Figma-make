# Rule Card

## Metadata
- rule_id: FORM-ACTIONS-001
- title: No more than one primary action per form
- status: draft
- owner:
- priority: P0
- severity: error
- scope: forms | buttons

## Intent
- business_goal: Prevent CTA competition within a single form so the user clearly understands which action completes the flow.
- ux_goal: One visually dominant element directs attention to the main action.

## Conditions (when rule applies)
- condition_1: Context — any form (login, registration, checkout, settings, feedback, etc.).
- condition_2: The form's action group contains at least one button.
- condition_3: The rule applies to all viewports (mobile and desktop).

## Must
- must_1: The form's action group must contain exactly one button with `style="solid"` and `color="primary"` (MainButton).
- must_2: All other buttons in the same group must use `style="outline"` or `style="ghost"`.

## Must Not
- must_not_1: Do not place two or more `style="solid" color="primary"` buttons in the same form.
- must_not_2: Do not include an IconButton with `color="primary"` in the same action group where a primary MainButton already exists.

## Fallback
- fallback_if_conflict: If business logic requires two equivalent actions, use `style="solid" color="primary"` for the first and `style="solid" color="neutral-dark"` for the second. Never two `color="primary"`.
- fallback_if_missing_data: If role is unknown, default to `style="outline" color="neutral-dark"`.

## Evidence
- source_component: src/app/components/design-kit/MainButton.tsx (styles: solid/outline/ghost × 7 colors)
- source_token: --mapped-surface-primary, --mapped-surface-secondary (gradient only for primary solid)
- source_doc: UI_KIT_README.md (Button Styles)

## Validation Mapping
- validator_check_id: CHECK-FORM-ACTIONS-001
- expected_failure_message: "Form contains more than one primary solid button. Only one primary CTA is allowed per form."
- autofix_policy: suggest-only

## Examples
- positive_example: Login form — "Sign In" (`style="solid" color="primary"`), below a "Forgot password" link (`style="ghost" color="neutral-dark"`).
- negative_example: Login form — "Sign In" (`style="solid" color="primary"`) and "Register" (`style="solid" color="primary"`) in the same action group.

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

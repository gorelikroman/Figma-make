# Rule Card

## Metadata
- rule_id: FORM-ACTIONS-003
- title: Destructive actions must not be primary by default
- status: draft
- owner:
- priority: P0
- severity: error
- scope: forms | buttons

## Intent
- business_goal: Prevent accidental data deletion or irreversible actions, reducing legal and reputational risk.
- ux_goal: Users should not be able to trigger destructive actions as easily as non-destructive ones. Destructive actions require a deliberate choice.

## Conditions (when rule applies)
- condition_1: The form contains an action that deletes data, cancels subscriptions, blocks an account, or performs another irreversible operation.
- condition_2: The rule applies across all viewports.
- condition_3: Applies to `MainButton` with `color="error"`.

## Must
- must_1: Destructive actions must use `style="outline" color="error"` or `style="ghost" color="error"`, not `style="solid" color="error"` as the form's primary action.
- must_2: If the destructive action is the only action in the form, a confirmation step (confirm dialog or two-step process) is required.

## Must Not
- must_not_1: Do not use a destructive `style="solid" color="error"` as the form's primary action without a confirmation step.
- must_not_2: Do not place a destructive button to the left of the primary (on desktop) or above the primary (on mobile); it should be visually secondary.

## Fallback
- fallback_if_conflict: If business logic requires the destructive action be the only action (e.g., "Delete Account" form), `style="solid" color="error"` is allowed but a confirm step is mandatory.
- fallback_if_missing_data: If action type is unknown, treat as non-destructive by default.

## Evidence
- source_component: src/app/components/design-kit/MainButton.tsx (styleConfig.error: solid/outline/ghost)
- source_token: --mapped-surface-error, --mapped-text-error
- source_doc: UI_KIT_README.md (Color System: error)

## Validation Mapping
- validator_check_id: CHECK-FORM-ACTIONS-003
- expected_failure_message: "Destructive action (color=error) is used as primary solid button without a confirmation step. Use outline/ghost or add confirmation."
- autofix_policy: suggest-only

## Examples
- positive_example: "Delete Account" form — "Delete" (`style="outline" color="error"`) and "Cancel" (`style="solid" color="neutral-dark"). Or "Delete" (`style="solid" color="error"`) with a confirm dialog.
- negative_example: Settings form — "Delete Account" (`style="solid" color="error"`) without confirmation, positioned as primary.

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

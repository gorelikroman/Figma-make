# Rule Card

## Metadata
- rule_id: FORM-ACTIONS-002
- title: Secondary actions must be visually weaker than primary
- status: draft
- owner:
- priority: P0
- severity: error
- scope: forms | buttons

## Intent
- business_goal: Prevent accidental clicks on alternative actions instead of the main one ("Cancel" should not compete with "Submit").
- ux_goal: Visual hierarchy between buttons clearly shows which action is primary.

## Conditions (when rule applies)
- condition_1: The form's action group contains a primary action (solid) and one or more secondary actions.
- condition_2: The rule applies across all viewports.
- condition_3: Applies to `MainButton` and `IconButton` inside forms.

## Must
- must_1: If the primary uses `style="solid"`, the secondary must use `style="outline"` or `style="ghost"`.
- must_2: If primary uses `color="primary"`, the secondary must use `color="neutral-dark"`, `color="neutral-medium"`, or `color="neutral-light"`.

## Must Not
- must_not_1: Secondary button must not have the same style+color as the primary.
- must_not_2: Secondary must not use a gradient background (reserved for primary solid).

## Fallback
- fallback_if_conflict: If design requires visually similar buttons (e.g., "Next" and "Back"), differentiate by size: primary — full width, secondary — auto width.
- fallback_if_missing_data: If secondary style is unspecified, default to `style="outline" color="neutral-dark"`.

## Evidence
- source_component: src/app/components/design-kit/MainButton.tsx (styleConfig: primary.solid.idle.background — gradient)
- source_token: --alias-primary-400, --alias-secondary-400 (gradient used only in solid primary)
- source_doc: UI_KIT_README.md (Button Styles: solid/outline/ghost)

## Validation Mapping
- validator_check_id: CHECK-FORM-ACTIONS-002
- expected_failure_message: "Secondary button has the same visual weight as primary. Use outline or ghost style for secondary actions."
- autofix_policy: suggest-only

## Examples
- positive_example: "Submit" — `style="solid" color="primary"`, "Cancel" — `style="outline" color="neutral-dark"`.
- negative_example: "Submit" — `style="solid" color="primary"`, "Cancel" — `style="solid" color="primary"`.

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

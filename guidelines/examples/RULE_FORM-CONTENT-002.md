# Rule Card

## Metadata
- rule_id: FORM-CONTENT-002
- title: Button texts must be action-oriented ("Save", "Create account", not "OK")
- status: draft
- owner:
- priority: P1
- severity: warning
- scope: forms | buttons

## Intent
- business_goal: Increase form conversion rate by making the button clearly state what will happen after clicking.
- ux_goal: Users should not wonder what a button does — the text should describe the action.

## Conditions (when rule applies)
- condition_1: Any `MainButton` in the form's action group.
- condition_2: Does not apply to `IconButton` (no text).
- condition_3: Applies across all viewports.

## Must
- must_1: The button text (prop `text`) must include a verb describing the action: "Save", "Create account", "Send message", "Confirm order".
- must_2: The text must be specific to the form context, not generic.

## Must Not
- must_not_1: Do not use generic texts: "OK", "Submit" (if a more specific label is available), "Click here", "Yes"/"No".
- must_not_2: Do not use text longer than 3 words for the primary button (e.g., "Create new account" is acceptable as the max).

## Fallback
- fallback_if_conflict: If context does not allow specificity (universal dialog), "Confirm" / "Cancel" is acceptable.
- fallback_if_missing_data: If the form purpose is unknown, use "Save" as a safe default.

## Evidence
- source_component: src/app/components/design-kit/MainButton.tsx (prop `text: string`)
- source_token: --text-button-lg-family (Poppins), --text-button-lg-size (18px), --text-button-md-size (16px), --text-button-sm-size (14px)
- source_doc: USAGE_GUIDE.md (MainButton: text prop)

## Validation Mapping
- validator_check_id: CHECK-FORM-CONTENT-002
- expected_failure_message: "Button text is generic ('OK', 'Submit', 'Yes'). Use action-oriented text that describes the outcome."
- autofix_policy: none

## Examples
- positive_example: "Create account", "Save changes", "Send request", "Book appointment".
- negative_example: "OK", "Submit", "Done", "Click here to proceed with the registration process".

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

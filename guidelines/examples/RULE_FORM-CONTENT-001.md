# Rule Card

## Metadata
- rule_id: FORM-CONTENT-001
- title: Labels use a consistent style (noun or instruction, not mixed)
- status: draft
- owner:
- priority: P1
- severity: warning
- scope: forms | inputs

## Intent
- business_goal: Maintain a consistent tone of voice across the design system so forms feel like a single product.
- ux_goal: Prevent users from being distracted by mixed label styles.

## Conditions (when rule applies)
- condition_1: All field labels within the same form.
- condition_2: Applies across all viewports.
- condition_3: Applies to `MainInput` label, `MainDropdown` label, checkbox label, radio label.

## Must
- must_1: Choose one label style for all labels in the form. Recommendation: use nouns ("Email", "Password", "First name").
- must_2: Use sentence case for labels (capitalize first letter only), unless otherwise specified.

## Must Not
- must_not_1: Do not mix styles within a form: "Email" (noun) + "Enter your password" (instruction) + "Agree?" (question).
- must_not_2: Do not use ALL CAPS for labels (allowed only for overline text style).

## Fallback
- fallback_if_conflict: If a label requires an instruction ("Choose your plan"), move the instruction into helper text and keep the label as a noun ("Plan").
- fallback_if_missing_data: Default to noun + sentence case.

## Evidence
- source_component: src/app/components/design-kit/MainInput.tsx (label prop renders as `<label>`, font example shown in text styles)
- source_token: --text-label-md-family (Roboto), --text-label-md-size (14px), --text-label-md-weight (medium)
- source_doc: TEXT_STYLES_GUIDE.md (Labels section)

## Validation Mapping
- validator_check_id: CHECK-FORM-CONTENT-001
- expected_failure_message: "Inconsistent label style detected in form. All labels should follow the same pattern (noun or instruction, not a mix)."
- autofix_policy: none

## Examples
- positive_example: Labels: "Email", "Password", "First name", "Date of birth" — all nouns, sentence case.
- negative_example: Labels: "Email", "Enter your password", "DATE OF BIRTH" — a mix of noun, instruction, and CAPS.

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

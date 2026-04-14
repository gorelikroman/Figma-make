# Rule Card

## Metadata
- rule_id: FORM-A11Y-001
- title: Every field must be associated with a label and descriptions via id/aria
- status: draft
- owner:
- priority: P1
- severity: error
- scope: forms | inputs | validation

## Intent
- business_goal: Conform to WCAG 2.1 AA. Provide legal protection for accessibility in a medical context.
- ux_goal: Screen reader users can fully complete the form.

## Conditions (when rule applies)
- condition_1: Any input field in a form (input, select, textarea, checkbox, radio).
- condition_2: Applies across all viewports.
- condition_3: Especially critical for fields with validation (error/success states).

## Must
- must_1: Each `<input>` must have an associated `<label htmlFor={id}>` or `aria-label`/`aria-labelledby`.
- must_2: If a field has error/helper text, it must be linked using `aria-describedby`.

## Must Not
- must_not_1: Do not use `MainInput` without the `inputId` prop when a label is present (otherwise htmlFor won't link).
- must_not_2: Do not leave error messages unlinked to the field via aria.

## Fallback
- fallback_if_conflict: If `MainInput` already renders the label internally, an external label is not required. Still, `inputId` must be provided.
- fallback_if_missing_data: If `inputId` is not provided, auto-generate it from the `name` prop (e.g., `input-${name}`).

## Evidence
- source_component: src/app/components/design-kit/MainInput.tsx (renders `<label htmlFor={inputId}>` and sets `id={inputId}` on input)
- source_token: N/A
- source_doc: UI_KIT_README.md (Accessibility: ARIA attributes, Keyboard navigation, Focus states)

## Validation Mapping
- validator_check_id: CHECK-FORM-A11Y-001
- expected_failure_message: "Form input is missing label association (htmlFor/id or aria-label). Screen readers cannot identify this field."
- autofix_policy: suggest-only

## Examples
- positive_example: `<MainInput label="Email" inputId="email-field" name="email" />`
- negative_example: `<MainInput label="Email" />` (label exists but no inputId — htmlFor cannot link to input).

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

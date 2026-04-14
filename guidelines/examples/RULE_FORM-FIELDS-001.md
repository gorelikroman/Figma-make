# Rule Card

## Metadata
- rule_id: FORM-FIELDS-001
- title: Every field must have a label (placeholder does not replace label)
- status: draft
- owner:
- priority: P0
- severity: error
- scope: forms | inputs

## Intent
- business_goal: Reduce form entry errors: the user always sees a field's purpose even when it contains text.
- ux_goal: Labels remain visible on focus and after input; placeholders are supplementary hints.

## Conditions (when rule applies)
- condition_1: Any input field in a form (`MainInput`, `MainDropdown`, `textarea`).
- condition_2: Applies across all viewports.
- condition_3: Excludes search fields (`type="search"`) where a search icon may replace a visible label.

## Must
- must_1: The `label` prop of `MainInput` must be a non-empty string.
- must_2: `placeholder` is only a format hint (e.g., "your@email.com"), not a substitute for the label.

## Must Not
- must_not_1: Do not leave `label=""` or omit the `label` prop on `MainInput`.
- must_not_2: Do not duplicate the label text verbatim in the placeholder (e.g., `label="Email" placeholder="Email"`).

## Fallback
- fallback_if_conflict: If the design requires visually hidden labels (floating labels), the label must still exist in the DOM for ARIA.
- fallback_if_missing_data: If label text is unknown, use the field name from the spec or the `name` attribute capitalized.

## Evidence
- source_component: src/app/components/design-kit/MainInput.tsx (label prop renders a `<label>` element above the input)
- source_token: --text-label-md-family, --text-label-md-size (Roboto 14px medium)
- source_doc: USAGE_GUIDE.md (MainInput: label prop)

## Validation Mapping
- validator_check_id: CHECK-FORM-FIELDS-001
- expected_failure_message: "MainInput is missing label prop. Every form input must have a visible label."
- autofix_policy: suggest-only

## Examples
- positive_example: `<MainInput label="Email" placeholder="your@email.com" type="email" />`
- negative_example: `<MainInput placeholder="Email" type="email" />` (no label).

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

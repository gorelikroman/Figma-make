# Rule Card Example

Use this example as a filling template.

## Metadata
- rule_id: FORM-DROPDOWN-RULES-001
- title: Use a dropdown instead of a radio group when a question has more than 3 options
- status: draft
- owner: Design System Team
- priority: P1
- severity: warning
- scope: forms | inputs | layout

## Intent
- business_goal: Reduce users' cognitive load when choosing from many options and prevent interface overload.
- ux_goal: Make the interface more usable and clear with many options by using a dropdown instead of a radio group.

## Conditions (when rule applies)
- condition_1: Context — a form question containing more than 3 options.
- condition_2: The form contains other questions with fewer options that use radio groups.
- condition_3: There is no strict requirement to use a radio group for this question (e.g., visibility of all options is not critical).

## Must
- must_1: Use a dropdown for questions with more than 3 options.
- must_2: Ensure correct rendering and interaction of the dropdown across supported devices.

## Must Not
- must_not_1: Do not use a radio group for questions with more than 3 options.
- must_not_2: Do not use a radio group with internal scrolling for many options — this may be less convenient.
- must_not_3: Do not use a dropdown if there are no other multi-option questions that would justify breaking consistency.
- must_not_4: Do not use a dropdown if it breaks the overall interface consistency (for example, if all other option questions use radio groups and their option counts are ≤3).
- must_not_5: Do not use a dropdown if options are longer than 3–4 words, as this may hinder readability in a dropdown.

## Fallback
- fallback_if_conflict: If another rule requires a radio group, that other rule takes priority because visibility of all options may be critical for UX.
- fallback_if_missing_data: If viewport is unspecified, the rule remains a warning and does not block checks.

## Evidence
- source_component: src/app/components/design-kit/Dropdown.tsx
- source_token: src/styles/tokens.css (size-gap-* tokens)
- source_doc: guidelines/AI_IMPLEMENTATION_FLOW.md

## Validation Mapping
- validator_check_id: CHECK-FORM-DROPDOWN-001
- expected_failure_message: Forms with questions containing more than 3 options must use a dropdown instead of a radio group to improve usability and reduce cognitive load.
- autofix_policy: suggest-only

## Examples
- positive_example: A form question with 5 options uses a dropdown; other questions with 2–3 options use radio groups.
- negative_example: A form question with 5 options (1–2 words each) uses a radio group, violating the dropdown rule for >3 options.


## Approval
- proposed_by: Example Author
- reviewed_by:
- approved_by:
- approved_at:

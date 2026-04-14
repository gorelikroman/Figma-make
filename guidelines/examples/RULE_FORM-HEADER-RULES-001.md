# Rule Card Example

Use this example as a filling template.

## Metadata
- rule_id: FORM-HEADER-RULES-001
- title: Use `H3` for a form header when the form contains more than 4 questions
- status: draft
- owner: Design System Team
- priority: P1
- severity: warning
- scope: forms | inputs | layout

## Intent
- business_goal: Reduce cognitive load when a form has many questions and make the form more noticeable and structured.
- ux_goal: Improve usability and clarity for long forms by using `H3` for the form header.

## Conditions (when rule applies)
- condition_1: Context — a form with more than 4 questions.
- condition_2: The page contains other forms with any number of questions.
- condition_3: There is no strict requirement to use a different heading level for this form.

## Must
- must_1: Use `H3` for the form header when the form has more than 4 questions.
- must_2: Ensure correct rendering and interaction of `H3` on all supported devices.

## Must Not
- must_not_1: Do not use `H4`, `H5`, or `H6` for the header of a form with more than 4 questions if other forms are present, as this may break heading hierarchy on the page.
- must_not_2: Do not use `H3` for a form with 4 or fewer questions, as this may create an excessive visual hierarchy.

## Fallback
- fallback_if_conflict: If another rule requires a different heading level, that rule takes precedence to preserve the overall heading hierarchy on the page.
- fallback_if_missing_data: If viewport is unspecified, the rule remains a warning and does not block checks.

## Evidence
- source_component: src/app/components/design-kit/FormHeader.tsx
- source_token: src/styles/tokens.css (size-gap-* tokens)
- source_doc: guidelines/AI_IMPLEMENTATION_FLOW.md

## Validation Mapping
- validator_check_id: CHECK-FORM-HEADER-001
- expected_failure_message: Forms with more than 4 questions must use H3 for the form header to improve usability and maintain visual hierarchy.
- autofix_policy: suggest-only

## Examples
- positive_example: A form with 5 questions uses `H3` for the header, while a form with 3 questions uses `H4`. Use `H3` consistently when there are other forms on the page to preserve heading hierarchy.
- negative_example: A form with 5 questions uses `H4` for the header, violating the `H3` rule.


## Approval
- proposed_by: Example Author
- reviewed_by:
- approved_by:
- approved_at:

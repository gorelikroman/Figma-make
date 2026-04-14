# Rule Card

## Metadata
- rule_id: FORM-DS-001
- title: Only UI kit components are allowed for form controls
- status: draft
- owner:
- priority: P1
- severity: error
- scope: forms | inputs | buttons

## Intent
- business_goal: Ensure a consistent visual language, accessibility, and behavior across all forms and reduce component fragmentation.
- ux_goal: Users interact with the same controls across screens.

## Conditions (when rule applies)
- condition_1: Any form control in the project.
- condition_2: Applies across all viewports.
- condition_3: Applies to both existing and new screens.

## Must
- must_1: Use `MainInput` for text input, `MainDropdown` for select, `MainCheckbox` / `MainRadio` / `MainSwitcher` for options, and `MainButton` / `IconButton` for actions.
- must_2: Import from the design-kit barrel: `import { ... } from './components/design-kit';`.

## Must Not
- must_not_1: Do not use native HTML elements (`<input>`, `<select>`, `<button>`) directly in forms — use kit components only.
- must_not_2: Do not create custom replacements for kit components (e.g., `CustomInput` instead of `MainInput`) without a separate rule card and approval.

## Fallback
- fallback_if_conflict: If a required control is missing from the kit (e.g., a date picker), add it to `design-kit/` following existing token and pattern conventions.
- fallback_if_missing_data: Use the nearest kit component and mark it as TODO for review.

## Evidence
- source_component: src/app/components/design-kit/index.ts (barrel exports 11 components)
- source_token: N/A
- source_doc: UI_KIT_README.md (full component list)

## Validation Mapping
- validator_check_id: CHECK-FORM-DS-001
- expected_failure_message: "Native HTML form element detected. Use design-kit component (MainInput, MainButton, etc.) instead."
- autofix_policy: suggest-only

## Examples
- positive_example: `import { MainInput, MainButton } from './components/design-kit'; <MainInput label="Email" /> <MainButton text="Save" />`
- negative_example: `<input type="text" placeholder="Email" /> <button>Save</button>`

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

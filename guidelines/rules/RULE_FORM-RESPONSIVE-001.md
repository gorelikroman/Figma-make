# Rule Card

## Metadata
- rule_id: FORM-RESPONSIVE-001
- title: On mobile, fields must span the full width of the container
- status: draft
- owner:
- priority: P1
- severity: warning
- scope: forms | layout

## Intent
- business_goal: Maximize ease of entry on mobile devices where the on-screen keyboard is used.
- ux_goal: Full-width, touch-sized fields simplify tapping and avoid tiny targets.

## Conditions (when rule applies)
- condition_1: Viewport < 768px (project mobile breakpoint).
- condition_2: Any input fields: `MainInput`, `MainDropdown`, `textarea` inside a form.
- condition_3: Excludes inline controls (checkbox, radio, switcher) that have fixed sizes.

## Must
- must_1: Input fields on mobile must have `width: 100%` (or `className="w-full"`).
- must_2: Buttons in the action group on mobile should also be full-width (`className="w-full"`).

## Must Not
- must_not_1: Do not leave fields with fixed widths (max-width or explicit width) on mobile.
- must_not_2: Do not place inline fields side-by-side (`flex-row`) on the mobile viewport.

## Fallback
- fallback_if_conflict: If the design requires two short fields side-by-side (day/month), see FORM-RESPONSIVE-002 for collapse rules.
- fallback_if_missing_data: Assume mobile-first: fields are full-width by default and expanded on desktop using `lg:` classes.

## Evidence
- source_component: src/app/components/design-kit/MainInput.tsx (`className="w-full"` on root input, h-[48px] mobile / h-[60px] desktop)
- source_token: Breakpoint: 768px (lg: prefix in Tailwind)
- source_doc: UI_KIT_README.md (Responsive Design: "All components are responsive, mobile-first")

## Validation Mapping
- validator_check_id: CHECK-FORM-RESPONSIVE-001
- expected_failure_message: "Form field is not full-width on mobile viewport. Use w-full or width: 100%."
- autofix_policy: suggest-only

## Examples
- positive_example: `<MainInput label="Email" className="w-full" />` + `<MainButton text="Submit" className="w-full lg:w-auto" />`
- negative_example: `<MainInput label="Email" className="w-[300px]" />` on mobile.

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

# Rule Card

## Metadata
- rule_id: FORM-RESPONSIVE-002
- title: Two-column groups must collapse to one column on narrow screens
- status: draft
- owner:
- priority: P1
- severity: warning
- scope: forms | layout

## Intent
- business_goal: Prevent fields from being clipped, overlapping, or causing horizontal scroll on mobile devices.
- ux_goal: Ensure each field is readable and touchable on narrow screens.

## Conditions (when rule applies)
- condition_1: On desktop (>=768px) fields are laid out in 2 columns (`grid-cols-2`, `flex-row`).
- condition_2: Viewport narrows to <768px.
- condition_3: Applies to any multi-column groups of fields in a form.

## Must
- must_1: Use responsive Tailwind classes: `grid grid-cols-1 lg:grid-cols-2` or `flex flex-col lg:flex-row`.
- must_2: The collapse order should be left→right → top→bottom (standard flow).

## Must Not
- must_not_1: Do not use fixed `grid-cols-2` without a mobile fallback.
- must_not_2: Do not hide required fields on mobile instead of collapsing them (`hidden` is forbidden for required fields).

## Fallback
- fallback_if_conflict: If two fields are logically inseparable (day + month), it is acceptable to keep them in a row on mobile, but each field must be ≥120px.
- fallback_if_missing_data: Default to collapsing to a single column.

## Evidence
- source_component: src/app/components/design-kit/MainInput.tsx (responsive heights: h-[48px] / lg:h-[60px])
- source_token: Breakpoint: 768px (lg: in Tailwind)
- source_doc: UI_KIT_README.md (Responsive Design)

## Validation Mapping
- validator_check_id: CHECK-FORM-RESPONSIVE-002
- expected_failure_message: "Multi-column field layout has no responsive fallback. Add grid-cols-1 or flex-col for mobile."
- autofix_policy: suggest-only

## Examples
- positive_example: `<div className="grid grid-cols-1 lg:grid-cols-2 gap-4"><MainInput label="First Name" /><MainInput label="Last Name" /></div>`
- negative_example: `<div className="grid grid-cols-2 gap-4"><MainInput label="First Name" /><MainInput label="Last Name" /></div>` (no mobile fallback).

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

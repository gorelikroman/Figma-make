# Rule Card

## Metadata
- rule_id: FORM-RESPONSIVE-003
- title: Минимальные touch-target размеры соблюдены для интерактивных элементов
- status: draft
- owner:
- priority: P1
- severity: warning
- scope: forms | layout | inputs

## Intent
- business_goal: Соответствие WCAG 2.5.5 и платформенным HIG-рекомендациям, снижение мискликов.
- ux_goal: Пользователь может уверенно нажимать на любой интерактивный элемент формы пальцем.

## Conditions (when rule applies)
- condition_1: Любой интерактивный элемент в форме: input, button, checkbox, radio, switcher, dropdown.
- condition_2: Особенно критично для mobile viewport (<768px).
- condition_3: Не распространяется на декоративные элементы (label, helper text).

## Must
- must_1: Минимальный размер touch target: 44×44px (рекомендация Apple/WCAG). Компоненты UI kit уже соответствуют: MainInput 48px, MainButton 48px на mobile.
- must_2: Если используется кастомный элемент (не из kit), минимальный размер должен быть явно задан (min-height: 44px).

## Must Not
- must_not_1: Нельзя уменьшать высоту интерактивных элементов ниже 44px на mobile.
- must_not_2: Нельзя располагать интерактивные элементы ближе 8px друг к другу на mobile (минимальный gap между touch targets).

## Fallback
- fallback_if_conflict: Если компонент UI kit уже соответствует (MainInput: 48px, MainButton: 48px), дополнительной проверки не требуется.
- fallback_if_missing_data: Если размер неизвестен, установить min-height: 48px (== MainInput mobile).

## Evidence
- source_component: src/app/components/design-kit/MainInput.tsx (h-[48px] mobile), MainButton.tsx (h-[48px] mobile, h-[60px] desktop via lg:), IconButton.tsx (padding: 16px = 56px total)
- source_token: Нет отдельного touch-target токена, но компоненты захардкожены на 48px+
- source_doc: UI_KIT_README.md (секция Accessibility: «Focus states»)

## Validation Mapping
- validator_check_id: CHECK-FORM-RESPONSIVE-003
- expected_failure_message: "Interactive element is smaller than 44x44px minimum touch target on mobile."
- autofix_policy: suggest-only

## Examples
- positive_example: MainInput (48px), MainButton (48px), IconButton (56px) — все >= 44px.
- negative_example: Кастомный link-button с line-height: 20px и без padding — touch target 20px.

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

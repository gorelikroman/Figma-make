# Rule Card

## Metadata
- rule_id: FORM-SPACING-003
- title: Gap между секциями больше чем gap между полями (иерархия ритма)
- status: draft
- owner:
- priority: P0
- severity: warning
- scope: forms | spacing | layout

## Intent
- business_goal: Визуальная группировка через ритм позволяет пользователю быстрее определить структуру формы без дополнительных разделителей.
- ux_goal: Создать ясную иерархию: поля внутри секции связаны тесно, секции разделены заметнее.

## Conditions (when rule applies)
- condition_1: Форма содержит две или более логических секции (например: «Personal Info» и «Payment Details»).
- condition_2: Секции не разделены визуальным разделителем (border/hr). Если разделитель есть, gap может быть равен field gap.
- condition_3: Действует на все viewports.

## Must
- must_1: Gap между секциями формы должен быть строго больше gap между полями. Рекомендация: поля `--size-gap-16`, секции `--size-gap-vertical-sm` (26px desktop / 20px mobile) или `--size-gap-vertical-md` (34px desktop / 26px mobile).
- must_2: Соотношение: section_gap >= field_gap × 1.5.

## Must Not
- must_not_1: Нельзя использовать одинаковый gap для полей и секций — теряется визуальная группировка.
- must_not_2: Нельзя использовать section_gap меньше field_gap.

## Fallback
- fallback_if_conflict: Если форма односекционная (нет логического деления), правило не применяется.
- fallback_if_missing_data: По умолчанию считать, что form-header + fields + actions = 3 секции. Использовать `--size-gap-vertical-sm` между ними.

## Evidence
- source_component: Все компоненты design-kit (формовые)
- source_token: src/styles/tokens.css — --size-gap-16 (16px), --size-gap-vertical-sm (26px/20px), --size-gap-vertical-md (34px/26px)
- source_doc: README.md (секция Most Used Variables — Spacing)

## Validation Mapping
- validator_check_id: CHECK-FORM-SPACING-003
- expected_failure_message: "Section gap is equal to or smaller than field gap. Section gap must be visibly larger to maintain vertical rhythm hierarchy."
- autofix_policy: suggest-only

## Examples
- positive_example: Поля с gap 16px, между секциями «Personal» и «Payment» gap 26px.
- negative_example: Поля с gap 16px, между секциями тоже 16px — визуальная граница секций неразличима.

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

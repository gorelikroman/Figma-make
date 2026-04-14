# Rule Card

## Metadata
- rule_id: FORM-SPACING-004
- title: Отступы контейнера формы только из токенов
- status: draft
- owner:
- priority: P0
- severity: error
- scope: forms | spacing | layout

## Intent
- business_goal: Единые внутренние отступы формы по всему продукту — формы выглядят одинаково на любом экране.
- ux_goal: Предсказуемое «дыхание» контента внутри формы, контент не прилипает к краям.

## Conditions (when rule applies)
- condition_1: Корневой контейнер формы (обертка с background или border).
- condition_2: Действует на все viewports.
- condition_3: Внутренние padding формы и внешние margin формы относительно родителя.

## Must
- must_1: Padding контейнера формы задается через токены. Рекомендация: `var(--size-gap-24)` (24px) на desktop, `var(--size-gap-16)` (16px) на mobile.
- must_2: Если форма размещена в card (`--mapped-surface-card`), border-radius тоже из токенов: `var(--size-radius-l)` (16px desktop / 12px mobile) или `var(--size-radius-m)` (12px desktop / 8px mobile).

## Must Not
- must_not_1: Нельзя задавать padding формы произвольными значениями (`padding: 18px`, `p-[22px]`).
- must_not_2: Нельзя использовать разный padding для разных сторон контейнера, если это не обосновано отдельным rule card.

## Fallback
- fallback_if_conflict: Если форма без видимого контейнера (без background/border), padding может быть 0, но тогда parent-контейнер должен обеспечить отступы по FORM-SPACING-004.
- fallback_if_missing_data: По умолчанию `var(--size-gap-24)` desktop, `var(--size-gap-16)` mobile.

## Evidence
- source_component: Все компоненты design-kit
- source_token: src/styles/tokens.css — --size-gap-16, --size-gap-24, --size-radius-m, --size-radius-l
- source_doc: START_HERE.md (пример: p-8 для контейнера формы), README.md (раздел CSS Variables)

## Validation Mapping
- validator_check_id: CHECK-FORM-SPACING-004
- expected_failure_message: "Form container uses arbitrary padding. Use design token var(--size-gap-*) for padding."
- autofix_policy: suggest-only

## Examples
- positive_example: `<div style={{ padding: 'var(--size-gap-24)', background: 'var(--mapped-surface-card)', borderRadius: 'var(--size-radius-l)' }}>`
- negative_example: `<div style={{ padding: '22px', background: 'var(--mapped-surface-card)', borderRadius: '14px' }}>`

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:

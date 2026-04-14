# Rule Card Template

Используй этот шаблон для каждого отдельного правила.

<!--
Принцип: 1 карточка = 1 проверяемое правило.
Если в тексте встретились "и/или" для разных тем, почти всегда нужно разбить на 2+ карточки.
-->

## Metadata
- rule_id:
	<!-- Стабильный ID, лучше в формате DOMAIN-TOPIC-###, например FORM-BUTTON-001 -->
- title:
	<!-- Коротко и конкретно: что именно ограничивает правило -->
- status: draft | active | deprecated
	<!-- draft = черновик, active = используется в проверках, deprecated = заменено -->
- owner:
	<!-- Кто отвечает за актуальность правила -->
- priority: P0 | P1 | P2
	<!-- P0 = критично, P1 = важно, P2 = желательно -->
- severity: error | warning | info
	<!-- error блокирует выпуск, warning не блокирует, info только подсказка -->
- scope: forms | layout | buttons | spacing | inputs | validation
	<!-- Основная зона действия правила (одна или несколько) -->

## Intent
- business_goal:
	<!-- Какой бизнес-риск/потерю предотвращает правило -->
- ux_goal:
	<!-- Какую UX-проблему предотвращает правило -->

## Conditions (when rule applies)
- condition_1:
- condition_2:
- condition_3:
	<!-- Только наблюдаемые условия. Избегай формулировок типа "если кажется" -->

## Must
- must_1:
- must_2:
	<!-- Обязательные действия в формате "сделать X" -->

## Must Not
- must_not_1:
- must_not_2:
	<!-- Явные запреты в формате "нельзя Y" -->

## Fallback
- fallback_if_conflict:
	<!-- Что делать, если конфликтует с другим правилом -->
- fallback_if_missing_data:
	<!-- Что делать, если входных данных недостаточно -->

## Evidence
- source_component:
	<!-- Ссылка на компонент(ы), на которых основано правило -->
- source_token:
	<!-- Ссылка на token(ы), если правило связано с spacing/color/type/radius -->
- source_doc:
	<!-- Документ-источник или раздел спецификации -->

## Validation Mapping
- validator_check_id:
	<!-- ID технической проверки, например CHECK-FORM-001 -->
- expected_failure_message:
	<!-- Сообщение, которое увидит пользователь при нарушении -->
- autofix_policy: none | suggest-only | auto
	<!-- На старте лучше использовать none или suggest-only -->

## Examples
- positive_example:
- negative_example:
	<!-- Минимальные примеры: один валидный и один невалидный -->

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:
	<!-- Пока approved_by пустой, правило считается неутвержденным -->

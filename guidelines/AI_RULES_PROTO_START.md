# AI Rules Prototype Start (Forms)

Это точка входа для контролируемой реализации без генерации контента ассистентом.

## 1) Процесс (что делаем по шагам)
- Открой: ./AI_IMPLEMENTATION_FLOW.md
- Пройди этапы 0 -> 7 строго по gate-подтверждениям.

## 2) Что заполняешь руками
- Правила по одному: ./templates/RULE_CARD_TEMPLATE.md
- Единый machine-readable набор: ./templates/UI_RULESET_TEMPLATE.yaml
- Спецификация конкретной формы: ./templates/FORM_SPEC_TEMPLATE.yaml
- Отчет по проверке: ./templates/VALIDATION_REPORT_TEMPLATE.md

## 3) Минимальный порядок запуска прототипа
1. Заполни минимум 5-10 rule cards.
2. Перенеси их в UI_RULESET_TEMPLATE.yaml.
3. Заполни один FORM_SPEC_TEMPLATE.yaml для пилотной формы.
4. Запусти проверку (валидатор добавим отдельным шагом после фиксации шаблонов).
5. Заполни VALIDATION_REPORT_TEMPLATE.md.

## 4) Правило контроля процесса
- Никаких новых этапов без закрытия gate предыдущего этапа.
- Изменения в ruleset только через запись в change log из AI_IMPLEMENTATION_FLOW.md.
- Если данных не хватает, правило не активируется (остается draft).

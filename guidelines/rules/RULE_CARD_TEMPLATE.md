# Rule Card Template

Use this template for every individual rule.

<!--
Principle: 1 card = 1 checkable rule.
If the text contains "and/or" across different topics, split into 2+ cards.
-->

## Metadata
- rule_id:
	<!-- Stable ID, prefer format DOMAIN-TOPIC-###, e.g., FORM-BUTTON-001 -->
- title:
	<!-- Short and specific: what the rule restricts -->
- status: draft | active | deprecated
	<!-- draft = draft, active = used in checks, deprecated = replaced -->
- owner:
	<!-- Who owns the rule's accuracy -->
- priority: P0 | P1 | P2
	<!-- P0 = critical, P1 = important, P2 = desirable -->
- severity: error | warning | info
	<!-- error blocks release, warning does not block, info is advisory -->
- scope: forms | layout | buttons | spacing | inputs | validation
	<!-- Primary area(s) of applicability (one or more) -->

## Intent
- business_goal:
	<!-- What business risk/loss this rule prevents -->
- ux_goal:
	<!-- What UX problem this rule prevents -->

## Conditions (when rule applies)
- condition_1:
- condition_2:
- condition_3:
	<!-- Only observable conditions. Avoid "if it seems" formulations -->

## Must
- must_1:
- must_2:
	<!-- Required actions in the form "do X" -->

## Must Not
- must_not_1:
- must_not_2:
	<!-- Explicit prohibitions in the form "do not Y" -->

## Fallback
- fallback_if_conflict:
	<!-- What to do if this conflicts with another rule -->
- fallback_if_missing_data:
	<!-- What to do when input data is insufficient -->

## Evidence
- source_component:
	<!-- Component(s) the rule is based on -->
- source_token:
	<!-- Tokens if rule ties to spacing/color/type/radius -->
- source_doc:
	<!-- Source document or spec section -->

## Validation Mapping
- validator_check_id:
	<!-- ID of the technical check, e.g., CHECK-FORM-001 -->
- expected_failure_message:
	<!-- Message shown to the user on violation -->
- autofix_policy: none | suggest-only | auto
	<!-- Start with none or suggest-only -->

## Examples
- positive_example:
- negative_example:
	<!-- Minimum examples: one valid and one invalid -->

## Approval
- proposed_by:
- reviewed_by:
- approved_by:
- approved_at:
	<!-- Until approved_by is filled, the rule is considered unapproved -->

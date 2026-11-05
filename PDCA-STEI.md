# PDCA-STEI work record

Source: https://github.com/fundaa1/banana-break-baking at 9c4c5e410b67923a3ed9dba5627035e36c3e9340.

## Plan

Make the existing recipe easier to prepare and resume. The selected measurable coverage target is to expose at least 15 percentage points more of the existing ingredient list within the recipe view. Baseline: zero of eight ingredients were visible in that view.

## Do

Add a collapsible checklist covering all eight ingredients with metric quantities when available. Restore the furthest reached step from browser storage and save step navigation. Preserve the existing data and source history.

## Check

- Ingredient data coverage is 8 of 8 (100%), an increase of 100 percentage points over the zero baseline. This measures feature coverage, not a measured increase in user success or speed.
- Production build passed with npm run build. The development server compiled successfully.
- Browser walkthrough is pending: the automation browser timed out connecting to the local server.

## Act

The commissioner should walk through the steps below and record feedback. Return any failure to implementation before acceptance.

## Standardise

The recipe view lists every ingredient in recipe data. Checkboxes are temporary. Progress stores the furthest step per recipe on the current browser and is clamped to the recipe length. If local storage is unavailable, progress is held in memory only.

## Train

Run npm install followed by npm start. Open http://localhost:3000 on the same computer. Select the recipe, expand Ingredients, check an item, advance to step 3, return home and reopen, then refresh. The list should contain eight items and step 3 should be restored. Checkbox selections reset on page reload.

## Enforce

Require a successful production build and a recorded browser walkthrough for acceptance. Codex implemented and documented the change; no work was delegated. The human commissioner owns acceptance.

## Improve

Record actual reviewer outcomes. A claim of 15% better completion or time requires an agreed baseline and comparable user observations. Existing upstream image paths refer to assets absent from the repository and the timer button remains a placeholder.

# PDCA-STEI work record

Source: https://github.com/fundaa1/banana-break-baking at 9c4c5e410b67923a3ed9dba5627035e36c3e9340.

## Plan

Make the existing recipe easier to prepare and resume. The selected measurable coverage target is to expose at least 15 percentage points more of the existing ingredient list within the recipe view. Baseline: zero of eight ingredients were visible in that view.

## Do

Add a collapsible checklist covering all eight ingredients with metric quantities when available. Restore the furthest reached step from browser storage and save step navigation. Preserve the existing data and source history.

## Check

- Ingredient data coverage is 8 of 8 (100%), an increase of 100 percentage points over the zero baseline. This measures feature coverage, not a measured increase in user success or speed.
- Production build passed with npm run build. The development server compiled successfully.
- Browser verified on port 3010: the ingredient list shows eight items, Next reaches step 2, and reload restores step 2. Commissioner acceptance is pending.

## Act

The commissioner should walk through the steps below and record feedback. Return any failure to implementation before acceptance.

## Standardise

The recipe view lists every ingredient in recipe data. Checkboxes are temporary. Progress stores the furthest step per recipe on the current browser and is clamped to the recipe length. If local storage is unavailable, progress is held in memory only.

## Train

Run npm install followed by npm start. Open the local URL printed by the server on the same computer. Select the recipe, expand Ingredients, check an item, advance to step 3, return home and reopen, then refresh. The list should contain eight items and step 3 should be restored. Checkbox selections reset on page reload.

## Enforce

Require a successful production build and a recorded browser walkthrough for acceptance. Codex implemented and documented the change; no work was delegated. The human commissioner owns acceptance.

## Improve

Record actual reviewer outcomes. A claim of 15% better completion or time requires an agreed baseline and comparable user observations. Existing upstream image paths refer to assets absent from the repository.

## Timer improvement cycle

- Plan: make the existing bake and cool timer controls usable.
- Do: add a deadline-based countdown with start, pause, resume, reset, and a completion message.
- Check: browser verification on the bake step confirmed countdown from 55:00, pause at 54:57, and reset to 55:00. Full-duration completion was not observed.
- Act: commissioner can review both timed steps and request changes.
- Standardise: each timer lasts for its configured duration and resets when leaving the step or refreshing. Completion is displayed on the page. It does not send a background notification.
- Train: on Bake, choose Start Timer, Pause Timer, Resume Timer or Reset Timer. Keep the recipe step open while timing.
- Enforce: require a production build and browser walkthrough before acceptance.
- Improve: consider a persistent timer and optional alert after commissioner feedback.
- Work: Codex implemented and verified this change. No work was delegated. The commissioner owns acceptance.

import {MODULE_ID} from "./_id.mjs";
import {
    animate as TokenTurnMarker_animate,
    draw as TokenTurnMarker_draw
} from "./Canvas/Placeables/Tokens/TokenTurnMarker.mjs";
import {
    _initializeApplicationOptions as CombatTrackerConfig_initializeApplicationOptions,
    _onChangeForm as CombatTrackerConfig_onChangeForm,
    onRender as CombatTrackerConfig_onRender
} from "./Applications/Apps/CombatTrackerConfig.mjs";
import {registerSettings} from "./util/settings.mjs";
import {loadTemplates} from "./util/templates.mjs";
import {patchTurnMarkerConfig} from "./util/config.mjs";
import {
    _processSubmitData as TokenConfig_processSubmitData,
    onRender as TokenConfig_onRender,
    _onChangeForm as TokenConfig_onChangeForm,
    _previewChanges as TokenConfig_previewChanges
} from "./Applications/Sheets/TokenConfig.mjs";
import {
    _initializeApplicationOptions as PrototypeTokenConfig_initializeApplicationOptions
} from "./Applications/Sheets/PrototypeTokenConfig.mjs";

Hooks.once("init", () => {
    registerSettings();
    loadTemplates();

    const overrides = [
        ["foundry.applications.apps.CombatTrackerConfig.prototype._initializeApplicationOptions", CombatTrackerConfig_initializeApplicationOptions],
        ["foundry.applications.apps.CombatTrackerConfig.prototype._onChangeForm", CombatTrackerConfig_onChangeForm, libWrapper.LISTENER],
        ["foundry.applications.sheets.PrototypeTokenConfig.prototype._initializeApplicationOptions", PrototypeTokenConfig_initializeApplicationOptions],
        ["foundry.applications.sheets.PrototypeTokenConfig.prototype._onChangeForm", TokenConfig_onChangeForm, libWrapper.LISTENER],
        ["foundry.applications.sheets.TokenConfig.prototype._onChangeForm", TokenConfig_onChangeForm, libWrapper.LISTENER],
        ["foundry.applications.sheets.TokenConfig.prototype._processSubmitData", TokenConfig_processSubmitData],
        ["foundry.applications.sheets.TokenConfig.prototype._previewChanges", TokenConfig_previewChanges],
        ["foundry.canvas.placeables.tokens.TokenTurnMarker.prototype.animate", TokenTurnMarker_animate],
        ["foundry.canvas.placeables.tokens.TokenTurnMarker.prototype.draw", TokenTurnMarker_draw],
    ];

    overrides.forEach((override) => {
        libWrapper.register(MODULE_ID, override[0], override[1], override[2] || libWrapper.WRAPPER);
    });
})

Hooks.once("ready", () => patchTurnMarkerConfig);

Hooks.on("renderApplicationV2", CombatTrackerConfig_onRender);
Hooks.on("renderApplicationV2", TokenConfig_onRender);
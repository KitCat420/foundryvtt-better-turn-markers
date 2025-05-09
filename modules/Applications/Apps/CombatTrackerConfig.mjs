import {MODULE_ID} from "../../_id.mjs";
import {extendTurnMarkerSettings} from "../../util/templates.mjs";

export function _onChangeForm(formConfig, event) {
    switch (event.target.name) {
        case "core.combatTrackerConfig.turnMarker.enabled": {
            const elements = this.form.elements;
            for (const fieldName of ["opacity", "scale", "zIndex", "position", "rotationDirection"]) {
                elements[`${MODULE_ID}.turnMarkerConfig.${fieldName}`].disabled = !event.target.checked;
            }
        }
    }
}

export function _initializeApplicationOptions(wrapper, options) {
    const result = wrapper(options);

    const origSubmitFunc = result.form.handler;
    result.form.handler = async (_event, _form, submitData) => {
        await origSubmitFunc(_event, _form, submitData);
        if (game.user.can("SETTINGS_MODIFY")) {
            const settings = foundry.utils.expandObject(submitData.object);
            await game.settings.set(MODULE_ID, "turnMarkerConfig", settings[MODULE_ID]?.turnMarkerConfig || {});
        }
    };

    return result;
}

export async function onRender(application, element) {
    if (element.id !== 'combat-tracker-config') return;
    const turnMarkerConfig = element.querySelector('[name="core.combatTrackerConfig.turnMarker.enabled"]').closest("fieldset");
    const config = game.settings.get(MODULE_ID, "turnMarkerConfig");
    const worldConfig = game.settings.get("core", "combatTrackerConfig").turnMarker;

    const effectiveConfig = {
        position: config.position || "center",
        rotationDirection: config.rotationDirection || "left",
        zIndex: config.zIndex || "below",
        scale: config.scale || 1.5,
        opacity: config.opacity || 1,
        animationSpeed: config.animationSpeed || 1,
        offsetX: config.offsetX || 0,
        offsetY: config.offsetY || 0,
    }

    await extendTurnMarkerSettings(application.id, turnMarkerConfig, effectiveConfig, `${MODULE_ID}.turnMarkerConfig`, !worldConfig.enabled);
}
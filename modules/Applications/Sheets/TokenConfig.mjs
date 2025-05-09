import {MODULE_ID} from "../../_id.mjs";
import {extendTurnMarkerSettings} from "../../util/templates.mjs";

export async function onRender(application, element) {
    if (!element.classList.contains('token-config')) return;
    const turnMarkerConfig = element.querySelector('[name="turnMarker.mode"]').closest("fieldset");

    const worldConfig = game.settings.get(MODULE_ID, "turnMarkerConfig");
    const tokenConfig = application.token.getFlag(MODULE_ID, "turnMarkerData") || {};

    const effectiveConfig = {
        position: tokenConfig.position || worldConfig.position || "center",
        rotationDirection: tokenConfig.rotationDirection || worldConfig.rotationDirection || "left",
        zIndex: tokenConfig.zIndex || worldConfig.zIndex || "below",
        scale: tokenConfig.scale || worldConfig.scale || 1.5,
        opacity: tokenConfig.opacity || worldConfig.opacity || 1,
        animationSpeed: tokenConfig.animationSpeed || worldConfig.animationSpeed || 1,
        offsetX: tokenConfig.offsetX || worldConfig.offsetX || 0,
        offsetY: tokenConfig.offsetY || worldConfig.offsetY || 0,
    };

    await extendTurnMarkerSettings(application.id, turnMarkerConfig, effectiveConfig, "betterTurnMarker", application.token.turnMarker.mode !== 2);
}

function getFormData(form) {
    const data = new foundry.applications.ux.FormDataExtended(form);
    const settings = foundry.utils.expandObject(data.object).betterTurnMarker || {};

    return {
        position: settings.position || "center",
        rotationDirection: settings.rotationDirection || "left",
        zIndex: settings.zIndex || "below",
        scale: settings.scale || 1.5,
        opacity: settings.opacity || 1,
        animationSpeed: settings.animationSpeed || 1,
        offsetX: settings.offsetX || 0,
        offsetY: settings.offsetY || 0,
    };
}

export function _processSubmitData(wrapper, event, form, submitData, updateOptions) {
    const result = wrapper(event, form, submitData, updateOptions);

    const turnMarkerData = getFormData(form);
    this.document.setFlag(MODULE_ID, "turnMarkerData", turnMarkerData);

    return result;
}

export function _onChangeForm(formConfig, event) {
    if (event.target.name !== "turnMarker.mode") return;

    const notCustom = this.form["turnMarker.mode"].value !== "2";
    for (const key of ["position", "rotationDirection", "zIndex", "scale", "opacity", "offsetX", "offsetY", "animationSpeed"]) {
        const input = this.form.querySelector(`[name="betterTurnMarker.${key}"]`);
        if (input) input.disabled = notCustom;
    }
}

export function _previewChanges(wrapper, changes) {
    const result = wrapper(changes);

    const form = this.element;
    if (form && this._preview) {
        const turnMarkerData = getFormData(form);
        this._preview.flags[MODULE_ID] = {turnMarkerData};
    }

    return result;
}
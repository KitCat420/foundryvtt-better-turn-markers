import {MODULE_ID} from "../../_id.mjs";

export function _initializeApplicationOptions(wrapper, options) {
    const result = wrapper(options);

    const origSubmitFunc = result.form.handler.bind(this);
    result.form.handler = async (event, form, formData) => {
        await origSubmitFunc(event, form, formData);
        const settings = foundry.utils.expandObject(formData.object).betterTurnMarker || {};

        const turnMarkerData = {
            position: settings.position || "center",
            rotationDirection: settings.rotationDirection || "left",
            zIndex: settings.zIndex || "below",
            scale: settings.scale || 1.5,
            opacity: settings.opacity || 1,
            animationSpeed: settings.animationSpeed || 1,
            offsetX: settings.offsetX || 0,
            offsetY: settings.offsetY || 0,
        };

        this.actor.prototypeToken.setFlag(MODULE_ID, "turnMarkerData", turnMarkerData);
    };

    return result;
}
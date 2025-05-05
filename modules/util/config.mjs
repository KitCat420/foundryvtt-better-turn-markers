import {MODULE_ID} from "../_id.mjs";

export function patchTurnMarkerConfig() {
    const settings = game.settings.get(MODULE_ID, "turnMarkerConfig");
    Object.assign(CONFIG.Combat.settings.turnMarker, {
        opacity: settings.opacity || 1,
        zIndex: settings.zIndex || "below",
        position: settings.position || "center",
        rotationDirection: settings.rotationDirection || "left",
        scale: settings.scale || 150
    });
}
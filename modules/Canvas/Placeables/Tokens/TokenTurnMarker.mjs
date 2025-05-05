import {patchTurnMarkerConfig} from "../../../util/config.mjs";
import {MODULE_ID} from "../../../_id.mjs";

function getConfig (obj) {
    // TODO: Fix band-aid
    patchTurnMarkerConfig();

    const defaultSettings = CONFIG.Combat.settings.turnMarker;
    const tokenSettings = obj.token.document.turnMarker;
    const additionalTokenSettings = obj.token.document.getFlag(MODULE_ID, "turnMarkerData") || {};

    let config;
    switch (obj.token.document.turnMarker.mode) {
        case CONST.TOKEN_TURN_MARKER_MODES.DEFAULT:
            config = {...defaultSettings};
            break;
        case CONST.TOKEN_TURN_MARKER_MODES.CUSTOM:
            config = {
                ...defaultSettings,
                ...tokenSettings,
                ...additionalTokenSettings
            };
            break;
    }
    return config;
}

export function draw(wrapped, ...args) {
    let result = wrapped(...args);

    const config = getConfig(this);
    if (!config) return;

    // OPACITY
    this.alpha = config.opacity || 1;

    // Z-INDEX: "Infinity" for front, "-Infinity" for behind
    this.zIndex = {
        above: Infinity,
        below: -Infinity,
    }[config.zIndex || "below"];

    return result;
}

export function animate(wrapper, ...args) {
    const result = wrapper(...args);
    if (!this.token || !this.visible || !this.mesh) return result;

    const config = getConfig(this);
    if (!config) return;

    // OPACITY
    this.alpha = config.opacity || 1;

    // Z-INDEX: "Infinity" for front, "-Infinity" for behind
    this.zIndex = {
        above: Infinity,
        below: -Infinity,
    }[config.zIndex || "below"];

    const {x, y, center, externalRadius: r} = this.token;

    // ANCHOR POSITION
    this.position.set(...{
        top_center: [center.x - x, 0],
        top_left: [0, 0],
        top_right: [(center.x - x) * 2, 0],
        center: [center.x - x, center.y - y],
        center_left: [0, center.y - y],
        center_right: [0, (center.y - y) * 2],
        bottom_center: [center.x - x, (center.y - y) * 2],
        bottom_left: [0, (center.y - y) * 2],
        bottom_right: [(center.x - x) * 2, (center.y - y) * 2],
    }[config.position || "center"]);

    // SIZE; Whole number = 50%, so r * 3 = 150% scale
    try {
        // Avoid error during redraw. This is stupid, but haven't found a better way yet.
        this.mesh.width = this.mesh.height = r * ((config?.scale || 1.5) / 0.5);
    }
    catch {}

    // SPIN DIRECTION
    const a = this.animation;
    const t = canvas.app.ticker.lastTime;
    this.rotation = (t * 2 * Math.PI * a.spin / 60000) % (2 * Math.PI) * {
        left: 1,
        right: -1
    }[config.rotationDirection || "left"];

    return result;
}
import {MODULE_ID} from "../_id.mjs";

const CONFIG_TEMPLATE_NAME = `modules/${MODULE_ID}/templates/config/turnMarkerConfig.hbs`;

export function loadTemplates() {
    foundry.applications.handlebars.loadTemplates([CONFIG_TEMPLATE_NAME])
}

export async function extendTurnMarkerSettings(appId, element, config = {}, prefix = '', disabled = false) {
    if (prefix && prefix[prefix.length - 1] !== '.') prefix += '.';
    const content = await foundry.applications.handlebars.renderTemplate(CONFIG_TEMPLATE_NAME, {
        appId,
        prefix,
        config,
        disabled,
        choices: {
            position: {
                top_center: "BetterTurnMarkers.position.top_center",
                top_left: "BetterTurnMarkers.position.top_left",
                top_right: "BetterTurnMarkers.position.top_right",
                center: "BetterTurnMarkers.position.center",
                center_left: "BetterTurnMarkers.position.center_left",
                center_right: "BetterTurnMarkers.position.center_right",
                bottom_center: "BetterTurnMarkers.position.bottom_center",
                bottom_left: "BetterTurnMarkers.position.bottom_left",
                bottom_right: "BetterTurnMarkers.position.bottom_right",
            },
            zIndex: {
                above: "BetterTurnMarkers.zIndex.above",
                below: "BetterTurnMarkers.zIndex.below",
            },
            rotationDirection: {
                left: "BetterTurnMarkers.rotationDirection.left",
                right: "BetterTurnMarkers.rotationDirection.right",
            }
        }
    });

    const div = document.createElement("div");
    div.innerHTML = content;

    div.childNodes.forEach((child) => element.appendChild(child));
}
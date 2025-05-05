import {MODULE_ID} from "../_id.mjs";
import {patchTurnMarkerConfig} from "./config.mjs";

const fields = foundry.data.fields;
export function registerSettings() {
    game.settings.register(MODULE_ID, 'turnMarkerConfig', {
        name: "BetterTurnMarker.CombatTrackerConfig",
        hint: "BetterTurnMarker.CombatTrackerConfigHint",
        scope: "world",
        config: false,
        type: new fields.SchemaField({
            opacity: new fields.AlphaField({
                default: 1,
                min: 0.01,
                max: 1,
                step: 0.01
            }),
            zIndex: new fields.StringField({
                choices: ["above", "below"],
                default: "below"
            }),
            position: new fields.StringField({
                choices: [
                    "top_center",
                    "top_left",
                    "top_right",
                    "center",
                    "center_left",
                    "center_right",
                    "bottom_center",
                    "bottom_left",
                    "bottom_right"
                ],
                default: "center"
            }),
            rotationDirection: new fields.StringField({
                choices: [
                    "left",
                    "right"
                ],
                default: "left"
            }),
            scale: new fields.NumberField({
                min: 0.05,
                max: 5,
                step: .05,
                default: 1.5,
            }),
        }),
        onChange: () => {
            patchTurnMarkerConfig();
            if (game.combat) {
                game.combat.reset();
                game.combat._updateTurnMarkers();
                game.combats.render();
            }
        }
    });
}
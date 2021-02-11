import Blockly from 'blockly';

console.log(Blockly.Blocks)

/**
 * Bloc ESIDOM
 */
Blockly.Blocks['automation'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "automation",
                "message0": "Quels sont les déclencheurs ? %1 Sous quelles conditions ? %2 Que faire ? %3 Avec quel mode ? %4",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Trigger",
                    "check": "Trigger"
                  },
                  {
                    "type": "input_statement",
                    "name": "Condition",
                    "check": "Condition"
                  },
                  {
                    "type": "input_statement",
                    "name": "Action",
                    "check": "Action"
                  },
                  {
                    "type": "field_dropdown",
                    "name": "NAME",
                    "options": [
                      [
                        "single",
                        "single"
                      ],
                      [
                        "restart",
                        "restart"
                      ],
                      [
                        "queued",
                        "queued"
                      ],
                      [
                        "parallel",
                        "parallel"
                      ]
                    ]
                  }
                ],
                "colour": Blockly.Msg.HUE_PURPLE,
                "tooltip": "",
                "helpUrl": ""
              }
        );
    }
};

/**
 * Catégorie déclencheur
 */
Blockly.Blocks['binary_trigger'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "block_type",
                "message0": "Quand capteur binaire %1 passe à %2",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "Service",
                    "check": "Binary_sensor"
                  },
                  {
                    "type": "field_dropdown",
                    "name": "state",
                    "options": [
                      [
                        "ON",
                        "on"
                      ],
                      [
                        "OFF",
                        "off"
                      ]
                    ]
                  }
                ],
                "inputsInline": true,
                "previousStatement": "Trigger",
                "nextStatement": "Trigger",
                "colour": Blockly.Msg.HUE_GREEN,
                "tooltip": "",
                "helpUrl": ""
              }
        );
    }
};

Blockly.Blocks['time'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "time",
                "message0": "%1 h %2 %3 m %4 %5 s",
                "args0": [
                  {
                    "type": "field_number",
                    "name": "Hour",
                    "value": 0,
                    "min": 0,
                    "max": 23
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_number",
                    "name": "Minute",
                    "value": 0,
                    "min": 0,
                    "max": 59
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_number",
                    "name": "Second",
                    "value": 0,
                    "min": 0,
                    "max": 59
                  }
                ],
                "inputsInline": true,
                "previousStatement": "Trigger",
                "nextStatement": "Trigger",
                "colour": Blockly.Msg.HUE_GREEN,
                "tooltip": "",
                "helpUrl": ""
              }
        );
    }
};


/**
 * Catégorie condition
 */
Blockly.Blocks['time_condition'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "time_condition",
                "message0": "Début : %1 h %2 m %3 s %4 Fin : %5 h %6 m %7 s %8 %9 lundi %10 %11 mardi %12 %13 mercredi %14 %15 jeudi %16 %17 vendredi %18 %19 samedi %20 %21 dimanche",
                "args0": [
                  {
                    "type": "field_number",
                    "name": "Hour_debut",
                    "value": 0,
                    "min": 0,
                    "max": 23
                  },
                  {
                    "type": "field_number",
                    "name": "Minute_debut",
                    "value": 0,
                    "min": 0,
                    "max": 59
                  },
                  {
                    "type": "field_number",
                    "name": "Second_debut",
                    "value": 0,
                    "min": 0,
                    "max": 59
                  },
                  {
                    "type": "input_dummy",
                    "align": "RIGHT"
                  },
                  {
                    "type": "field_number",
                    "name": "Hour_end",
                    "value": 0,
                    "min": 0,
                    "max": 23
                  },
                  {
                    "type": "field_number",
                    "name": "Minute_end",
                    "value": 0,
                    "min": 0,
                    "max": 59
                  },
                  {
                    "type": "field_number",
                    "name": "Second_end",
                    "value": 0,
                    "min": 0,
                    "max": 59
                  },
                  {
                    "type": "input_dummy",
                    "align": "RIGHT"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "mon",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "tue",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "wen",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "thu",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "fri",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "sat",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "sun",
                    "checked": true
                  }
                ],
                "inputsInline": false,
                "previousStatement": "Trigger",
                "nextStatement": "Trigger",
                "colour": Blockly.Msg.HUE_YELLOW,
                "tooltip": "",
                "helpUrl": ""
              }
        );
    }
};

Blockly.Blocks['sun_condition'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "sun_state",
                "message0": "Lorsque le soleil se %1",
                "args0": [
                  {
                    "type": "field_dropdown",
                    "name": "sun.sun",
                    "options": [
                      [
                        "lève",
                        "above_horizon"
                      ],
                      [
                        "couche",
                        "below_horizon"
                      ]
                    ]
                  }
                ],
                "previousStatement": "Condition",
                "nextStatement": "Condition",
                "colour": Blockly.Msg.HUE_YELLOW,
                "tooltip": "",
                "helpUrl": ""
              }
        );
    }
};

Blockly.Blocks['time_condition_hour'] = {
    init: function () {
        this.jsonInit({
            "type": "time_condition_2",
            "lastDummyAlign0": "RIGHT",
            "message0": "Début : %1 h %2 m %3 s %4 Fin : %5 h %6 m %7 s",
            "args0": [
              {
                "type": "field_number",
                "name": "Hour_debut",
                "value": 0,
                "min": 0,
                "max": 23
              },
              {
                "type": "field_number",
                "name": "Minute_debut",
                "value": 0,
                "min": 0,
                "max": 59
              },
              {
                "type": "field_number",
                "name": "Second_debut",
                "value": 0,
                "min": 0,
                "max": 59
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "field_number",
                "name": "Hour_end",
                "value": 0,
                "min": 0,
                "max": 23
              },
              {
                "type": "field_number",
                "name": "Minute_end",
                "value": 0,
                "min": 0,
                "max": 59
              },
              {
                "type": "field_number",
                "name": "Second_end",
                "value": 0,
                "min": 0,
                "max": 59
              }
            ],
            "inputsInline": false,
            "previousStatement": "Condition",
            "nextStatement": "Condition",
            "colour": Blockly.Msg.HUE_YELLOW,
            "tooltip": "Si laissé seul, la condition s'appliquera tous les jours",
            "helpUrl": ""
          });
    }
};

Blockly.Blocks['time_condition_week'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "week_condition",
                "message0": "%1 lundi %2 %3 mardi %4 %5 mercredi %6 %7 jeudi %8 %9 vendredi %10 %11 samedi %12 %13 dimanche",
                "args0": [
                  {
                    "type": "field_checkbox",
                    "name": "mon",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "tue",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "wen",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "thu",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "fri",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "sat",
                    "checked": true
                  },
                  {
                    "type": "input_dummy"
                  },
                  {
                    "type": "field_checkbox",
                    "name": "sun",
                    "checked": true
                  }
                ],
                "inputsInline": false,
                "previousStatement": "Condition",
                "nextStatement": "Condition",
                "colour": Blockly.Msg.HUE_YELLOW,
                "tooltip": "Si laissé seul, la condition s'appliquera à n'importe quel moment de la journée",
                "helpUrl": ""
              }
        );
    }
};

Blockly.Blocks['binary_condition'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "block_type",
                "message0": "Si capteur binaire %1 est %2",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "Service",
                    "check": "Binary_sensor"
                  },
                  {
                    "type": "field_dropdown",
                    "name": "state",
                    "options": [
                      [
                        "ON",
                        "on"
                      ],
                      [
                        "OFF",
                        "off"
                      ]
                    ]
                  }
                ],
                "inputsInline": true,
                "previousStatement": "Condition",
                "nextStatement": "Condition",
                "colour": Blockly.Msg.HUE_YELLOW,
                "tooltip": "",
                "helpUrl": ""
              }
        );
    }
};

/**
 * Catégorie Actions
 */
Blockly.Blocks['action'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "action",
                "message0": "Faire :  %1 Sur :  %2",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "Service",
                    "check": "Service"
                  },
                  {
                    "type": "input_value",
                    "name": "Entity"
                  }
                ],
                "inputsInline": true,
                "previousStatement": "Action",
                "nextStatement": "Action",
                "colour": Blockly.Msg.HUE_ORANGE,
                "tooltip": "",
                "helpUrl": ""
              }
        );
    }
};

/**
 * Catégorie Couleur
 */
Blockly.Blocks['color_picker'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "attribut_color",
                "message0": "Couleur : %1",
                "args0": [
                  {
                    "type": "field_colour",
                    "name": "color",
                    "colour": "#ff0000"
                  }
                ],
                "output": null,
                "colour": Blockly.Msg.HUE_MAUVE,
                "tooltip": "",
                "helpUrl": ""
              }
        );
    }
};

Blockly.Blocks['color_rgb'] = {
    init: function () {
        this.jsonInit({
            "type": "color_rgb",
            "message0": "Couleur personnalisée : %1 rouge : %2 vert : %3 bleu %4",
            "args0": [
              {
                "type": "input_dummy"
              },
              {
                "type": "field_number",
                "name": "red",
                "value": 0,
                "min": 0,
                "max": 255
              },
              {
                "type": "field_number",
                "name": "green",
                "value": 0,
                "min": 0,
                "max": 255
              },
              {
                "type": "field_number",
                "name": "blue",
                "value": 0,
                "min": 0,
                "max": 255
              }
            ],
            "output": null,
            "colour": Blockly.Msg.HUE_MAUVE,
            "tooltip": "Les valeurs doivent être comprise entre 0 et 255",
            "helpUrl": ""
          });
    }
};
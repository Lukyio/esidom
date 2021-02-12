/* eslint-disable no-param-reassign */
import type { WorkspaceSvg } from 'blockly';
import Blockly from 'blockly';
import esidomGenerator from '../routes/automation/esidom_generator';
import EntityService from './entityService';
import type { Entity } from '../../types/entityType';
import type { Service } from '../../types/ServiceType';
import type { EntityWithServices } from '../../types/entityWithServicesType';
import type { EnvironmentBlockly } from '../../types/environmentBlocklyType';
import type { BlocksDefinitions } from '../routes/automation/esidom_blocks';

export default class BlocklyService {
    private toolbox: string | HTMLElement | undefined;

    private workspace: WorkspaceSvg;

    constructor(toolbox: string | HTMLElement | undefined, workspace: WorkspaceSvg) {
        this.toolbox = toolbox;
        this.workspace = workspace;
    }

    convertToBlock(): void {
        const code = esidomGenerator.workspaceToCode(this.workspace);

        try {
            const json = JSON.parse(code);
            json.alias = 'test 3';
            json.description = 'test description';

            // TODO: send the json to HA
            console.log(JSON.stringify(json));
        } catch (e) {
            alert(e);
        }
    }

    static async createEntities(): Promise<void> {
        const lights = await EntityService.getEntities();
        const services = await EntityService.getServices();

        const entities: EntityWithServices[] = [];

        lights.forEach((entity: Entity) => {
            const tmpServices: string[] = services
                .filter((service: Service) => service.name.split('.')[0] === entity.type)
                .map((service: Service) => service.name);

            if (tmpServices.length > 0) {
                entities.push({
                    id: entity.id,
                    name: entity.name,
                    services: tmpServices,
                });
            }
        });

        ((block: BlocksDefinitions) => {
            block.objet_action = {
                init() {
                    const dropdown1 = entities.map((
                        entity: EntityWithServices,
                        index: number,
                        array: EntityWithServices[],
                    ) => {
                        if (entity.name === null || entity.name === '') {
                            entity.name = 'Nom inconnu';
                        }
                        return [entity.name, index.toString()];
                    });

                    const dropdown2: string[][] = [];

                    entities[0].services.forEach((service: string) => {
                        dropdown2.push([service, service]);
                    });

                    console.log(Blockly.Blocks);
                    console.log(this);
                    this.appendDummyInput()
                        .appendField('Objet : ')
                        .appendField(new Blockly.FieldDropdown(dropdown1), 'entity');
                    this.appendDummyInput('services')
                        .appendField('Action :')
                        .appendField(new Blockly.FieldDropdown(dropdown2), 'services');
                    this.setInputsInline(false);
                    this.setPreviousStatement(true, 'Action');
                    this.setNextStatement(true, 'Action');
                    this.setColour(255);
                    this.setTooltip('');
                    this.setHelpUrl('');
                },
                onchange(ev: EnvironmentBlockly) {
                    if (ev.name === 'entity') {
                        const index = parseInt(ev.newValue, 10);
                        const newDropdown: string[][] = [];

                        entities[index].services.forEach((service: string) => {
                            newDropdown.push([
                                service,
                                service,
                            ]);
                        });

                        this.removeInput('services');
                        this.appendDummyInput('services')
                            .appendField('Action :')
                            .appendField(
                                new Blockly.FieldDropdown(newDropdown),
                                'service',
                            );
                    }
                },
            };
        })(Blockly.Blocks as unknown as BlocksDefinitions);
    }
}

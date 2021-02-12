import type { Entity } from '../../types/entityType';
import type { Service } from '../../types/ServiceType';

export default class EntityService {
    static async getEntities(type = ''): Promise<Entity[]> {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        if (!type) {
            const response = await fetch('http://localhost:3000/entity', {
                headers,
                method: 'GET',
            }).then((x) => x);

            return response.json();
        }
        const response = await fetch(`http://localhost:3000/entity?type=${type}`, {
            headers,
            method: 'GET',
        }).then((x) => x);

        return response.json();
    }

    static async getServices(): Promise<Service[]> {
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        const response = await fetch('http://localhost:3000/service', {
            headers,
            method: 'GET',
        }).then((x) => x);

        return response.json();
    }
}

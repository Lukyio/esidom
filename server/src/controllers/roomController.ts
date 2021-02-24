import { Request, Response } from 'express';
import App from '../app';
import { roomService } from '../services';
import { Room } from '../types';
import {
    NO_SUCH_ID,
    send,
    sendf,
    sendMessage,
    sendMissingParam,
    sendNoSuchId,
    Success,
    SuccessMessage,
    SuccessMessageOrError,
    SuccessOrError,
} from '../utils';

@App.rest('/room')
class RoomController {

    /**
     * Get all the rooms
     * @returns All the rooms
     */
    @App.get('')
    async getRooms(_req: Request, res: Response): Success<Room[]> {
        return roomService
            .getRooms()
            .then(sendf(res, 200));
    }

    /**
     * Create a new room
     * @bodyParam name The name of the new room to create
     * @returns The newly created room, or an error
     */
    @App.post('')
    async createRoom(req: Request, res: Response): SuccessOrError<Room> {
        const { name } = req.body;
        if (!name) {
            return sendMissingParam(res, 'name');
        }
        return roomService
            .createRoom(name)
            .then(sendf<Room>(res, 200));
    }

    /**
     * Get a room by its ID
     * @pathParam areaId The id of the room
     * @returns The room with the correct id, or an error
     */
    @App.get('/:areaId')
    async getRoom(req: Request, res: Response): SuccessOrError<Room> {
        const { areaId } = req.params;

        return roomService
            .getRoomById(areaId)
            .then((room) => {
                if (!room) {
                    console.log(NO_SUCH_ID(areaId));
                    return sendNoSuchId(res, areaId);
                }
                return send(res, 200, room);
            });
    }

    /**
     * Update a room
     * @pathParam roomId The id of the room to update
     * @returns A success message
     */
    @App.put('/:roomId')
    async updateRoom(_req: Request, res: Response): SuccessMessage {
        return send(res, 200, { message: 'TODO' });
    }

    /**
     * Delete a room
     * @pathParam roomId The id of the room to delete
     * @returns A success message or an error message
     */
    @App.delete('/:roomId')
    async deleteRoom(req: Request, res: Response): SuccessMessageOrError {
        const { roomId } = req.params;
        if (!roomId) {
            return sendMissingParam(res, 'roomId');
        }

        return roomService
            .deleteRoom(roomId)
            .then(() => sendMessage(res, 200, 'Room successfully deleted'))
            .catch((err: any) => send(res, 400, {
                error: `Error while deleting room ${roomId}: ${err.message}`,
            }));
    }

}

export default new RoomController();

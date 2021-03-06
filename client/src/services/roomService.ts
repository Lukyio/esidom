import type { Room } from '../../types/roomType';
import http from '../utils/HttpHelper';
import { tr } from '../utils/i18nHelper';
import toastService from '../utils/toast';

export default class RoomService {
    /**
     * Gets the rooms.
     */
    static async getRooms(): Promise<Room[]> {
        return http.get<Room[]>('/room')
            .catch((err) => {
                toastService.toast(tr('rooms.errorWhileLoading'), 'error');
                throw err;
            });
    }

    /**
     * Creates a room.
     * @param room the new room
     */
    static async createRoom(room: Room): Promise<Room> {
        return http.post<Room, Room>('/room', room)
            .catch((err) => {
                toastService.toast(tr('rooms.errorWhileCreating'), 'error');
                throw err;
            });
    }

    /**
     * Deletes a room.
     * @param room the room to delete
     */
    static async deleteRoom(room: Room): Promise<void> {
        return http.delete<void, Room>(`/room/${room.roomId}`)
            .catch((err) => {
                toastService.toast(tr('rooms.errorWhileDeleting'), 'error');
                throw err;
            });
    }

    /**
     * Updates a room.
     * @param room the room to be updated
     */
    static async updateRoom(room: Room): Promise<void> {
        return http.put<void, Room>(`/room/${room.roomId}`, room)
            .catch((err) => {
                toastService.toast(tr('rooms.errorWhileUpdating'), 'error');
                throw err;
            });
    }
}

import httpForwarder from '../forwarders/httpForwarder';
import socketForwarder from '../forwarders/socketForwarder';
import { User } from '../types/user';

class UserService {

    async getUsers(): Promise<User[]> {
        return new Promise((res, rej) => {});
    }

}

export default new UserService();
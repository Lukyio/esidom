import FormData from 'form-data';
import { Request, Response } from 'express';
import socketForwarder from '../forwarders/socketForwarder';
import httpForwarder from '../forwarders/httpForwarder';
import config from '../config/config';

class AuthService {

    async doAuth(req: Request, res: Response): Promise<Response<{ token: string }>> {
        const baseUrl = req.params.baseUrl || `http://${config.baseUrl}`;
        const username = req.params.username || config.username;
        const password = req.params.password || config.password;
        try {
            const accessToken = await AuthService.auth(baseUrl, username, password);
            socketForwarder.initSocket(accessToken);
            httpForwarder.setToken(accessToken);
            return res.status(200).send({ token: accessToken });
        } catch (err) {
            return res.sendStatus(401);
        }
    }

    static async auth(baseUrl: string, username: string, password: string): Promise<string> {
        let res: any = await httpForwarder.post('/auth/login_flow', {
            client_id: `${baseUrl}/`,
            handler: ['homeassistant', null],
            redirect_uri: `${baseUrl}/?auth_callback=1`,
        });
        const flowId = res.flow_id;
        res = await httpForwarder.post(
            `/auth/login_flow/${flowId}`,
            {
                username,
                password,
                client_id: `${baseUrl}/`,
            },
        );
        const resultData: string = res.result;
        const bodyFormData: FormData = new FormData();
        bodyFormData.append('code', resultData);
        bodyFormData.append('client_id', `${baseUrl}/`);
        bodyFormData.append('grant_type', 'authorization_code');
        res = await httpForwarder.post(
            '/auth/token',
            bodyFormData,
            { headers: { ...bodyFormData.getHeaders() } },
        );
        const accessToken: string = res.access_token;
        return accessToken;
    }

}

export default new AuthService();

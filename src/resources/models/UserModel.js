import api from '../utils/wretch.js';

export default class UserModel {
    static async create(body) {
        try {
            let response = await api.post('/register', body);
            return response;
        } catch (err) {
            return err;
        }
    }

    static async getSelf(){
        try {
            let response = await api.get('/me');
            return response;
        } catch (err) {
            return err;
        }
    }
}

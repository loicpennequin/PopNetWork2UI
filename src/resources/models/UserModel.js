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
}

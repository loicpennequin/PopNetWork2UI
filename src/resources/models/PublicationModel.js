import api              from '../utils/wretch.js';
import { momentizeObj } from '../utils/helpers.js';
export default class UserModel {
    static async create(body) {
        try {
            let response = await api.post('/publications', body);
            return response;
        } catch (err) {
            return err;
        }
    }

    static async getById(id) {
        try {
            let response = await api.get('/publications/' + id);
            return response;
        } catch (err) {
            return err;
        }
    }

    static async getPaginated(params){
        try {
            let response = await api.get('/publications', params);
            return response;
        } catch (err) {
            return err;
        }
    }
}

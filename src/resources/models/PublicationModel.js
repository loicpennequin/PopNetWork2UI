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
}

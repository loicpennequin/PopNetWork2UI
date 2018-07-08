import api              from '../utils/wretch.js';
import { momentizeObj } from '../utils/helpers.js';
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
            return response
        } catch (err) {
            return err;
        }
    }

    static async getProfile(id){
        try {
            let response = await api.get('/users/profile/' + id);
            return Object.assign(
                response,
                { publications : response.publications.map(p => momentizeObj(p))}
            )
        } catch (err) {
            return err;
        }
    }

    static async getPaginated(params){
        try {
            let response = await api.get('/users', params);
            return response;
        } catch (err) {
            return err;
        }
    }
}

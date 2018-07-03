import store from '../../store/store.js';
import api   from '../utils/wretch.js';

export default class Authservice{
    static async verifyAuth(){
        let { error } = await api.get('/authenticated');
        if ( !error ){
            store.actions.login();
        }
    }

    static async login(body){
        let response = await api.post('/login', body);
        if ( response.token ) {
            store.actions.login();
        }
    }

    static async logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        store.actions.logout();
    }
}

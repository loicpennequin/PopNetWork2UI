import store from '../../store/store.js';
import api   from '../utils/wretch.js';

export default class Authservice{
    static async verifyAuth(){
        let { error } = await api.get('/authenticated');
        if ( !error ){
            await store.actions.login();
            await store.actions.getCurrentUser();
        }
    }

    static async login(body){
        let response = await api.post('/login', body);
        if ( response.userId ) {
            await store.actions.login();
            store.actions.getCurrentUser();
        }
    }

    static async logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        store.actions.logout();
    }
}

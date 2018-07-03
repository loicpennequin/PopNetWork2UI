import { createStore } from 'react-contextual'

import authActions     from './actions/authActions.js';
import menuActions     from './actions/menuActions.js';

let store = createStore({
    initialState: {
        authenticated : false,
        menuDisplayed : false,
        menu: [ "Dashboard", "Profile", "Apps", "Projects"]
    },
    actions: Object.assign(
        {},
        authActions,
        menuActions
    )
});

export default store;

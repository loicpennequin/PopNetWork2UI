import { createStore } from 'react-contextual'

import authActions     from './actions/authActions.js';
import menuActions     from './actions/menuActions.js';
import userActions     from './actions/userActions.js';

let store = createStore({
    initialState: {
        authenticated : false,
        currentUser : undefined,
        menuDisplayed : false
    },
    actions: Object.assign(
        {},
        authActions,
        menuActions,
        userActions
    )
});

export default store;

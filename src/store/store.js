import { createStore } from 'react-contextual'

import authActions     from './actions/authActions.js';
import menuActions     from './actions/menuActions.js';
import userActions     from './actions/userActions.js';
import profileActions   from './actions/profileActions.js';

let store = createStore({
    initialState: {
        authenticated : false,
        currentUser : undefined,
        menuDisplayed : false,
        menu: []
    },
    actions: Object.assign(
        {},
        authActions,
        menuActions,
        userActions,
        profileActions
    )
});

export default store;

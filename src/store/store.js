import { createStore } from 'react-contextual'

import authActions     from './actions/authActions.js';
import menuActions     from './actions/menuActions.js';
import userActions     from './actions/userActions.js';

import initialMenu     from '../resources/utils/initialMenu.js';

let store = createStore({
    initialState: {
        authenticated : false,
        menuDisplayed : false,
        menu: initialMenu,
        currentUser : undefined
    },
    actions: Object.assign(
        {},
        authActions,
        menuActions,
        userActions
    )
});

export default store;

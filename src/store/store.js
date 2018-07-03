import { createStore } from 'react-contextual'

import authActions     from './actions/authActions.js';
import menuActions     from './actions/menuActions.js';

import initialMenu     from '../resources/utils/initialMenu.js';

let store = createStore({
    initialState: {
        authenticated : false,
        menuDisplayed : false,
        menu: initialMenu
    },
    actions: Object.assign(
        {},
        authActions,
        menuActions
    )
});

export default store;

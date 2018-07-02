import { createStore } from 'react-contextual'
import authActions     from './actions/authActions.js';

let store = createStore({
    initialState: {
        authenticated : false
    },
    actions: Object.assign(
        {},
        authActions
    )
});

export default store;

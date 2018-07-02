/**
 * Main container for the app. Sets up store provider and i18n config
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React             from 'react';

import { Provider }      from 'react-contextual';
import store             from '../../store/store.js';

import {I18nextProvider} from 'react-i18next';
import i18n              from '../../resources/services/i18n.js';

import App               from '../../App.jsx';

class AppContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <I18nextProvider i18n={ i18n }>
                    <App />
                </I18nextProvider>
            </Provider>
        )
    }
}

export default AppContainer;

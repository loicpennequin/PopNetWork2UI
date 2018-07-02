/**
 * Main Navigation Bar.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React             from 'react';
import { translate }     from 'react-i18next';
import { subscribe }     from 'react-contextual';
import store             from '../../../store/store.js';

import api               from  '../../../resources/utils/wretch.js'

@translate()
@subscribe(store, s => ({
    authenticated: s.authenticated,
    login: s.actions.login,
    logout: s.actions.logout,
}))
class MainNav extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <nav style={{display: 'flex'}}>
                <p>{t('app title')}</p>
                {
                    this.props.authenticated
                    ? <button onClick={this.props.logout}>{t('logout')}</button>
                    : <button onClick={this.props.login}>{t('login')}</button>
                }
            </nav>
        )
    }
}

export default MainNav;

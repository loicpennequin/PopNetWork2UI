/**
 * Main Navigation Bar.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React             from 'react';
import { translate }     from 'react-i18next';
import { subscribe }     from 'react-contextual';
import store             from '../../../store/store.js';
import i18next           from '../../../resources/utils/i18n.js';

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
            <nav className="navbar is-fixed has-shadow">
                <div className="container">
                    <div className="navbar-left">
                        <p>{t('app title')}</p>
                    </div>
                    <div className="navbar-right">
                        {this.props.authenticated
                            ? <button className="button is-nude" onClick={this.props.logout}>{t('logout')}</button>
                            : <button className="button is-nude" onClick={this.props.login}>{t('login')}</button>}
                            <button className="button is-nude" onClick={() => i18next.changeLanguage('fr')}>
                                <span className="flag-icon flag-icon-fr flag-icon-squared"></span>
                            </button>
                            <button className="button is-nude" onClick={() => i18next.changeLanguage('en')}>
                                <span className="flag-icon flag-icon-gb flag-icon-squared"></span>
                            </button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default MainNav;

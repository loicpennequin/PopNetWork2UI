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

import constants         from '../../../resources/utils/constants.js';
import AuthService       from '../../../resources/services/AuthService.js';

import Form              from '../Form/Form.jsx';
import MainNavMenu       from './MainNavMenu/MainNavMenu.jsx';
import Searchbar         from './Searchbar/Searchbar.jsx';

const loginFormFields = [
    {label: 'username', name: 'username', type: 'text'},
    {label: 'password', name: "password", type: 'password'},
];

@translate()
@subscribe(store, s => ({
    authenticated: s.authenticated,
    showMenu : s.menuDisplayed,
    openMenu : s.actions.openMenu,
    toggleMenu: s.actions.toggleMenu
}))
class MainNav extends React.Component {
    render() {
        const { t } = this.props;

        const authHandler = this.props.authenticated
            ? <button className="button is-nude" onClick={AuthService.logout}>{t('logout')}</button>
            : <Form name="LoginForm"
                fields={loginFormFields}
                action={AuthService.login}
                submitMessage={t('login')}
                className="form-horizontal"/>

        const menuButton = this.props.authenticated
            ? (<button className="button is-nude"
                      onClick={this.props.toggleMenu}>
                      <i className="fas fa-bars fa-2x"></i>
              </button>)
            : null;

        const flagsList = constants.SUPPORTED_LANGUAGES.map(lang => (
            <button className="button is-nude" onClick={() => i18next.changeLanguage(lang.i18nLabel)}>
                <span className={`flag-icon flag-icon-${lang.flagCode} flag-icon-squared`}></span>
            </button>
        ))

        return (
            <nav className="navbar is-fixed has-shadow">
                <div className="container">
                    <div className="navbar-left">
                        {menuButton}
                        <p>{t('app title')}</p>
                    </div>
                    <div className="navbar-right">

                        {this.props.authenticated ? <Searchbar /> : null }
                        {authHandler}
                        {flagsList}
                    </div>
                </div>
                {
                    this.props.showMenu
                    ?<MainNavMenu />
                    :null
                }

            </nav>
        )
    }
}

export default MainNav;

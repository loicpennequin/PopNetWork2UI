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

import api               from '../../../resources/utils/wretch.js';
import AuthService       from '../../../resources/services/AuthService.js';

import Form              from '../Form/Form.jsx';

const loginFormFields = [
    {label: 'username', name: 'username', type: 'text'},
    {label: 'password', name: "password", type: 'password'},
];

@translate()
@subscribe(store, s => ({authenticated: s.authenticated}))
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
                        {
                            this.props.authenticated
                            ? <button className="button is-nude" onClick={AuthService.logout}>{t('logout')}</button>
                            : <Form name="LoginForm"
                                fields={loginFormFields}
                                action={AuthService.login}
                                submitMessage={t('login')}
                                className="form-horizontal"/>
                        }
                        <div className="action-bar">
                            <button className="button is-nude" onClick={() => i18next.changeLanguage('fr')}>
                                <span className="flag-icon flag-icon-fr flag-icon-squared"></span>
                            </button>
                            <button className="button is-nude" onClick={() => i18next.changeLanguage('en')}>
                                <span className="flag-icon flag-icon-gb flag-icon-squared"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default MainNav;

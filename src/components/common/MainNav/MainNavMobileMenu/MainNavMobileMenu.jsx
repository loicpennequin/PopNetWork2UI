/**
 * Main Navigation Bar.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React             from 'react';
import { translate }     from 'react-i18next';
import { subscribe }     from 'react-contextual';
import { NavLink }       from 'react-router-dom';
import store             from '../../../../store/store.js';
import i18next           from '../../../../resources/utils/i18n.js';

import constants         from '../../../../resources/utils/constants.js';
import isMobile          from '../../../../resources/utils/detectMobile.js';
import AuthService       from '../../../../resources/services/AuthService.js';
import Searchbar         from '../Searchbar/Searchbar.jsx';


import OnOutsideClick    from '../../OnOutsideClick/OnOutsideClick.jsx';

@translate(['common', 'menu'])
@subscribe(store, s => ({
    authenticated: s.authenticated,
}))
class MainNavMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = { isOpen : false };
        this.container = React.createRef();
    }

    toggle(){
        this.setState({ isOpen : !this.state.isOpen });
    }

    close(){
        this.setState({ isOpen : false });
    }

    render() {
        const { t } = this.props;

        const authHandler = this.props.authenticated
            ? <button className="button is-nude" onClick={AuthService.logout}>{t('logout')}</button>
            : <Form name="LoginForm"
                fields={loginFormFields}
                action={AuthService.login}
                submitMessage={t('login')}
                className="form-horizontal"/>

        const searchBar= this.props.authenticated ? <Searchbar /> : null;

        const flagsList = constants.SUPPORTED_LANGUAGES.map(lang => (
            <button className="button is-nude" onClick={() => i18next.changeLanguage(lang.i18nLabel)}>
                <span className={`flag-icon flag-icon-${lang.flagCode} flag-icon-squared`}></span>
            </button>
        ))

        return (
            <div className="mobile-menu_wrapper">
                <button className="button is-primary is-pill" onClick={() => this.toggle()}>Menu</button>
                {this.state.isOpen
                    ?(<OnOutsideClick action={() => this.close()}
                                    element={this.container}>
                        <ul ref={this.container} className="mobile-menu">
                            <li>{searchBar}</li>
                            <li>{flagsList}</li>
                            <li>{authHandler}</li>
                        </ul>
                    </OnOutsideClick>)
                    :null
                }
            </div>

        )
    }
}

export default MainNavMenu

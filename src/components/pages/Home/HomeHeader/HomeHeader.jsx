/**
 * Home Header component. Display the app title and registration form.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React          from 'react';
import { translate }  from 'react-i18next';

import RegisterForm   from '../RegisterForm/RegisterForm.jsx';

@translate()
class HomeHeader extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { t } = this.props;
        return (
            <header className="home_header">
                <div className="container grid is-2-columns height-100">
                    <div className="flex rows centered">
                        <h1 className="heading-1 txt-font-title">{t('app title')}</h1>
                        <h2 className="heading-2 txt-font-title">{t('catchphrase')}</h2>
                    </div>
                    <div className="flex rows centered">
                        <RegisterForm />
                    </div>
                </div>
            </header>
        )
    }
}

export default HomeHeader;

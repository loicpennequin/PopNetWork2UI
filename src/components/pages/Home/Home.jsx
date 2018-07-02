/**
 * Home page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React          from 'react';
import { translate }  from 'react-i18next';
import { subscribe }  from 'react-contextual';
import store          from '../../../store/store.js';

import UserModel      from '../../../resources/models/UserModel.js';
import RegisterForm   from './RegisterForm/RegisterForm.jsx';

@translate()
class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <h1>This is the home</h1>
                <RegisterForm />
            </React.Fragment>
        )
    }
}

export default Home;

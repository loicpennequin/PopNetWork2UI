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
import Form           from '../../common/Form/Form.jsx';

const fields =  [
    {label: 'Nom', name: 'username', type: 'text'},
    {label: 'Adresse email', name: "email", type: 'email'},
    {label: 'password', name: "password", type: 'password', placeholder: "6 caractères minimum"},
];

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
                <Form name="RegisterForm" fields={fields} action={UserModel.create}></Form>
            </React.Fragment>
        )
    }
}

export default Home;

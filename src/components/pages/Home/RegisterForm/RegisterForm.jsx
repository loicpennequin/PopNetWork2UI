/**
 * Home page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React               from 'react';
import { translate }       from 'react-i18next';

import { aggregateErrors } from '../../../../resources/utils/helpers.js';
import UserModel           from '../../../../resources/models/UserModel.js';
import Form                from '../../../common/Form/Form.jsx';

const fields =  [
    {label: 'Nom', name: 'username', type: 'text'},
    {label: 'Adresse email', name: "email", type: 'email'},
    {label: 'password', name: "password", type: 'password', placeholder: "6 caractères minimum"},
];

@translate()
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fields,
            registrationSuccess : false
        }

        this.register = this.register.bind(this);
    }

    async register(body){
        let response = await UserModel.create(body);
        if (!response.errors){
            this.setState({ registrationSuccess : true })
        } else {
            let fields = aggregateErrors(response.errors, this.state.fields);
            this.setState({ fields });
        }
    }

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <Form name="RegisterForm"
                    fields={this.state.fields}
                    action={this.register}
                    />
                {
                    this.state.registrationSuccess
                    ? <p>{t('registration successful')}</p>
                    : null
                }
            </React.Fragment>
        )
    }
}

export default Home;

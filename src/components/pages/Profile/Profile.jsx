/**
 * Profile page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React          from 'react';
import { translate }  from 'react-i18next';
import { subscribe }  from 'react-contextual';
import store          from '../../../store/store.js';

import UserModel      from '../../../resources/models/UserModel.js'

import UserCard       from '../../common/UserCard/UserCard.jsx';
@translate()
class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    async componentDidMount(){
        this.setState({
            user: await UserModel.getProfile(this.props.match.params.id)
        });
    }

    render() {
        const { t } = this.props;

        if ( !this.state.user ){
            return null;
        }
        return (
            <div className="container profile">
                <aside>
                    <UserCard user={this.state.user} />
                </aside>
                <main>Feed placeholder</main>
            </div>
        )
    }
}

export default Profile;

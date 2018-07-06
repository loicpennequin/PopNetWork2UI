/**
 * Profile page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React            from 'react';
import { translate }    from 'react-i18next';
import { subscribe }    from 'react-contextual';
import store            from '../../../store/store.js';

import UserModel        from '../../../resources/models/UserModel.js'

import UserCard         from '../../common/UserCard/UserCard.jsx';
import PublicationFeed  from '../../common/PublicationFeed/PublicationFeed.jsx';
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
                <aside className="profile-left">
                    <UserCard user={this.state.user} withBio={true}/>
                </aside>
                <main className="profile-right">
                    <h2 className="heading-2">
                        Publications de {this.state.user.username} :
                    </h2>
                    <PublicationFeed publications={this.state.user.publications} />
                </main>
            </div>
        )
    }
}

export default Profile;

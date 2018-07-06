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
    state = {};

    static getDerivedStateFromProps(nextProps, prevState){
        if ( nextProps.match.params.id === prevState.id ){
            return { id : nextProps.match.params.id }
        } else {
            return null;
        }
    }

    async componentDidMount(){
        this.setState(await this._getData());
    }

    async updateData(){
        this.setState(await this._getData());
    }

    async _getData(){
        return {
            user: await UserModel.getProfile(this.props.match.params.id)
        };
    }

    async componentDidUpdate(prevProps, prevState){
        if ( prevState.id !== this.state.id ){
            this.setState(await this._getData());
        }
    }

    publish(){

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
                    <PublicationFeed publications={this.state.user.publications}
                                     withForm="true"
                                     onUpdate={() => this.updateData()}/>
                </main>
            </div>
        )
    }
}

export default Profile;

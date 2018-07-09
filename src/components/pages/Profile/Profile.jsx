/**
 * Profile page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                from 'react';
import { translate }        from 'react-i18next';
import { subscribe }        from 'react-contextual';
import store                from '../../../store/store.js';

import UserModel            from '../../../resources/models/UserModel.js'
import PublicationModel     from '../../../resources/models/PublicationModel.js'

import FixedContainer       from '../../common/FixedContainer/FixedContainer.jsx';
import UserCard             from '../../common/UserCard/UserCard.jsx';
import PublicationFeed      from '../../common/PublicationFeed/PublicationFeed.jsx';
import ProfileFriendList    from './ProfileFriendList/ProfileFriendList.jsx';

@translate()
@subscribe(store, s => ({
    currentUser : s.currentUser,
    currentProfile: s.currentProfile,
    getCurrentProfile: s.actions.getCurrentProfile,
    addToFeed: s.actions.addToCurrentProfileFeed,
    getOlderFeed: s.actions.getCurrentProfileOlderFeed
}))
class Profile extends React.Component {
    state = {allFetched : false};

    static getDerivedStateFromProps(nextProps, prevState){
        if ( nextProps.match.params.id !== prevState.id ){
            return { id : nextProps.match.params.id }
        } else {
            return null;
        }
    }

    async componentDidMount(){
        await this.props.getCurrentProfile(this.props.match.params.id)
    }

    async componentDidUpdate(prevProps, prevState){
        if ( prevState.id !== this.state.id ){
            await this.props.getCurrentProfile(this.props.match.params.id)
        }
    }

    async fetchOlderFeed(){
        let olderFeed = await PublicationModel.getPaginated({
            offset: this.props.currentProfile.publications.length,
            where: JSON.stringify({user_id: this.props.currentProfile.id})
        });
        this.props.getOlderFeed(olderFeed.publications);
        await this.setState({ allFetched : olderFeed.allFetched });
    }

    render() {
        const { t, currentUser, currentProfile } = this.props;

        if ( !currentProfile ){
            return null;
        }

        return (
            <div className="profile">
                <aside className="profile-left" id="sidebar-container">
                    <FixedContainer>
                        <div className="profile-left-content">
                            <UserCard user={currentProfile} withBio={true}/>
                            <ProfileFriendList />
                        </div>
                    </FixedContainer>
                </aside>
                <main className="profile-right">
                    <PublicationFeed publications={currentProfile.publications}
                                     withForm={currentProfile.id === currentUser.id}
                                     onAdd={id => this.props.addToFeed(id)}
                                     onScroll={() => this.fetchOlderFeed()}
                                     allFetched={this.state.allFetched}/>
                </main>
            </div>
        )
    }
}

export default Profile;

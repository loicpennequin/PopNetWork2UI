/**
 * Profile friend list
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                from 'react';
import { translate }        from 'react-i18next';
import { subscribe }        from 'react-contextual';
import store                from '../../../../store/store.js';

import FriendList           from '../../../common/FriendList/FriendList.jsx';
@translate()
@subscribe(store, s => ({
    friends : s.currentProfile.friends,
    count: s.currentProfile.friends_count
}))
class ProfileFriendList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="card is-rounded profile-friendlist">
                <div className="card-header">
                    <h3 className="heading-5">{this.props.count} Friends</h3>
                </div>
                <div className="card-body">
                    <FriendList friends={this.props.friends} />
                </div>
            </div>
        )
    }
}

export default ProfileFriendList;

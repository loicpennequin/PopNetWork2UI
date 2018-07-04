/**
 * Profile page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React          from 'react';
import { translate }  from 'react-i18next';
import { subscribe }  from 'react-contextual';
import store          from '../../../store/store.js';

import UserCard       from '../../common/UserCard/UserCard.jsx';
@translate()
class Profile extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        const { t } = this.props;
        return (
            <div className="container profile">
                <aside>
                    <UserCard />
                </aside>
                <main>Feed placeholder</main>
            </div>
        )
    }
}

export default Profile;

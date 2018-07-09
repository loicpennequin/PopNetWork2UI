/**
 * Render a card with the user main infos inside.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React            from 'react';
import { translate }    from 'react-i18next';

import FriendListItem   from './FriendListItem/FriendListItem.jsx'

@translate()
class FriendList extends React.Component {

    render() {
        const { t } = this.props;
        const friends = this.props.friends.map(
            friend => (<FriendListItem friend={friend} />)
        );
        return (
            <div className={`friendlist`}>
                {friends}
            </div>
        );
    }
}

export default FriendList;

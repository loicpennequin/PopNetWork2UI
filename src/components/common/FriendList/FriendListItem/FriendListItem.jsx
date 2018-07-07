/**
 * Render a card with the user main infos inside.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React            from 'react';
import { translate }    from 'react-i18next';

import Avatar           from '../../Avatar/Avatar.jsx';

@translate()
class FriendListItem extends React.Component {

    render() {
        const { t } = this.props;

        return (
            <div className={`friendlist`}>
                <Avatar size="small" user={this.props.friend}/>
                {this.props.friend.username}
            </div>
        )
    }
}

export default FriendListItem;

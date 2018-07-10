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
            <div className={`friendlist-item`}>
                <Avatar size="small" user={this.props.friend}/>
                <p className="friendlist-item_username">{this.props.friend.username}</p>
                {this.props.withActions === true
                    ?<div className="action-bar">
                        <button className="button is-nude"><i className="fa far fa-comment"></i></button>
                        <button className="button is-nude"><i className="fa far fa-envelope"></i></button>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default FriendListItem;

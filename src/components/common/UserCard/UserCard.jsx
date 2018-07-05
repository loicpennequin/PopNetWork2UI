/**
 * Render a card with the user main infos inside.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React            from 'react';
import { translate }    from 'react-i18next';

import Avatar           from '../Avatar/Avatar.jsx';
@translate()
class UserCard extends React.Component {

    render() {
        const { t } = this.props;

        return (
            <div className="card">
                <div className="card-body">
                    <Avatar user={this.props.user} size="medium" />
                    <h4 className="heading-4">{this.props.user.username}</h4>
                    <h4 className="heading-5">{this.props.user.email}</h4>
                </div>
            </div>
        )
    }
}

export default UserCard;

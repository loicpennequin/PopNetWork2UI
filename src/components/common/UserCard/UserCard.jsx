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
            <div className={`card is-rounded usercard ${this.props.withBio ? '' : 'no-bio'}`}>
                <div className="card-header flex">
                    <button className="usercard-action-btn">
                        <i className="fas fa-plus-circle fa-lg fa-fw"></i>
                    </button>
                    <button className="usercard-action-btn">
                        <i className="far fa-envelope fa-lg fa-fw"></i>
                    </button>
                </div>

                <div className="card-body">
                    <div className="usercard-avatar-wrapper">
                        <Avatar user={this.props.user} className="usercard-avatar" size="extralarge" />
                    </div>

                    <h3 className="heading-2 usercard-username">{this.props.user.username}</h3>
                    {
                        this.props.user.bio !== null
                            ? <p className="usercard-bio">{this.props.user.bio}</p>
                            : <p className="usercard-bio empty">This user has no bio.</p>
                    }

                    <div className="action-bar usercard-links">
                        <a className="usercard-links_item"><i className="fab fa-facebook-square"></i></a>
                        <a className="usercard-links_item"><i className="fab fa-twitter"></i></a>
                        <a className="usercard-links_item"><i className="fab fa-instagram"></i></a>
                        <a className="usercard-links_item"><i className="fab fa-github"></i></a>
                        <a className="usercard-links_item"><i className="fab fa-bitbucket"></i></a>
                        <a className="usercard-links_item"><i className="fab fa-gitlab"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;

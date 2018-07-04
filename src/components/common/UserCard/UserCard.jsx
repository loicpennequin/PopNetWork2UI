/**
 * Input Component. Renders an input field with the label and some config
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                     from 'react';
import { translate }             from 'react-i18next';

@translate()
class UserCard extends React.Component {

    render() {
        const { t } = this.props;

        return (
            <div className="card">
                User Card
            </div>
        )
    }
}

export default UserCard;

/**
 * Dashboard page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React          from 'react';
import { translate }  from 'react-i18next';
import { subscribe }  from 'react-contextual';

@translate()
class DashboardSidebar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>FriendList</li>
                    <li>Projects</li>
                    <li>Apps</li>
                    <li>Settings</li>
                </ul>
            </div>
        )
    }
}

export default DashboardSidebar;

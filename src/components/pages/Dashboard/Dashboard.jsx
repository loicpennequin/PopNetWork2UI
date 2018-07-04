/**
 * Dashboard page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React          from 'react';
import { translate }  from 'react-i18next';
import { subscribe }  from 'react-contextual';
import store          from '../../../store/store.js';

import DashboardSidebar from './DashboardSidebar/DashboardSidebar.jsx';

@translate()
@subscribe(store, s => {
    return { currentUser: s.currentUser }
})
class Dashboard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { t } = this.props;
        return (

            <div className="dashboard">
                <DashboardSidebar />
                <main class="dashboard_content">
                    <h1 className="heading-1">Hello {this.props.currentUser.username}</h1>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="heading-3">Notifications widget</h3>
                            <p>You have {this.props.currentUser.friendshipRequests.length} friend requests.</p>
                            <p>You have {this.props.currentUser.recievedMessages.length} unread messages.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="heading-3">Apps Manager widget</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="heading-3">Project Manager widget</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="heading-3">FriendList Manager widget</h3>
                        </div>
                    </div>
                    <button>Edit Dashboard widgets</button>
                    <button>Edit Layout</button>
                </main>
            </div>

        )
    }
}

export default Dashboard;

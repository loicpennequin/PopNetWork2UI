/**
 * Dashboard page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React          from 'react';
import { translate }  from 'react-i18next';
import { subscribe }  from 'react-contextual';
import store          from '../../../store/store.js';

// @translate()
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

            <div className="container">
                <p>{JSON.stringify(this.props.currentUser)}</p>
            </div>

        )
    }
}

export default Dashboard;

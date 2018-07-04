/**
 * Main App component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                            from 'react';
import { subscribe }                    from 'react-contextual';
import store                            from './store/store.js';

import { Switch, Route }                from 'react-router-dom';

import AuthService                      from './resources/services/AuthService.js';

import MainNav                          from './components/common/MainNav/MainNav.jsx';
import { PrivateRoute, LoggedOutRoute } from './components/common/Routes/routes.jsx';
import Home                             from './components/pages/Home/Home.jsx';

import Dashboard                        from './components/pages/Dashboard/Dashboard.jsx';
import Apps                             from './components/pages/Apps/Apps.jsx';
import Profile                          from './components/pages/Profile/Profile.jsx';
import Inbox                            from './components/pages/Inbox/Inbox.jsx';
import Projects                         from './components/pages/Projects/Projects.jsx';
import Settings                         from './components/pages/Settings/Settings.jsx';

const pageComponents = { Dashboard, Apps, Profile, Inbox, Projects, Settings };

@subscribe(store, s => ({
    authenticated: s.authenticated,
    menu: s.menu
}))
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { loading : true };
    }

    async componentDidMount(){
        await AuthService.verifyAuth()
        this.setState({ loading: false});
    }

    render() {
        const routes = this.props.menu.map(menuItem =>
            <PrivateRoute exact path={menuItem.path}
                component={pageComponents[menuItem.component]}>
            </PrivateRoute>);

        return (
            this.state.loading ? null : (
                <React.Fragment>
                    <MainNav />
                        <Switch>
                            <LoggedOutRoute exact path="/" component={Home}/>
                            {routes}
                        </Switch>
                </React.Fragment>
            )
        )
    }
}

export default App;

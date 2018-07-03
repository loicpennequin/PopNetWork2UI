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

@subscribe(store, s => ({
    authenticated: s.authenticated,
    menu: s.menu
}))
class App extends React.Component {
    componentDidMount(){
        AuthService.verifyAuth()
    }

    render() {
        const routes = this.props.menu.map(menuItem =>
            <PrivateRoute path={menuItem.path}
                          component={menuItem.component}>
            </PrivateRoute>);

        return (
            <React.Fragment>
                <MainNav />
                <Switch>
                    <LoggedOutRoute exact path="/" component={Home}/>
                    {routes}
                </Switch>
            </React.Fragment>
        )
    }
}

export default App;

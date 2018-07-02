/**
 * Main App component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                            from 'react';
import { subscribe }                    from 'react-contextual';
import store                            from './store/store.js';

import { Switch, Route }                from 'react-router-dom';
import api                              from  './resources/utils/wretch.js';

import MainNav                          from './components/common/MainNav/MainNav.jsx';
import { PrivateRoute, LoggedOutRoute } from './components/common/Routes/routes.jsx';
import Home                             from './components/pages/Home/Home.jsx';
import Dashboard                        from './components/pages/Dashboard/Dashboard.jsx';

@subscribe(store, s => ({
    authenticated: s.authenticated,
    login: s.actions.login
}))
class App extends React.Component {
    componentDidMount(){
        this.verifyAuth();
    }

    async verifyAuth(){
        let { error } = await api.get('/authenticated');
        if ( !error ){
            this.props.actions.login();
        }
    }

    render() {
        return (
            <React.Fragment>
                <MainNav />
                <Switch>
                    <LoggedOutRoute exact path="/" component={Home}/>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default App;

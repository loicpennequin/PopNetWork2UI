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
import initialMenu                      from './resources/utils/initialMenu.js';

@subscribe(store, s => ({
    authenticated: s.authenticated,
    menu: s.menu,
    addToMenu: s.actions.addToMenu
}))
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { loading : true, menu : initialMenu };
    }

    async componentDidMount(){
        for (let i = 0 ; i < initialMenu.length; i++){
            await this.props.addToMenu(this.state.menu[i]);
        }
        await AuthService.verifyAuth()
        this.setState({ loading: false});
    }

    render() {
        const routes = this.state.menu.map(menuItem =>
            <PrivateRoute exact path={menuItem.path}
                component={menuItem.component}>
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

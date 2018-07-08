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
import initialMenu                      from './resources/utils/initialMenu.js';

import MainNav                          from './components/common/MainNav/MainNav.jsx';
import { PrivateRoute, LoggedOutRoute } from './components/common/Routes/routes.jsx';
import FriendList                       from './components/common/FriendList/FriendList.jsx';
import FixedContainer                   from './components/common/FixedContainer/FixedContainer.jsx';
import Home                             from './components/pages/Home/Home.jsx';

@subscribe(store, s => ({
    authenticated: s.authenticated,
    menu: s.menu,
    addToMenu: s.actions.addToMenu,
    addToMenu: s.actions.addToMenu,
    currentUser: s.currentUser
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
                    <div className={`main-content-layout ${this.props.authenticated ? 'logged-in' : ''}`}>
                        <div>
                            <Switch>
                                <LoggedOutRoute exact path="/" component={Home}/>
                                {routes}
                            </Switch>
                        </div>
                        {
                            this.props.authenticated && this.props.currentUser
                            ? (
                                <aside className="currentuser-friendlist">
                                    <FixedContainer>
                                        <FriendList friends={this.props.currentUser.friends} />
                                    </FixedContainer>
                                </aside>
                            )
                            : null
                        }

                    </div>
                </React.Fragment>
            )
        )
    }
}

export default App;

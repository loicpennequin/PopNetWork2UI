/**
 * Custom Route components to manage authentication.
 * Define PrivateRoute and LoggedOutRoute components.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                 from 'react';
import { Route, Redirect }   from 'react-router-dom';
import { subscribe }         from 'react-contextual';
import store                 from '../../../store/store.js';

const PrivateRoute = subscribe(store)(class PrivateRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route {...rest}
                render={ props =>
                    this.props.authenticated
                        ? <Component {...props} />
                    : <Redirect to={{pathname: '/', state: {from: this.props.location}}} />
                }
            />
        )
    }
})

const LoggedOutRoute = subscribe(store)(class LoggedOutRoute extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route {...rest}
                render={ props =>
                    !this.props.authenticated
                        ? <Component {...props} />
                    : <Redirect to={{pathname: '/dashboard', state: {from: this.props.location}}} />
                }
            />
        )
    }
})

export { PrivateRoute, LoggedOutRoute };

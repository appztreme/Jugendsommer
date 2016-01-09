import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App}>
                </Route>
            </Router>
        )
    }
}

export default AppRouter;

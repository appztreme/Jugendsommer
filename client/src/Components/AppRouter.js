import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import About from './about/About';
import EventContainer from './events/EventContainer';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App}>
                    <IndexRoute component={EventContainer} />
                    <Route path="/about" component={About} />
                    <Route path="/events" component={EventContainer} />
                </Route>
            </Router>
        )
    }
}

export default AppRouter;

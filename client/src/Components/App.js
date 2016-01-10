import React from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import myTheme from './theme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppToolbar from './toolbar/AppToolbar';

injectTapEventPlugin();

class App extends React.Component {
    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(myTheme)
        };
    }

    render() {
        return (
            <div>
                <AppToolbar title="Jugendsommer" />
                {this.props.children}
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default App;

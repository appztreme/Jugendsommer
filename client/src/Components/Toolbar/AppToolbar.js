import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import AppToolbarNavMenu from './AppToolbarNavMenu';
import AppToolbarLogin from './AppToolbarLogin';

class AppToolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar
                title={this.props.title}
                iconElementLeft={<AppToolbarNavMenu />}
                iconElementRight={<AppToolbarLogin />}
                style={{margin: 0}}
            />
        );
    }
}

AppToolbar.propTypes = {
    title: React.PropTypes.string.isRequired
}

AppToolbar.defaultProps = {
    title: "Name"
}

export default AppToolbar;

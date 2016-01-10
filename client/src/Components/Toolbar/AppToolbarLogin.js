import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';

const AppToolbarLogin = () => (
    <div style={{float: 'left'}}>
        <TextField
            value='F. Edelmaier'
            disabled={true}
            underlineStyle={{display: 'none'}}
            style={{width: 150}} />
        <Avatar color={Colors.yellowA100} backgroundColor={Colors.yellowA700}>FE</Avatar>
    </div>
);

export default AppToolbarLogin;

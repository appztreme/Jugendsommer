import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

const events = [
    { name: "Event1", description: "Description Event1" },
    { name: "Event2", description: "Description Event2" },
    { name: "Event3", description: "Description Event3" }
]

class EventContainer extends React.Component {
    render() {
        return (
            <div>
                <List>
                { events.map((ev) => <div><ListItem key={ev.name} primaryText={ev.name} /><Divider inset={true} /></div>)}
                </List>
            </div>
        );
    }
}

export default EventContainer;

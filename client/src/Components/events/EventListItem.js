import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

const EventListItem = ({ev}) => (
    <div>
        <ListItem key={ev._id} primaryText={ev.name} />
        <Divider inset={true} />
    </div>
);

export default EventListItem;

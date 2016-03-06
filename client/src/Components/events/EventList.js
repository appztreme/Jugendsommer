import React from 'React';
import List from 'material-ui/lib/lists/list';
import EventListItem from './EventListItem';

const EventList = ({events, isFetching, onLoad}) => (
    <div>
        <button onClick={(e) => onLoad()}>Load</button>
        <List>
        { events.map((ev) => <EventListItem ev={ev} />)}
        </List>
    </div>
);

export default EventList;

import { combineReducers } from 'redux';
import events from './events';
import activities from './activities';

export default combineReducers({
    events,
    activities
});

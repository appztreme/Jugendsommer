import { EVENTS } from './../constants';

const defaultState = {
    isFetching: false,
    errorMessage: '',
    items: []
};

function events(state = defaultState, action) {
    switch(action.type) {
        case EVENTS.REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                items: []
            });
        case EVENTS.SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.events
            });
        case EVENTS.FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                items: [],
                errorMessage: action.message
            });
        default:
            return state;
    }
}

export default events;

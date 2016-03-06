import { ACTIVITIES } from './../constants';

const defaultState = {
    isFetching: false,
    errorMessage:'',
    items: []
};

function activities(state = defaultState, action) {
    switch(action.type) {
        case ACTIVITIES.REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                items: []
            });
        case ACTIVITIES.SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.activities
            });
        case ACTIVITIES.FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                items: [],
                errorMessage: action.message
            });
        default:
            return state;
    }
}

export default activities;

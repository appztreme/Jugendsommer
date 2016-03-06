import { EVENTS } from './../constants';
import fetch from 'isomorphic-fetch';

export function eventsRequest() {
  return {
    type: EVENTS.REQUEST
  };
}

export function eventsSuccess(events) {
    return {
        type: EVENTS.SUCCESS,
        events: events
    };
}

export function eventsFailure(message) {
    return {
        type: EVENTS.FAILURE,
        message: message
    };
}

export function getEvents() {
    let config = {
        method: 'GET'
    };
    return (dispatch) => {
        dispatch(eventsRequest());

        return fetch('http://localhost:2000/api/events', config)
            //.then(checkHttpStatus)
            .then(response => response.json())
            .then(response => {
                console.log(response);
              dispatch(eventsSuccess(response.events));
            })
            .catch(err => { dispatch(eventsFailure(err.message)); });
    }
}

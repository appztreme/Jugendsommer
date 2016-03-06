import { ACTIVITIES } from './../constants';
import fetch from 'isomorphic-fetch';

export function activitiesRequest() {
  return {
    type: ACTIVITIES.REQUEST
  };
}

export function activitiesSuccess(activities) {
    return {
        type: ACTIVITIES.SUCCESS,
        activities: activities
    };
}

export function activitiesFailure(message) {
    return {
        type: ACTIVITIES.FAILURE,
        message: message
    };
}

export function getActivities() {
    let config = {
        method: 'GET'
    };
    return (dispatch) => {
        dispatch(activitiesRequest());

        return fetch('http://localhost:2000/api/activities', config)
            //.then(checkHttpStatus)
            .then(response => response.json())
            .then(response => {
              dispatch(activitiesSuccess(response.activities));
            })
            .catch(err => { dispatch(activitiesFailure(err.message)); });
    }
}

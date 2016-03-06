import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

let store = createStore(reducer, { events: { items: []}, activities: { items: []}}, applyMiddleware(thunk));

export default store;

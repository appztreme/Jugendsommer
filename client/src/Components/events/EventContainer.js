import React from 'react';
import { connect } from 'react-redux';
import { getEvents } from './../../actions/events';
import EventList from './EventList';

const mapStateToProps = (state) => {
    console.log(state);
    return {
      isFetching: state.events.isFetching,
      events: state.events.items
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(getEvents());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);

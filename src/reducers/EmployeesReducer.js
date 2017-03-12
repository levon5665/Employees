import {
    FETCH_EMPLOYEES,
    ADD_EMPLOYEES
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return [].concat(action.payload);
    case ADD_EMPLOYEES:
      return state.concat(action.payload);
    default:
      return state;
  }
};

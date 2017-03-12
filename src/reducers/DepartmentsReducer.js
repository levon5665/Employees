import {
    FETCH_DEPARTMENTS,
    ADD_DEPARTMENTS
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DEPARTMENTS:
            return [].concat(action.payload);
        case ADD_DEPARTMENTS:
            return state.concat(action.payload);
        default:
            return state;
    }
};

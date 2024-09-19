import * as actions from '../actions/courseActionTypes';
import { Map } from 'immutable';
import coursesNormalizer from '../schema/courses';

const courseReducer = (state = Map([]), action) => {
    switch (action.type) {
        case actions.FETCH_COURSE_SUCCESS: {
            const normalizedData = coursesNormalizer(action.data);
            Object.keys(normalizedData).map((key) => {
                normalizedData[key].isSelected = false;
            });
            return state.merge(normalizedData);
        }

        case actions.SELECT_COURSE: {
            return state.setIn([String(action.index), 'isSelected'], true);
        }

        case actions.UNSELECT_COURSE: {
            return state.setIn([String(action.index), 'isSelected'], false);
        }

        default: {
            return state;
        }
    }
}

export default courseReducer;
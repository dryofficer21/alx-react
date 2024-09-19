import * as actions from '../actions/courseActionTypes';

const courseReducer = (state = [], action) => {
    switch (action.type) {
        case actions.FETCH_COURSE_SUCCESS: {
            return action.data.map((course) => {
                return {
                    ...course,
                    isSelected: false,
                }
            })
        }

        case actions.SELECT_COURSE: {
            return state.map((course, index) => {
                const currentState = {
                    ...course,
                };
                if (course.id === action.index) {
                    currentState.isSelected = true
                }
                return currentState;
            })
        }

        case actions.UNSELECT_COURSE: {
            return state.map((course, index) => {
                const currentState = {
                    ...course,
                };
                if (course.id === action.index) {
                    currentState.isSelected = false
                }
                return currentState;
            })
        }

        default: {
            return state;
        }
    }
}

export default courseReducer;
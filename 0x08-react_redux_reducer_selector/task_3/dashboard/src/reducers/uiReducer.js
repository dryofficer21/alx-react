import * as actions from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const initialState = {
    isNotificationDrawerVisible: Boolean,
    isUserLoggedIn: Boolean,
    user: {}
};

const uiReducer = (state = Map(initialState), action) => {
    switch (action.type) {
        case actions.DISPLAY_NOTIFICATION_DRAWER: {
            return state.set('isNotificationDrawerVisible', true);
        }
        case actions.HIDE_NOTIFICATION_DRAWER: {
            return state.set('isNotificationDrawerVisible', false);
        }
        case actions.LOGIN_SUCCESS: {
            return state.set('isUserLoggedIn', true);
        }
        case actions.LOGIN_FAILURE: {
            return state.set('isUserLoggedIn', false);
        }
        case actions.LOGOUT: {
            return state.set('isUserLoggedIn', false);
        }
        default: {
            return state;
        }
    }
}

export default uiReducer;
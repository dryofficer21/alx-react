import * as actions from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';


export const defaultState = {
    notifications: [],
    filter: 'DEFAULT',
};

const notificationReducer = (state = Map(defaultState), action) => {
    switch (action.type) {
        case actions.FETCH_NOTIFICATIONS_SUCCESS: {
            const normalized = notificationsNormalizer(action.data);
            Object.keys(normalized.notifications).map((key) => {
                normalized.notifications[key].isRead = false;
            });
            return state.merge(normalized);
        }

        case actions.MARK_AS_READ: {
            return state.setIn(['notifications', String(action.index), 'isRead'], true);
        }

        case actions.SET_TYPE_FILTER: {
            return state.set('filter', action.filter);
        }

        default: {
            return state;
        }
    }
}

export default notificationReducer;
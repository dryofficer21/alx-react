import * as actions from '../actions/notificationActionTypes';

export const defaultState = {
    notifications: [],
    filter: 'DEFAULT',
};

const notificationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.FETCH_NOTIFICATIONS_SUCCESS: {
            return action.data.map((notification) => {
                return {
                    ...notification,
                    isRead: false,
                }
            })
        }

        case actions.MARK_AS_READ: {
            return {
                ...state,
                notifications: state.notifications.map((notification) => {
                    const current = {
                        ...notification,
                    };
                    if (notification.id == action.index) current.isRead = true;

                    return current;
                }),
            };
        }

        case actions.SET_TYPE_FILTER: {
            return {
                ...state,
                filter: action.filter,
            }
        }

        default: {
            return state;
        }
    }
}

export default notificationReducer;
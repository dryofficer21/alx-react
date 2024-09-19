import { markAsRead, setNotificationFilter } from "./notificationActionCreators"
import { MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from "./notificationActionTypes"

describe('tests for notification action creators', () => {
    it('mark as read should return the right object', () => {
        expect(markAsRead(1)).toEqual({
            type: MARK_AS_READ,
            index: 1
        })
    });

    it('setNotificationFilter should return the right object', () => {
        expect(setNotificationFilter(NotificationTypeFilters["DEFAULT"])).toEqual({
            type: SET_TYPE_FILTER,
            filter: "DEFAULT"
        });
    });
})
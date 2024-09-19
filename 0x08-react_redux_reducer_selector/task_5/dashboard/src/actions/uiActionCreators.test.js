import { displayNotificationDrawer, hideNotificationDrawer, login, logout } from "./uiActionCreators";
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "./uiActionTypes";
describe('tests for uiActionsCreators', () => {
    it('login returns right objrct', () => {
        const email = "walter@white.com";
        const password = "albequerque";

        expect(login(email, password)).toEqual({
            type: LOGIN,
            user: {
                email: "walter@white.com",
                password: "albequerque",
            },
        });
    });

    it('logout returns the right object', () => {
        expect(logout()).toEqual({type: LOGOUT});
    });

    it('displayNotificationDrawer returns the right object', () => {
        expect(displayNotificationDrawer()).toEqual({type: DISPLAY_NOTIFICATION_DRAWER});
    });

    it('hideNotificationDrawer returns the right object', () => {
        expect(hideNotificationDrawer()).toEqual({type: HIDE_NOTIFICATION_DRAWER});
    });
})
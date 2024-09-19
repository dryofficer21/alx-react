import notificationReducer, {defaultState} from "./notificationReducer";
import * as actions from '../actions/notificationActionTypes';

const data = {
    filter: "DEFAULT",
    notifications: [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
  };

describe('testing notificationReducer', () => {
    it('returns the right object with default state', () => {
        expect(notificationReducer(undefined, {})).toEqual(defaultState);
    });

    it('returns the right object with FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: actions.FETCH_NOTIFICATIONS_SUCCESS,
            data: [
              {
                id: 1,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available"
              }
            ]
          };
        const expectedData = [
            {
              id: 1,
              isRead: false,
              type: "default",
              value: "New course available"
            },
            {
              id: 2,
              isRead: false,
              type: "urgent",
              value: "New resume available"
            },
            {
              id: 3,
              isRead: false,
              type: "urgent",
              value: "New data available"
            }
          ]
        expect(notificationReducer(undefined, action)).toEqual(expectedData);
    });

    it('returns the right object with MARK_AS_READ', () => {
        const action = {
            type: actions.MARK_AS_READ,
            index: 2
          };
        const expectedData = {
            filter: "DEFAULT",
            notifications: [
              {
                id: 1,
                isRead: false,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                isRead: true,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                isRead: false,
                type: "urgent",
                value: "New data available"
              }
            ]
          };
        expect(notificationReducer(data, action)).toEqual(expectedData);
    });

    it('returns the right object with SET_TYPE_FILTER', () => {
        const action = {
            type: actions.SET_TYPE_FILTER,
            filter: "URGENT"
          };
        const expectedData = {
            filter: "URGENT",
            notifications: [
              {
                id: 1,
                isRead: false,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                isRead: false,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                isRead: false,
                type: "urgent",
                value: "New data available"
              }
            ]
          };
        expect(notificationReducer(data, action)).toEqual(expectedData);
    })
})
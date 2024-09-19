import * as actions from "../actions/courseActionTypes";
import courseReducer from "./courseReducer";


const data = [
    {
      id: 1,
      name: "ES6",
      isSelected: false,
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      isSelected: false,
      credit: 20
    },
    {
      id: 3,
      name: "React",
      isSelected: false,
      credit: 40
    }
  ];

  const action = {
    type: actions.FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
  }

describe('testing courseReducer', () => {
    it('returns an empty array with the default state', () => {
        expect(courseReducer(undefined, {})).toEqual([]);
    });

    it('returns the data passed when FETCH_COURSE_SUCCESS is sent', () => {
          expect(courseReducer(undefined, action)).toEqual(data)
    });

    it('returns the right item updated when SELECT_COURSE is sent', () => {
        expect(courseReducer(data, {type: actions.SELECT_COURSE,
                                    index: 2,})).toEqual([
                                        {
                                          id: 1,
                                          name: "ES6",
                                          isSelected: false,
                                          credit: 60
                                        },
                                        {
                                          id: 2,
                                          name: "Webpack",
                                          isSelected: true,
                                          credit: 20
                                        },
                                        {
                                          id: 3,
                                          name: "React",
                                          isSelected: false,
                                          credit: 40
                                        }
                                      ]);
    });

    it('returns the right item updated when UNSELECT_COURSE is sent', () => {
        const data1 = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: true,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
          ];
        expect(courseReducer(data1, {type: actions.UNSELECT_COURSE,
                                    index: 2,})).toEqual([
                                        {
                                          id: 1,
                                          name: "ES6",
                                          isSelected: false,
                                          credit: 60
                                        },
                                        {
                                          id: 2,
                                          name: "Webpack",
                                          isSelected: false,
                                          credit: 20
                                        },
                                        {
                                          id: 3,
                                          name: "React",
                                          isSelected: false,
                                          credit: 40
                                        }
                                      ]);
    });
})
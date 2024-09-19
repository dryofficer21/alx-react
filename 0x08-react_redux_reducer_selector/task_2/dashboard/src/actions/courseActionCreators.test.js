import { selectCourse, unSelectCourse } from "./courseActionCreators"
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('tests for action creator', () => {
    it('selectCourse returns the right object', () => {
        expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
    });

    it('unSelectCourse returns the right object', () => {
        expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
})
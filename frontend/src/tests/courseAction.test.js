import * as actions from '../actions/courseActions'
import * as types from '../actions/actionTypes'

describe('actions', () => {
    it('should create an action to update the state "text" ', () => {
      const text = 'algoritmer og datastrukturer'
      const expectedAction = {
        type: types.SEARCH_COURSE,
        payload: text
      }
      expect(actions.searchCourse(text)).toEqual(expectedAction)
    })
  }) 
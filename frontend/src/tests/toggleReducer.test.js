import toggleReducer from '../reducers/toggleReducer'
import {TOGGLE_FILTER, TOGGLE_MODAL} from '../actions/actionTypes'

describe('test toggle reducer', () => {
    it('should toggle the filter-state to false', () => {
        expect(
          toggleReducer([], {
            type: TOGGLE_FILTER,
            now: true
          })
        ).toEqual(
          {
            filter: false
          }
        )
    })

    it('should toggle the mdoal-state to true', () => {
        expect(
          toggleReducer([], {
            type: TOGGLE_MODAL,
            now: false
          })
        ).toEqual(
          {
            modal: true
          }
        )
    })

})
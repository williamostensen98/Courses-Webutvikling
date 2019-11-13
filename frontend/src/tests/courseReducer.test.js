import courseReducer from '../reducers/courseReducer'
import {SEARCH_COURSE} from '../actions/actionTypes'



describe('test course reducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(
      {
        courses: {
          text: '',
          coursedata: [],
          loading: false,
          error: false, 
          limit: 10,
        },
        grades: {
            gradedata: [],
            loading: false,
            error: false
        }, 
        toggle: {
            filter: false,
            modal: false
        },
        filter: {
            // semester: '',
            fclicked: false,
            sclicked: false,
        },
        sort: {
            orderBy: false,
            codeClicked: false,
            nameClicked: false,
        },
        semester: {
            activeSemester: ''
        },
        query: {
            query: ''
        }
      }
    )
  })

  it('should change the text-state', () => {
    expect(
      courseReducer([], {
        type: SEARCH_COURSE,
        payload: 'algoritmer og datastrukturer'
      })
    ).toEqual(
      {
        text: 'algoritmer og datastrukturer',
      }
    )
  })
})

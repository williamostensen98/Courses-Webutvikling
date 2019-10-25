//Initiates the  states that will be set when user makes searches
const initialState = {
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
        orderby: '1',
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

export default initialState;

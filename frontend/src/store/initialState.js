//Initiates the  states that will be set when user makes searches
const initialState = {
    courses: {
        text: '',
        coursedata: [],
        loading: false,
        error: false
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
    query: {
        query: ''
    }
}

export default initialState;

//Initiates the  states that will be set when user makes searches
const initialState = {
    courses: 
        {
        text: '',
        coursedata: [],
        loading: false,
        error: false
    }, 
    toggle: 
    {
        value: false
    }
}

export default initialState;

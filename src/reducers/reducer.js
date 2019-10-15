/* Things you should never do inside a reducer:

- Mutate its arguments;
- Perform side effects like API calls and routing transitions;
- Call non-pure functions, e.g. Date.now() or Math.random(). */

const initialState = {
    //TODO Add initialState
}

const reducer = (state = initialState, action) => {
    const newState = {...state}  
    
    //TODO Fill out reducer
    //if(action === blablabla)


    return newState
}


export default reducer
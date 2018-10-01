// Note: Here is having single data - Counter.

// 1. CREATE REDUCER

// 1.1 Applications Initial state - it conatin data for all components being in this Project.
const initialState = { counter: 0 } //plain JS object represents application data.

// 1.2. Reducer is function to map state and action together.
// So Define this mapping here.

const reducer = (state = initialState, action) => 
{
    // 1.2.1. Accept Older state as input

    // 1.2.2. Update State when action is dipatched
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }

    //1.2.3. return update state
    return state; // 
};
export default reducer;
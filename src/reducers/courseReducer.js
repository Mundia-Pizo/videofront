import * as actions from '../actions/actionTypes';

const initialState={
    courses:[]
}

export function courses(state=initialState, action) {
    switch(action.type){
        case actions.GET_COURSES:
            return {
                ...state,
                courses:action.payload
            }
        default:
            return state;
    }
    
}
import * as actions from '../actions/actionTypes';

const initialState={
    lessons:[]
}

export function lessons(state=initialState, action) {
    switch(action.type){
        case actions.GET_LESSONS:
            return {
                ...state,
                lessons:action.payload
            }
        
        default:
            return state;
    }
    
}
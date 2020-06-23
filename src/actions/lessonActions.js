import axios from 'axios';
import * as actions from './actionTypes';


export const  getLessons=(slug)=>dispatch=>{
    axios.get(`http://localhost:8000/${slug}/lessons`)
    .then(response=>{
        dispatch(
            {
                type:actions.GET_LESSONS,
                payload:response.data
            })
    }).catch(error=>console.log(error))
}



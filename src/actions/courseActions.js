import axios from 'axios'
import * as actions from './actionTypes'

 export const getCourse=()=>dispatch=>{
    axios.get('http://localhost:8000/')
    .then(response=>{
        dispatch(
            {
                type:actions.GET_COURSES,
                payload:response.data
            })
    }).catch(error=>console.log(error))
}










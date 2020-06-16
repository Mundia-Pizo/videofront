import * as types from './actionTypes'
import axios from 'axios'

export const loadUser=()=>(dispatch, getState)=>{
    // user loading
    dispatch({type: types.USER_LOADING})
    // get the token form the payload
    axios.get('http://localhost:8000/api/auth/user/',tokenConfig(getState))
    .then(response=>{
        dispatch({
            type:types.USER_LOADED,
            payload: response.data
        })
    }).catch(
    error => console.log(error)
)
}



export const login=(username,password)=>dispatch=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    const body=JSON.stringify({username,password})

    // now we can post our user to the server
    axios.post('http://localhost:8000/user/login/', body, config)
    .then(response=>{
        dispatch(
            {
               type:types.LOGIN_SUCCESS,
               payload:response.data
            })
    }).catch(error=>console.log(error))
}

export const register=({username, email,password})=>dispatch=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    const body=JSON.stringify({username,email,password})

    // now we can post our user to the server
    axios.post('http://localhost:8000/api/auth/register/', body, config)
    .then(response=>{
        dispatch(
            {
               type:types.REGISTER_USER,
               payload:response.data
            })
    }).catch(error=>console.log(error))
}

export const logoutUser=()=>(dispatch, getState)=>{
    // get the token form the payload
    axios.post('http://localhost:8000/api/auth/logout/',null,tokenConfig(getState))
    .then(response=>{
        dispatch({
            type:types.LOGOUT_SUCCESS,
        })
    }).catch(
    error => console.log(error) 
)
}
// set token with token 

export const tokenConfig=getState=>{
    const token = getState().auth.token
    // Headers with axios we set a config

    const config={
        headers: {
            'Content-Type':'application/json'
         }
    }
    // if token, add to headers config
    if(token){
        config.headers['Authorization']=`Token  ${token}`
    }
    return config
}


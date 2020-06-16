import {combineReducers} from 'redux'
import {courses} from './courseReducer'
import auth from './authreducer'

const rootReducer=combineReducers({
     courses,
     auth,
})

export default rootReducer;
import {combineReducers} from 'redux'
import {courses} from './courseReducer'
import auth from './authreducer'
import {lessons} from './LessonReducer'

const rootReducer=combineReducers({
     courses,
     lessons,
     auth,
})

export default rootReducer;
import {combineReducers} from 'redux'
import HandleArr from './addArr/reducer';

const rootReducer = combineReducers({
    arr : HandleArr
})

export default rootReducer;
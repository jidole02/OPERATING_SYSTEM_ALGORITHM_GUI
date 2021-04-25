import {combineReducers} from 'redux'
import HandleArr from './addArr/reducer';
import ReadyArr from './readyArr/reducer';

const rootReducer = combineReducers({
    arr : HandleArr,
    ready : ReadyArr
})

export default rootReducer;
import {combineReducers} from 'redux'
import HandleArr from './addArr/reducer';
import ReadyArr from './readyArr/reducer';
import HandleSchedule from './schedule/reducer';

const rootReducer = combineReducers({
    arr : HandleArr,
    ready : ReadyArr,
    schedule : HandleSchedule
})

export default rootReducer;
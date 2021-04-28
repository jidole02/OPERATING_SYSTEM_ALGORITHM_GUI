import {Action} from '../../components/interface'
import { CHOICE_SCHEDULE } from './types';

const initState={
    schedule:""
}

const HandleSchedule=(state = initState,action : Action)=>{
    switch(action.type){
        case CHOICE_SCHEDULE:
            return{
                ...state,
                schedule : action.schedule
            }
        default:
            return state;
    }
}

export default HandleSchedule
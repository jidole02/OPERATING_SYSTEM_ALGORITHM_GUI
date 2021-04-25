import {Action} from '../../components/interface'
import { READY_ARR } from './types';

const initState={
    ready:false
}

const ReadyArr=(state:any = initState,action : Action)=>{
    switch(action.type){
        case READY_ARR:
            return{
                ...state,
                ready : action.ready
            }
        default:
            return state;
    }
}

export default ReadyArr
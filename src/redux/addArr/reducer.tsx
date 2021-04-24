import {Action} from '../../components/interface'
import { HANDLE_ARR } from './types';

const initState={
    arr:[]
}

const HandleArr=(state:any = initState,action : Action)=>{
    switch(action.type){
        case HANDLE_ARR:
            return{
                ...state,
                arr : action.arr
            }
        default:
            return state;
    }
}

export default HandleArr
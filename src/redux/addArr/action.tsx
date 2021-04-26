import { ProcessData } from "../../components/interface";
import { HANDLE_ARR, SET_RETURN, SET_WAIT } from "./types";

export const handleArr=(e:ProcessData[])=>{
    return{
        type:HANDLE_ARR,
        arr : e
    }
}

export const setWait=(e:number)=>{
    return{
        type:SET_WAIT,
        waitTime : e
    }
}

export const setReturn=(e:number)=>{
    return{
        type:SET_RETURN,
        returnTime : e
    }
}
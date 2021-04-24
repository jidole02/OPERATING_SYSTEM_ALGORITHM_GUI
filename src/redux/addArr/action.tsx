import { ProcessData } from "../../components/interface";
import { HANDLE_ARR } from "./types";

export const handleArr=(e:ProcessData[])=>{
    return{
        type:HANDLE_ARR,
        arr : e
    }
}
import { ScheduleParams } from "../../components/interface";
import { CHOICE_SCHEDULE } from "./types";

export const HandleSchedule=(e:ScheduleParams)=>{
    return{
        type:CHOICE_SCHEDULE,
        schedule:e
    }
}
export interface InforChapterParams{
    title : string;
}

export interface ProcessData{
    pname : string;
    ptime : number | "" | string;
    endTime : any;
    id : number;
}

export interface StyleProps{
    height? : string;
    padding? : number;
    width? : string | number;
    margin? : string | number;
}

export interface ActionType{
    HANDLE_ARR? : string;
    READY_ARR? : string;
    SET_WAIT? : string;
    SET_RETURN? : string;
    CHOICE_SCHEDULE? : string
}

export interface Action{
    type:ActionType;
    arr:ProcessData[];
    ready:boolean;
    waitTime:number;
    returnTime:number;
    schedule:string;
}

export interface GantParam{
    arr : ProcessData[];
    sum : number;
    name : string;
}

export interface FcfsResultParams{
    wait : number;
    return : number;
}

export interface ScheduleParams{
    schedule : string;
}
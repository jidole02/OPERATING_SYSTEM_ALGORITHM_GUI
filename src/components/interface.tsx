export interface InforChapterParams{
    title : string;
}

export interface ProcessData{
    pname : string;
    ptime : number | "";
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
}

export interface Action{
    type:ActionType;
    arr:ProcessData[];
    ready:boolean;
    waitTime:number;
    returnTime:number;
}

export interface GantParam{
    arr : ProcessData[];
    sum : number;
}

export interface FcfsResultParams{
    wait : number;
    return : number;
}
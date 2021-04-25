export interface InforChapterParams{
    title : string;
}

export interface ProcessData{
    pname : string;
    ptime : number | "";
    endTime : number | "";
    id : number;
}

export interface StyleProps{
    height? : string;
    padding? : number;
}

export interface ActionType{
    HANDLE_ARR? : string;
    READY_ARR? : string;
}

export interface Action{
    type:ActionType;
    arr:ProcessData[];
    ready:boolean;
}
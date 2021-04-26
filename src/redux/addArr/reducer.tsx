import { Action } from "../../components/interface";
import { HANDLE_ARR, SET_RETURN, SET_WAIT } from "./types";

const initState = {
  arr: [],
  waitTime: 0,
  returnTime: 0,
};

const HandleArr = (state: any = initState, action: Action) => {
  switch (action.type) {
    case HANDLE_ARR:
      return {
        ...state,
        arr: action.arr,
      };
    case SET_WAIT:
      return {
        ...state,
        waitTime: action.waitTime,
      };
    case SET_RETURN:
      return {
        ...state,
        returnTime: action.returnTime,
      };
    default:
      return state;
  }
};

export default HandleArr;

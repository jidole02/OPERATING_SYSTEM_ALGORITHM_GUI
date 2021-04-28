import * as s from "./styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { HandleSchedule } from "../../redux";

export default function ScheduleSort() {
  const ScheduleArr: string[] = ["FCFS", "SJF", "SRT"];
  const [schedule, setSchedule] = useState<string>("");
  const dispatch = useDispatch();
  const Choice = (e: any): void => {
    if(e.target.id === "SRT"){
      alert('아직 개발중입니다...');
      return;
    }
    setSchedule(e.target.id);
    dispatch(HandleSchedule(e.target.id));
  };
  return (
    <>
      <s.ChoiceMent>
        {schedule === ""
          ? "스케쥴링 종류를 선택하세요!"
          : `${schedule} 스케쥴링을 선택하셨습니다.`}
      </s.ChoiceMent>
      <s.ChoiceWrapper>
        {ScheduleArr.map((e: string, index: number) => {
          return (
            <s.ChoiceDiv key={index} id={e} onClick={Choice}>
              {e}
            </s.ChoiceDiv>
          );
        })}
      </s.ChoiceWrapper>
    </>
  );
}

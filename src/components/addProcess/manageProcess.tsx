import { useState } from "react";
import { ProcessData } from "../interface";
import * as s from "./styles";

export default function ManageProcess() {
    const [data,setData] = useState<ProcessData>({
        pname : '',
        ptime : 0,
        endTime : 0,
    })
  return (
    <>
      <s.FlexContainer>
        <s.ColumnTitle>NAME</s.ColumnTitle>
        <s.ColumnTitle>END_TIME</s.ColumnTitle>
        <s.ColumnTitle>PLAY_TIME</s.ColumnTitle>
      </s.FlexContainer>
      <s.FlexContainer>
        <s.ProcessInput placeholder="프로세스명을 입력하세요." name="pname"/>
        <s.ProcessInput placeholder="실행시간을 입력하세요." name="ptime" type="number" />
        <s.ProcessInput placeholder="도착시간을 입력하세요." name="endTime"type="number" />
      </s.FlexContainer>
      <s.FlexContainer style={{ justifyContent: "flex-end" }}>
        <s.SubmitBtn>ADD</s.SubmitBtn>
      </s.FlexContainer>
    </>
  );
}

import { useState } from "react";
import { ProcessData } from "../interface";
import ProcessList from "./processList";
import * as s from "./styles";

export default function ManageProcess() {
  const [data, setData] = useState<ProcessData>({
    pname: "",
    ptime: "",
    endTime: "",
  });
  const { pname, ptime, endTime } = data;
  const handleData = (e: any): void => {
    const { name, value } = e.target;
    if (name !== "pname" && value < 1) {
        e.target.value = ""
        return;
    }
    setData({
      ...data,
      [name]: value,
    });
  };
  const [arr, setArr] = useState<ProcessData[]>([]);
  const addProcess = (): void => {
    if ((pname !== "" && ptime !== 0 ) && endTime !== 0) {
        if(ptime !== "" || endTime !== "") {
            setArr((oldArr) => [...oldArr, data]);
            setData({
                pname:"",
                ptime:"",
                endTime:""
            })
            return;
        }
    }
    alert("정보를 모두 입력해주세요!");
  };
  return (
    <>
      <s.FlexContainer>
        <s.ColumnTitle>프로세스명</s.ColumnTitle>
        <s.ColumnTitle>실행시간</s.ColumnTitle>
        <s.ColumnTitle>도착시간</s.ColumnTitle>
      </s.FlexContainer>
      <s.FlexContainer>
        <s.ProcessInput
          placeholder="프로세스명을 입력하세요."
          name="pname"
          onChange={handleData}
          value={data.pname}
        />
        <s.ProcessInput
          placeholder="실행시간을 입력하세요."
          name="ptime"
          type="number"
          onChange={handleData}
          value={data.ptime}
        />
        <s.ProcessInput
          placeholder="도착시간을 입력하세요."
          name="endTime"
          type="number"
          onChange={handleData}
          value={data.endTime}
        />
      </s.FlexContainer>
      <s.FlexContainer style={{ justifyContent: "flex-end" }}>
        <s.SubmitBtn onClick={addProcess}>ADD</s.SubmitBtn>
      </s.FlexContainer>
      <ProcessList arr={arr} />
    </>
  );
}

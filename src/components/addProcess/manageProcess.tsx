import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReadyArr } from "../../redux";
import { ProcessData } from "../interface";
import ProcessList from "./processList";
import * as s from "./styles";

export default function ManageProcess() {
  const rdata: any = useSelector((state) => state);
  const [data, setData] = useState<ProcessData>({
    pname: "",
    ptime: "",
    endTime: "",
    id: rdata.arr.arr.length,
  });
  const ready: boolean = rdata.ready.ready;
  const { pname, ptime, endTime } = data;
  const handleData = (e: any): void => {
    const { name, value } = e.target;
    if (name !== "pname" && value < 0) {
      e.target.value = "";
      return;
    }
    setData({
      ...data,
      [name]: value,
      id: rdata.arr.arr.length,
    });
  };
  const [arr, setArr] = useState<ProcessData[]>([]);
  const addProcess = (): void => {
    if (pname !== "" && ptime !== 0 && endTime !== 0) {
      if (ptime !== "" || endTime !== "") {
        setArr((oldArr) => [...oldArr, data]);
        setData({
          pname: "",
          ptime: "",
          endTime: "",
          id: rdata.arr.arr.length,
        });
        return;
      }
    }
    alert("정보를 모두 입력해주세요!");
  };
  const dispatch = useDispatch();
  const Submit = (): void => {
    dispatch(ReadyArr());
  };
  const checkSub = () => {
    let check = false;
    if (arr.length < 1) {
      alert("하나 이상 입력해 주세요!");
      return;
    }
    arr.filter((e) => {
      if (e.endTime == 0) {
        Submit();
        check = !check;
        return;
      }
    });
    if (!check) {
      alert("도착시간이 0인 프로세스를 포함해주세요!");
    }
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
      <s.AlertMent>도착시간이 0인 프로세스를 포함해주세요.</s.AlertMent>
      <s.FlexContainer style={{ justifyContent: "flex-end" }}>
        {!ready && <s.SubmitBtn onClick={addProcess}>ADD</s.SubmitBtn>}
      </s.FlexContainer>
      <ProcessList arr={arr} />
      <s.StartBtn onClick={checkSub}>START</s.StartBtn>
    </>
  );
}

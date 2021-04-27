import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReturn, setWait } from "../../redux";
import { MAIN_COLOR } from "../../style";
import FcfsGantChart from "../gantChart/fcfsGantChart";
import { ProcessData } from "../interface";
import InforOfChapter from "../public/InforOfChapter";
import * as s from "./styles";
import * as f from "./function";

export default function Fcfs() {
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [arr, setArr] = useState<ProcessData[]>([]);
  let FuncArr: any = arr.slice();
  const [waitSum,setWaitSum] = useState<number>(0);
  const [returnSum,setReturnSum] = useState<number>(0);
  const [timeline, setTimeline] = useState<boolean[]>([]);
  const WrapperHeight: string = `${(arr.length + 1) * 40}px`;

  useEffect(() => {
    setArr(data.arr.arr);
  }, [data]);

  useEffect(() => {
    f.SortOfTime(FuncArr);
  }, [arr]);

  useEffect(() => {
    setTimeline(f.CanvasTimeLine(FuncArr));
  }, [arr]);

  useEffect(() => {
    for (let i = 0; i < FuncArr.length; i++) {
      // 들어오기 전 흰색으로 채워주고...
      for (let j = 0; j < parseInt(FuncArr[i].endTime); j++) {
        f.InsertNode(FuncArr, i, "white");
      }
      // 들어오고 대기 그래프
      let b: string = FuncArr[i].endTime;
      let wait = f.RestricteReturn(FuncArr, i) - parseInt(b);
      let returnTime =
        f.RestricteReturn(FuncArr, i) -
        parseInt(b) +
        parseInt(FuncArr[i].ptime);
      setWaitSum((e :number)=>e+wait);
      setReturnSum((e:number)=>e+returnTime);
      {
        for (let j = parseInt(b); j < f.RestricteReturn(FuncArr, i); j++) {
          f.InsertNode(FuncArr, i, "whitesmoke");
        }
        // 그리고 실행 그래프
        for (let j = 0; j < parseInt(FuncArr[i].ptime); j++) {
          f.InsertNode(FuncArr, i, MAIN_COLOR);
        }
      }
    }
  }, [arr]);

  useEffect(() => {
    if (waitSum > 0) dispatch(setWait(waitSum / FuncArr.length));
    if (returnSum > 0) dispatch(setReturn(returnSum / FuncArr.length));
  },[waitSum,returnSum,FuncArr.length,dispatch]);

  return (
    <>
      <s.AllWrapper>
        <InforOfChapter title="FCFS 스케쥴링 표" />
        <s.Cotainer>
          <s.ChartTop padding={100 / f.DecisionWidthValue(FuncArr)}>
            {timeline.map((e: boolean, index: number) =>
              e ? <s.TimeLine key={index} /> : <s.SmallTimeLine key={index} />
            )}
            <s.TimeLine />
          </s.ChartTop>
          <s.Cotainer style={{ display: "flex" }}>
            {/* 여기가 프로세스 명 container */}
            <s.ProcessNameWrapper height={WrapperHeight}>
              {arr.map((e: ProcessData, index: number) => {
                return <span key={index}>{e.pname}</span>;
              })}
            </s.ProcessNameWrapper>
            <s.GraphWrapper height={WrapperHeight}>
              {/* 여기가 그래프 */}
              {arr.map((e: ProcessData, index: number) => {
                return (
                  <s.Graph key={index}>
                    <div id={`${e.id}`} />
                  </s.Graph>
                );
              })}
              <s.GraphLineWrapper padding={100 / f.DecisionWidthValue(FuncArr)}>
                {timeline.map((_e: boolean, index: number) => {
                  return <s.GraphLine key={index} />;
                })}
              </s.GraphLineWrapper>
            </s.GraphWrapper>
          </s.Cotainer>
        </s.Cotainer>
      </s.AllWrapper>
      {FuncArr.length > 0 && (
        <FcfsGantChart arr={FuncArr} sum={f.DecisionWidthValue(FuncArr)} />
      )}
    </>
  );
}
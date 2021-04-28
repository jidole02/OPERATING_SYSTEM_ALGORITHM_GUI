import { useEffect, useState } from "react";
import InforOfChapter from "../public/InforOfChapter";
import * as s from "./styles";
import * as f from "./function";
import { ProcessData } from "../interface";
import { MAIN_COLOR } from "../../style";
import GantChart from "../gantChart/GantChart";
import { useDispatch, useSelector } from "react-redux";
import { setReturn, setWait } from "../../redux";

export default function Sjf() {
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [waitSum, setWaitSum] = useState<number>(0);
  const [returnSum, setReturnSum] = useState<number>(0);
  const [sjf, setSjf] = useState<any[]>([]);
  const [timeline, setTimeline] = useState<boolean[]>([]);
  const [arr, setArr] = useState<ProcessData[]>([]);
  const WrapperHeight: string = `${(arr.length + 1) * 40}px`;
  // index arr : endtime 정렬 배열
  const [indexArr, setIndexArr] = useState<any[]>([]);
  // sort arr : 최종 정렬 배열
  let sortArr: any[] = [];
  useEffect(() => {

    setIndexArr(f.SortOfTime(arr.slice()));
  }, [arr]);
  useEffect(() => {
    setArr(data.arr.arr);
  }, [data]);
  useEffect(() => {
    setTimeline(f.CanvasTimeLine(arr));
    if(indexArr?.length >= 0){
        if (indexArr[0] !== undefined) {
            sortArr.push(indexArr[0]);
          }
    }
    // sjf
    f.Sjf(indexArr, sortArr, arr);
    setSjf(f.Sjf(indexArr, sortArr, arr));
  }, [indexArr]);//
  useEffect(() => {
    for (let i = 0; i < sortArr.length; i++) {
      // 들어오기 전 흰색으로 채워주고...
      for (let j = 0; j < parseInt(sortArr[i]?.endTime); j++) {
        f.InsertNode(sortArr, i, "white");
      }
      // 들어오고 대기 그래프
      let b: string = sortArr[i]?.endTime;
      let wait = f.RestricteReturn(sortArr, i) - parseInt(b);
      let returnTime =
        f.RestricteReturn(sortArr, i) -
        parseInt(b) +
        parseInt(sortArr[i]?.ptime);
      setWaitSum((e: number) => e + wait);
      setReturnSum((e: number) => e + returnTime);
      {
        for (let j = parseInt(b); j < f.RestricteReturn(sortArr, i); j++) {
          f.InsertNode(sortArr, i, "whitesmoke");
        }
        // 그리고 실행 그래프
        for (let j = 0; j < parseInt(sortArr[i]?.ptime); j++) {
          f.InsertNode(sortArr, i, MAIN_COLOR);
        }
      }
    }
  }, [indexArr]);

  useEffect(() => {
    if (waitSum > 0) dispatch(setWait(waitSum / sjf.length));
    if (returnSum > 0) dispatch(setReturn(returnSum / sjf.length));
  }, [waitSum, returnSum, sjf.length, dispatch]);

  return (
    <>
      <s.AllWrapper>
        <InforOfChapter title="SJF 스케쥴링 표" />
        <s.Cotainer>
          <s.ChartTop padding={100 / f.DecisionWidthValue(arr)}>
            {timeline.map((e: boolean, index: number) =>
              e ? <s.TimeLine key={index} /> : <s.SmallTimeLine key={index} />
            )}
            <s.TimeLine />
          </s.ChartTop>
          <s.Cotainer style={{ display: "flex" }}>
            {/* 여기가 프로세스 명 container */}
            <s.ProcessNameWrapper>
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
              <s.GraphLineWrapper padding={100 / f.DecisionWidthValue(arr)}>
                {timeline.map((_e: boolean, index: number) => {
                  return <s.GraphLine key={index} />;
                })}
              </s.GraphLineWrapper>
            </s.GraphWrapper>
          </s.Cotainer>
        </s.Cotainer>
      </s.AllWrapper>
      {sjf[0] !== undefined && sjf.length > 0 && (
        <GantChart name="SJF" arr={sjf} sum={f.DecisionWidthValue(sjf)} />
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReturn, setWait } from "../../redux";
import { MAIN_COLOR } from "../../style";
import FcfsGantChart from "../gantChart/fcfsGantChart";
import { ProcessData } from "../interface";
import InforOfChapter from "../public/InforOfChapter";
import * as s from "./styles";
import * as f from "./function"

export default function Fcfs() {
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const [arr, setArr] = useState<ProcessData[]>([]);
  let FuncArr: any = arr.slice();
  let waitSum = 0;
  let returnSum = 0;
  const [timeline, setTimeline] = useState<boolean[]>([]);
  const WrapperHeight: string = `${(arr.length + 1) * 40}px`;
  //도착 시간에 따라 한번 정렬 해줘야됨.

  useEffect(() => {
    setArr(data.arr.arr);
  }, [data]);

  useEffect(()=>{
    f.SortOfTime(FuncArr);
  },[arr])

  useEffect(() => {
    // timeline 그려주는 곳
    let someArr = [];
    for (let i = 0; i < f.DecisionWidthValue(FuncArr); i++) {
      if (i % 10 === 0) {
        someArr.push(true);
      } else {
        someArr.push(false);
      }
      if (i === f.DecisionWidthValue(FuncArr) - 1) setTimeline(someArr);
    }
  }, [arr]);

  useEffect(() => {
    // 정렬 다 됬으면
    let node = (e: any) => {
      return document.getElementById(`${e}`);
    };
    for (let i = 0; i < FuncArr.length; i++) {
      // 그래프 하나씩 찍어주는 곳
      let div = node(FuncArr[i].id);
      let InsertNode = (color: string) => {
        return div?.insertAdjacentHTML(
          "beforebegin",
          `<div style="background-color:${color};width:${
            100 / f.DecisionWidthValue(FuncArr)
          }%" />`
        );
      };
      // 첫번째 꺼는 대기시간 0 일테니까
      // 여기서 실행시간 더한거 보내주고
      const RestricteReturn = (lim: number): number => {
        let sum = 0;
        for (let i = 0; i < lim; i++) {
          let ptime: string = FuncArr[i].ptime;
          sum += parseInt(ptime);
          if (i === lim - 1) return sum;
        }
        return 0;
      };
      // 들어오기 전 흰색으로 채워주고...
      for (let j = 0; j < parseInt(FuncArr[i].endTime); j++) {
        InsertNode("white");
      }
      // 들어오고 대기 그래프
      let b: string = FuncArr[i].endTime;
      let wait = RestricteReturn(i) - parseInt(b);
      let returnTime = RestricteReturn(i) - parseInt(b) + parseInt(FuncArr[i].ptime);
      waitSum += wait;
      returnSum += returnTime;
      {
        for (let j = parseInt(b); j < RestricteReturn(i); j++) {
          InsertNode("whitesmoke");
        }
        // 그리고 실행 그래프
        for (let j = 0; j < parseInt(FuncArr[i].ptime); j++) {
          InsertNode(MAIN_COLOR);
        }
      }
    }
  }, [arr]);

  useEffect(()=>{
    if(waitSum > 0) dispatch(setWait(waitSum / FuncArr.length));
    if(returnSum > 0) dispatch(setReturn(returnSum / FuncArr.length));
  })

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

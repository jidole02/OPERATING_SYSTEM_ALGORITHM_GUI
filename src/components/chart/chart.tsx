import { useEffect, useState } from "react";
import { MAIN_COLOR } from "../../style";
import { ProcessData } from "../interface";
import InforOfChapter from "../public/InforOfChapter";
import * as s from "./styles";

export default function Chart() {
  const arr: ProcessData[] = [
    { pname: "p1", ptime: 10, endTime: 0, id: 1 },
    { pname: "p2", ptime: 3, endTime: 3, id: 2 },
    { pname: "p3", ptime: 3, endTime: 1, id: 3 },
    { pname: "p4", ptime: 12, endTime: 2, id: 4 },
  ];
  let FuncArr: ProcessData[] = arr;
  const [render, setRender] = useState<boolean>(false);
  const [SortArr, setSortArr] = useState<ProcessData[]>([]);
  const [indexArr, setIndexArr] = useState<ProcessData[]>([]);
  const [timeline, setTimeline] = useState<boolean[]>([]);
  const WrapperHeight: string = `${(arr.length + 1) * 40}px`;
  //도착 시간에 따라 한번 정렬 해줘야됨.
  const SortOfTime = () => {
    setSortArr([]);
    for (let i = 0; i < FuncArr.length; i++) {
      for (let j = 0; j < FuncArr.length - 1; j++) {
        if (FuncArr[j].endTime > FuncArr[j + 1].endTime) {
          let temp = FuncArr[j];
          FuncArr[j] = FuncArr[j + 1];
          FuncArr[j + 1] = temp;
          setIndexArr(FuncArr);
        }
        if (i === FuncArr.length - 1 && j === FuncArr.length - 2)
          setSortArr(indexArr);
      }
    }
  };
  // 실행시간 합
  const DecisionWidthValue = (): number => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
      let pTime: any = SortArr[i]?.ptime;
      if (typeof pTime === "number") {
        sum += pTime;
        if (i === arr.length - 1) return sum;
      }
    }
    return 0;
  };
  useEffect(() => {
    setRender(true);
  }, []);
  useEffect(() => {
    // 처음에 정렬
    SortOfTime();
  }, [render]);
  useEffect(() => {
    // timeline 그려주는 곳
    let someArr = [];
    for (let i = 0; i < DecisionWidthValue(); i++) {
      if (i % 10 === 0) {
        someArr.push(true);
      } else {
        someArr.push(false);
      }
      if (i === DecisionWidthValue() - 1) setTimeline(someArr);
    }
  }, [DecisionWidthValue()]);
  useEffect(() => {
    // 정렬 다 됬으면
    console.log(SortArr);
    let node = (e: any) => {
      return document.getElementById(`${e}`);
    };
    for (let i = 0; i < SortArr.length; i++) {
      let div = node(SortArr[i].id);
      let InsertNode = (color: string) => {
        return div?.insertAdjacentHTML(
          "beforebegin",
          `<div style="background-color:${color};width:${
            100 / DecisionWidthValue()
          }%" />`
        );
      };
      // 첫번째 꺼는 대기시간 0 일테니까
      if (i === 0) {
        for (let j = 0; j < SortArr[i].ptime; j++) {
          InsertNode(MAIN_COLOR);
        }
      }
      // 첫번째가 아니면
      else {
        // 여기서 실행시간 더한거 보내주고
        const RestricteReturn = (lim: number): number => {
          let sum = 0;
          for (let i = 0; i < lim; i++) {
            let ptime: any = SortArr[i].ptime;
            if (typeof ptime === "number") {
              sum += ptime;
              if (i === lim - 1) return sum;
            }
          }
          return 0;
        };
        // 들어오기 전 흰색으로 채워주고...
        for (let j = 0; j < SortArr[i].endTime; j++) {
          InsertNode("white");
        }
        // 들어오고 대기 그래프
        let b: number | "" = SortArr[i].endTime;
        if (typeof b === "number") {
          for (let j = b; j < RestricteReturn(i); j++) {
            InsertNode("whitesmoke");
          }
        }
        // 그리고 실행 그래프
        for (let j = 0; j < SortArr[i].ptime; j++) {
          InsertNode(MAIN_COLOR);
        }
      }
    }
  }, [SortArr]);
  return (
    <s.AllWrapper>
      <InforOfChapter title="FCFS 스케쥴링 표" />

      <s.Cotainer>
        <s.ChartTop padding={100 / DecisionWidthValue()}>
          {timeline.map((e: boolean, index: number) =>
            e ? <s.TimeLine key={index} /> : <s.SmallTimeLine key={index} />
          )}
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
            <s.GraphLineWrapper padding={100 / DecisionWidthValue()}>
            {timeline.map((_e: boolean, index: number) => {
              return <s.GraphLine key={index} />
            })}
            </s.GraphLineWrapper>
          </s.GraphWrapper>
        </s.Cotainer>
      </s.Cotainer>
    </s.AllWrapper>
  );
}

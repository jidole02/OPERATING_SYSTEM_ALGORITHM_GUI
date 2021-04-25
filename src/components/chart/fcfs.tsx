import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MAIN_COLOR } from "../../style";
import { ProcessData } from "../interface";
import InforOfChapter from "../public/InforOfChapter";
import * as s from "./styles";

export default function Fcfs() {
  const data: any = useSelector((state) => state);
  console.log(data.arr.arr);
  const [arr, setArr] = useState<ProcessData[]>([]);
  let FuncArr: any = arr;
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

  useEffect(() => {
    setArr(data.arr.arr);
    console.log("data바뀜");
  }, [data]);

  // 실행시간 합
  const DecisionWidthValue = (): number => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
      let pTime: any = FuncArr[i]?.ptime;
      /*       console.log(FuncArr,"funcarr"); */
      sum += parseInt(pTime);
      if (i === arr.length - 1) return sum;
      console.log(sum, "realsum");
    }
    console.log(sum, "sum");
    return 0;
  };
  useEffect(() => {
    // 처음에 정렬
    SortOfTime();
  }, [arr]);
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
  }, [arr]);

  useEffect(() => {
    console.log("정렬 후");
    console.log(DecisionWidthValue());
    console.log("=====");
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
            100 / DecisionWidthValue()
          }%" />`
        );
      };
      // 첫번째 꺼는 대기시간 0 일테니까
      if (i === 0) {
        for (let j = 0; j < parseInt(FuncArr[i].ptime); j++) {
          InsertNode(MAIN_COLOR);
        }
      }
      // 첫번째가 아니면
      else {
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
    }
  }, [arr]);

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
                return <s.GraphLine key={index} />;
              })}
            </s.GraphLineWrapper>
          </s.GraphWrapper>
        </s.Cotainer>
      </s.Cotainer>
    </s.AllWrapper>
  );
}

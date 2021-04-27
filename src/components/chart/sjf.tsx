import { useEffect, useState } from "react";
import InforOfChapter from "../public/InforOfChapter";
import * as s from "./styles";
import * as f from "./function";
import { ProcessData } from "../interface";
import { MAIN_COLOR } from "../../style";

export default function Sjf() {
  const [timeline, setTimeline] = useState<boolean[]>([]);
  const [arr] = useState<any>([
    { pname: "p1", ptime: "7", endTime: "0", id: 1 },
    { pname: "p2", ptime: "4", endTime: "2", id: 2 },
    { pname: "p3", ptime: "1", endTime: "4", id: 3 },
    { pname: "p4", ptime: "4", endTime: "5", id: 4 },
    { pname: "p5", ptime: "2", endTime: "1", id: 5 },
  ]);
  const WrapperHeight: string = `${(arr.length + 1) * 40}px`;
  const copyArr = arr.slice();
  // index arr : endtime 정렬 배열
  const [indexArr, setIndexArr] = useState<any[]>([]);
  // sort arr : 최종 정렬 배열
  let sortArr: any[] = [];
  useEffect(() => {
    setIndexArr(f.SortOfTime(copyArr));
  }, []);

  useEffect(() => {
    setTimeline(f.CanvasTimeLine(arr));
    sortArr.push(indexArr[0]);
    console.log(f.Sjf(indexArr, sortArr, arr));
  }, [indexArr]);

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
    </>
  );
}

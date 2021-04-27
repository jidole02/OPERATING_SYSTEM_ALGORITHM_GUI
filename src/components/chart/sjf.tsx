import { useEffect, useState } from "react";
import InforOfChapter from "../public/InforOfChapter";
import * as s from "./styles";
import * as f from "./function";

export default function Sjf() {
  const [arr] = useState<any>([
    { pname: "p1", ptime: "7", endTime: "0", id: 1 },
    { pname: "p2", ptime: "4", endTime: "2", id: 2 },
    { pname: "p3", ptime: "1", endTime: "4", id: 3 },
    { pname: "p4", ptime: "4", endTime: "5", id: 4 },
  ]);
  // index arr : endtime 정렬 배열
  const [indexArr, setIndexArr] = useState<any[]>([]);
  // sort arr : 최종 정렬 배열
  let sortArr: any[] = [];
  let FuncArr: any[] = [];
  useEffect(() => {
    setIndexArr(f.SortOfTime(arr));
  });

  useEffect(() => {
    sortArr.push(indexArr[0]);
    sjf();
  }, [indexArr]);
  const sjf = () => {
    // 여기서 sjf 정렬
    for (let i = 0; i < indexArr.length; i++) {
      FuncArr = [];
      for (let j = i; j < indexArr.length; j++) {
        // 여기서 실행시간 합보다 도착시간이 작거나 같은 애들 걸러주고
        if (f.RestricteReturn(indexArr, i) >= parseInt(arr[j].endTime)) {
          FuncArr.push(arr[j]);
        }
      }
      const SPArr: any[] = f.SortOfPTime(FuncArr);
      for (let k = 0; k < SPArr?.length; k++) {
        for (let j = 0; j < sortArr.length; j++) {
          // 여기에서 id 안겹치면 조건 만족하므로 sortArr에 넣어주면 됨
          if (SPArr[k].id === sortArr[j].id) {
            break;
          }
          if (j === sortArr.length - 1) {
            sortArr.push(SPArr[k]);
          }
        }
      }
    }
    console.log(sortArr, "sortArr");
  };
  return (
    <>
      <s.AllWrapper>
        <InforOfChapter title="SJF 스케쥴링 표" />
        <s.Cotainer>
          <s.ChartTop padding={10}>
            <s.TimeLine />
          </s.ChartTop>

          <s.Cotainer style={{ display: "flex" }}>
            {/* 여기가 프로세스 명 container */}
            <s.ProcessNameWrapper></s.ProcessNameWrapper>
            <s.GraphWrapper>
              {/* 여기가 그래프 */}
              <s.Graph>
                <div />
              </s.Graph>
              <s.GraphLineWrapper padding={10}></s.GraphLineWrapper>
            </s.GraphWrapper>
          </s.Cotainer>
        </s.Cotainer>
      </s.AllWrapper>
    </>
  );
}

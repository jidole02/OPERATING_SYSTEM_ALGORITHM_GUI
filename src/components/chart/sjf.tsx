import { useEffect } from "react";
import InforOfChapter from "../public/InforOfChapter";
import * as s from "./styles";

export default function Sjf() {
  const arr = [
    { pname: "p1", ptime: "3", endTime: "0", id: "1" },
    { pname: "p2", ptime: "5", endTime: "1", id: "2" },
    { pname: "p3", ptime: "1", endTime: "2", id: "3" },
    { pname: "p4", ptime: "2", endTime: "3", id: "4" },
  ];
  // 실행시간 합
  const PtimeSum =():number=>{
      let sum : number= 0;
      for(let i =0;i<arr.length;i++){
          sum += parseInt(arr[i].ptime);
      }
      return sum;
  }
  console.log(PtimeSum())
  useEffect(()=>{
      for(let i =0;i<arr.length;i++){
          
      }
  },[])
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

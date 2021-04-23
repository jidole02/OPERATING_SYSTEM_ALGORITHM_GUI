import { ProcessData } from "../interface";
import InforOfChapter from "../public/InforOfChapter";
import * as s from "./styles";
import {useState} from 'react'

export default function Chart() {
  const arr: ProcessData[]  = [
    { pname: "p1", ptime: 10, endTime: 0 },
    { pname: "p2", ptime: 7, endTime: 4 },
    { pname: "p3", ptime: 3, endTime: 2 },
    { pname: "p4", ptime: 12, endTime: 1 },
  ];
  const [sortArr,setSortArr] = useState<ProcessData[]>([]);
  const WrapperHeight: string = `${(arr.length + 1) * 40}px`;
  return (
    <s.AllWrapper>
      <InforOfChapter title="스케쥴링 표" />

      <s.Cotainer>

        <s.ChartTop>
          <span>0</span>
        </s.ChartTop>

        <s.Cotainer style={{display:"flex"}}>
          <s.ProcessNameWrapper height={WrapperHeight}>
            {arr.map((e: ProcessData, index: number) => {
              return <span key={index}>{e.pname}</span>;
            })}
          </s.ProcessNameWrapper>
          <s.GraphWrapper  height={WrapperHeight}/>
        </s.Cotainer>

      </s.Cotainer>
      
    </s.AllWrapper>
  );
}

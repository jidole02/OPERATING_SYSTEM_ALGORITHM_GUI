import { ProcessData } from "../interface";
import InforOfChapter from "../public/InforOfChapter";
import * as s from "./styles";

export default function FcfsGantChart() {
  const data: ProcessData[] = [
      { pname: "p1", ptime: 3, endTime: 0, id: 1 },
      { pname: "p2", ptime: 2, endTime: 3, id: 2 },
      { pname: "p3", ptime: 200, endTime: 2, id: 3 }
    ];
    const PSum = 100/205;
  return (
    <s.Wrapper>
      <InforOfChapter title="간트차트" />
      <s.GraphTimeLine style={{marginTop:"50px"}}>
          <s.Time></s.Time>
          {data.map((e : any,index : number)=>(
             <s.Time key={index} margin={e.ptime * PSum} width={index * 5}>{e.ptime}</s.Time> 
          ))}
      </s.GraphTimeLine>
      <s.ChartContainer>
          {data.map((e : any,index : number)=>(
             <s.GantGraph key={index} width={e.ptime * PSum}></s.GantGraph> 
          ))}
      </s.ChartContainer>
      <s.GraphTimeLine>
          <s.Time></s.Time>
          {data.map((e : any,index : number)=>(
             <s.Time key={index} margin={e.ptime * PSum} width={index * 5}>{e.ptime}</s.Time> 
          ))}
      </s.GraphTimeLine>
    </s.Wrapper>
  );
}

import { MAIN_COLOR } from "../../style";
import { GantParam } from "../interface";
import InforOfChapter from "../public/InforOfChapter";
import Result from "../result/Result";
import * as s from "./styles";

export default function FcfsGantChart(e: GantParam) {
  const data: any = e.arr;
  const PSum = 100 / e.sum;
  const mathSum = (e: number): number => {
    let sum = 0;
    for (let i = 0; i < e; i++) {
      sum += parseInt(data[i].ptime);
      if (i === e - 1) return sum;
    }
    return 0;
  };
  return (
    <>
      <s.Wrapper>
        <InforOfChapter title={e.name + " 간트차트"} />
        <s.GraphTimeLine style={{ marginTop: "50px" }}>
          <s.Time>0</s.Time>
          {data.map((e: any, index: number) => (
            <s.Time
              key={index}
              margin={parseInt(e.ptime) * PSum}
              width={index * 5}
            >
              {mathSum(index + 1)}
            </s.Time>
          ))}
        </s.GraphTimeLine>
        <s.ChartContainer>
          {data.map((e: any, index: number) => (
            <s.GantGraph
              key={index}
              width={parseInt(e.ptime) * PSum}
            ></s.GantGraph>
          ))}
        </s.ChartContainer>
        <s.GraphTimeLine>
          <s.Time></s.Time>
          {data.map((e: any, index: number) => (
            <s.Time
              style={{
                color: MAIN_COLOR,
                fontSize: "12px",
                fontWeight: "bold",
              }}
              key={index}
              margin={parseInt(e.ptime) * PSum}
              width={index * 5}
            >
              {e.pname}
            </s.Time>
          ))}
        </s.GraphTimeLine>
      </s.Wrapper>
      <Result name={e.name} />
    </>
  );
}

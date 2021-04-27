import { useSelector } from "react-redux";
import InforOfChapter from "../public/InforOfChapter";
import FcfsResult from "./fcfsResult";
import * as s from "./styles";

export default function Result(e : any) {
  const rdata: any = useSelector((state) => state);
  const waitSum = rdata.arr.waitTime;
  const ReturnSum = rdata.arr.returnTime;
  return (
    <>
      <s.Wrapper>
        <InforOfChapter title={e.name + " 결과보기"}></InforOfChapter>
        <s.FlexContainer>
          <FcfsResult wait={waitSum} return={ReturnSum} />
        </s.FlexContainer>
        <s.StartBtn
          onClick={() => {
            window.location.reload();
          }}
        >
          RESTART
        </s.StartBtn>
      </s.Wrapper>
    </>
  );
}

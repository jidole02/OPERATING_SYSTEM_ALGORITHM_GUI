import InforOfChapter from "../public/InforOfChapter";
import FcfsResult from "./fcfsResult";
import * as s from "./styles";

export default function Result() {
  return (
    <>
      <s.Wrapper>
        <InforOfChapter title="FCFS 결과보기"></InforOfChapter>
        <s.FlexContainer>
          <FcfsResult />
        </s.FlexContainer>
        <s.StartBtn onClick={()=>{window.location.reload()}}>RESTART</s.StartBtn>
      </s.Wrapper>
    </>
  );
}

import { FcfsResultParams } from "../interface";
import * as s from "./styles";

export default function FcfsResult(e: FcfsResultParams) {
  return (
    <>
      <s.DescriptionLine>
        <s.DescripTitle>평균 대기시간 </s.DescripTitle>
        <s.ResultMath>{e.wait}초 ⏰</s.ResultMath>
      </s.DescriptionLine>
      <s.DescriptionLine>
        <s.DescripTitle>평균 반환시간 </s.DescripTitle>
        <s.ResultMath>{e.return}초 👑</s.ResultMath>
      </s.DescriptionLine>
    </>
  );
}

import styled from "styled-components";
import { MAIN_COLOR, PRIMARY_WIDTH } from "../../style";

export const AllWrapper = styled.div`
width:${PRIMARY_WIDTH};
margin-top:60px;
`

export const ChoiceWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top:20px;
`;

export const ChoiceDiv = styled.button`
  padding: 0 3%;
  height: 25px;
  border: 2px solid ${MAIN_COLOR};
  border-radius: 24px;
  color: ${MAIN_COLOR};
  font-weight: bold;
  :hover {
    background-color: whitesmoke;
  }
  margin-right: 30px;
`;

/* 종류 선택하세요 멘트 */
export const ChoiceMent = styled.p`
color:gray;
font-size:13px;
`
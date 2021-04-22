import styled from "styled-components";
import { BORDER_COLOR, MAIN_COLOR, PRIMARY_WIDTH } from "../../style";

export const AllWrapper = styled.div`
  width: ${PRIMARY_WIDTH};
  margin-top: 60px;
`;

export const ChoiceWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
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
  color: gray;
  font-size: 13px;
`;

export const IntroChapter = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 20px 10px;
  box-sizing: border-box;
  margin-top: 40px;
  font-weight: bold;
`;

export const FlexContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
`

export const ColumnTitle = styled.span`
width:32%;
margin-top:50px;
font-size:14px;
`

export const ProcessInput = styled.input`
width:32%;
margin-top:15px;
background-color:whitesmoke;
border:1px solid gray;
height:40px;
border-radius:5px;
padding:0 15px;
box-sizing:border-box;  
color:gray;
font-size:13px;
:focus{
  box-shadow:0px 0px 2px ${MAIN_COLOR};
}
`

export const SubmitBtn = styled.button`
width:80px;
height:30px;
background-color:${MAIN_COLOR};
color:white;
border:none;
border-radius:5px;
margin-top:10px;
font-weight:bold;
margin-bottom:40px;
:hover{
  opacity:0.8;
}
`

export const List = styled.div`
width:100%;
border-bottom:1px solid ${BORDER_COLOR};
padding: 10px 0;
display:flex;
justify-content:space-between;
`

export const ListContents = styled.div`
border-right:1px solid ${BORDER_COLOR};
width:33%;
text-align:center;
height:20px;
color:gray;
font-size:14px;
`
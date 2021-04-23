import styled from "styled-components";
import { PRIMARY_WIDTH } from "../../style";
import { StyleProps } from "../interface";

export const AllWrapper = styled.div`
  width: ${PRIMARY_WIDTH};
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:100px;
`;

export const Cotainer = styled.div`
  width: 750px;
`;

export const ChartTop = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  margin-top: 50px;
  padding-bottom: 15px;
  padding-left: 50px;
  box-sizing: border-box;
  color: gray;
`;

export const UseContainer = styled.div`
  height: ${(props: StyleProps) => props.height};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ProcessNameWrapper = styled(UseContainer)`
  width: 50px;
  border-right: 1px solid gray;
  color: gray;
`;

export const GraphWrapper = styled(UseContainer)`
  width: 100%;
`;

export const Graph = styled.div`
width:100%;
height:30px;
display:flex;
`

export const NoneDoGraph = styled.div`
width:2%;
background-color:blue;
`
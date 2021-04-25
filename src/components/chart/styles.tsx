import styled, { keyframes } from "styled-components";
import { PRIMARY_WIDTH } from "../../style";
import { StyleProps } from "../interface";

const WrapperAnim = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
}
`;

export const AllWrapper = styled.div`
  width: ${PRIMARY_WIDTH};
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${WrapperAnim} 2s;
`;

export const Cotainer = styled.div`
  width: 750px;
`;

export const ChartTop = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  margin-top: 50px;
  padding-left: 47px;
  box-sizing: border-box;
  color: gray;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: flex-end;
/*   padding-right: ${(props: StyleProps) => `${props.padding}%`}; */
  box-sizing: border-box;
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
  position: relative;
`;

export const Graph = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
`;

export const NoneDoGraph = styled.div`
  width: 2%;
  background-color: blue;
`;

export const TimeLine = styled.div`
  border-left: 1px solid gray;
  height: 15px;
`;

export const SmallTimeLine = styled.div`
  border-left: 1px solid gray;
  height: 5px;
`;

export const GraphLineWrapper = styled.div`
  width: 100%;
  position: absolute;
  height: 100px;
  bottom: 0;
  height: 100%;
  opacity: 0.5;
  display: flex;
  justify-content: space-between;
  padding-right: ${(props: StyleProps) => `${props.padding}%`};
  box-sizing: border-box;
`;

export const GraphLine = styled.div`
  border-left: 1px dashed gray;
  height: 100%;
  :first-of-type {
    border: none;
  }
`;

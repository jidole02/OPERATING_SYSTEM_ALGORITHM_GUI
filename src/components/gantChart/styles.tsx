import styled from "styled-components";
import { PRIMARY_WIDTH } from "../../style";
import { StyleProps } from "../interface";

export const Wrapper = styled.div`
  width: ${PRIMARY_WIDTH};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChartContainer = styled.div`
  width: 95%;
  height: 60px;
  border: 1px solid gray;
  display: flex;
  margin-top: 10px;
`;

export const GantGraph = styled.div`
  width: ${(props: StyleProps) => `${props.width}%`};
  height: 100%;
  border-right: 1px dotted black;
  :last-of-type {
    border: none;
  }
`;

export const GraphTimeLine = styled.div`
  width: 95%;
  display: flex;
  margin-top:10px;
`;

export const Time = styled.span`
  display: flex;
  margin-left: ${(props: StyleProps) =>
    `calc(${props.margin}% - ${props.width}px)`};
  font-size: 10px;
`;

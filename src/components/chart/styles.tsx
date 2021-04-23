import styled from 'styled-components'
import { PRIMARY_WIDTH } from '../../style';
import { StyleProps } from '../interface';

export const AllWrapper = styled.div`
  width: ${PRIMARY_WIDTH};
  margin-top: 0px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const Cotainer = styled.div`
width:750px;
`

export const ChartTop = styled.div`
  width:100%;
  border-bottom:1px solid gray;
  margin-top:50px;
  padding-bottom:15px;
  padding-left:50px;
  box-sizing:border-box;
  color:gray;
`

export const ProcessNameWrapper = styled.div`
  width:50px;
  height:${(props:StyleProps)=>(props.height)};
  padding:20px 0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  border-right:1px solid gray;
  color:gray;
`

export const GraphWrapper = styled.div`
width:100%;
height:${(props:StyleProps)=>(props.height)};
padding:20px 0;
background-color:blue;
`
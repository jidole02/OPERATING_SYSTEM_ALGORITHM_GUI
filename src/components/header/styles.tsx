import styled from "styled-components";
import { MAIN_COLOR, PRIMARY_WIDTH } from "../../style";

export const HeaderWrapper = styled.header`
  width: 100%;
  min-width:${PRIMARY_WIDTH};
  padding: 30px 0px;
  box-shadow: 0px 3px 10px whitesmoke;
  text-align: center;
  position: sticky;
  top: 0;
  background-color: rgb(255,255,255,0.9);
  z-index:500;
`;

export const Title = styled.p`
  color: ${MAIN_COLOR};
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
`;

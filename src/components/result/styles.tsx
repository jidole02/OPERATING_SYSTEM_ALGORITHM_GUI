import styled from 'styled-components'
import { MAIN_COLOR, PRIMARY_WIDTH } from '../../style'

export const Wrapper = styled.div`
width:${PRIMARY_WIDTH};
box-sizing:border-box;
`

export const DescriptionLine = styled.p`
margin-top:50px;
padding:0 50px;
display:flex;
`

export const DescripTitle = styled.span`
color:${MAIN_COLOR};
font-weight:bold;
text-decoration:underline;
`

export const ResultMath = styled.span`
color:black;
font-weight:bold;
margin-left:20px;
`

export const FlexContainer=styled.div`
display:flex;
justify-content:space-evenly;
`

export const StartBtn = styled.button`
  width:100%;
  height:40px;
  background-color:${MAIN_COLOR};
  border:none;
  margin-top:80px;
  color:white;
  font-size:16px;
  border-radius:3px;
  :hover{
    opacity:0.8;
  }
`

export const Footer = styled.footer`
width:100%;
margin-top:60px;
display:flex;
justify-content:center;
align-items:center;
color:gray;
font-size:14px;
margin-bottom:100px;
`
import styled from 'styled-components'

export const Title = styled.p`
  margin:0px;
  color: #192A59;
  font-size:12px;
  text-transform:uppercase;
  font-weight:bold;
`

export const Text = styled.p`
  margin:0px;
  color:#3F5AA6;
  font-size:12px;

`

export const Divider = styled.div`
  color: #3F5AA6;
  position:relative;
  display:flex;
  justify-content:center;
  width:100%;
  font-weight:bold;
  margin:10px 0;
  &::before{
    content:'';
    width:48%;
    height:1px;
    background:#3F5AA6;
    position:absolute;
    top: 10px;
    left: 0px;
  }
  &::after{
    content:'';
    width:48%;
    height:1px;
    background:#3F5AA6;
    position:absolute;
    top: 10px;
    right: 0px;
  }
`

export const Question = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`

export const QuestionText = styled.p`
  color: #192A59;
  font-size:12px;
  margin:0;
  margin-left:5px;
  font-weight:bold;
`

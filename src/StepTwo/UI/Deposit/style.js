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
  color:#C7C7C7;
  font-size:10px;
  font-weight:bold;
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
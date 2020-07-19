import styled from 'styled-components'
import { Button } from 'antd';

export const Number = styled.p`
  color: #3F5AA6;
  font-size:20px;
  font-weight:bold;
  margin:0;
`
export const Text = styled.p`
  color:${props => props.bold ? '#192A59' : '#3F5AA6'};
  font-size:14px;
  margin:0;
  font-weight:${props => props.bold ? 'bold' :  'normal'} ;
  margin-top:${props => props.bold ? '10px' : '0'} ;

`
export const Bill = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin-bottom:15px;
`
export const Btn = styled(Button)`
  border-color: #3F5AA6;
  color:#3F5AA6;
  width:50%;

`
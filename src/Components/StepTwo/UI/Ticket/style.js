import styled from 'styled-components'

export const Number = styled.p`
  font-size: 18px;
  background: ${props => props.active ? '#3F5AA6' : '#CED1D9'};
  color:${props => props.active ? 'white' : '#192A59'};
  border-radius: 10px;
  text-align: center;
  width: 70px;
  margin: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Text = styled.p`
  /* margin:0px; */
  color:#3F5AA6;
  font-size:12px;
  text-align: center;
  font-weight:bold;
`

export const ContentNumbers = styled.div`
  display:flex;
  align-items:center;
  flex-wrap:wrap;
`
export const Divider = styled.div`
  width:100%;
  height:1px;
  background: #EBEEF7;
  margin:10px 0;
`
export const Center = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

import styled from 'styled-components'

export const Content = styled.div`
  border-radius: 20px;
  box-shadow: 0 0px 10px #b5b5b5;
  margin: 0px 20px;
  padding: 20px 0 15px 0;
`
export const Head = styled.div`
  padding: 15px 20px;
  background: #325085;
  color: white;
  font-size: 20px;
  font-weight: bold;
`

export const Body = styled.div`
  padding: 15px 20px;
`

export const TitleInfo = styled.p`
  font-size: 11px;
  font-weight: 900;
  color: #757373;
  margin:0;
`

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: #3F5AA6;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 7px;
`
export const Double = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
`
export const InfoDouble = styled.div`
  width:50%;
`
export const Footer = styled.div`
  font-weight: bold;
  width: 100%;
  position:relative;
  &::before{
    content:'';
    height: 30px;
    width: 32px;
    position: absolute;
    background: #324f84;
    transform: skew(-35deg);
    top: 0px;
    right: 36%;
  }  
  &::after{
    content:'';
    height: 30px;
    width: 32px;
    position: absolute;
    background: #324f84;
    transform: skew(-35deg);
    top: 0px;
    right: 42%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    &::before{
      display:none;
    }  
    &::after{
      display:none;
    }
  }
`
export const TextFooter= styled.div`
  font-size: 14px;
  color: white;
  padding: 4px 10px;
  width: 50%;
  background: #325085;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Trapeze = styled.div`
  height: 30px;
  width: 32px;
  position: absolute;
  background: #324f84;
  transform: skew(-35deg);
  top: 0px;
  right: 48%;
  @media only screen and (max-width: 768px) {
    display:none;
  }
`
export const Title = styled.p`
  text-align: center;
  color: #324f84;
  font-size: 20px;
  font-weight: bold;
`
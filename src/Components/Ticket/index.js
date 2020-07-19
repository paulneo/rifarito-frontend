import React from 'react';
import { Card } from 'antd';
import { Content, Head, Body, SubTitle, Title, Double, InfoDouble, Footer, TextFooter, Trapeze, TitleInfo } from './style'

const Ticket = () => {
  return (
    <Card title="Ticket">
      <Title>ALBERGUE DE PERRITOS</Title>
      <Content>
        <Head>LA CASA DE AMELIE AREQUIPA</Head>
        <Body>
          <div>
            <TitleInfo>Nombre</TitleInfo>
            <SubTitle>JUAN MENDOZA VARGAS</SubTitle>
          </div>
          <Double>
            <InfoDouble>
              <TitleInfo>Fecha de Sorteo</TitleInfo>
              <SubTitle>31 DE JULIO</SubTitle>
            </InfoDouble>
            <InfoDouble>
              <TitleInfo>Hora</TitleInfo>
              <SubTitle>7:00PM</SubTitle>
            </InfoDouble>
          </Double>
          <Double>
            <InfoDouble>
              <TitleInfo>Valor Rifa</TitleInfo>
              <SubTitle>S/ 2</SubTitle>
            </InfoDouble>
            <InfoDouble>
              <TitleInfo>Celular</TitleInfo>
              <SubTitle>989411606</SubTitle>
            </InfoDouble>
          </Double>
          <div>
            <TitleInfo>Fecha de Compra</TitleInfo>
            <SubTitle>19/7/2020</SubTitle>
          </div>
        </Body>
        <Footer>
          <TextFooter>GRAN RIFA VIRTUAL</TextFooter>
          <Trapeze one></Trapeze>
        </Footer>
      </Content>
    </Card>
  );
};

export default Ticket;
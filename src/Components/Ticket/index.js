import React from 'react';
import { Card } from 'antd';
import { Content } from './style'

const Ticket = () => {
  return (
    <Card title="Ticket">
      <p>ALBERGUE DE PERRITOS</p>
      <Content >
        <div>GRAN RIFA VIRTUAL</div>
        <div>
          <p>Nombre</p>
          <p>JUAN MENDOZA VARGAS</p>
        </div>
        <div>
          <div>
            <p>Fecha de Sorteo</p>
            <p>31 DE JULIO</p>
          </div>
          <div>
            <p>Hora</p>
            <p>7:00PM</p>
          </div>
        </div>
        <div>
          <div>
            <p>Valor Rifa</p>
            <p>S/ 2</p>
          </div>
          <div>
            <p>Celular</p>
            <p>989411606</p>
          </div>
        </div>
        <div>
          <p>Fecha de Compra</p>
          <p>19/7/2020</p>
        </div>
      </Content>
    </Card>
  );
};

export default Ticket;
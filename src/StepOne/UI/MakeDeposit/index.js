import React from 'react';
import { Card, Collapse } from 'antd';
import { Btn, Text, Bill, Number } from './style'

const { Panel } = Collapse;

const MakeDeposit = () => {
  return (
    <Card title="REALIZAR EL DEPÓSITO / TRANSFERENCIA">
      <Collapse accordion>
        <Panel header="BCP (Agentes / Web / App)" key="1">
          <Bill>
            <Number>215 31406116045</Number>
            <Btn  block>Copiar</Btn>
          </Bill>
          <Text>Monto: S/10.00</Text>
          <Text>Cuenta: Ahorros - Soles</Text>
          <Text>Titular: Magdalena Chicata</Text>
        </Panel>
        <Panel header="BBVA (Agentes / Web / App)" key="2">
          <Bill>
            <Number>215 31406116045</Number>
            <Btn block>Copiar</Btn>
          </Bill>
          <Text>Monto: S/10.00</Text>
          <Text>Cuenta: Ahorros - Soles</Text>
          <Text>Titular: Magdalena Chicata</Text>
        </Panel>
        <Panel header="YAPE (App)" key="3">
          <Bill>
            <Number>215 31406116045</Number>
            <Btn block>Copiar</Btn>
          </Bill>
          <Text>Monto: S/10.00</Text>
          <Text>Cuenta: Ahorros - Soles</Text>
          <Text>Titular: Magdalena Chicata</Text>
        </Panel>
      </Collapse>
      <Text bold>* En el siguiente paso eligirás tus números.</Text>
    </Card>
  );
};

export default MakeDeposit;
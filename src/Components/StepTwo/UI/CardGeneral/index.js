import React from 'react';
import { Card, Row, Col, } from 'antd';
import { Btn, Center } from './style'
import Deposit from '../Deposit'
import Ticket from '../Ticket'

const CardGeneral = () => {
  return (
    <Card title="Confirmar Operación">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Deposit />
        </Col>
        <Col span={24}>
          <Ticket />
        </Col>
      </Row>
    </Card>
  );
};

export default CardGeneral;
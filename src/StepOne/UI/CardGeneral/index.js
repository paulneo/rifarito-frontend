import React from 'react';
import { Card, Row, Col, } from 'antd';
import PersonalInformation from '../PersonalInformation'
import NumberRaffles from '../NumberRaffles'
import MakeDeposit from '../MakeDeposit'
import { Btn, Center } from './style'
const CardGeneral = () => {
  return (
    <Card title="COMPRAR RIFA">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <PersonalInformation />
        </Col>
        <Col span={24}>
          <NumberRaffles />
        </Col>
        <Col span={24}>
          <MakeDeposit />
        </Col>
        <Col span={24}>
          <Center>
            <Btn type="primary" shape="round" size={'middle'} >
              YA REALIZÉ LA OPERACIÓN
            </Btn>
          </Center>
        </Col>
      </Row>
    </Card>
  );
};

export default CardGeneral;
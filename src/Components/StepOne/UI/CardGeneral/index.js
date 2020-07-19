import React from 'react';
import { Card, Row, Col, Button, } from 'antd';
import PersonalInformation from '../PersonalInformation'
import NumberRaffles from '../NumberRaffles'
import MakeDeposit from '../MakeDeposit'
import {  Center } from './style'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const CardGeneral = () => {

  const onClickOperation = () => {

  }

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
            <Link to="/stepTwo">
              <Button type="primary" shape="round" size={'middle'} onClick={onClickOperation}>
                YA REALIZÉ LA OPERACIÓN
            </Button>
            </Link>
           
          </Center>
        </Col>
      </Row>
    </Card>
  );
};

export default CardGeneral;
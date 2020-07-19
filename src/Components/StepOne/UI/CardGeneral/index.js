import React, { useContext } from 'react';
import { Card, Row, Col, Button, Form } from 'antd';
import PersonalInformation from '../PersonalInformation'
import NumberRaffles from '../NumberRaffles'
import MakeDeposit from '../MakeDeposit'
import { Center } from './style'
import {
  Link
} from "react-router-dom";
import Deposit from '../Deposit'
import Context from '../../context'

const CardGeneral = () => {
  const { form } = useContext(Context)
  const onClickOperation = () => {

  }
  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <Form form={form} onFinish={onFinish}>
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
            <Deposit />
          </Col>
          <Col span={24}>
            <Center>
              <Form.Item>
                <Button type="primary" htmlType="submit" shape="round" size={'middle'} onClick={onClickOperation}>
                  CONFIRMAR OPERACION
                </Button>
              </Form.Item>
            </Center>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};

export default CardGeneral;
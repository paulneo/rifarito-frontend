import React, { useContext } from 'react';
import { Card, Tag, Row, Col, Button } from 'antd';
import { PlusOutlined, MinusOutlined} from '@ant-design/icons';
import { Number, Center, Btn }from './styles'
import Context from '../../context'

const NumberRaffles = () => {
  const { buyer, setBuyer } = useContext(Context)
  const handleClick = type => {
    if(type === 'minus'){
      if (buyer.quantity !== 0) {
        setBuyer({ ...buyer, quantity: buyer.quantity - 1})
      }
    }
    else if (type === 'add') {
      setBuyer({ ...buyer, quantity: buyer.quantity + 1})
    }
  }
  return (
    <Card title="CANTIDAD DE RIFAS">
      <Row gutter={[16, 16]} justify='center' align='middle'>
        <Col span={24}>
          <Center>
            <Button type="primary" shape="circle" icon={<MinusOutlined />} onClick={() => handleClick('minus')} />
            <Number>{buyer.quantity}</Number>
            <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => handleClick('add')}/>
          </Center>
        </Col>
        <Col span={24}>
          <Center>
          <Tag color="#3F5AA6">Total: S/ {buyer.quantity * 2}</Tag>
          </Center>
        </Col>
      </Row>
    </Card>
  );
};

export default NumberRaffles;
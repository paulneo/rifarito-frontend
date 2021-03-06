import React, { useContext } from 'react';
import { Card, Tag, Row, Col, Button, InputNumber } from "antd";
import { PlusOutlined, MinusOutlined} from '@ant-design/icons';
import { Number, Center, } from './styles'
import Context from '../../context'

const NumberRaffles = () => {
  const formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
  });
  const { buyer, setBuyer } = useContext(Context)
  const handleClick = type => {
    if(type === 'minus'){
      if (buyer.quantity > 1) {
        setBuyer({ ...buyer, quantity: buyer.quantity - 1})
      }
    }
    else if (type === 'add') {
      setBuyer({ ...buyer, quantity: buyer.quantity + 1})
    }
  }

  const onChangeQuantity = (val) => {
    setBuyer({ ...buyer, quantity: val });
  }
  return (
    <Card title="CANTIDAD DE RIFAS">
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col span={24}>
          <Center>
            <Button
              type="primary"
              shape="circle"
              icon={<MinusOutlined />}
              onClick={() => handleClick("minus")}
            />
            {/* <Number>{buyer.quantity}</Number> */}
            <InputNumber
              value={buyer.quantity}
              type={"number"}
              onChange={onChangeQuantity}
              style={{ margin: "0px 10px" }}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={() => handleClick("add")}
            />
          </Center>
        </Col>
        <Col span={24}>
          <Center>
            <Tag color="#3F5AA6">
              Total: {formatter.format(buyer.quantity * 2)}
            </Tag>
          </Center>
        </Col>
      </Row>
    </Card>
  );
};

export default NumberRaffles;
import React from 'react';
import { Card, Tag, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined} from '@ant-design/icons';
import { Number, Center, Btn }from './styles'
const NumberRaffles = () => {
  return (
    <Card title="CANTIDAD DE RIFAS">
      <Row gutter={[16, 16]} justify='center' align='middle'>
        <Col span={24}>
          <Center>
            <Btn type="primary" shape="circle" icon={<MinusOutlined />} />
            <Number>5</Number>
            <Btn type="primary" shape="circle" icon={<PlusOutlined />} />
          </Center>
        </Col>
        <Col span={24}>
          <Center>
          <Tag color="#3F5AA6">Total: S/10.00</Tag>
          </Center>
        </Col>
      </Row>
    </Card>
  );
};

export default NumberRaffles;
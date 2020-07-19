import React from 'react';
import { Card, Input, Row, Col } from 'antd';
import { Title, Text} from './style'

const PersonalInformation = () => {
  return (
    <Card title='DATOS PERSONALES'>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} ls={12}>
          <Title>Nombre Completo*</Title>
          <Input placeholder="Ingrese su nombre completo" style={{ width: '100%' }}/>
        </Col>
        <Col xs={24} sm={24} md={12} ls={12}>
          <Title>Celular*</Title>
          <Input placeholder="Ingrese su nombre de contacto" style={{width:'100%' }} />
        </Col>
      </Row>
      <Text>*Campos Obligatorios</Text>
    </Card>
  );
};

export default PersonalInformation;
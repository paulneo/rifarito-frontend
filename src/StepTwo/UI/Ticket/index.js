import React from 'react';
import { Card, Pagination, Row, Col,  } from 'antd'
import { Number, ContentNumbers, Text, Divider } from './style'
import {  CloseOutlined} from '@ant-design/icons';
const ticketsNumber = [1 , 2000]

const Ticket = () => {
  return (
    <Card title='ELEGIR NUMEROS DE TICKETS'>
      <Text>Números Disponibles</Text>
      <ContentNumbers>
          <Number active>1000</Number>
          <Number >1001</Number>
      </ContentNumbers>
      <Pagination defaultCurrent={6} total={500} />
      <Divider/>
      <Text>Números Seleccionados 4/5</Text>
      <ContentNumbers>
        <Number active> <CloseOutlined style={{cursor: 'pointer'}}/> 1000</Number>
        <Number > <CloseOutlined style={{ cursor: 'pointer' }} />1001</Number>
      </ContentNumbers>
    </Card>
  );
};

export default Ticket;
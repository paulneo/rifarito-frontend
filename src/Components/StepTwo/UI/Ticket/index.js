import React from 'react';
import { Card, Pagination, Row, Col, Button  } from 'antd'
import { Number, ContentNumbers, Text, Divider, Center } from './style'
import { CloseOutlined, LeftOutlined} from '@ant-design/icons';
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
      <Center>
        <Button type="primary" shape="round" size={'middle'} >
          CONFIRMAR OPERACIÓN
        </Button>
      </Center>
      <Center>
        <Button type="link" size='middle' icon={<LeftOutlined />}>
          Volver
        </Button>
      </Center>
    </Card>
  );
};

export default Ticket;
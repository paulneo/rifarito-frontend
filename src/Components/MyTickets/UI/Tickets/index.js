import React from 'react';
import { Input, Card, Button } from 'antd';
import { Text, Question, QuestionText } from './style'
import { QuestionOutlined } from '@ant-design/icons';

const { Search } = Input;

const Tickets = () => {
  return (
    <Card title="Ver mis números de Tickets">
      <Text>Ingrese su número de celular.</Text>
      <Search
        placeholder="Ingrese su número de celular."
        enterButton="Buscar"
        size="middle"
        onSearch={value => console.log(value)}
      />
      <Text>Fecha del Sorteo: 31 de Julio 2020 7:00pm</Text>
      <Question>
        <Button type="primary" shape="circle" icon={<QuestionOutlined />} size='small' />
        <QuestionText>¿En dónde lo encuentro?</QuestionText>
      </Question>
    </Card>
  );
};

export default Tickets;

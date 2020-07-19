import React from 'react';
import { Card, Switch, Button } from 'antd';
import { Divider, Center, ContentSwitch, Number, ContentNumber, Text, Notify} from './style'
const Register = () => {

  const  onChange = () => {

  }
  return (
    <Card title="Registro Exitoso">
      <Text>Gracias por su colaboración, en breve verificaremos su operación y podrá ver sus números elegidos identificándose con:</Text>
      <ContentNumber>
        <Number>989411500</Number>
      </ContentNumber>
      <ContentSwitch>
        <Notify>Notificarme vía SMS la verificación.</Notify>
        <Switch defaultChecked onChange={onChange} />
      </ContentSwitch>
      <Divider />
      <Center>
        <Button type="primary" shape="round" size={'middle'} >
          VER MIS TICKETS
        </Button>
      </Center>
    </Card>
  );
};

export default Register;
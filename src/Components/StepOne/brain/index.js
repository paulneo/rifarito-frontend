import React, { useContext } from 'react';
import CardGeneral from '../UI/CardGeneral'
import { Provider } from '../context'
import ModalComponent from '../UI/ModalComponent'
import { Form } from 'antd'
import Context from '../context'

const StepOne = () => {
  const { form } = useContext(Context)
  return (
    <Provider>
      <Form>
        <CardGeneral />
      </Form>
      <ModalComponent></ModalComponent>
    </Provider>
  );
};

export default StepOne;
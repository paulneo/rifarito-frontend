import React from 'react';
import CardGeneral from '../UI/CardGeneral'
import { Provider } from '../context'
import ModalComponent from '../UI/ModalComponent'

const StepOne = () => {
  return (
    <Provider>
      <CardGeneral />
      <ModalComponent></ModalComponent>
    </Provider>
  );
};

export default StepOne;
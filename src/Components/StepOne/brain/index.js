import React from 'react';
import CardGeneral from '../UI/CardGeneral'
import { Provider } from '../context'
const StepOne = () => {
  return (
    <Provider>
      <CardGeneral />
    </Provider>
  );
};

export default StepOne;
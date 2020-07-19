import React, { useContext} from 'react';
import { Modal, Button, Card, Collapse  } from 'antd';
import Context from '../../../StepOne/brain/context'
import BCP from '../../../../assets/imgs/BCP-Transferencia.jpg';
import { ContentImg} from './style'
const { Panel } = Collapse;
const ModalComponent = () => {
  const { modal, setModal } = useContext(Context)

  const handleOk = () => {
    setModal(false)
  }
  const handleCancel = () => {
    setModal(false)
  }
   return (
    <Modal
      title="Código de Operación"
      visible={modal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
       <Collapse accordion>
         <Panel header="Transferencia BCP" key="1">
           <ContentImg>
             <img src={BCP} alt="" />
           </ContentImg>
         </Panel>
        <Panel header="Depósito en Agente BCP" key="2">

         </Panel>
         <Panel header="YAPE" key="3">

         </Panel>
       </Collapse>
    </Modal>
  );
};

export default ModalComponent;
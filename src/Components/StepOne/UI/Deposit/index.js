import React, { useContext} from 'react';
import { Card, Upload, Button, Input } from 'antd'
import { Title, Divider, Question, QuestionText, Text } from './style'
import { QuestionOutlined } from '@ant-design/icons';
import  Context  from '../../context'

const Deposit = () => {
  const { setModal } = useContext(Context)

  const openModal = () => {
    setModal(true)
  }

  return (
    <Card title='VERIFICACIÓN DE DEPÓSITO / TRANSFERENCIA'>
      <Text>Luego de realizar el depósito o transferencia sube la foto del voucher ó ingresa el número de operación.</Text>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      // beforeUpload={beforeUpload}
      // onChange={this.handleChange}
      >
        {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
      </Upload>

      <Title>Escribe el código de operación</Title>
      <Input placeholder="Numero de Voucher" style={{ width: '100%' }} />
      <Divider>
        Ó
      </Divider>
      <Question>
        <Button onClick={openModal} type="primary" shape="circle" icon={<QuestionOutlined />} size='small'/>
        <QuestionText onClick={openModal}>¿En dónde lo encuentro?</QuestionText>
      </Question>
    </Card>
  );
};

export default Deposit;
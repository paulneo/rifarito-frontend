import React from 'react';
import { Card, Upload, Button, Input } from 'antd'
import { Title, Divider } from './style'
import { QuestionOutlined } from '@ant-design/icons';

const Deposit = () => {
  return (
    <Card title='VERIFICACIÓN DE DEPÓSITO / TRANSFERENCIA'>
      <p>Luego de realizar el depósito o transferencia sube la foto del voucher ó ingresa el número de operación.</p>
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
      <div>
        <Button type="primary" shape="circle" icon={<QuestionOutlined />} size='small'/>
        <p>¿En dónde lo encuentro?</p>
      </div>
    </Card>
  );
};

export default Deposit;
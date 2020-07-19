import React, { useContext, useState} from 'react';
import { Card, Upload, Button, Input, message } from "antd";
import { Title, Divider, Question, QuestionText, Text } from './style'
import { QuestionOutlined } from '@ant-design/icons';
import  Context  from '../../context'
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const Deposit = () => {
  const { setModal } = useContext(Context)
  const [imageUrl , setImageUrl] = useState()
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setModal(true)
  }

  const  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const beforeUpload = (file) =>{
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true)

      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        setImageUrl(imageUrl),
        setLoading(false)
      );
    }
  };

  return (
    <Card title="VERIFICACIÓN DE DEPÓSITO / TRANSFERENCIA">
      <Text>
        Luego de realizar el depósito o transferencia sube la foto del voucher ó
        ingresa el número de operación.
      </Text>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>

      <Title>Escribe el código de operación</Title>
      <Input placeholder="Numero de Voucher" style={{ width: "100%" }} />
      <Divider>Ó</Divider>
      <Question>
        <Button
          onClick={openModal}
          type="primary"
          shape="circle"
          icon={<QuestionOutlined />}
          size="small"
        />
        <QuestionText onClick={openModal}>¿En dónde lo encuentro?</QuestionText>
      </Question>
    </Card>
  );
};

export default Deposit;
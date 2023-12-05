import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const ModalANT = ({apiConsume}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if(isModalOpen == true){apiConsume()}
  }, [isModalOpen])
  
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Show emails
      </Button>
      <Modal title="Emails:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ModalANT;
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';

const ModalANT = ({apiConsume,dataAPI}) => {
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
  
  const dataForModal = dataAPI.map((element)=> {
    return(
        <>
        <h4>{element.email}</h4>
        </>
    )
})
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Show emails
      </Button>
      <Modal title="Emails:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {dataForModal}
      </Modal>
    </>
  );
};
export default ModalANT;
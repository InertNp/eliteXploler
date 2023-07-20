import { Button, Modal } from "antd";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
interface props {
  id: number;
}
const DeleteButton = ({ id }: props) => {
  const [modal, setModal] = useState(false);

  function handleDel() {
    console.log(id);
    setModal(false);
  }
  return (
    <>
      <Modal
        okType="danger"
        title="Are you sure you want to delete?"
        open={modal}
        onOk={handleDel}
        onCancel={() => {
          setModal(false);
        }}
        okText={"Delete"}
      />
      <Button
        danger
        type="primary"
        onClick={() => {
          setModal(true);
        }}
      >
        <AiOutlineDelete size={20} />
      </Button>
    </>
  );
};

export default DeleteButton;

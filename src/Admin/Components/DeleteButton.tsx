import { Button, Modal } from "antd";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { handleDelete } from "../Functions/HandleDelete";
interface props {
  id: number;
  url: string;
}
const DeleteButton = ({ id, url }: props) => {
  const [modal, setModal] = useState(false);

  function handleDel() {
    const data = { id, url };
    handleDelete(data);
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

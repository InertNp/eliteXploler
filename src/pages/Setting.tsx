import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../api/url";
import { useGlobalState } from "../context/globalHook";
import { header } from "../api/header";
import { Button, Descriptions, Form, Input, Modal, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { logout } from "../api/Logout";

const Setting = () => {
  const [formE] = useForm();
  const [token] = useGlobalState("token");
  const [data, setData] = useState({} as any);
  const [load, setLoad] = useState(true);

  const [edit, setEdit] = useState(false);
  function handleEdit(e: any) {
    axios
      .post(`${url}/user/update`, {
        user: {
          id: data.id,
          fullName: e.name,
          phoneNo: e.phno,
        },
        login: {
          password: e.pass,
        },
      })
      .then(() => {
        setLoad(!load);
        setEdit(false);
        formE.resetFields();
        logout();
        message.warning("Please Login Again", 5);
      });
  }
  useEffect(() => {
    axios.get(`${url}/user/logged/in`, header(token)).then((res) => {
      setData(res.data.data);
    });
  }, [load]);
  //   console.log(data);
  return (
    <div className="p-10">
      <Descriptions
        title={<h1>User Information</h1>}
        extra={
          <div className="flex gap-2">
            <Button
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </Button>
          </div>
        }
        bordered
        column={1}
      >
        <Descriptions.Item label={"Name"}>{data.fullName}</Descriptions.Item>
        <Descriptions.Item label={"Email"}>{data.userName}</Descriptions.Item>
        <Descriptions.Item label={"Phone No"}>{data.phoneNo}</Descriptions.Item>
      </Descriptions>
      <Modal
        title="Edit"
        open={edit}
        onCancel={() => {
          setEdit(false);
        }}
        onOk={formE.submit}
      >
        <Form form={formE} onFinish={handleEdit}>
          <Form.Item label={"New Name:"} name={"name"} required>
            <Input />
          </Form.Item>
          <Form.Item label={"New Phone No:"} name={"phno"} required>
            <Input />
          </Form.Item>
          <Form.Item label={"New Password"} name={"pass"}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Setting;

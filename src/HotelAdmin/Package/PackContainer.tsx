import { Button, Form, Input, List, Modal, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../api/url";

import FormItem from "antd/es/form/FormItem";

import { useForm } from "antd/es/form/Form";
import { useGlobalState } from "../../context/globalHook";
import { header } from "../../api/header";
import { BiPackage } from "react-icons/bi";

const PackContainer = ({ hotelId }: any) => {
  const [load, setLoad] = useState(false);
  const [token] = useGlobalState("token");
  const [data, setData] = useState([]);
  const [addRoom, setAddRoom] = useState(false);
  const [status, setStatus] = useState(false);
  const [statusData, setStatusData] = useState([]);
  useEffect(() => {
    if (hotelId == 0) {
      message.info("Packages Loading", 0.5);
    } else {
      axios
        .get(`${url}/package/hotel?hotelId=${hotelId}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          if (err) {
            message.error("No Room Found");
          }
        });
    }
  }, [hotelId, load]);
  function handleDelete(id: number) {
    axios.get(`${url}/package/delete?id=${id}`);
    setLoad(!load);
    window.location.reload();
  }
  function ChangeStatus() {
    return (
      <Modal
        open={status}
        onCancel={() => {
          setStatus(false);
        }}
        onOk={() => {
          setStatus(false);
        }}
      >
        <List
          dataSource={statusData}
          pagination={{
            align: "center",
            pageSize: 3,
            hideOnSinglePage: true,
          }}
          renderItem={(item: any) => {
            console.log(item.id);
            return (
              <List.Item>
                <List.Item.Meta />
                <div className="flex flex-col items-start  w-full ">
                  <p> Booked by:{item.bookedBy.fullName}</p>
                  <p className="font-light">Staus:{item.status}</p>
                  <p>Check in Date:{item.checkInDate}</p>
                  <p>Check out Date:{item.checkOutDate}</p>
                  <p>Description:{item.roomDesc}</p>
                </div>
              </List.Item>
            );
          }}
        ></List>
      </Modal>
    );
  }
  function AddRoom() {
    const [form] = useForm();
    function handleFinish(e: any) {
      console.log(e);
      axios.post(
        `${url}/package`,
        {
          price: e.price,
          hotelId: hotelId,
          packageName: e.name,
          packageDesc: e.price,
        },
        header(token)
      );
      form.resetFields();
      setAddRoom(false);
      window.location.reload();
    }
    return (
      <Modal
        open={addRoom}
        onCancel={() => {
          setAddRoom(false);
        }}
        onOk={() => form.submit()}
      >
        <Form
          form={form}
          className="flex justify-center  flex-col w-full"
          onFinish={handleFinish}
        >
          <FormItem
            label="Package Name"
            name={"name"}
            rules={[{ required: true }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="Package Desription"
            name={"desc"}
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </FormItem>
          <FormItem
            label="Package Price"
            name={"price"}
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </FormItem>
        </Form>
      </Modal>
    );
  }

  return (
    <div className="px-5 py-2">
      <Button
        onClick={() => {
          setAddRoom(true);
        }}
      >
        Add new Package
      </Button>
      <AddRoom />
      <ChangeStatus />
      <List
        dataSource={data}
        pagination={{
          align: "center",
          pageSize: 3,
          hideOnSinglePage: true,
        }}
        renderItem={(item: any) => {
          //   console.log(item);
          return (
            <List.Item
              actions={[
                <Button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </Button>,
                <Button
                  onClick={() => {
                    axios
                      .get(
                        `${url}/package/booking/by/package?packageId=${item.id}`
                      )
                      .then((res) => {
                        setStatusData(res.data.data);
                      });
                    setStatus(true);
                  }}
                >
                  Booking Details
                </Button>,
              ]}
            >
              <List.Item.Meta avatar={<BiPackage size={100} />} />
              <div className="flex flex-col items-start  w-full">
                <h1 className="m-0 p-0 text-lg">{item.packageName}</h1>
                <p className="py-2">Price:NRs.{item.price}</p>

                <p>Description:{item.packageDesc}</p>
              </div>
            </List.Item>
          );
        }}
      ></List>
    </div>
  );
};

export default PackContainer;

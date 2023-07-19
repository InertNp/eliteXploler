import { Button, DatePicker, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { url } from "../../api/url";
import { useGlobalState } from "../../context/globalHook";

const Booking = ({ roomId }: any) => {
  const [form] = useForm();
  const [token] = useGlobalState("token");
  function handleFinish(e: any) {
    const checkIn = e.checkIn.format("YYYY-MM-DD");
    const checkOut = e.checkOut.format("YYYY-MM-DD");
    // console.log(checkIn, checkOut, e.req, roomId);
    axios
      .post(
        `${url}/room/booking`,
        {
          payment: 0.0,
          checkInDate: checkIn,
          checkOutDate: checkOut,
          additionalRequest: e.req,
          roomId: roomId,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(() => {
        message.success("Booking Done", 1);
        // console.log(e);
        form.resetFields();
      });
  }
  return (
    <Form form={form} onFinish={handleFinish} style={{ maxWidth: 500 }}>
      <h1>Book this room</h1>
      <Form.Item
        rules={[{ required: true, message: "This Field is required" }]}
        label="Check In date"
        name={"checkIn"}
      >
        <DatePicker format={"YYYY-M-D"} />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: "This Field is required" }]}
        label="Check Out date"
        name={"checkOut"}
      >
        <DatePicker format={"YYYY-M-D"} />
      </Form.Item>
      <Form.Item label="Additional Request" name={"req"} className="w-96">
        <Input.TextArea />
      </Form.Item>
      {/* <div className="flex justify-center w-full"> */}
      <Button htmlType="submit">Book</Button>
      {/* </div> */}
    </Form>
  );
};

export default Booking;

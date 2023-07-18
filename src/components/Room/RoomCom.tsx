import { Button, Card, Form, Input, Rate, message } from "antd";
import { useGlobalState } from "../../context/globalHook";
import axios from "axios";
import { url } from "../../api/url";
import { useForm } from "antd/es/form/Form";

const RoomCom = ({ roomId }: any) => {
  const [fullName] = useGlobalState("fullName");
  const [form] = useForm();
  const [load, setLoad] = useGlobalState("hotelRoomReviewLoad");
  const [token] = useGlobalState("token");
  const styleHead = "m-0 p-0 text-xl font-semibold";
  function handleFinish(e: any) {
    console.log(e);
    axios
      .post(
        `${url}/room/review`,
        {
          reviewDesc: e.desc,
          rating: e.rating,
          roomId: roomId,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((e) => {
        message.success("Review Sucessful", 1);

        setLoad(!load);
        form.resetFields();
      });
  }
  return (
    <Card className="w-full flex flex-col  items-center">
      <h1 className="m-0 p-0 capitalize">{fullName}</h1>

      <Form
        form={form}
        onFinish={handleFinish}
        className=" h-40  flex flex-col items-start"
        requiredMark={true}
      >
        <Form.Item
          rules={[{ required: true, message: "Please Rate the Hotel " }]}
          name={"rating"}
          colon={false}
          label={<h2 className={styleHead}>Rate:</h2>}
          className="flex flex-row items-center"
        >
          <Rate />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please Enter Description" }]}
          name={"desc"}
          colon={false}
          label={<h1 className={styleHead}>Description:</h1>}
          className="flex flex-row items-center"
        >
          <Input className="w-96" />
        </Form.Item>
        <Button htmlType="submit">Review</Button>
      </Form>
    </Card>
  );
};

export default RoomCom;

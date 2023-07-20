import { Button, Form, Image, Input, Modal, Upload, message } from "antd";
import { beforeUpload } from "../../../utils/beforeUpload";
import { useState } from "react";
import { imgUrl, url } from "../../../api/url";
import { BiPlus } from "react-icons/bi";
import axios from "axios";
import { useGlobalState } from "../../../context/globalHook";

interface prop {
  add: boolean;
  changeAdd: any;
}
const AddPlace = ({ add, changeAdd }: prop) => {
  const [form] = Form.useForm();
  const [img, setImg] = useState("");
  const [upload, setUpload] = useState(false);

  function handleSubmit(e: any) {
    if (upload) {
      console.log(e);
      axios.post(`${url}/places`, {
        placeName: e.placeName,
        filename: img,
        shortDesc: e.shortDesc,
        placeDesc: "",
      });
      form.resetFields();
      setImg("");
      setUpload(false);
      changeAdd(false);
      window.location.reload();
    } else {
      message.warning("Please Upload Image", 0.5);
      setImg("");
      setUpload(false);
    }
  }
  function UploadImage() {
    return (
      <Upload
        name="file"
        beforeUpload={beforeUpload}
        showUploadList={false}
        action={`${url}/images/save`}
        maxCount={1}
        onChange={(e) => {
          if (e.file.status === "done") {
            setImg(e.file.response.data);
            setUpload(true);
          }
        }}
      >
        {upload ? (
          <Image
            preview={{
              visible: false,
              mask: (
                <div className="flex justify-center items-center gap-2">
                  <BiPlus size={50} />
                  Upload Image
                </div>
              ),
            }}
            src={`${imgUrl}/${img}`}
            height={100}
            width={100}
          />
        ) : (
          <Button>Upload</Button>
        )}
      </Upload>
    );
  }

  return (
    <Modal
      open={add}
      onOk={form.submit}
      onCancel={() => changeAdd(false)}
      okText={"Submit"}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="px-10"
      >
        {/* image */}
        <UploadImage />
        <Form.Item
          label={"Place Name:"}
          name={"placeName"}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Description"}
          name={"shortDesc"}
          rules={[{ required: true }]}
        >
          <Input.TextArea className={"max-h-[200px]"} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddPlace;

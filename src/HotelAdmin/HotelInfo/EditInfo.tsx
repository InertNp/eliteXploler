import {
  Button,
  Cascader,
  Descriptions,
  Form,
  Image,
  Input,
  Upload,
} from "antd";
import { beforeUpload } from "../../utils/beforeUpload";
import { dummyimgUrl } from "../../api/url";
import { BiPlus } from "react-icons/bi";
import { useForm } from "antd/es/form/Form";

import { useGlobalState } from "../../context/globalHook";

const EditInfo = ({ data }: any) => {
  const [formE] = useForm();
  const [edit, setEdit] = useGlobalState("hoteledit");

  function handleEdit(e: any) {
    console.log(e);
    setEdit(false);
  }
  return (
    <div className="w-full ">
      <Form form={formE} onFinish={handleEdit}>
        <div className="p-10">
          <Descriptions
            title={<h1>Hotel Information</h1>}
            extra={
              <div className="flex gap-2">
                <Button
                  type="primary"
                  onClick={() => {
                    formE.submit();
                  }}
                >
                  Submit
                </Button>
              </div>
            }
            bordered
            column={1}
          >
            <Descriptions.Item label={"Hotel Image"}>
              <Form.Item>
                <Upload
                  name="file"
                  beforeUpload={beforeUpload}
                  showUploadList={false}
                  action={`bvla la`}
                  onChange={(e) => {
                    console.log(e.file.status === "done");
                  }}
                >
                  <Image
                    src={`${dummyimgUrl}?sky`}
                    height={200}
                    width={200}
                    preview={{
                      visible: false,
                      mask: (
                        <div className="flex justify-center items-center gap-2">
                          <BiPlus size={50} />
                          Upload Image
                        </div>
                      ),
                    }}
                  />
                </Upload>
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label={"Hotel Name"}>
              <Form.Item initialValue={data.hotelName} name={"hotelName"}>
                <Input />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label={"Hotel Description"}>
              <Form.Item initialValue={data.hotelDesc} name={"hotelDesc"}>
                <Input.TextArea />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label={"Located at:"}>
              <Form.Item initialValue={data.placeName} name={"placeName"}>
                <Cascader />
              </Form.Item>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </Form>
    </div>
  );
};

export default EditInfo;

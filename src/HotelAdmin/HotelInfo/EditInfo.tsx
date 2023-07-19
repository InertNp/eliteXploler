import {
  Button,
  Cascader,
  Descriptions,
  Form,
  Image,
  Input,
  Upload,
  message,
} from "antd";
import { beforeUpload } from "../../utils/beforeUpload";
import { imgUrl, url } from "../../api/url";
import { BiPlus } from "react-icons/bi";
import { useForm } from "antd/es/form/Form";

import { useGlobalState } from "../../context/globalHook";
import { useEffect, useState } from "react";
import axios from "axios";
import { header } from "../../api/header";

const EditInfo = ({ data }: any) => {
  const [formE] = useForm();
  const [token] = useGlobalState("token");
  const [edit, setEdit] = useGlobalState("hoteledit");
  const [upload, setUpload] = useState(false);
  const [img, setimg] = useState("");
  const [place, setPlace] = useState([]);
  const id = data.id;
  // console.log(id);
  // console.log(edit);
  function handleEdit(e: any) {
    console.log(e);
    if (upload == false) {
      console.log("upload is false");

      axios
        .post(
          `${url}/hotel`,
          {
            hotelName: e.hotelName,
            ratings: data.ratings,
            filename: data.filename,
            hotelDesc: e.hotelDesc,
            placeId: 2,
            id: id,
          },
          header(token)
        )
        .then((res) => {
          console.log(res);
        });
    } else {
      console.log("upload is true");
      axios
        .post(
          `${url}/hotel`,
          {
            hotelName: e.hotelName,
            ratings: data.ratings,
            filename: img,
            hotelDesc: e.hotelDesc,
            placeId: 2,
            id: id,
          },
          header(token)
        )
        .then((res) => {
          console.log(res);
        });
    }

    setEdit(false);
    // window.location.reload();
  }

  useEffect(() => {
    axios.get(`${url}/places`).then((res) => {
      // setPlace(res.data.data);
      const iniarr = res.data.data;
      const arr = iniarr.map((item: any) => {
        return {
          value: item.id,
          label: item.placeName,
        };
      });

      setPlace(arr);
    });
  }, [edit]);
  return (
    <div className="w-full ">
      <Form form={formE} onFinish={handleEdit} requiredMark={"optional"}>
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
                <Button
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Cancel
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
                  action={`${url}/images/save`}
                  maxCount={1}
                  onChange={(e) => {
                    if (e.file.status === "done") {
                      setimg(e.file.response.data);

                      setUpload(true);
                    }
                  }}
                >
                  {upload ? (
                    <Image
                      src={`${imgUrl}/${img}`}
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
                  ) : (
                    <>
                      {data.filename ? (
                        <Image
                          src={`${imgUrl}/${data.filename}`}
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
                      ) : (
                        <div>
                          <Button>Upload new Img</Button>
                        </div>
                      )}
                    </>
                  )}
                </Upload>
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label={"Hotel Name"}>
              <Form.Item
                initialValue={data.hotelName}
                name={"hotelName"}
                rules={[{ required: true, message: "Please Write name" }]}
              >
                <Input />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label={"Hotel Description"}>
              <Form.Item
                initialValue={data.hotelDesc}
                name={"hotelDesc"}
                rules={[{ required: true, message: "Please write desc" }]}
              >
                <Input.TextArea />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label={"Located at:"}>
              <Form.Item
                initialValue={data.placeName}
                name={"placeName"}
                rules={[{ required: true, message: "Please Select a place" }]}
              >
                <Cascader options={place} />
              </Form.Item>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </Form>
    </div>
  );
};

export default EditInfo;

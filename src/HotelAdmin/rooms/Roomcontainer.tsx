import {
  Button,
  Cascader,
  Form,
  Image,
  Input,
  List,
  Modal,
  Rate,
  Upload,
  message,
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { imgUrl, url } from "../../api/url";

import { beforeUpload } from "../../utils/beforeUpload";
import FormItem from "antd/es/form/FormItem";
import { BiPlus } from "react-icons/bi";
import { useForm } from "antd/es/form/Form";
import { useGlobalState } from "../../context/globalHook";
import { header } from "../../api/header";
import { formatDate } from "../../utils/FormatDate";

const Roomcontainer = ({ hotelId }: any) => {
  const [load, setLoad] = useState(false);
  const [token] = useGlobalState("token");
  const [data, setData] = useState([]);
  const [addRoom, setAddRoom] = useState(false);
  const [img, setImg] = useState("");
  const [status, setStatus] = useState(false);
  const [statusData, setStatusData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [review, setReview] = useState(false);
  useEffect(() => {
    if (hotelId == 0) {
      message.info("Rooms Loading", 0.5);
    } else {
      axios
        .get(`${url}/room?id=${hotelId}`)
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
    axios.get(`${url}/room/delete?id=${id}`);
    setLoad(!load);
  }

  function AddRoom() {
    const room = [
      {
        value: "Standard",
        label: "Standard",
      },
      {
        value: "Deluxe",
        label: "Deluxe",
      },
      { value: "Suite", label: "Suite" },
    ];
    const [form] = useForm();
    function handleFinish(e: any) {
      console.log(e);
      axios.post(
        `${url}/room`,
        {
          filename: img,
          rating: e.rate,
          roomType: e.type[0],
          price: e.price,
          roomDesc: e.desc,
          hotelId: hotelId,
          bed: e.bed,
          totalPerson: e.tp,
        },
        header(token)
      );
      form.resetFields();
      setAddRoom(false);
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
          <Form.Item required>
            <Upload
              name="file"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action={`${url}/images/save`}
              beforeUpload={beforeUpload}
              onChange={(e) => {
                if (e.file.status == "done") {
                  console.log("uploaded");
                  setImg(e.file.response.data);
                }
                setAddRoom(true);
              }}
            >
              {imgUrl ? (
                <Image
                  src={`${imgUrl}/${img}`}
                  className="object-cover rounded-md"
                  height={100}
                  width={100}
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
                <BiPlus />
              )}
            </Upload>
          </Form.Item>
          <FormItem
            label="Room type"
            name={"type"}
            rules={[{ required: true }]}
          >
            <Cascader options={room} />
          </FormItem>
          <FormItem
            label="Room Desription"
            name={"desc"}
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </FormItem>
          <FormItem label="Beds" name={"bed"} rules={[{ required: true }]}>
            <Input type="number" />
          </FormItem>
          <FormItem
            label="Total Person"
            name={"tp"}
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </FormItem>
          <FormItem label="Rating" name={"rate"} rules={[{ required: true }]}>
            <Rate />
          </FormItem>
          <FormItem
            label="Price in nrs"
            name={"price"}
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </FormItem>
        </Form>
      </Modal>
    );
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
              <List.Item
                actions={[
                  <div className="flex flex-col">
                    Change Status
                    <Button
                      onClick={() => {
                        axios
                          .get(
                            `${url}/room/booking/change/status?bookingId=${item.id}&status=Approved`
                          )
                          .then(() => {
                            setStatus(false);
                          });
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => {
                        axios
                          .get(
                            `${url}/room/booking/change/status?bookingId=${item.id}&status=Cancelled`
                          )
                          .then(() => {
                            setStatus(false);
                          });
                      }}
                    >
                      Cancel
                    </Button>
                  </div>,
                ]}
              >
                <List.Item.Meta />
                <div className="flex flex-col items-start  w-full ">
                  <p> Booked by:{item.bookedBy.fullName}</p>
                  <p className="font-light">Staus:{item.status}</p>
                  <p>Check in Date:{formatDate(item.checkInDate)}</p>

                  <p>Check out Date:{formatDate(item.checkOutDate)}</p>
                  <p>Description:{item.roomDesc}</p>
                </div>
              </List.Item>
            );
          }}
        ></List>
      </Modal>
    );
  }
  function Reviews() {
    return (
      <Modal
        open={review}
        onOk={() => {
          setReview(false);
        }}
        onCancel={() => {
          setReview(false);
        }}
      >
        <List
          dataSource={reviewData}
          pagination={{
            hideOnSinglePage: true,
            align: "center",
            pageSize: 3,
          }}
          renderItem={(item: any) => {
            return (
              <List.Item>
                <div className="flex flex-col">
                  <p>Review by{item.reviewBy.fullName}</p>
                  <p>
                    <Rate disabled value={item.rating} />
                  </p>
                  <p>Description:{item.reviewDesc}</p>
                  <p>Reviewed On:{item.reviewDate}</p>
                </div>
              </List.Item>
            );
          }}
        />
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
        Add new room
      </Button>
      <AddRoom />
      <ChangeStatus />
      <Reviews />
      <List
        dataSource={data}
        pagination={{
          align: "center",
          pageSize: 3,
          hideOnSinglePage: true,
        }}
        renderItem={(item: any) => {
          //   console.log(item.id);
          return (
            <List.Item
              actions={[
                <div className="flex flex-col gap-1">
                  <Button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      axios
                        .get(`${url}/room/booking/by/room?roomId=${item.id}`)
                        .then((res) => {
                          setStatusData(res.data.data);
                        });
                      setStatus(true);
                    }}
                  >
                    Booking Details
                  </Button>
                  <Button
                    onClick={() => {
                      axios
                        .get(`${url}/room/review/by/room?id=${item.id}`)
                        .then((res) => {
                          setReviewData(res.data.data);
                          setReview(true);
                        });
                    }}
                  >
                    Reviews
                  </Button>
                </div>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Image
                    height={100}
                    width={100}
                    src={`${imgUrl}/${item.filename}`}
                  />
                }
                title={<h1 className="m-0 p-0 text-lg">{item.roomType}</h1>}
                description={
                  <div>
                    <Rate disabled value={item.rating} />
                    <p className="font-light">Staus:{item.status}</p>
                  </div>
                }
              />
              <div className="flex flex-col items-start  w-[40%] ">
                <p className="py-2">Price:NRs.{item.price}</p>
                <p>Beds:{item.bed}</p>
                <p>Total Person:{item.totalPerson}</p>
                <p>Description:{item.roomDesc}</p>
              </div>
            </List.Item>
          );
        }}
      ></List>
    </div>
  );
};

export default Roomcontainer;

import axios from "axios";
import { useEffect, useState } from "react";
import { imgUrl, url } from "../../api/url";

import { Button, Descriptions, Image, List, Modal, Rate } from "antd";
import EditInfo from "./EditInfo";
import { setGlobalState, useGlobalState } from "../../context/globalHook";
import { header } from "../../api/header";

const HotelInfo = () => {
  const [data, setData] = useState({} as any);
  const [token] = useGlobalState("token");
  const [edit, setEdit] = useGlobalState("hoteledit");
  const [hoteId] = useGlobalState("hadminhotelid");
  const [reviewData, setReviewData] = useState([]);
  const [review, setReview] = useState(false);
  function HotelReviews() {
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

  useEffect(() => {
    axios.get(`${url}/hotel/logged/user`, header(token)).then((res) => {
      setData(res.data.data);

      if (res.data.data.id) {
        setGlobalState("hadminhotelid", res.data.data.id);
      }
    });
  }, [edit]);
  if (edit) {
    return <EditInfo data={data} />;
  } else {
    return (
      <div>
        <div className="p-10">
          <HotelReviews />
          <Descriptions
            title={<h1 className="m-0 p-0">Hotel Information</h1>}
            extra={
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    axios
                      .get(`${url}/hotel/review/by/hotel?id=${hoteId}`)
                      .then((res) => {
                        setReviewData(res.data.data);
                        setReview(true);
                      });
                  }}
                >
                  Get Reviews
                </Button>
              </div>
            }
            bordered
            column={1}
          >
            <Descriptions.Item label={"Hotel Image"}>
              <Image
                src={`${imgUrl}/${data.filename}`}
                height={200}
                width={200}
              />
            </Descriptions.Item>
            <Descriptions.Item label={"Hotel Name"}>
              {data.hotelName}
            </Descriptions.Item>
            <Descriptions.Item label={"Rating"}>
              <Rate disabled value={data.ratings} />
            </Descriptions.Item>
            <Descriptions.Item label={"Hotel Description"}>
              {data.hotelDesc}
            </Descriptions.Item>
            <Descriptions.Item label={"Located at:"}>
              {data.placeName}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    );
  }
};

export default HotelInfo;

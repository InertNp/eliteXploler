import { Card, List, Rate } from "antd";
import { HotelIdprops } from "./HotelComment";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../api/url";
import { useGlobalState } from "../../context/globalHook";
const CommentList = ({ hotelId }: HotelIdprops) => {
  const [data, setData] = useState([]);
  const [load] = useGlobalState("hotelReviewLoad");
  useEffect(() => {
    axios.get(`${url}/hotel/review/by/hotel?id=${hotelId}`).then((res) => {
      setData(res.data.data);
    });
  }, [load]);
  return (
    <List
      grid={{ sm: 1, md: 2, lg: 4, gutter: 10 }}
      className="flex flex-col items-center justify-center my-10"
      pagination={{ align: "center", hideOnSinglePage: true, pageSize: 4 }}
      dataSource={data}
      renderItem={(item: any) => (
        <List.Item className="flex flex-row">
          <Card className="w-64 h-56  shadow-blue-200 shadow-md" key={item.id}>
            <h1 className="text-start font-semibold text-lg">
              {item.reviewBy.fullName}
            </h1>
            <Rate disabled value={item.rating} />
            <p className="text-slate-800 ">"{item.reviewDesc}"</p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CommentList;

import { Image, List, Rate } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { imgUrl, url } from "../../api/url";

interface props {
  hotelId: string;
}
interface itemProps {
  filename: string;
  roomType: string;
  roomDesc: string;
  rating: number;
}
const RoomList = ({ hotelId }: props) => {
  console.log(hotelId);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${url}/room?id=${hotelId}`).then((e) => {
      setData(e.data.data);
    });
  }, []);
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      pagination={{
        pageSize: 3,
        hideOnSinglePage: true,
        align: "center",
      }}
      renderItem={(item: itemProps) => (
        <List.Item
          className="hover:bg-slate-200 cursor-pointer "
          onClick={() => {}}
        >
          <List.Item.Meta
            className="px-10"
            avatar={
              <Image
                className="mix-blend-multiply"
                preview={false}
                height={100}
                width={100}
                src={`${imgUrl}/${item.filename}`}
              />
            }
            title={item.roomType}
            description={
              <div>
                <Rate disabled value={item.rating} />
                <p>{item.roomDesc}</p>
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default RoomList;

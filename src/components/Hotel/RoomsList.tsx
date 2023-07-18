import { Image, List, Rate } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { imgUrl, url } from "../../api/url";
import { useNavigate } from "react-router-dom";

interface props {
  hotelId: string;
}
interface itemProps {
  filename: string;
  roomType: string;
  roomDesc: string;
  rating: number;
  price: number;
  id: number;
}
const RoomList = ({ hotelId }: props) => {
  // console.log(hotelId);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${url}/room?id=${hotelId}`).then((e) => {
      setData(e.data.data);
      // console.log(e);
    });
  }, []);
  function handleClick(id: number) {
    // console.log(id);
    navigate(`/room/${id}`);
  }
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      pagination={{
        pageSize: 2,
        hideOnSinglePage: true,
        align: "center",
      }}
      renderItem={(item: itemProps) => (
        <List.Item
          className="hover:bg-slate-200 cursor-pointer "
          onClick={() => handleClick(item.id)}
        >
          <List.Item.Meta
            className="px-10"
            avatar={
              <Image
                className="mix-blend-multiply"
                preview={false}
                height={200}
                width={200}
                src={`${imgUrl}/${item.filename}`}
              />
            }
            title={
              <div>
                {item.roomType}{" "}
                <p className="m-0 p-0 font-thin text-sm">
                  Price:NRs.{item.price}
                </p>
              </div>
            }
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

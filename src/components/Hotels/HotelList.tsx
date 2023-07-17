import { useNavigate } from "react-router-dom";

import { Card, Image, Rate } from "antd";
import { useState } from "react";
interface props {
  item: { name: string; img: string; content: string; rating: number };
}
const HotelList = ({ item }: props) => {
  const [load, setLoad] = useState(true);

  const navigate = useNavigate();
  return (
    <Card
      className=" w-72 hover:bg-gray-100 hover:cursor-pointer"
      bordered={false}
      cover={
        <Image
          onLoad={() => {
            setLoad(false);
          }}
          src={`https://source.unsplash.com/1920x1080?${item.img}`}
          preview={false}
        />
      }
      loading={load}
      onClick={() => {
        navigate(`/hotels/${item.name}`);
      }}
    >
      <h1 className="m-0 p-0 text-xl text-center font-semibold ">
        {item.name}
      </h1>
      <div className="flex flex-col items-center justify-center">
        <Rate disabled value={item.rating} />
        {item.content}
      </div>
    </Card>
  );
};

export default HotelList;

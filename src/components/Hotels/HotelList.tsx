import { useNavigate } from "react-router-dom";

import { Card, Image, Rate } from "antd";
import { useState } from "react";
import { imgUrl } from "../../api/url";
interface props {
  item: {
    id: number;
    hotelName: string;
    hotelDesc: string;
    ratings: number;
    filename: string;
    placeId: number;
  };
}
const HotelList = ({ item }: props) => {
  const [load, setLoad] = useState(true);
  // console.log(item);
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
          src={`${imgUrl}/${item.filename}`}
          preview={false}
        />
      }
      loading={load}
      onClick={() => {
        navigate(`/hotel/${item.id}`);
      }}
    >
      <h1 className="m-0 p-0 text-xl text-center font-semibold capitalize ">
        {item.hotelName}
      </h1>
      <div className="flex flex-col items-center justify-center">
        <Rate disabled value={item.ratings} />
        {item.hotelDesc.slice(0, 80)}
        {"...."}
      </div>
    </Card>
  );
};

export default HotelList;

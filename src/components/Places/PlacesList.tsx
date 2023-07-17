import { Card, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../context/globalHook";
import { imgUrl } from "../../api/url";
import { useState } from "react";

interface props {
  item: { placeName: string; filename: string; shortDesc: string };
}
const PlacesList = ({ item }: props) => {
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  return (
    <Card
      className=" w-72 hover:bg-gray-100 hover:cursor-pointer"
      bordered={false}
      cover={
        <Image
          height={200}
          onLoad={() => {
            setLoad(false);
          }}
          src={`${imgUrl}/${item.filename}`}
          preview={false}
        />
      }
      loading={load}
      onClick={() => {
        navigate(`/hotels/${item.placeName}`);
      }}
    >
      <h1 className="m-0 p-0 text-xl text-center font-semibold ">
        {item.placeName}
      </h1>
      {item.shortDesc}
    </Card>
  );
};

export default PlacesList;

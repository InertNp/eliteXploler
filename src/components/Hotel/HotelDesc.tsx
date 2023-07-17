import { Image, Rate } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { imgUrl, url } from "../../api/url";

interface props {
  hotelId: string;
}
interface dataprops {
  filename: string;
  hotelDesc: string;
  hotelName: string;
  ratings: number;
}
const HotelDesc = ({ hotelId }: props) => {
  const [data, setData] = useState({} as dataprops);

  useEffect(() => {
    axios.get(`${url}/hotel/get/by/id/${hotelId}`).then((e) => {
      setData(e.data.data);
    });
  }, []);
  return (
    <div className="hidden sm:flex flex-col w-[400px]">
      <h1 className="m-0 p-0">{data.hotelName}</h1>
      <Rate disabled value={1} className="py-2" />
      <Image
        height={300}
        width={400}
        className="object-cover"
        src={data.filename == undefined ? "" : `${imgUrl}/${data.filename}`}
      />
      <p>{data.hotelDesc}</p>
    </div>
  );
};

export default HotelDesc;

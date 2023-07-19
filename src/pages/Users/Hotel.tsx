import { Link, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import HotelDesc from "../../components/Hotel/HotelDesc";
import HotelService from "../../components/Hotel/HotelService";
import HotelComment from "../../components/Hotel/HotelComment";
import { Button } from "antd/es/radio";

const Hotel = () => {
  const slug = useParams();
  const navigate = useNavigate();
  const hotelId = slug.hotelId || "null";

  return (
    <>
      <div className=" px-12 py-10 relative flex-row flex gap-5">
        <span
          onClick={() => {
            navigate(-1);
          }}
          className="absolute top-0 left-0 p-2 text-[40px] hover:text-blue-400 cursor-pointer"
        >
          <BiArrowBack />
        </span>
        <HotelDesc hotelId={hotelId} />
        <HotelService hotelId={hotelId} />
      </div>

      <HotelComment hotelId={hotelId} />
    </>
  );
};

export default Hotel;

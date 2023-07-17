import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import HotelDesc from "../components/Hotel/HotelDesc";
import HotelService from "../components/Hotel/HotelService";

const Hotel = () => {
  const slug = useParams();

  const hotelId = slug.hotelId || "null";

  return (
    <div className=" px-12 py-10 relative flex-row flex gap-5">
      <Link
        to={`/hotels/${slug.placeId}`}
        className="absolute top-0 left-0 p-2 text-[40px]"
      >
        <BiArrowBack />
      </Link>
      <HotelDesc hotelId={hotelId} />
      <HotelService hotelId={hotelId} />
    </div>
  );
};

export default Hotel;

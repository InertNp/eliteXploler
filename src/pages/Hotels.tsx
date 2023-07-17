import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import HotelCon from "../components/Hotels/HotelCon";

const Hotels = () => {
  const slug = useParams();
  const placeid = slug.placeId || "null";

  return (
    <div className=" px-12 py-4 relative">
      <Link to={"/places"} className="absolute top-0 left-0 p-2 text-[40px]">
        <BiArrowBack />
      </Link>

      <HotelCon id={placeid} />
    </div>
  );
};

export default Hotels;

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import HotelCon from "../components/Hotels/HotelCon";
const Hotels = () => {
  const slug = useParams();
  const placename = slug.placename || "";
  useEffect(() => {}, []);
  return (
    <div className=" px-12 py-4 relative">
      <Link to={"/places"} className="absolute top-0 left-0 p-2 text-[40px]">
        <BiArrowBack />
      </Link>
      <div className="w-full">
        <h1 className="text-center m-0 p-0">{placename}</h1>
      </div>
      <HotelCon placename={placename} />
    </div>
  );
};

export default Hotels;

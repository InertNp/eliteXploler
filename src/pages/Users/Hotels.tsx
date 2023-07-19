import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import HotelCon from "../../components/Hotels/HotelCon";
import { Button } from "antd";

const Hotels = () => {
  const navigate = useNavigate();
  const slug = useParams();
  const placeid = slug.placeId || "null";

  return (
    <div className=" px-12 py-4 relative">
      <Button
        type="ghost"
        onClick={() => {
          navigate(-1);
        }}
        className="absolute top-0 left-0 p-2 text-[40px] hover:text-blue-400"
      >
        <BiArrowBack />
      </Button>

      <HotelCon id={placeid} />
    </div>
  );
};

export default Hotels;

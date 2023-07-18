import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../api/url";
import RoomDetail from "../components/Room/RoomDetail";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "antd";

import { useGlobalState } from "../context/globalHook";
import PackageDetail from "../components/Package/PackageDetail";

const Package = () => {
  const navigate = useNavigate();
  const { packageId } = useParams();
  const [load] = useGlobalState("hotelRoomReviewLoad");
  const [data, setData] = useState({});
  console.log(packageId);
  useEffect(() => {
    axios.get(`${url}/room/by/id/${packageId}`).then((res) => {
      setData(res.data.data);
      //   console.log(res.data.data);
    });
  }, [load]);
  return (
    <div className="relative w-full p-12">
      <Button
        type="ghost"
        onClick={() => {
          navigate(-1);
        }}
        className="absolute top-0 left-0 p-2 text-[40px] hover:text-blue-400"
      >
        <BiArrowBack />
      </Button>
      <PackageDetail data={data} />
    </div>
  );
};

export default Package;

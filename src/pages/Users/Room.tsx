import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../api/url";
import RoomDetail from "../../components/Room/RoomDetail";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "antd";
import RoomComment from "../../components/Room/RoomComment";
import { useGlobalState } from "../../context/globalHook";
import RoomCom from "../../components/Room/RoomCom";

const Room = () => {
  const [isLoggedIn] = useGlobalState("isLoggedIn");
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [load] = useGlobalState("hotelRoomReviewLoad");
  const [data, setData] = useState({});
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    axios.get(`${url}/room/by/id/${roomId}`).then((res) => {
      setData(res.data.data);
    });
    axios.get(`${url}/room/review/by/room?id=${roomId}`).then((res) => {
      setCommentData(res.data.data);
      // console.log(res.data);
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
      <RoomDetail data={data} />
      {isLoggedIn ? <RoomCom roomId={roomId} /> : null}
      <RoomComment data={commentData} />
    </div>
  );
};

export default Room;

import { useEffect, useState } from "react";
import Roomcontainer from "../../HotelAdmin/rooms/Roomcontainer";
import { useGlobalState } from "../../context/globalHook";
import axios from "axios";
import { url } from "../../api/url";
import { header } from "../../api/header";

const HAroom = () => {
  const [id, setId] = useState(0);

  const [token] = useGlobalState("token");

  useEffect(() => {
    axios.get(`${url}/hotel/logged/user`, header(token)).then((res) => {
      setId(res.data.data.id);
    });
  }, []);
  return (
    <div className="w-full h-full">
      <Roomcontainer hotelId={id} />
    </div>
  );
};

export default HAroom;

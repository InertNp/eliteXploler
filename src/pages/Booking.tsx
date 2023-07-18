import axios from "axios";
import { useEffect } from "react";
import { header } from "../api/header";
import { url } from "../api/url";
import { useGlobalState } from "../context/globalHook";

const Booking = () => {
  const [token] = useGlobalState("token");
  //   console.log(token);
  useEffect(() => {
    axios.get(`${url}/room/booking/user`, header(token)).then((res) => {
      console.log(res);
    });
  }, []);
  return <div></div>;
};

export default Booking;

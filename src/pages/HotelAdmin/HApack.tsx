import { useEffect, useState } from "react";

import { useGlobalState } from "../../context/globalHook";
import axios from "axios";
import { url } from "../../api/url";
import { header } from "../../api/header";
import PackContainer from "../../HotelAdmin/Package/PackContainer";

const HApack = () => {
  const [id, setId] = useState(0);

  const [token] = useGlobalState("token");

  useEffect(() => {
    axios.get(`${url}/hotel/logged/user`, header(token)).then((res) => {
      setId(res.data.data.id);
    });
  }, []);
  return (
    <div className="w-full h-full">
      <PackContainer hotelId={id} />
    </div>
  );
};

export default HApack;

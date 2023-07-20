import { useEffect, useState } from "react";
import PlacesList from "../../components/Places/PlacesList";

import axios from "axios";
import { url } from "../../api/url";
import { message } from "antd";

const Places = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/places`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch((err) => {
        if (err) {
          message.warning("No Places Found");
        }
      });
  }, []);

  return (
    <div className=" flex flex-wrap flex-row gap-5 mx-20 my-10 justify-center">
      {data.map((item, index) => {
        return <PlacesList item={item} key={index} />;
      })}
    </div>
  );
};

export default Places;

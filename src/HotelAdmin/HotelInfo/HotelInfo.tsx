import axios from "axios";
import { useEffect, useState } from "react";
import { dummyimgUrl, url } from "../../api/url";

import { Button, Descriptions, Image } from "antd";
import EditInfo from "./EditInfo";
import { useGlobalState } from "../../context/globalHook";

const HotelInfo = () => {
  const [data, setData] = useState({} as any);

  const [edit, setEdit] = useGlobalState("hoteledit");
  useEffect(() => {
    axios.get(`${url}/hotel/get/by/id/1`).then((res) => {
      setData(res.data.data);
    });
  }, []);
  if (edit) {
    return <EditInfo data={data} />;
  } else {
    return (
      <div>
        <div className="p-10">
          <Descriptions
            title={<h1 className="m-0 p-0">Hotel Information</h1>}
            extra={
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit
                </Button>
              </div>
            }
            bordered
            column={1}
          >
            <Descriptions.Item label={"Hotel Image"}>
              <Image src={`${dummyimgUrl}?sky`} height={200} width={200} />
            </Descriptions.Item>
            <Descriptions.Item label={"Hotel Name"}>
              {data.hotelName}
            </Descriptions.Item>
            <Descriptions.Item label={"Hotel Description"}>
              {data.hotelDesc}
            </Descriptions.Item>
            <Descriptions.Item label={"Located at:"}>
              {data.placeName}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    );
  }
};

export default HotelInfo;

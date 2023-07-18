import { Descriptions, Image, Rate } from "antd";
import { imgUrl } from "../../api/url";
import Booking from "./Booking";

import { useGlobalState } from "../../context/globalHook";
import { Link } from "react-router-dom";

const PackageDetail = ({ data }: any) => {
  //   console.log(data);
  const [isLoggedIn] = useGlobalState("isLoggedIn");
  return (
    <div className="w-full flex  gap-5  ">
      <div className="w-1/2 flex  flex-col ">
        <div className=" w-full flex justify-center">
          <Image
            height={200}
            width={400}
            src={`${imgUrl}/${data.filename}`}
            className="object-cover"
          />
        </div>
        <Descriptions
          title={<h1 className="text-center m-0 p-0">Package Information</h1>}
          bordered
          column={1}
        >
          <Descriptions.Item label="Room Type">
            {data.roomType}
          </Descriptions.Item>
          <Descriptions.Item label="Rating">
            <Rate disabled value={data.rating} />
          </Descriptions.Item>
          <Descriptions.Item label="Price">NRs.{data.price}</Descriptions.Item>
          <Descriptions.Item label="Status">{data.status}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {data.roomDesc}
          </Descriptions.Item>
        </Descriptions>
      </div>

      <main className="w-1/2">
        {isLoggedIn ? (
          <Booking packageId={data.id} />
        ) : (
          <div>
            Please <Link to={"/login"}>Login</Link> to Book this Package.
          </div>
        )}
      </main>
    </div>
  );
};

export default PackageDetail;

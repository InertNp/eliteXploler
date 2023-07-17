import { List } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../api/url";
import { FcPackage } from "react-icons/fc";
interface props {
  hotelId: string;
}
interface dataprops {
  packageName: string;
  packageDesc: string;
  price: number;
  id: number;
}
const PackageList = ({ hotelId }: props) => {
  // console.log(hotelId);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${url}/package/hotel?hotelId=${hotelId}`).then((e) => {
      setData(e.data.data);
      // console.log(e.data.data);
    });
  }, []);
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      pagination={{
        pageSize: 2,
        hideOnSinglePage: true,
        align: "center",
      }}
      renderItem={(item: dataprops) => (
        <List.Item
          className="hover:bg-slate-200 cursor-pointer"
          onClick={() => {}}
        >
          <List.Item.Meta
            avatar={<FcPackage size={90} />}
            title={
              <div>
                {item.packageName}
                <p className="m-0 p-0 font-thin text-sm">
                  Price:NRs.{item.price}
                </p>
              </div>
            }
            description={
              <div>
                <p>{item.packageDesc}</p>
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default PackageList;

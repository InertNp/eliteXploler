import { useEffect, useState } from "react";

import { List } from "antd";

import { getPackBookingList } from "../Functions/GetPack";
import { packageBookType } from "../Types/PackageData";
import { formatDate } from "../../utils/FormatDate";

const PackBooking = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPackBookingList().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <List
      className="w-full px-10 py-2"
      pagination={{
        align: "center",
        pageSize: 3,
        hideOnSinglePage: true,
      }}
      dataSource={data}
      renderItem={(item: packageBookType) => {
        // console.log(item);

        return (
          <List.Item className="flex flex-row w-full justify-center ">
            <div className="flex flex-col ">
              <p>Hotel Name: {item.hotel.hotelName}</p>
              <p>Package Name:{item.apackage.packageName}</p>
            </div>
            <div className="flex flex-col">
              <p>Booked by:{item.bookedBy.fullName}</p>
              <p>Price:{item.apackage.price}</p>
            </div>
            <div className="flex flex-col">
              <p>Check In:{formatDate(item.checkInDate)}</p>
              <p>Check Out:{formatDate(item.checkOutDate)}</p>
              <p>Status:{item.status}</p>
            </div>
          </List.Item>
        );
      }}
    />
  );
};

export default PackBooking;

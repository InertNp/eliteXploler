import { useEffect, useState } from "react";

import { List } from "antd";

import { roomBookingDataType } from "../Types/RoomData";
import { getRoomBookingList } from "../Functions/GetRoomBooks";
import { formatDate } from "../../utils/FormatDate";

const RoomBookings = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRoomBookingList().then((res) => {
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
      renderItem={(item: roomBookingDataType) => {
        // console.log(item);
        return (
          <List.Item className="flex flex-row w-full justify-center ">
            <div className="flex flex-col ">
              <p>Hotel Name: {item.hotel.hotelName}</p>
              <p>Room Type:{item.room.roomType}</p>
            </div>
            <div className="flex flex-col">
              <p>Booked by:{item.bookedBy.fullName}</p>
              <p>Price:{item.room.price}</p>
            </div>
            <div className="flex flex-col">
              <p>Check In{formatDate(item.checkInDate)}</p>
              <p>Check Out{formatDate(item.checkOutDate)}</p>
              <p>Status:{item.status}</p>
            </div>
          </List.Item>
        );
      }}
    />
  );
};

export default RoomBookings;

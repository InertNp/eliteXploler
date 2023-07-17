import { Menu } from "antd";
import { useState } from "react";
import RoomList from "./RoomsList";
import PackageList from "./PackageList";
interface props {
  hotelId: string;
}
const HotelService = ({ hotelId }: props) => {
  const [opened, setOpened] = useState("1");
  const items = [
    { key: 1, label: "Rooms" },
    { key: 2, label: "Packages" },
  ];
  return (
    <div className="w-full">
      <Menu
        mode="horizontal"
        onClick={(e) => {
          setOpened(e.key);
        }}
        items={items}
        defaultSelectedKeys={["1"]}
      />
      {opened == "1" ? (
        <RoomList hotelId={hotelId} />
      ) : (
        <PackageList hotelId={hotelId} />
      )}
    </div>
  );
};

export default HotelService;

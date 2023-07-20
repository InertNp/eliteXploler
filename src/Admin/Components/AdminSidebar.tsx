import { Menu } from "antd";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  const items = [
    { key: "hotels", label: <Link to={"/dashboard"}>Hotels</Link> },
    { key: "Room Bookings", label: <Link to={"/rooms"}>Room Bookings</Link> },
    { key: "Packages", label: <Link to={"/package"}>Package Bookings</Link> },
  ];
  function onClick() {}
  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultOpenKeys={["hotel"]}
      mode="inline"
      items={items}
    />
  );
};

export default AdminSideBar;

import { Menu } from "antd";
import { Link } from "react-router-dom";

const SideBar = () => {
  const items = [
    { key: "hotel", label: <Link to={"/dashboard"}>Hotels</Link> },
    { key: "Rooms", label: <Link to={"/dashboard"}>Rooms</Link> },
    { key: "Packages", label: <Link to={"/dashboard"}>Packages</Link> },
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

export default SideBar;

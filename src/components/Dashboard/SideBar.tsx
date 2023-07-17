import { Menu } from "antd";

const SideBar = () => {
  const items = [
    {
      key: 1,
      label: "Panel",
    },
    {
      key: 1,
      label: "Panel",
    },
    {
      key: 1,
      label: "Panel",
    },

    {
      key: 1,
      label: "Panel",
    },
  ];
  return (
    <Menu
      className=""
      onClick={() => {}}
      style={{ width: 256 }}
      mode="inline"
      items={items}
    />
  );
};

export default SideBar;

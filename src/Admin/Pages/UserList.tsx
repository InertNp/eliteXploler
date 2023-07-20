import { useEffect, useState } from "react";
import { getUsers } from "../Functions/GetUser";
import { List } from "antd";
import UserListComponent from "../Components/Users/UserListComponent";
import { useGlobalState } from "../../context/globalHook";

const UserList = () => {
  const [data, setData] = useState([]);
  const [load] = useGlobalState("userListLoad");
  useEffect(() => {
    getUsers().then((res) => {
      setData(res);
    });
  }, [load]);
  return (
    <div className="w-full h-full px-10 py-2">
      {
        <List
          pagination={{
            align: "center",
            hideOnSinglePage: true,
            pageSize: 2,
          }}
          dataSource={data}
          renderItem={(item: any) => {
            return <UserListComponent user={item.user} login={item.login} />;
          }}
        />
      }
    </div>
  );
};

export default UserList;

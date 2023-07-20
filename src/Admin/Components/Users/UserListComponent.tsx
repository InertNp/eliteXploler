import { Button, List, message } from "antd";
import { userDataTypes } from "../../Types/UserData";
import axios from "axios";
import { url } from "../../../api/url";
import { useGlobalState } from "../../../context/globalHook";

const UserListComponent = ({ user, login }: userDataTypes) => {
  const [load, setLoad] = useGlobalState("userListLoad");
  function changeRoletoHadmin() {
    axios
      .get(`${url}/user/role?roleId=2&userId=${user.id}`)
      .then(() => {
        message.success("Sucessfully Changed", 0.5);
        setLoad(!load);
      })
      .catch((err) => {
        if (err) {
          message.error("Error Changing role");
        }
      });
  }
  function changeRoletoUser() {
    axios
      .get(`${url}/user/role?roleId=3&userId=${user.id}`)
      .then(() => {
        message.success("Sucessfully Changed", 0.5);
        setLoad(!load);
      })
      .catch((err) => {
        if (err) {
          message.error("Error Changing role");
        }
      });
  }
  function changeRoletoAdmin() {
    axios
      .get(`${url}/user/role?roleId=1&userId=${user.id}`)
      .then(() => {
        message.success("Sucessfully Changed", 0.5);
        setLoad(!load);
      })
      .catch((err) => {
        if (err) {
          message.error("Error Changing role");
        }
      });
  }
  return (
    <List.Item
      className="flex flex-row "
      actions={[
        <div className="flex flex-col gap-2">
          <p>Change Role:</p>
          <Button onClick={changeRoletoHadmin}>Hotel Admin</Button>
          <Button onClick={changeRoletoUser}>User</Button>
          <Button onClick={changeRoletoAdmin}>Admin</Button>
        </div>,
      ]}
    >
      <div className="flex flex-col gap-3">
        <p className="font-semibold">Name:{user.fullName}</p>
        <p className="font-semibold">Email:{user.userName}</p>
        <p className="font-semibold">Role:{login.userRoles}</p>
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-light">Status:{login.status}</p>
      </div>
    </List.Item>
  );
};

export default UserListComponent;

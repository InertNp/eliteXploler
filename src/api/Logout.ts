import { message } from "antd";
import { setGlobalState } from "../context/globalHook";

export const logout = () => {
  setGlobalState("isLoggedIn", false);
  localStorage.clear();
  setGlobalState("token", "");
  setGlobalState("fullName", "");
  setGlobalState("userRole", "");
  message.success(`Logout Sucessful`, 1);
};

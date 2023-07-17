import { setGlobalState } from "../context/globalHook";

export const logout = () => {
  setGlobalState("isLoggedIn", false);
  localStorage.clear();
  setGlobalState("token", "");
  setGlobalState("fullName", "");
  setGlobalState("userRole", "");
};

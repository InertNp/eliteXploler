import axios from "axios";
import { url } from "./url";
import { message } from "antd";
import { setGlobalState } from "../context/globalHook";
interface loginPorps {
  email: string;
  password: string;
}
export function login(data: loginPorps) {
  axios
    .post(`${url}/login`, {
      username: data.email,
      password: data.password,
    })
    .then((e) => {
      message.success(`Login Sucessful`);

      localStorage.setItem("token", e.data.token);
      localStorage.setItem("userRole", e.data.userRole);
      localStorage.setItem("fullName", e.data.fullName);
      localStorage.setItem("isLoggedIn", "true");
      setGlobalState("isLoggedIn", true);
      setGlobalState("token", e.data.token);
      setGlobalState("fullName", e.data?.fullName);
      setGlobalState("userRole", e.data?.userRole);
    })
    .catch((err) => {
      console.log(err);
      message.warning("Username or Password Incorrect");
    });
}

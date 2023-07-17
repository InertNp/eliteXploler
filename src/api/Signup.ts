import { message } from "antd";
import axios from "axios";
import { url } from "./url";
interface signupProps {
  email: string;
  password: string;
  name: string;
  number: string;
}
export function signup(data: signupProps) {
  console.log(data);
  axios
    .post(`${url}/user/details`, {
      user: {
        fullName: data.name,
        phoneNo: data.number,
      },
      login: {
        email: data.email,
        password: data.password,
      },
    })
    .then((e) => {
      console.log(e);
      message.success(`Register Sucessful`);
    })
    .catch((err) => {
      console.log(err);
      message.warning("Email Already Exists");
    });
}

import axios from "axios";
import { url } from "../../api/url";
import { message } from "antd";

export async function getUsers() {
  try {
    const { data: response } = await axios.get(`${url}/user/all`);
    return response.data;
  } catch (err) {
    if (err) {
      message.error("An Error Occured While fetching Users List");
    }
  }
}

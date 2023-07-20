import axios from "axios";
import { url } from "../../api/url";
import { message } from "antd";

export async function getPlaceList() {
  try {
    const { data: response } = await axios.get(`${url}/places`);
    return response.data;
  } catch (err) {
    if (err) {
      message.error("An Error Occured While fetching Places List");
    }
  }
}

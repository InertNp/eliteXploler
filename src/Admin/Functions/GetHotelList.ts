import axios from "axios";
import { url } from "../../api/url";
import { message } from "antd";

export async function getHotelList() {
  try {
    const { data: response } = await axios.get(`${url}/hotel/all`);
    return response.data;
  } catch (err) {
    if (err) {
      message.error("An Error Occured While fetching Hotel List");
    }
  }
}

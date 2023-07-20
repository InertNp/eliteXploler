import axios from "axios";
import { url } from "../../api/url";
import { message } from "antd";

export async function getPackBookingList() {
  try {
    const { data: response } = await axios.get(`${url}/package/booking/all`);
    return response.data;
  } catch (err) {
    if (err) {
      message.error("An Error Occured While fetching Booking List");
    }
  }
}

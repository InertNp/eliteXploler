import axios from "axios";
import { url } from "../../api/url";
import { message } from "antd";

interface props {
  id: number;
  url: string;
}
export function handleDelete(data: props) {
  axios
    .get(`${url}/${data.url}/${data.id}`)
    .then(() => {
      message.success("Delete Sucessfull");
      window.location.reload();
    })
    .catch((err) => {
      if (err) {
        message.error("Delete Unsuccessfull");
      }
    });

  return "joker";
}

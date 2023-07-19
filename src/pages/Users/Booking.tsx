import axios from "axios";
import { useEffect, useState } from "react";
import { header } from "../../api/header";
import { url } from "../../api/url";
import { useGlobalState } from "../../context/globalHook";
import { Button, List } from "antd";
import BookingItems from "../../components/Booking/BookingItems";

const Booking = () => {
  const [token] = useGlobalState("token");

  const [load, setLoad] = useState(true);
  const [fullName] = useGlobalState("fullName");
  const [data, setData] = useState([]);

  function handleCancel(id: number) {
    // console.log(id);
    axios
      .get(
        `${url}/room/booking/change/status?bookingId=${id}&status=Cancelled`,
        header(token)
      )
      .then(() => {
        // console.log(res);
      });
    setLoad(!load);
    window.location.reload();
  }

  useEffect(() => {
    axios.get(`${url}/room/booking/user`, header(token)).then((res) => {
      setData(res.data.data);
    });
  }, [load]);

  return (
    <>
      <h1 className="text-center capitalize">
        Rooms and Packages of {fullName}
      </h1>
      <List
        className="px-10 py-10"
        pagination={{ align: "center", hideOnSinglePage: true, pageSize: 4 }}
        dataSource={data}
        renderItem={(item: any) => (
          <List.Item
            className="flex flex-row"
            actions={[
              <Button disabled>{item.status}</Button>,
              <Button
                onClick={() => {
                  handleCancel(item.id);
                }}
              >
                Cancel
              </Button>,
            ]}
          >
            <BookingItems data={item} />
          </List.Item>
        )}
      />
    </>
  );
};

export default Booking;

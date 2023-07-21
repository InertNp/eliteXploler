import axios from "axios";
import { useEffect, useState } from "react";
import { header } from "../../api/header";
import { url } from "../../api/url";
import { useGlobalState } from "../../context/globalHook";
import { Button, List } from "antd";
import BookingItems from "../../components/Booking/BookingItems";
import KhaltiCheckout from "khalti-checkout-web";
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
  function handleKhalti(price: number) {
    let config = {
      // replace this key with yours
      publicKey: "test_public_key_5a917d9ca1de4eb2913e5943ca1311ef",
      productIdentity: "Hotel",
      productName: "Room",
      productUrl: "http://192.168.1.71:5173",
      eventHandler: {
        onSuccess(payload: any) {
          // hit merchant api for initiating verfication
          console.log(payload);
        },
        // onError handler is optional
        onError(error: any) {
          // handle errors
          console.log(error);
        },
        onClose() {
          console.log("widget is closing");
        },
      },
      paymentPreference: [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
      ],
    };
    let checkout = new KhaltiCheckout(config);

    // minimum transaction amount must be 10, i.e 1000 in paisa.

    checkout.show({ amount: price * 100 });
  }
  console.log(data);
  return (
    <>
      <h1 className="text-center capitalize">Rooms of {fullName}</h1>
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
              <Button onClick={() => handleKhalti(item.room.price)}>
                Pay
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

import { useEffect, useState } from "react";
import { getHotelList } from "../Functions/GetHotelList";
import { Image, List, Rate } from "antd";
import { hotelDataType } from "../Types/HotelData";
import { imgUrl } from "../../api/url";
import DeleteButton from "../Components/DeleteButton";

const HotelLists = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getHotelList().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <List
      className="w-full "
      pagination={{
        align: "center",
        pageSize: 3,
        hideOnSinglePage: true,
      }}
      dataSource={data}
      renderItem={(item: hotelDataType) => {
        // console.log(item);
        return (
          <List.Item
            actions={[
              <div>
                <DeleteButton id={item.id} />
              </div>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Image
                  src={`${imgUrl}/${item.filename}`}
                  preview={false}
                  height={100}
                  width={100}
                />
              }
              title={item.hotelName}
              description={
                <div className="flex flex-col">
                  <Rate disabled value={item.ratings} />
                  <p>Owned by:{item.owned_by.fullName}</p>
                </div>
              }
            />
          </List.Item>
        );
      }}
    />
  );
};

export default HotelLists;

import { Button, Image, List } from "antd";
import { useEffect, useState } from "react";
import { getPlaceList } from "../Functions/GetPlace";
import AddPlace from "../Components/Place/AddPlace";
import { placeDataType } from "../Types/PlaceType";
import { imgUrl } from "../../api/url";
import DeleteButton from "../Components/DeleteButton";

const PlacesListA = () => {
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    getPlaceList().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div className="w-full ">
      <AddPlace
        add={add}
        changeAdd={(e: boolean) => {
          setAdd(e);
        }}
      />
      <Button
        className="m-2"
        onClick={() => {
          setAdd(true);
        }}
      >
        Add New Place
      </Button>
      <List
        pagination={{
          hideOnSinglePage: true,
          align: "center",
          pageSize: 3,
        }}
        className="w-full pr-10 pl-4"
        dataSource={data}
        renderItem={(item: placeDataType) => {
          return (
            <List.Item
              actions={[
                <DeleteButton id={item.id} url={"places/delete?id="} />,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Image
                    src={`${imgUrl}/${item.filename}`}
                    height={100}
                    width={100}
                  />
                }
                title={
                  <div>
                    <p>{item.placeName}</p>
                  </div>
                }
                description={<div>{item.shortDesc}</div>}
              />
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default PlacesListA;

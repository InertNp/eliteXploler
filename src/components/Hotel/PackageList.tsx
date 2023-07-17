import { Image, List } from "antd";

interface props {
  hotelId: string;
}
const PackageList = ({ hotelId }: props) => {
  console.log(hotelId);
  const data = [
    { title: "Package 1" },
    { title: "Package 2" },
    { title: "Package 3" },
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      pagination={{
        pageSize: 3,
        align: "center",
      }}
      renderItem={(item, index) => (
        <List.Item
          className="hover:bg-slate-200 cursor-pointer"
          onClick={() => {}}
        >
          <List.Item.Meta
            avatar={
              <Image
                className="mix-blend-multiply"
                preview={false}
                height={100}
                width={100}
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
              />
            }
            title={item.title}
            description={
              <div>
                <p>
                  "Ant Design, a design language for background applications, is
                  refined by Ant UED Team"
                </p>
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default PackageList;

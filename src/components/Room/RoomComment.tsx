import { Card, List, Rate } from "antd";
interface roomprops {
  id: number;
  reviewBy: { fullName: string };
  rating: number;
  reviewDesc: string;
}
const RoomComment = ({ data }: any) => {
  console.log(data);
  return (
    <List
      grid={{ sm: 1, md: 2, lg: 4, gutter: 10 }}
      className="flex flex-col items-center justify-center my-10"
      pagination={{ align: "center", hideOnSinglePage: true, pageSize: 4 }}
      dataSource={data}
      renderItem={(item: roomprops) => (
        <List.Item className="flex flex-row">
          <Card className="w-64 h-56  shadow-blue-200 shadow-md" key={item.id}>
            <h1 className="text-start font-semibold text-lg">
              {item.reviewBy.fullName}
            </h1>
            <Rate disabled value={item.rating} />
            <p className="text-slate-800 ">"{item.reviewDesc}"</p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default RoomComment;

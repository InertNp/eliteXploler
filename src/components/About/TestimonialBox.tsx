import { Image } from "antd";
interface props {
  data: {
    img?: string;
    name: string;
    context: string;
  };
}
export const TestimonialBox = ({ data }: props) => {
  const imgUrl = `https://source.unsplash.com/1920x1080?${data.img}`;
  const height = 200;
  const width = 300;
  return (
    <div className="flex-col flex flex-nowrap">
      <Image
        className="object-cover"
        src={imgUrl}
        height={height}
        width={width}
        preview={false}
      />
      <h1 className="text-center text-xl font-semibold">{data.name}</h1>
      <p className="text-center max-w-[300px] ">"{data.context}"</p>
    </div>
  );
};

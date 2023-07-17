import { Image } from "antd";
interface props {
  name: string;
}
export const ServiceBox = ({ name }: props) => {
  const imgUrl = `https://source.unsplash.com/1920x1080?${name}`;
  const height = 200;
  const width = 300;
  return (
    <div className="flex-row">
      <Image
        className="object-cover"
        src={imgUrl}
        height={height}
        width={width}
        preview={{
          visible: false,
          mask: <p className="font-semibold text-2xl capitalize">{name}</p>,
        }}
      />
    </div>
  );
};

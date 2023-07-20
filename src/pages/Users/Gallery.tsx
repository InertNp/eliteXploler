import { Image } from "antd";
import { dummyimgUrl } from "../../api/url";

const Gallery = () => {
  const data = [
    { url: dummyimgUrl + "?random" },
    { url: dummyimgUrl + "?mountain" },
    { url: dummyimgUrl + "?nepal" },
    { url: dummyimgUrl + "?kathmandu" },
    { url: dummyimgUrl + "?war" },
    { url: dummyimgUrl + "?rivers" },
    { url: dummyimgUrl + "?random" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10">
      {data.map((e: any, index) => {
        return <ImageList url={e.url} key={index} />;
      })}
    </div>
  );
};

export default Gallery;

function ImageList({ url }: any) {
  return (
    <div>
      <Image className="h-auto max-w-full rounded-lg" src={url} />
    </div>
  );
}

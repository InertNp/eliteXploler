import { Carousel, Image } from "antd";

const Carausel = () => {
  const imgUrl = `https://source.unsplash.com/1920x1080`;
  const height = "100%";
  const width = "100%";
  return (
    <Carousel
      autoplay
      className={`max-w-screen  lg:max-h-[600px]
      md:max-h-[700px] max-h-[100%]
      overflow-hidden`}
    >
      <Image
        src={`${imgUrl}?kathmandu`}
        preview={false}
        className="object-cover w-screen"
        width={width}
        height={height}
      />

      <Image
        src={`${imgUrl}?mountain`}
        preview={false}
        className="object-cover"
        width={width}
        height={height}
      />

      <Image
        src={`${imgUrl}?rivers`}
        preview={false}
        className="object-cover"
        width={width}
        height={height}
      />

      <Image
        src={`${imgUrl}?nepal`}
        preview={false}
        className="object-cover"
        width={width}
        height={height}
      />
    </Carousel>
  );
};

export default Carausel;

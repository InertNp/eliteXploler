import { Image, Rate } from "antd";

const HotelDesc = () => {
  return (
    <div className="hidden sm:flex flex-col w-[400px]">
      <h1 className="m-0 p-0">HotelName</h1>
      <Rate disabled value={1} className="py-2" />
      <Image
        height={300}
        width={400}
        className="object-cover"
        src="https://source.unsplash.com/1920x1080?hotel"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        perferendis veritatis, fugiat nobis doloremque dignissimos, aut,
        obcaecati commodi blanditiis similique recusandae repellendus saepe fuga
        error tenetur aliquid expedita! Ab, nihil?
      </p>
    </div>
  );
};

export default HotelDesc;

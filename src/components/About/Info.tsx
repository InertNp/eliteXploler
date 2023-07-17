import { Image } from "antd";

export const Info = () => {
  return (
    <div className="flex px-5 ">
      <div className="flex flex-col md:w-[50%] ">
        <h1 className="font-semibold text-5xl text-center">About Us</h1>
        <p className="text-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio amet
          perspiciatis ipsa assumenda corrupti animi? Saepe nulla veniam iusto
          magni quisquam maiores, aperiam atque amet ipsam ut dicta suscipit
          nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          amet perspiciatis ipsa assumenda corrupti animi? Saepe nulla veniam
          iusto magni quisquam maiores, aperiam atque amet ipsam ut dicta
          suscipit nisi? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Optio amet perspiciatis ipsa assumenda corrupti animi? Saepe
          nulla veniam iusto magni quisquam maiores, aperiam atque amet ipsam ut
          dicta suscipit nisi?
        </p>
      </div>
      <Image
        preview={false}
        className="md:w-[50%] object-center object-fit hidden md:block mt-2"
        height={500}
        src={`https://source.unsplash.com/1920x1080?travel`}
      />
    </div>
  );
};

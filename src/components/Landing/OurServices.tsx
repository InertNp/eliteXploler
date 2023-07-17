import { ServiceBox } from "./ServiceBox";

const OurServices = () => {
  const arr = [
    {
      key: 1,
      name: "Services",
    },
    {
      key: 2,
      name: "Cars",
    },
    {
      key: 3,
      name: "Bikes",
    },
    {
      key: 4,
      name: "Compass",
    },
  ];
  return (
    <div className="w-[100%]  h-full ">
      <h1
        className="font-semibold text-5xl text-center
      "
      >
        Our Services
      </h1>
      <div className="flex flex-wrap flex-row gap-5 justify-center items-center">
        {arr.map((e) => {
          return <ServiceBox key={e.key} name={e.name} />;
        })}
      </div>
    </div>
  );
};

export default OurServices;

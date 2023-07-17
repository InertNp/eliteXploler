import TopBox from "./TopBox";

const TopDestinations = () => {
  const arr = [
    {
      key: 1,
      name: "kathmandu",
    },
    {
      key: 2,
      name: "rivers",
    },
    {
      key: 3,
      name: "mountains",
    },
    {
      key: 4,
      name: "pokhara",
    },
  ];
  return (
    <div className="w-[100%]  h-full ">
      <h1
        className="font-semibold text-5xl text-center
      "
      >
        Top Destinations
      </h1>
      <div className="flex flex-wrap flex-row gap-5 justify-center items-center">
        {arr.map((e) => {
          return <TopBox key={e.key} name={e.name} />;
        })}
      </div>
    </div>
  );
};

export default TopDestinations;

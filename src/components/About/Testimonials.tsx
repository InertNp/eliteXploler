import { TestimonialBox } from "./TestimonialBox";

const Testimonials = () => {
  const arr = [
    {
      key: 1,
      name: "Bill Gates",
      context: "Nice company would chose again for the joy and confort",
      img: "billgates",
    },
    {
      key: 1,
      name: "Mark ZUZK",
      context: "Nice company would chose again for the joy and confort",
      img: "mark",
    },
    {
      key: 1,
      name: "Elon Musk",
      context: "Nice company would chose again for the joy and confort",
      img: "elonmusk",
    },
    {
      key: 1,
      name: "Jeff Bzos",
      context: "Nice company would chose again for the joy and confort",
      img: "Jeff",
    },
  ];
  return (
    <div className="w-[100%]  h-full ">
      <h1
        className="font-semibold text-5xl text-center
          "
      >
        Testimonials
      </h1>
      <div className="flex flex-wrap flex-row gap-5 justify-center items-center ">
        {arr.map((e) => {
          return <TestimonialBox key={e.key} data={e} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;

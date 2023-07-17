import HotelList from "./HotelList";

interface props {
  placename: string;
}
const HotelCon = ({ placename }: props) => {
  const data = [
    {
      name: "Addon",
      img: "hotel",
      content: `one of the best hotels of ${placename} .is easier to find and search `,
      rating: 5,
    },
    {
      name: "hotelname",
      img: "hotel",
      content: "bestHotel",
      rating: 4,
    },
    {
      name: "hotelname",
      img: "hotel",
      content: "bestHotel",
      rating: 3,
    },
    {
      name: "hotelname",
      img: "hotel",
      content: "worst hotel",
      rating: 1,
    },
    {
      name: "hotelname",
      img: "hotel",
      content: "worst hotel",
      rating: 1,
    },
    {
      name: "hotelname",
      img: "hotel",
      content: "worst hotel",
      rating: 1,
    },
  ];
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-2">
      {data.map((item, index) => {
        return <HotelList item={item} key={index} />;
      })}
    </div>
  );
};

export default HotelCon;

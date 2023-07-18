import { List } from "antd";
import { Link } from "react-router-dom";

const BookingItems = (data: any) => {
  const item = data.data;

  return (
    <List.Item.Meta
      title={
        <>
          Hotel:{" "}
          <Link to={`/hotel/${item.hotel.id}`}>{item.hotel.hotelName}</Link>
        </>
      }
      description={
        <div>
          <p>
            Room Type:
            <Link to={`/room/${item.room.id}`}>{item.room.roomType}</Link>
          </p>
          <p>Check In Date:{item.checkInDate}</p>
          <p>Check Out Date:{item.checkOutDate}</p>
          {/* <p>
            Package Type:<Link to={`/package/1`}>1</Link>
          </p> */}
        </div>
      }
    />
  );
};

export default BookingItems;

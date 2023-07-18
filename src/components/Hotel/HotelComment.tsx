import CommentList from "./CommentList";
import { useGlobalState } from "../../context/globalHook";
import ComBox from "./ComBox";

export interface HotelIdprops {
  hotelId: string;
}
const HotelComment = ({ hotelId }: HotelIdprops) => {
  const [isLoggedIn] = useGlobalState("isLoggedIn");

  return (
    <div>
      {isLoggedIn ? <ComBox hotelId={hotelId} /> : null}
      <CommentList hotelId={hotelId} />
    </div>
  );
};

export default HotelComment;

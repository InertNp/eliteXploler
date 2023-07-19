import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  isLoggedIn: false,
  token: "",
  fullName: "",
  userRole: "",
  loading: true,
  placesLoad: true,
  hotelLoad: true,
  hotelReviewLoad: true,
  hotelRoomReviewLoad: true,
  bookingLoad: true,
  hoteledit: false,
});

export { setGlobalState, useGlobalState };

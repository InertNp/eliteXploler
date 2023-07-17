import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  isLoggedIn: true,
  token: "",
  fullName: "admin",
  userRole: "Hotel_Administrator",
  loading: true,
  placesLoad: true,
  hotelLoad: true,
});

export { setGlobalState, useGlobalState };

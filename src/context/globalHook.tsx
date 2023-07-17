import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  isLoggedIn: false,
  token: "",
  fullName: "",
  userRole: "",
  loading: true,
  placesLoad: true,
  hotelLoad: true,
});

export { setGlobalState, useGlobalState };

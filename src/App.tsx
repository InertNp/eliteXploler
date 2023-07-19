import { Content, Footer, Header } from "antd/es/layout/layout";
import { Login } from "./pages/Users/Login";
import NavBar from "./components/Header/NavBar";
import Landing from "./pages/Users/Landing";
import { Route, Routes } from "react-router-dom";
import FooterBar from "./components/Footer/FooterBar";
import Register from "./pages/Users/Register";
import About from "./pages/Users/About";
import Contact from "./pages/Users/Contact";
import Places from "./pages/Users/Places";
import Hotels from "./pages/Users/Hotels";
import { useEffect } from "react";
import { setGlobalState, useGlobalState } from "./context/globalHook";
import Dashboard from "./pages/HotelAdmin/Dashboard";
import Hotel from "./pages/Users/Hotel";
import Room from "./pages/Users/Room";
import Package from "./pages/Users/Package";
import Booking from "./pages/Users/Booking";
import Setting from "./pages/Users/Setting";

import SideBar from "./HotelAdmin/SideBar/SideBar";
import { roleAdmin, roleHotelAdmin, roleUser } from "./utils/Role";
import HAroom from "./pages/HotelAdmin/HAroom";
import HApack from "./pages/HotelAdmin/HApack";
const App = () => {
  const [isLoggedIn] = useGlobalState("isLoggedIn");
  const [userRole] = useGlobalState("userRole");
  useEffect(() => {
    const iniloggedIn = localStorage.getItem("isLoggedIn");
    const loggedIn = iniloggedIn == null ? false : true;
    setGlobalState("isLoggedIn", loggedIn);
    const userRole = localStorage.getItem("userRole");
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("fullName");
    setGlobalState("token", token || "");
    setGlobalState("fullName", name || "");
    setGlobalState("userRole", userRole || "");
    setGlobalState("loading", false);
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header className="w-full">
        <NavBar />
      </Header>
      <Content className="w-full h-full">
        {/* For side bar on admin pages */}
        {isLoggedIn ? (
          // here after login
          <>
            {userRole === roleUser ? (
              // here if user role is User and is loggedin
              <div>
                <Routes>
                  <Route path={`booking`} element={<Booking />} />
                  <Route path={`setting`} element={<Setting />} />
                  <Route path={`about`} element={<About />} />
                  <Route path={`contact`} element={<Contact />} />
                  <Route path={`places`} element={<Places />} />
                  <Route path={`hotels/:placeId`} element={<Hotels />} />
                  <Route path={`hotel/:hotelId`} element={<Hotel />} />
                  <Route path={`room/:roomId`} element={<Room />} />
                  <Route path={`package/:packageId`} element={<Package />} />
                  <Route path={`/*`} element={<Landing />} />
                </Routes>
              </div>
            ) : (
              <div className="flex flex-row">
                {/* here routes for  hotel admin */}
                {userRole === roleHotelAdmin ? (
                  <>
                    <SideBar />
                    <Routes>
                      <Route path={`/*`} element={<Dashboard />} />
                      <Route path={`/rooms`} element={<HAroom />} />
                      <Route path={`/package`} element={<HApack />} />
                    </Routes>
                  </>
                ) : null}
                {userRole === roleAdmin ? (
                  <>
                    <Routes>
                      {/* <Route path={`/*`} element={<Dashboard />} /> */}
                    </Routes>
                  </>
                ) : null}
              </div>
            )}
          </>
        ) : (
          // here before login
          <div>
            <Routes>
              <Route path={`login`} element={<Login />} />
              <Route path={`register`} element={<Register />} />
              <Route path={`about`} element={<About />} />
              <Route path={`contact`} element={<Contact />} />
              <Route path={`places`} element={<Places />} />
              <Route path={`hotels/:placeId`} element={<Hotels />} />
              <Route path={`hotel/:hotelId`} element={<Hotel />} />
              <Route path={`room/:roomId`} element={<Room />} />
              <Route path={`package/:packageId`} element={<Package />} />
              <Route path={`/*`} element={<Landing />} />
            </Routes>
          </div>
        )}
      </Content>

      <Footer>
        <FooterBar />
      </Footer>
    </div>
  );
};

export default App;

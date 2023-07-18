import { Content, Footer, Header } from "antd/es/layout/layout";
import { Login } from "./pages/Login";
import NavBar from "./components/Header/NavBar";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import FooterBar from "./components/Footer/FooterBar";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Places from "./pages/Places";
import Hotels from "./pages/Hotels";
import { useEffect } from "react";
import { setGlobalState, useGlobalState } from "./context/globalHook";
import Dashboard from "./pages/Dashboard";
import Hotel from "./pages/Hotel";
import Room from "./pages/Room";
import Package from "./pages/Package";
import Booking from "./pages/Booking";
import Setting from "./pages/Setting";
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
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path={`booking`} element={<Booking />} />
              <Route path={`setting`} element={<Setting />} />
              {userRole === "User" ? null : (
                <>
                  <Route path={`dashboard`} element={<Dashboard />} />
                </>
              )}
            </>
          ) : (
            <>
              <Route path={`login`} element={<Login />} />
              <Route path={`register`} element={<Register />} />
            </>
          )}
          <Route path={`about`} element={<About />} />
          <Route path={`contact`} element={<Contact />} />
          <Route path={`places`} element={<Places />} />
          <Route path={`hotels/:placeId`} element={<Hotels />} />
          <Route path={`hotel/:hotelId`} element={<Hotel />} />
          <Route path={`room/:roomId`} element={<Room />} />
          <Route path={`package/:packageId`} element={<Package />} />
          <Route path={`/*`} element={<Landing />} />
        </Routes>
      </Content>

      <Footer>
        <FooterBar />
      </Footer>
    </div>
  );
};

export default App;

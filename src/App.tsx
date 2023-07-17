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
const App = () => {
  const [isLoggedIn] = useGlobalState("isLoggedIn");

  useEffect(() => {
    const iniloggedIn = localStorage.getItem("isLoggedIn");
    const loggedIn = iniloggedIn == null ? false : true;
    setGlobalState("isLoggedIn", loggedIn);
    const userRole = localStorage.getItem("userRole");
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("fullName");
    setGlobalState("token", JSON.stringify(token));
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
            <></>
          ) : (
            <>
              <Route path={`login`} element={<Login />} />
              <Route path={`register`} element={<Register />} />
            </>
          )}
          <Route path={`about`} element={<About />} />
          <Route path={`contact`} element={<Contact />} />
          <Route path={`places`} element={<Places />} />
          <Route path={`hotels/:placename`} element={<Hotels />} />
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

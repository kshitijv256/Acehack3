import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Past from "./pages/Past";
import Themes from "./pages/Themes";
import TeamSection from "./pages/TeamSection";
import Footer from "./pages/Footer";
import Speakers from "./pages/Speakers";
import Faq from "./pages/Faq";
import Sponsor from "./pages/Sponsor";
import Faculty from "./pages/Faculty";
import Prizes from "./pages/Prizes";
import Why from "./pages/why";
import Referal from "./pages/referal";
import Schedule from "./components/schedule";
import AddressMap from "./pages/map";
import AceHackSm from "/assets/images/website-v2.svg";
import Live from "./pages/Live";
import GetInvolved from "./pages/GetInvolved";

const AceLogo = (prop) => {
  return (
    <div>
      <div
        className={`bg-gray-900/30 w-full sticky top-0 z-30 backdrop-blur-md md:h-auto h-32`}
      >
        <div className="flex justify-between items-center">
          <a href="/">
            <img
              src={AceHackSm}
              alt="AceHack3.0"
              className="hidden lg:block object-contain"
            />
          </a>
        </div>
      </div>
      {prop.children}
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="wrapper bg-gray-900">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <Home />
                  <About />
                  <Themes />
                  <Why />
                  <Prizes />
                  <Referal />
                  <Sponsor />
                  <GetInvolved />
                  <Past />
                  {/* <Speakers /> */}
                  <Faculty />
                  {/* <Why /> */}
                  <AddressMap />
                  <Faq />
                </div>
              }
            />
            <Route
              path="/team"
              element={
                <AceLogo>
                  <TeamSection />
                </AceLogo>
              }
            />
            <Route
              path="/live"
              element={
                <AceLogo>
                  <Live />
                </AceLogo>
              }
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;

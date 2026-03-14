import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { AuthContextProvider } from "./modules/context/authContext";

import Navbar from "./modules/components/Navbar";
import Landing from "./modules/pages/Landing";
import Team from "./modules/pages/Team";
import Sponsors from "./modules/pages/Sponsors";
import Footer from "./modules/components/Footer";
import ErrorPage from "./modules/pages/ErrorPage";
import Location from "./modules/pages/Location";
import Grainient from "./modules/components/Grainient";

import Countdown2024 from "./modules/pages/events/Countdown2024";
import ParaDoxa2025 from "./modules/pages/events/ParaDoxa2025";
import BackToZero from "./modules/pages/events/BackToZero";
import Awards23 from "./modules/pages/events/Awards23";
import Awards24 from "./modules/pages/events/Awards24";
import EventTemplate from "./modules/pages/events/EventTemplate";
import ScrollToTop from "./modules/components/ScrollToTop";

// --- IMPORT ASSETS ---
import paradoxaHeader from "./assets/images/paradoxa25/header_paradoxa2.png";
import btzHeader from "./assets/images/backtozero23/Edizione2023.webp";

// --- IMPORT DATA ---
import paradoxaData from "./data/paradoxa.json";
import backtozeroData from "./data/backtozero.json";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingManager />,
    errorElement: (
      <>
        <Navbar />
        <ErrorPage />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/sponsors",
        element: <Sponsors />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/events/paradoxa2025",
        element: (
          <EventTemplate imagePath={paradoxaHeader} eventData={paradoxaData} />
        ),
      },
      {
        path: "/events/awards24",
        element: <Awards24 />,
      },
      {
        path: "/events/countdown2024",
        element: <Countdown2024 />,
      },
      {
        path: "/events/backtozero",
        element: (
          // <EventTemplate imagePath={btzHeader} eventData={backtozeroData} />
          <BackToZero />
        ),
      },
      {
        path: "/events/awards23",
        element: <Awards23 />,
      },
    ],
  },
]);

function LandingManager() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const isGradientEvent =
    path === "/" ||
    path.includes("paradoxa2025") ||
    path.includes("backtozero") ||
    path.includes("awards23") ||
    path.includes("awards24");

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          width: "2500px",
        }}
      >
        <Grainient
          timeSpeed={0.3}
          colorBalance={0.01}
          color1="#c40022"
          color2="#000000"
          color3="#777777"
          warpStrength={3.2}
          contrast={1.02}
          gamma={1.18}
          saturation={0.7}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <ScrollToTop />
        <Outlet context={[windowSize, setWindowSize]} />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
      {/* <SpeedInsights /> */}
    </AuthContextProvider>
  );
}

export default App;

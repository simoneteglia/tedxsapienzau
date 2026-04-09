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
import JoinUs from "./modules/pages/JoinUs";
import Footer from "./modules/components/Footer";
import ErrorPage from "./modules/pages/ErrorPage";
import Location from "./modules/pages/Location";
import Grainient from "./modules/components/Grainient";

import Countdown2024 from "./modules/pages/events/Countdown2024";
import EventTemplate from "./modules/pages/events/EventTemplate";
import EventsHub from "./modules/pages/events/EventsHub";
import ScrollToTop from "./modules/components/ScrollToTop";
import Act22 from "./modules/pages/events/Act22";

// --- IMPORT ASSETS ---
import paradoxaHeader from "./assets/images/paradoxa25/header_paradoxa2.png";
import btzHeader from "./assets/images/backtozero23/Edizione2023.webp";
import awardsBanner from "./assets/images/awards24/awards_sapienza.png";
import Awards23Header from "./assets/images/awards23/header_awards23.webp";


// --- IMPORT DATA ---
import awards22Data from "./data/awards22.json";
import sidebarContent from "./data/eventSidebarContent.json";

import "./App.css";

// 1. FUNZIONE PER FORMATTARE I DATI DI eventSidebarContent.json
const formatEventData = (rawEventData) => {
  if (!rawEventData) return {};

  return {
    ...rawEventData,
    speakers: Object.fromEntries(
      Object.entries(rawEventData.speakers || {}).map(([key, speaker]) => [
        key,
        {
          ...speaker,
          bio: speaker.bio_it,
          bioeng: speaker.bio_en,
          linkTalk: speaker.youtube_embed_url,
        },
      ]),
    ),
  };
};

// 2. ESTRAZIONE DATI DA eventSidebarContent.json
const rawParadoxaData = sidebarContent.paradoxa2025?.[0];
const paradoxaEventData = formatEventData(rawParadoxaData);

const rawBacktozeroData = sidebarContent.backtozero?.[0];
const backtozeroEventData = formatEventData(rawBacktozeroData);

const rawActData = sidebarContent.act22?.[0];
const actEventData = formatEventData(rawActData);

const rawAwards22Data = sidebarContent.awards22?.[0];
const awards22EventData = formatEventData(rawAwards22Data);

const rawAwards23Data = sidebarContent.awards23?.[0];
const awards23EventData = formatEventData(rawAwards23Data);

const rawAwards24Data = sidebarContent.awards24?.[0];
const awards24EventData = formatEventData(rawAwards24Data);

// 3. ROUTER
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
        path: "/partners",
        element: <Sponsors />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/join-us",
        element: <JoinUs />,
      },
      {
        path: "/joinus",
        element: <JoinUs />,
      },
      {
        path: "/newsletter",
        element: <JoinUs />,
      },
      {
        path: "/Newsletter",
        element: <JoinUs />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/events",
        element: <EventsHub />,
      },
      {
        path: "/events/paradoxa2025",
        element: (
          <EventTemplate
            imagePath={paradoxaHeader}
            eventData={paradoxaEventData}
          />
        ),
      },
      {
        path: "/events/awards24",
        element: (
          <EventTemplate imagePath={awardsBanner} eventData={awards24EventData} />
        ),
      },
      {
        path: "/events/countdown2024",
        element: <Countdown2024 />,
      },
      {
        path: "/events/backtozero",
        element: (
          <EventTemplate
            imagePath={btzHeader}
            eventData={backtozeroEventData}
          />
        ),
      },
      {
        path: "/events/awards23",
        element: (
          <EventTemplate imagePath={Awards23Header} eventData={awards23EventData} />
        ),
      },
      {
        path: "/events/act22",
        element: <Act22 eventData={actEventData} />, //pagina parzialmente template per mantenere la scritta ACT
      },
      {
        path: "/events/awards22",
        element: (
          <EventTemplate imagePath={awardsBanner} eventData={awards22EventData} />
        ),
      },
    ],
  },
]);

// 4. COMPONENTI
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
    return () => window.removeEventListener("resize", handleResize);
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

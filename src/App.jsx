import { Suspense, lazy, useState, useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { AuthContextProvider } from "./modules/context/authContext";

import Navbar from "./modules/components/Navbar";
import Landing from "./modules/pages/Landing";
import Footer from "./modules/components/Footer";
import ErrorPage from "./modules/pages/ErrorPage";
import Grainient from "./modules/components/Grainient";
import ScrollToTop from "./modules/components/ScrollToTop";

import paradoxaHeader from "./assets/images/paradoxa25/header_paradoxa2.png";
import btzHeader from "./assets/images/backtozero23/Edizione2023.webp";
import awardsBanner from "./assets/images/awards24/awards_sapienza.png";
import Awards23Header from "./assets/images/awards23/header_awards23.webp";

import "./App.css";

import awards22Data from "./data/awards22.json";
import sidebarContent from "./data/eventSidebarContent.json";

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

const Team = lazy(() => import("./modules/pages/Team"));
const Sponsors = lazy(() => import("./modules/pages/Sponsors"));
const JoinUs = lazy(() => import("./modules/pages/JoinUs"));
const Location = lazy(() => import("./modules/pages/Location"));
const Countdown2024 = lazy(
  () => import("./modules/pages/events/Countdown2024"),
);
const EventsHub = lazy(() => import("./modules/pages/events/EventsHub"));
const EventTemplate = lazy(
  () => import("./modules/pages/events/EventTemplate"),
);
const Act22 = lazy(() => import("./modules/pages/events/Act22"));
const ChiSiamo = lazy(() => import("./modules/pages/ChiSiamo"));

function RouteFallback() {
  return (
    <div
      style={{
        minHeight: "50vh",
      }}
    />
  );
}

const withSuspense = (element) => (
  <Suspense fallback={<RouteFallback />}>{element}</Suspense>
);

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
        element: withSuspense(<Sponsors />),
      },
      {
        path: "/partners",
        element: withSuspense(<Sponsors />),
      },
      {
        path: "/team",
        element: withSuspense(<Team />),
      },
      {
        path: "/join-us",
        element: withSuspense(<JoinUs />),
      },
      {
        path: "/joinus",
        element: withSuspense(<JoinUs />),
      },
      {
        path: "/newsletter",
        element: withSuspense(<JoinUs />),
      },
      {
        path: "/Newsletter",
        element: withSuspense(<JoinUs />),
      },
      {
        path: "/location",
        element: withSuspense(<Location />),
      },
      {
        path: "/events",
        element: withSuspense(<EventsHub />),
      },
      {
        path: "/events/paradoxa2025",
        element: withSuspense(
          <EventTemplate
            imagePath={paradoxaHeader}
            eventData={paradoxaEventData}
          />,
        ),
      },
      {
        path: "/events/awards24",
        element: withSuspense(
          <EventTemplate
            imagePath={awardsBanner}
            eventData={awards24EventData}
          />,
        ),
      },
      {
        path: "/events/countdown2024",
        element: withSuspense(<Countdown2024 />),
      },
      {
        path: "/events/backtozero",
        element: withSuspense(
          <EventTemplate
            imagePath={btzHeader}
            eventData={backtozeroEventData}
          />,
        ),
      },
      {
        path: "/events/awards23",
        element: withSuspense(
          <EventTemplate
            imagePath={Awards23Header}
            eventData={awards23EventData}
          />,
        ),
      },
      {
        path: "/events/act22",
        element: withSuspense(<Act22 eventData={actEventData} />),
      },
      {
        path: "/events/awards22",
        element: withSuspense(
          <EventTemplate imagePath={awardsBanner} eventData={awards22Data} />,
        ),
      },

      {
        path: "/about",
        element: withSuspense(<ChiSiamo />),
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
      <div aria-hidden="true" className="grainient-background-wrapper">
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
    </AuthContextProvider>
  );
}

export default App;

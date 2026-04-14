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

import "./App.css";

const Team = lazy(() => import("./modules/pages/Team"));
const Sponsors = lazy(() => import("./modules/pages/Sponsors"));
const JoinUs = lazy(() => import("./modules/pages/JoinUs"));
const Location = lazy(() => import("./modules/pages/Location"));
const Countdown2024 = lazy(() => import("./modules/pages/events/Countdown2024"));
const Awards23 = lazy(() => import("./modules/pages/events/Awards23"));
const Awards24 = lazy(() => import("./modules/pages/events/Awards24"));
const EventsHub = lazy(() => import("./modules/pages/events/EventsHub"));
const Awards22Page = lazy(() => import("./modules/pages/events/Awards22Page"));
const Act22 = lazy(() => import("./modules/pages/events/Act22"));
const ParadoxaPage = lazy(() => import("./modules/pages/events/ParadoxaPage"));
const BackToZeroPage = lazy(() => import("./modules/pages/events/BackToZeroPage"));
const ChiSiamo = lazy(() => import("./modules/pages/chiSiamo"));

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
        element: withSuspense(<ParadoxaPage />),
      },
      {
        path: "/events/awards24",
        element: withSuspense(<Awards24 />),
      },
      {
        path: "/events/countdown2024",
        element: withSuspense(<Countdown2024 />),
      },
      {
        path: "/events/backtozero",
        element: withSuspense(<BackToZeroPage />),
      },
      {
        path: "/events/awards23",
        element: withSuspense(<Awards23 />),
      },
      {
        path: "/events/act22",
        element: withSuspense(<Act22 />),
      },
      {
        path: "/events/awards22",
        element: withSuspense(<Awards22Page />),
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

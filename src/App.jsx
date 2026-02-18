import { useState, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./modules/context/authContext";

import Navbar from "./modules/components/Navbar";
import Landing from "./modules/pages/Landing";
import Team from "./modules/pages/Team";
import Sponsors from "./modules/pages/Sponsors";
import Blog from "./modules/pages/Blog";
import Footer from "./modules/components/Footer";
import ErrorPage from "./modules/pages/ErrorPage";
import Location from "./modules/pages/Location";

import "./App.css";
import Countdown2024 from "./modules/pages/events/Countdown2024";
import ParaDoxa2025 from "./modules/pages/events/ParaDoxa2025";
import BackToZero from "./modules/pages/events/BackToZero";
// aggiunta temporanea
import StatsPages from "./modules/pages/StatsPages";

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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/events/countdown2024",
        element: <Countdown2024 />,
      },

      {
        path: "/eventi/paradoxa2025",
        element: <ParaDoxa2025 />,
      },
      {
        path: "/events/paradoxa2025",
        element: <ParaDoxa2025 />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {//aggiunta temporanea
        path: "/stats",
        element: <StatsPages />, 
      },


       {
        path: "/events/backtozero", // Questo sarà l'indirizzo nel browser
        element: <BackToZero />,
      }, // <--- FINE AGGIUNTA

    
    ],
  },
]);

function LandingManager() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  return (
    <>
      <Navbar />
      <Outlet context={[windowSize, setWindowSize]} />
      <Footer />
    </>
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

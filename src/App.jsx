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

import "./App.css";
import Countdown2024 from "./modules/pages/events/Countdown2024";

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

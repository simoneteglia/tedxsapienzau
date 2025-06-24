// COMPONENTS
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// RESOURCES
import global from "../../resources/global.json";
import "../../resources/styles/navbar.css";

//MEDIA
import Logo from "../../assets/logos/logo_white.png";

// Navbar component
// This component is responsible for rendering the navigation bar of the application
// It includes the logo, navigation links, and a section for additional content
// @author: Simone Teglia
export default function Navbar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState("homepage");

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  const navigation = [
    { name: "Eventi", href: "/events", current: currentPage === "eventi" },
    {
      name: "Sponsors",
      href: "/sponsors",
      current: currentPage === "sponsors",
    },
    { name: "Team", href: "/team", current: currentPage === "team" },
    { name: "Blog", href: "/blog", current: currentPage === "blog" },
    { name: "Chi Siamo", href: "/about", current: currentPage === "chi siamo" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav
      className="w-full z-1 top-0 fixed flex justify-center items-center"
      style={{
        height: global.UTILS.NAV_HEIGHT,
      }}
    >
      <div className="glass-card relative hidden w-full xl:w-[85%] h-[75%] md:flex justify-between items-center p-[12px] rounded-[1rem] ">
        <Link to="/" onClick={() => setCurrentPage("homepage")}>
          <img src={Logo} alt="LogoTedx" className="w-[200px]" />
        </Link>
        <section
          id="middle-section"
          className="flex justify-between items-center 2xl:gap-20 xl:gap-15 gap-5"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-semibold"
              )}
              onClick={() => {
                setCurrentPage(item.name.toLowerCase());
              }}
            >
              {item.name}
            </Link>
          ))}
        </section>
        <section id="right-section">
          <div
            className="primary-button"
            onMouseEnter={(e) => {
              e.target.style.borderColor = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "red";
            }}
            onClick={() => {
              window.location.href = "/Newsletter";
            }}
          >
            Join Us
          </div>
        </section>
        <div className="flex md:hidden"></div>
      </div>
    </nav>
  );
}

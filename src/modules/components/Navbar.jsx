// COMPONENTS
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

// RESOURCES
import global from "../../resources/global.json";
import "../../resources/styles/navbar.css";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

//MEDIA
import Logo from "../../assets/logos/logo_white.png";

// Navbar component
// This component is responsible for rendering the navigation bar of the application
// It includes the logo, navigation links, and a section for additional content
// @author: Simone Teglia
export default function Navbar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState("homepage");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // function that logs when the disclosurepanel is open or closed
  });

  const navigation = [
    {
      name: t("navbar.events"),
      href: "/events",
      current: currentPage === "eventi",
    },
    {
      name: t("navbar.partners"),
      href: "/sponsors",
      current: currentPage === "sponsors",
    },
    { name: t("navbar.team"), href: "/team", current: currentPage === "team" },
    { name: t("navbar.blog"), href: "/blog", current: currentPage === "blog" },
    {
      name: t("navbar.about_us"),
      href: "/about",
      current: currentPage === "chi siamo",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure
      as="nav"
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
        <section id="right-section" className="flex items-center gap-2">
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
      <div className="absolute inset-y-0 left-0 w-full pl-2 pr-2 flex items-center justify-between md:hidden bg-black">
        <Link to="/" onClick={() => setCurrentPage("homepage")}>
          <img src={Logo} alt="LogoTedx" className="w-[200px]" />
        </Link>
        {/* Mobile menu button*/}
        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          <Bars3Icon
            aria-hidden="true"
            className="block size-6 group-data-open:hidden"
          />
          <XMarkIcon
            aria-hidden="true"
            className="hidden size-6 group-data-open:block"
          />
        </DisclosureButton>
        <DisclosurePanel
          transition
          className="origin-top transition duration-200 ease-out data-closed:-translate-y-5 data-closed:opacity-0 md:hidden glass-card-darker fixed top-[70px] w-full h-full z-10 pr-2 "
        >
          <div className="space-y-1 pl-2 pr-4 pt-2 pb-3 ">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-800 text-red-500 underline-offset-4 underline"
                    : "text-gray-200 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-8  text-5xl font-medium"
                )}
                onClick={() => {
                  setCurrentPage(item.name.toLowerCase());
                }}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  );
}

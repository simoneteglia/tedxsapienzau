// COMPONENTS
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

// RESOURCES
import global from "../../resources/global.json";
import "../../resources/styles/navbar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LanguageSwitcher from "./LanguageSwitcher";

//MEDIA
import Logo from "../../assets/logos/logo_white.png";

// Navbar component
// This component is responsible for rendering the navigation bar of the application
// It includes the logo, navigation links, and a section for additional content
// @author: Simone Teglia
export default function Navbar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navRefs = useRef([]);

  const isCurrentPage = (href) => {
    if (href === "/events") {
      return pathname === "/events" || pathname.startsWith("/events/");
    }

    return pathname === href;
  };

  const navigation = [
    {
      name: t("navbar.events"),
      href: "/events",
      current: isCurrentPage("/events"),
    },
    {
      name: t("navbar.partners"),
      href: "/sponsors",
      current: isCurrentPage("/sponsors"),
    },
    {
      name: t("navbar.team"),
      href: "/team",
      current: isCurrentPage("/team"),
    },
    {
      name: t("navbar.about_us"),
      href: "/about",
      current: isCurrentPage("/about"),
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function ScrollLock({ open }) {
    useEffect(() => {
      document.body.style.overflow = open ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);
    return null;
  }

  useEffect(() => {
    const active = navigation.findIndex((item) => item.current);
    const targetIndex = hoveredIndex !== null ? hoveredIndex : active;

    if (targetIndex !== -1 && navRefs.current[targetIndex]) {
      const el = navRefs.current[targetIndex];
      setPillStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hoveredIndex]);

  return (
    <Disclosure
      as="nav"
      className="w-full top-0 fixed flex justify-center items-center"
      style={{
        height: global.UTILS.NAV_HEIGHT,
        zIndex: 1000,
      }}
    >
      {({ open }) => (
        <>
          <ScrollLock open={open} />
          <div className="glass-card relative hidden w-full xl:w-[85%] h-[75%] md:flex justify-between items-center p-[12px] rounded-[1rem] ">
            <Link to="/">
              <img src={Logo} alt="LogoTedx" className="w-[200px]" />
            </Link>
            <section
              id="right-section"
              className="flex items-center gap-2 lg:gap-6 xl:gap-10 relative"
              style={{ fontFamily: global.UTILS.FONT_FAMILY }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Liquid Sliding Pill */}
              <div
                className="absolute h-[38px] bg-white/20 backdrop-blur-md rounded-[14px] shadow-sm transition-all duration-300 pointer-events-none"
                style={{
                  left: `${pillStyle.left}px`,
                  width: `${pillStyle.width}px`,
                  opacity: pillStyle.opacity,
                  top: "50%",
                  transform: "translateY(-50%)",
                  transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)"
                }}
              />

              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  ref={(el) => (navRefs.current[index] = el)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    "relative z-10 rounded-[14px] px-4 py-2 text-base font-objectsans-heavy tracking-[0.02em] transition-colors duration-300 ease-in-out",
                    item.current || hoveredIndex === index
                      ? "text-white"
                      : "text-white/80"
                  )}
                  style={{ textTransform: "uppercase" }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 relative z-10 ml-2">
                <LanguageSwitcher />
                <Link
                  className="primary-button font-objectsans-heavy text-sm"
                  to="/join-us"
                >
                  {t("common.join_us")}
                </Link>
              </div>
            </section>
            <div className="flex md:hidden"></div>
          </div>
          <div className="absolute z-[1002] inset-y-0 left-0 w-full pl-2 pr-2 flex items-center justify-between md:hidden bg-black">
            <Link to="/">
              <img src={Logo} alt="LogoTedx" className="w-[200px]" />
            </Link>
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">{t("common.open_main_menu")}</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <DisclosurePanel
              transition
              className="origin-top transition duration-200 ease-out data-closed:-translate-y-5 data-closed:opacity-0 md:hidden glass-card-darker fixed top-[70px] left-0 w-full h-[calc(100lvh-70px)] overflow-y-auto pr-2 pb-[env(safe-area-inset-bottom)]"
              style={{ zIndex: 1001 }}
            >
              <div className="space-y-1 pl-2 pr-4 pt-6 pb-3 ">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-white/20 shadow-md text-white"
                        : "text-gray-200 hover:bg-white/10 hover:text-white",
                      "block rounded-[20px] px-4 py-5 text-4xl font-objectsans-heavy transition-all duration-300 ease-in-out",
                    )}
                    style={{
                      fontFamily: global.UTILS.FONT_FAMILY,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                <DisclosureButton
                  as={Link}
                  to="/join-us"
                  className="primary-button mt-4 ml-3 inline-block text-center font-objectsans-heavy"
                >
                  {t("common.join_us")}
                </DisclosureButton>
                <div className="mt-6 ml-3 mr-3">
                  <p className="mb-3 pl-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                    {t("common.language")}
                  </p>
                  <LanguageSwitcher mobile />
                </div>
              </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

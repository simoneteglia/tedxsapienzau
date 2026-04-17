// COMPONENTS
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

  return (
    <Disclosure
      as="nav"
      className="w-full top-0 fixed flex justify-center items-center"
      style={{
        height: global.UTILS.NAV_HEIGHT,
        zIndex: 1000,
      }}
    >
      <div className="glass-card relative hidden w-full xl:w-[85%] h-[75%] md:flex justify-between items-center p-[12px] rounded-[1rem] ">
        <Link to="/">
          <img src={Logo} alt="LogoTedx" className="w-[200px]" />
        </Link>
        <section
          id="right-section"
          className="flex items-center gap-2 lg:gap-6 xl:gap-10"
          style={{ fontFamily: global.UTILS.FONT_FAMILY }}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-white hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-base font-semibold tracking-[0.02em]",
              )}
              style={{ textTransform: "uppercase" }}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link className="primary-button" to="/join-us">
              {t("common.join_us")}
            </Link>
          </div>
        </section>
        <div className="flex md:hidden"></div>
      </div>
      <div className="absolute inset-y-0 left-0 w-full pl-2 pr-2 flex items-center justify-between md:hidden bg-black">
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
        <DisclosurePanel
          transition
          className="origin-top transition duration-200 ease-out data-closed:-translate-y-5 data-closed:opacity-0 md:hidden glass-card-darker fixed top-[70px] w-full h-full pr-2 "
          style={{ zIndex: 1001 }}
        >
          <div className="space-y-1 pl-2 pr-4 pt-2 pb-3 ">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-800 text-red-500 underline-offset-4 underline"
                    : "text-gray-200 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-8  text-5xl font-medium",
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
              className="primary-button mt-4 block w-full text-center"
            >
              {t("common.join_us")}
            </DisclosureButton>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                {t("common.language")}
              </p>
              <LanguageSwitcher mobile />
            </div>
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  );
}

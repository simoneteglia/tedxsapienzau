// COMPONENTS
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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

  return (
    <nav
      className="bg-black w-screen flex space-between items-center p-[24px]"
      style={{
        height: global.UTILS.NAV_HEIGHT,
      }}
    >
      <Link to="/">
        <img src={Logo} alt="LogoTedx" className="w-60" />
      </Link>
      <ul
        id="middle-section"
        className="flex justify-evenly items-center text-white w-full"
      >
        <Menu
          as="div"
          className="relative inline-block text-left focus:outline-none"
        >
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black text-white px-3 py-2 font-semibold hover:text-[#eb0028] hover:cursor-pointer">
              Eventi
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 text-white rounded-md bg-black shadow-lg ring-1 ring-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm data-focus:text-[#eb0028]"
              >
                PARA DOXA
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm data-focus:text-[#eb0028]"
              >
                Awards
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="/events/countdown2024"
                className="block px-4 py-2 text-sm data-focus:text-[#eb0028]"
              >
                Countdown
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm data-focus:text-[#eb0028]"
              >
                Back To Zero
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm data-focus:text-[#eb0028]"
              >
                Awards
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm data-focus:text-[#eb0028]"
              >
                ACT: Lead The Change
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm data-focus:text-[#eb0028]"
              >
                Awards
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
        <li>
          <Link to="/sponsors">Sponsors</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>Chi Siamo</li>
      </ul>
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
    </nav>
  );
}

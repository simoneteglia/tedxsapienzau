import React, { Component, useLayoutEffect } from "react";

import global from "../../resources/global.json";
import EventsHeader from "../components/EventsHeader"

import Banner from "../../assets/images/location/location1.webp";

export default function Sponsors() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black">
      <section
        className="flex justify-center items-center w-screen"
        style={{ height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})` }}
      >

        <h1 className="text-white">Sponsors</h1>
      </section>
    </div>
  );
}

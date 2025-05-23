import React, { Component } from "react";

import global from "../../resources/global.json";

export default function Team() {
  return (
    <div className="bg-black">
      <section
        className="flex justify-center items-center w-screen"
        style={{ height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})` }}
      >
        <h1 className="text-white">Team</h1>
      </section>
    </div>
  );
}

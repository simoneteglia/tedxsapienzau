// -------------COMPONENTS-------------
import React, { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// -------------RESOURCES-------------
import global from "../../resources/global.json";
import "../../resources/styles/eventsheader.css";
import "../../index.css";


const EventsHeader = ({
  imageUrl,
  location,
  date,
  buttonLabel,
  onButtonClick,
  bgColor,
  textColor,
  accentColor 
}) => {
  return (
    <div className="w-full">
      {/* Top Event Image */}
      <div className="w-full">
        <img src={imageUrl} alt="Event Banner" className="w-full object-cover" />
      </div>

      {/* Bottom Section */}
      <div className={`flex flex-col md:flex-row justify-between items-center px-6 py-6 ${bgColor} ${textColor}`}>
        <div className="flex flex-col gap-4">
          {/* Location */}
          <div className="flex items-center gap-3">
            <span className={`text-xl ${accentColor} p-2 rounded`}>
              📍
            </span>
            <p className="whitespace-pre-line">{location}</p>
          </div>
          
          {/* Date */}
          <div className="flex items-center gap-3">
            <span className={`text-xl ${accentColor} p-2 rounded`}>
              📅
            </span>
            <p>{date}</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onButtonClick}
          className={`mt-6 md:mt-0 px-6 py-3 rounded text-white font-semibold ${accentColor} hover:opacity-90 transition`}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default EventsHeader;
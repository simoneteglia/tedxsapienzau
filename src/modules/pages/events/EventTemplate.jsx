import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import global from "../../../resources/global.json";
import { useTranslation, Trans } from "react-i18next";
import SpeakerCard from "../../components/SpeakerCard";
import BioSpeakerPopup from "../../components/BioSpeakerPopup";

// import CorniceParadoxaPersona from "../images/paradoxa25/cornice_paradoxa_persona.webp";
import ParadoxaHeader from "../../../assets/images/paradoxa25/header_paradoxa2.png";
import Iframe from "react-iframe";
import "@fontsource-variable/bricolage-grotesque/index.css";

// --- IMPORT SPEAKERS IMAGES ---
// ----------PARADOXA 2025 SPEAKERS ----------
import Nardi from "../../../assets/images/paradoxa25/nardi_poster.webp";
import Dapoto from "../../../assets/images/paradoxa25/dapoto_poster.webp";
import Saltarelli from "../../../assets/images/paradoxa25/saltarelli_poster.webp";
import Pasatu from "../../../assets/images/paradoxa25/pasatu_poster.webp";
import Abbozzo from "../../../assets/images/paradoxa25/abbozzo_poster.webp";
import Panepinto from "../../../assets/images/paradoxa25/panepinto_poster.webp";
import Azzali from "../../../assets/images/paradoxa25/azzali_poster.webp";
import Moretti from "../../../assets/images/paradoxa25/moretti_poster.webp";
import Kento from "../../../assets/images/paradoxa25/kento_poster.webp";
import Armaroli from "../../../assets/images/paradoxa25/armaroli_poster.webp";

// ----------BACK TO ZERO 2023 SPEAKERS ----------
import Tullio from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Tullio.webp";
import Rossi from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Rossi.webp";
import Freyman from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Freymann.webp";
import Basilone from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Basilone.webp";
import Schito from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Schito.webp";
import Cervellini from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Cervellini.webp";
import Estrela from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Estrela.webp";
import Lambarelli from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Lambarelli.webp";
import Ienca from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Ienca.webp";
import Villain from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Villain.webp";
import Onofri from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Onofri.webp";
import Nakita from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Nakita.webp";

//foto per awards22
import Volosumarte22 from "../../../assets/images/awards22/artist1.jpg";
import Spano22 from "../../../assets/images/awards22/speaker1.jpg";
import Pariset22 from "../../../assets/images/awards22/speaker2.jpg";
import Peduzzi22 from "../../../assets/images/awards22/speaker3.jpg";

const CalendarIcon = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      stroke="#EB0028"
      strokeWidth="1.5"
    />
    <line x1="3" y1="9" x2="21" y2="9" stroke="#EB0028" strokeWidth="1.5" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="#EB0028" strokeWidth="1.5" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="#EB0028" strokeWidth="1.5" />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C12 22 20 16 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16 12 22 12 22Z"
      stroke="#EB0028"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="10" r="3" stroke="#EB0028" strokeWidth="1.5" />
  </svg>
);

const getImage = (imgName) => {
  switch (imgName) {
    case "Nardi":
      return Nardi;
    case "Dapoto":
      return Dapoto;
    case "Saltarelli":
      return Saltarelli;
    case "Pasatu":
      return Pasatu;
    case "Abbozzo":
      return Abbozzo;
    case "Panepinto":
      return Panepinto;
    case "Azzali":
      return Azzali;
    case "Moretti":
      return Moretti;
    case "Kento":
      return Kento;
    case "Armaroli":
      return Armaroli;
    case "Tullio":
      return Tullio;
    case "Rossi":
      return Rossi;
    case "Freymann":
      return Freyman;
    case "Basilone":
      return Basilone;
    case "Schito":
      return Schito;
    case "Cervellini":
      return Cervellini;
    case "Estrela":
      return Estrela;
    case "Lambarelli":
      return Lambarelli;
    case "Ienca":
      return Ienca;
    case "Villain":
      return Villain;
    case "Onofri":
      return Onofri;
    case "Aboya":
      return Nakita;  
  //aggiunta awards22
    case "Volosumarte22":
      return Volosumarte22;
    case "Spano22":
      return Spano22;
    case "Pariset22":
      return Pariset22;
    case "Peduzzi22":
      return Peduzzi22;
    default:
      return "";
  }
};

export default function EventTemplate({ imagePath, eventData }) {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});

  return (
    <div className="paradoxa-page overflow-x-hidden">
      <section className="w-full relative">
        <img
          src={imagePath}
          alt="Header Back To Zero"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "80vh", minHeight: "300px" }}
        />
      </section>

      <section
        style={{
          padding:
            windowSize < global.UTILS.BIG_TABLET_WIDTH
              ? "34px 34px 0px 34px"
              : "34px",
        }}
      >
        <h1 className="event-title notranslate" translate="no">
          {eventData.title}
        </h1>
        <div className="paradoxa-glass-grid">
          <div className="paradoxa-glass-card">
            <p className="font-gotham-book md:text-lg text-sm">
              {eventData.description}
            </p>
          </div>
          <div className="paradoxa-glass-card paradoxa-glass-card--info">
            <div className="paradoxa-info">
              <div className="paradoxa-info-row">
                <span className="paradoxa-info-icon">
                  <CalendarIcon />
                </span>
                <div
                  className="paradoxa-info-text paradoxa-info-text--date notranslate"
                  translate="no"
                >
                  {eventData.date}
                </div>
              </div>
              <div className="paradoxa-info-row">
                <span className="paradoxa-info-icon">
                  <LocationIcon />
                </span>
                <div className="paradoxa-info-text notranslate" translate="no">
                  {eventData.location}
                </div>
              </div>
            </div>
            <a
              className="paradoxa-cta"
              href={eventData.link_talks}
              target="_blank"
              rel="noreferrer"
            >
              Guarda i TEDx talks
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          padding:
            windowSize < global.UTILS.BIG_TABLET_WIDTH
              ? "34px 34px 0px 34px"
              : "34px",
          flexWrap: "wrap",
        }}
      >
        <div
          id="main-container"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            fontFamily: "'Bricolage Grotesque', sans-serif",
            position: "relative",
          }}
        >
          <h1 className="event-title notranslate">Speakers</h1>
          <div className="paradoxa-speakers-grid">
            {Object.keys(eventData.speakers).map((key, index) => {
              const speaker = eventData.speakers[key];
              if (index >= 0) {
                return (
                  <SpeakerCard
                    key={index}
                    imgSrc={getImage(speaker.img)}
                    nomeSpeaker={speaker.name}
                    showLinkTalk={false}
                    event="paradoxa"
                    setIsBioOpen={setIsBioOpen}
                    setSelectedSpeakerInfo={setSelectedSpeakerInfo}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>
      <BioSpeakerPopup
        isBioOpen={isBioOpen}
        setIsBioOpen={setIsBioOpen}
        selectedSpeakerInfo={selectedSpeakerInfo}
        windowSize={windowSize}
        year={2025}
      />
    </div>
  );
}

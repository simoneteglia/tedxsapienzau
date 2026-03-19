import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import global from "../../../resources/global.json";
import SpeakerCard from "../../components/SpeakerCard";
import BioSpeakerPopup from "../../components/BioSpeakerPopup";
import "@fontsource-variable/bricolage-grotesque/index.css";

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

const DEFAULT_SPEAKER_IMAGES = {
  Nardi,
  Dapoto,
  Saltarelli,
  Pasatu,
  Abbozzo,
  Panepinto,
  Azzali,
  Moretti,
  Kento,
  Armaroli,
  Tullio,
  Rossi,
  Freymann: Freyman,
  Basilone,
  Schito,
  Cervellini,
  Estrela,
  Lambarelli,
  Ienca,
  Villain,
  Onofri,
  Aboya: Nakita,
};

const getImage = (imgName, speakerImages) =>
  speakerImages?.[imgName] || DEFAULT_SPEAKER_IMAGES[imgName] || "";

export default function EventTemplate({
  imagePath,
  headerAlt = "Event header",
  eventData,
  speakerImages = {},
  speakerSections,
  year = 2025,
  sidebarTheme,
  ctaLabel = "Guarda i TEDx talks",
  children,
}) {
  const [windowSize] = useOutletContext();
  const [isBioOpen, setIsBioOpen] = useState(true);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});
  const sectionPadding =
    windowSize < global.UTILS.BIG_TABLET_WIDTH ? "34px 34px 0px 34px" : "34px";
  const speakersSectionPadding =
    windowSize < global.UTILS.BIG_TABLET_WIDTH
      ? "34px 34px 8px 34px"
      : "34px 34px 8px 34px";
  const resolvedSpeakerSections =
    speakerSections && speakerSections.length > 0
      ? speakerSections
      : [
          {
            title: eventData.speakersTitle || "Speakers",
            items: Object.values(eventData.speakers || {}),
          },
        ];

  return (
    <div
      className="paradoxa-page overflow-x-hidden"
      style={{ paddingBottom: "24px" }}
    >
      <section className="w-full relative">
        <img
          src={imagePath}
          alt={headerAlt}
          className="w-full h-auto object-cover"
          style={{ maxHeight: "80vh", minHeight: "300px" }}
        />
      </section>

      <section style={{ padding: sectionPadding }}>
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
            {eventData.link_talks ? (
              <a
                className="paradoxa-cta"
                href={eventData.link_talks}
                target="_blank"
                rel="noreferrer"
              >
                {ctaLabel}
              </a>
            ) : null}
          </div>
        </div>
        {children ? (
          <div style={{ maxWidth: "1500px", margin: "34px auto 0" }}>
            {children}
          </div>
        ) : null}
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          padding: speakersSectionPadding,
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
          {resolvedSpeakerSections.map((section, sectionIndex) => (
            <div
              key={`${section.title || "speakers"}-${sectionIndex}`}
              style={{
                marginBottom:
                  sectionIndex === resolvedSpeakerSections.length - 1 ? 0 : 64,
              }}
            >
              <h1 className="event-title notranslate" translate="no">
                {section.title || "Speakers"}
              </h1>
              <div className="paradoxa-speakers-grid">
                {(section.items || []).map((speaker, speakerIndex) => (
                  <SpeakerCard
                    key={`${speaker.name || "speaker"}-${speakerIndex}`}
                    imgSrc={getImage(speaker.img, speakerImages)}
                    nomeSpeaker={speaker.name}
                    bio={speaker.bio}
                    bioeng={speaker.bioeng}
                    linkTalk={speaker.linkTalk}
                    tag={speaker.tag || speaker.role}
                    ruoloSpeaker={speaker.role}
                    showLinkTalk={Boolean(speaker.linkTalk)}
                    event="paradoxa"
                    setIsBioOpen={setIsBioOpen}
                    setSelectedSpeakerInfo={setSelectedSpeakerInfo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <BioSpeakerPopup
        isBioOpen={isBioOpen}
        setIsBioOpen={setIsBioOpen}
        selectedSpeakerInfo={selectedSpeakerInfo}
        windowSize={windowSize}
        year={year}
        sidebarTheme={sidebarTheme}
      />
    </div>
  );
}

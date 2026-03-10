import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import global from "../../../resources/global.json";
import { useTranslation, Trans } from "react-i18next";
// import CorniceParadoxaPersona from "../images/paradoxa25/cornice_paradoxa_persona.webp";
import ParadoxaHeader from "../../../assets/images/paradoxa25/header_paradoxa2.png";
import Iframe from "react-iframe";
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

import SpeakerCard from "../../components/SpeakerCard";
import BioSpeakerPopup from "../../components/BioSpeakerPopup";

const CalendarIcon = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#EB0028" strokeWidth="1.5" />
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

export default function ParaDoxa2025() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});

  return (
    <div className="paradoxa-page">
      <section className="paradoxa-hero">
        <div
          className="paradoxa-hero-frame paradoxa-hero-frame--poster"
          style={{ backgroundImage: `url(${ParadoxaHeader})` }}
        >
        </div>
      </section>

      <section className="paradoxa-intro">
        <div className="paradoxa-intro-inner">
          <h1 className="paradoxa-title notranslate" translate="no">
            Para Doxa
          </h1>
          <div className="paradoxa-glass-grid">
            <div className="paradoxa-glass-card">
              <p className="paradoxa-intro-text">
                Dal greco παράδοξος, composto di παρα- nel sign. di «contro» e
                δόξα «opinione». Che va contro il modo di pensare comune. La
                storia dei paradossi è antica e risale alla nascita della
                logica. Ma, mentre i primi ad essere formulati erano più simili
                a giochi mentali, la modernità ne ha fatti nascere di nuovi
                nella realtà che ci circonda. La giustizia che crea
                disuguaglianza, le possibilità che creano svogliatezza, i
                conflitti per portare la pace. E così come gli antichi pensatori
                li hanno sviluppati, per stimolare la riflessione, allo stesso
                modo noi dobbiamo fronteggiare, non evitare, i paradossi che
                permeano la natura del mondo antropico per far germogliare le
                idee che possano migliorarlo. PARA DOXA sarà il terreno fertile
                per coltivarle.
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
                    11.04.2025, 09:00 - 17:00
                  </div>
                </div>
                <div className="paradoxa-info-row">
                  <span className="paradoxa-info-icon">
                    <LocationIcon />
                  </span>
                  <div className="paradoxa-info-text notranslate" translate="no">
                    Aula Magna,
                    <br />
                    Palazzo del Rettorato
                    <br />
                    Sapienza Universita di Roma
                  </div>
                </div>
              </div>
              <a
                className="paradoxa-cta"
                href="https://youtube.com/playlist?list=PL4-t_gJBexTAb7wP2mzg-S2bCfzptE58n&feature=shared"
                target="_blank"
                rel="noreferrer"
              >
                Guarda i TEDx talks
              </a>
            </div>
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
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            fontFamily: "'Bricolage Grotesque', sans-serif",
            position: "relative",
          }}
        >
          <h1
            className="paradoxa-speakers-title"
            style={{
              fontSize: windowSize > 1245 ? "7vh" : "4vh",
              fontWeight: 700,
              maxWidth: "20ch",
              color: "#FFFFFF",
              textAlign: "left",
              textTransform: "none",
              marginBottom:
                windowSize < global.UTILS.BIG_TABLET_WIDTH ? "16px" : "24px",
              marginTop:
                windowSize < global.UTILS.BIG_TABLET_WIDTH ? "90px" : "24px",
              paddingLeft: "30px",
              width: "100%",
            }}
          >
            <extra>
              <span className="condensed-extrabold">Speakers</span>
            </extra>
          </h1>
          <div className="paradoxa-speakers-grid">
            <SpeakerCard
              imgSrc={Nardi}
              nomeSpeaker="Lorenzo Nardi"
              showLinkTalk={false}
              event="paradoxa"
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            />
            <SpeakerCard
              imgSrc={Dapoto}
              nomeSpeaker="Alessia Dapoto"
              showLinkTalk={false}
              event="paradoxa"
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            />
            <SpeakerCard
              imgSrc={Saltarelli}
              nomeSpeaker="Lorenzo Saltarelli"
              showLinkTalk={false}
              event="paradoxa"
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            />
            <SpeakerCard
              imgSrc={Pasatu}
              nomeSpeaker="Pepa Pasatu"
              showLinkTalk={false}
              event="paradoxa"
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            />
            <SpeakerCard
              imgSrc={Abbozzo}
              nomeSpeaker="Abbozzo"
              showLinkTalk={false}
              event="paradoxa"
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            />
            <SpeakerCard
              imgSrc={Panepinto}
              nomeSpeaker="Carmen Panepinto Zayati"
              showLinkTalk={false}
              event="paradoxa"
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            />
            <SpeakerCard
              imgSrc={Azzali}
              nomeSpeaker="Riccardo Azzali"
              showLinkTalk={false}
              event="paradoxa"
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            />
            <SpeakerCard
              imgSrc={Moretti}
              nomeSpeaker="Esmeralda Moretti"
              showLinkTalk={false}
              event="paradoxa"
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            />
            <SpeakerCard
              imgSrc={Kento}
              nomeSpeaker="Kento"
              showLinkTalk={false}
              event="paradoxa"
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            />
            <SpeakerCard
              imgSrc={Armaroli}
              nomeSpeaker="Nicola Armaroli"
              showLinkTalk={false}
              event="paradoxa"
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            />
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



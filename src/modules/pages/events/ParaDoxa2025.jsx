import React from "react";
import { useOutletContext } from "react-router-dom";
import global from "../../../resources/global.json";
import { useTranslation, Trans } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
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

export default function ParaDoxa2025() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();

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
          <div className="paradoxa-intro-left">
            <h1 className="paradoxa-title notranslate" translate="no">
              {t("event_paradoxa.title")}
            </h1>
            <p className="paradoxa-intro-text">
              <Trans i18nKey="event_paradoxa.description" />
            </p>
          </div>
          <div className="paradoxa-intro-right">
            <div className="paradoxa-info">
              <div className="paradoxa-info-row">
                <span className="paradoxa-info-icon">
                  <FontAwesomeIcon icon={faCalendar} />
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
                  <FontAwesomeIcon icon={faLocationDot} />
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
              {t("event_paradoxa.button")}
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
          backgroundColor: "#000",
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
            />
            <SpeakerCard
              imgSrc={Dapoto}
              nomeSpeaker="Alessia Dapoto"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Saltarelli}
              nomeSpeaker="Lorenzo Saltarelli"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Pasatu}
              nomeSpeaker="Pepa Pasatu"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Abbozzo}
              nomeSpeaker="Abbozzo"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Panepinto}
              nomeSpeaker="Carmen Panepinto Zayati"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Azzali}
              nomeSpeaker="Riccardo Azzali"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Moretti}
              nomeSpeaker="Esmeralda Moretti"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Kento}
              nomeSpeaker="Kento"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Armaroli}
              nomeSpeaker="Nicola Armaroli"
              showLinkTalk={false}
              event="paradoxa"
            />
          </div>
        </div>
      </section>
    </div>
  );
}



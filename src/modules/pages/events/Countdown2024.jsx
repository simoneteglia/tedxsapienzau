import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

import global from "../../../resources/global.json";
import Earth from "../../../assets/images/countdown24/earth.webp";
import CountdownLogo from "../../../assets/images/countdown24/countdown_logo.webp";
import { getLocalizedText, localized } from "../../utils/localization";

const countdownVideos = [
  {
    id: "BrunoMazzara",
    name: "Bruno Mazzara",
    title: localized(
      "Una svolta green, ma quale?",
      "A green transition, but which one?",
    ),
    embedUrl: "https://www.youtube.com/embed/qfP5K6o_71E?si=0LfW2q82x4_-SDLS",
  },
  {
    id: "AlessandroCorsini",
    name: "Alessandro Corsini",
    title: localized(
      "Come pesci che modellano l'acqua",
      "Like fish shaping the water",
    ),
    embedUrl: "https://www.youtube.com/embed/iKBoU13MLPE?si=1X9w5PUX_o6qOFCt",
  },
  {
    id: "RaffaellaAbate",
    name: "Raffaella Abate",
    title: localized(
      "Un viaggio nella natura: biofilia, solastalgia e benessere",
      "A journey into nature: biophilia, solastalgia and wellbeing",
    ),
    embedUrl: "https://www.youtube.com/embed/NmKLVYuWutI?si=6rNKgF52yK62cuuE",
  },
  {
    id: "MarceloConti",
    name: "Marcelo Enrique Conti",
    title: localized(
      "Dalla complessita economica al cambiamento climatico",
      "From economic complexity to climate change",
    ),
    embedUrl: "https://www.youtube.com/embed/bogFGkkxGz8?si=296Zb5tf5dkF4bPU",
  },
  {
    id: "SabrinaLucibello",
    name: "Sabrina Lucibello",
    title: localized(
      "Non si butta via niente!",
      "Nothing should go to waste!",
    ),
    embedUrl: "https://www.youtube.com/embed/xiON0VBhuP0?si=10HDt77bIpIHIJMC",
  },
  {
    id: "NunzioAllocca",
    name: "Nunzio Allocca",
    title: localized(
      "Responsabilita della cultura e cultura della responsabilita",
      "Responsibility of culture and a culture of responsibility",
    ),
    embedUrl: "https://www.youtube.com/embed/D_SgAqsNdhM?si=bW9uYM00eup1_bze",
  },
];

export default function Countdown2024() {
  const [windowSize] = useOutletContext();
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "it";
  const [selectedVideoId, setSelectedVideoId] = useState(countdownVideos[0].id);

  const selectedVideo =
    countdownVideos.find((video) => video.id === selectedVideoId) ||
    countdownVideos[0];

  const speakerSelectionStyle = {
    cursor: "pointer",
    textTransform: "uppercase",
  };

  return (
    <>
      <section
        className="w-screen flex flex-col items-center justify-center bg-black pb-5"
        style={{
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
        }}
      >
        <img
          src={Earth}
          alt="Earth"
          className="w-[400px] mb-[-100px] lg:w-[600px] lg:mb-[-250px] z-1"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
          }}
        />
        <img
          src={CountdownLogo}
          alt="Countdown Logo"
          className="lg:mb-[-20px] z-2 mix-blend-screen w-[400px] md:w-[400px] lg:w-[600px]"
        />
        <h1
          className="text-white ml-[1ch] mb-2 text-4xl md:text-6xl lg:text-6xl"
          style={{
            fontFamily: "Anton",
          }}
        >
          <span style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>31 | 05</span>
          {" "} | 24
        </h1>
      </section>

      <section
        id="speakers-section"
        className="w-screen h-full text-black flex flex-col justify-center items-center p-[50px] text-justify"
        style={{
          backgroundColor: global.COLORS.GIALLO_COUNTDOWN,
          fontFamily: "Anton",
        }}
      >
        <h1 className="mb-4 lg:text-5xl text-2xl">
          {t("event_countdown2024.title")}
        </h1>
        <p className="lg:text-2xl md:text-xl" style={{ maxWidth: "60ch" }}>
          <Trans
            i18nKey="event_countdown2024.description"
            components={{
              1: <b />,
            }}
          />
        </p>
        <div>
          <h1 className="mt-6 text-black lg:text-5xl text-2xl">
            {t("common.speakers")}
          </h1>
          <div
            style={{
              width: windowSize > global.UTILS.TABLET_WIDTH ? "70%" : "100%",
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          />
        </div>
      </section>

      <section
        id="video-section"
        className="w-screen h-full bg-black hidden md:flex items-center p-10 flex-wrap justify-around"
        style={{
          fontFamily: "Anton",
        }}
      >
        <section className="flex flex-col gap-12 md:text-4xl xl:text-5xl">
          {countdownVideos.map((video) => {
            const isSelected = video.id === selectedVideoId;

            return (
              <div
                key={video.id}
                style={{
                  ...speakerSelectionStyle,
                  color: isSelected ? global.COLORS.GIALLO_COUNTDOWN : "grey",
                }}
                onClick={() => {
                  setSelectedVideoId(video.id);
                }}
              >
                {video.name}
                <p
                  style={{
                    fontSize: "20px",
                    opacity: isSelected ? 1 : 0,
                    marginTop: isSelected ? "0" : "-60px",
                    transition: "0.5s all",
                  }}
                >
                  {getLocalizedText(video.title, language)}
                </p>
              </div>
            );
          })}
        </section>

        <iframe
          width="800px"
          style={{ aspectRatio: "16 / 9" }}
          src={selectedVideo.embedUrl}
          title="Countdown 2024 talk video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </section>
    </>
  );
}

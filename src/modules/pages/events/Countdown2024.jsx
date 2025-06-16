// -------------IMPORT COMPONENTS-------------
import React, { Component } from "react";
import { useOutletContext } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
// -------------IMPORT STYLES-------------
import global from "../../../resources/global.json";
// -------------IMPORT MEDIA-------------
import Earth from "../../../assets/images/countdown24/earth.webp";
import CountdownLogo from "../../../assets/images/countdown24/countdown_logo.webp";

export default function Countdown2024() {
  const [windowSize] = useOutletContext();
  const { t } = useTranslation();
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
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
            marginBottom: "-250px",
            width: windowSize > 1100 ? "" : "500px",
          }}
        />
        <img
          src={CountdownLogo}
          alt="Countdown Logo"
          className="mb-[-40px] z-2 mix-blend-screen"
          style={{
            width: windowSize > 1100 ? "" : "600px",
          }}
        />
        <h1
          className="text-white ml-[1ch] mb-[30px] text-8xl"
          style={{
            fontFamily: "Anton",
          }}
        >
          <span style={{ color: global.COLORS.GIALLO_COUNTDOWN }}> 31 | 0</span>
          5 | 24
        </h1>
        <h4
          className="ml-[3ch] text-xl"
          style={{
            color: global.COLORS.GIALLO_COUNTDOWN,
          }}
        >
          Nuovo Teatro Ateneo
        </h4>
      </section>
      <section
        className="w-screen h-full text-black flex flex-col justify-center items-center p-[50px] text-justify"
        style={{
          // width: "100vw",
          // height: "100%",
          backgroundColor: global.COLORS.GIALLO_COUNTDOWN,
          // color: "#000",
          fontFamily: "Anton",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // padding: "50px",
          // textAlign: "justify",
        }}
      >
        <h1 className="mb-4 lg:text-5xl text-2xl">
          {t("event_countdown2024.title")}
        </h1>
        <p className="lg:text-2xl md:text-xl" style={{ maxWidth: "60ch" }}>
          <Trans
            i18nKey="event_countdown2024.description"
            components={{
              1: <b></b>,
            }}
          />
        </p>
        <div>
          <h1 className="mt-6 text-black lg:text-5xl text-2xl">SPEAKERS</h1>
          <div
            style={{
              width: "70%",
              margin: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* {speakersInfo.map((speaker) => {
              const { nomeSpeaker, ruoloSpeaker, link, imgSrc } = speaker;
              return (
                <SpeakerCard
                  key={nomeSpeaker}
                  nomeSpeaker={nomeSpeaker}
                  ruoloSpeaker={ruoloSpeaker}
                  link={link}
                  imgSrc={imgSrc}
                  showName={true}
                  event={"countdown24"}
                  style={{
                    zIndex: 2,
                    flex: "1 0 32%",
                    cursor: "initial",
                  }}
                />
              );
            })} */}
          </div>
        </div>
      </section>
    </>
  );
}

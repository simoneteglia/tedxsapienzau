// -------------IMPORT COMPONENTS-------------
import React, { useState } from "react";
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
  const [iframeSource, setIframeSource] = useState(
    "https://www.youtube.com/embed/qfP5K6o_71E?si=hKofScYpCbBKDmCt&amp;"
  );
  const [selectedVideoSpeaker, setSelectedVideoSpeaker] =
    useState("BrunoMazzara");

  const videoLinks = {
    BrunoMazzara:
      "https://www.youtube.com/embed/qfP5K6o_71E?si=0LfW2q82x4_-SDLS",
    AlessandroCorsini:
      "https://www.youtube.com/embed/iKBoU13MLPE?si=1X9w5PUX_o6qOFCt",
    RaffaellaAbate:
      "https://www.youtube.com/embed/NmKLVYuWutI?si=6rNKgF52yK62cuuE",
    MarceloConti:
      "https://www.youtube.com/embed/bogFGkkxGz8?si=296Zb5tf5dkF4bPU",
    SabrinaLucibello:
      "https://www.youtube.com/embed/xiON0VBhuP0?si=10HDt77bIpIHIJMC",
    NunzioAllocca:
      "https://www.youtube.com/embed/D_SgAqsNdhM?si=bW9uYM00eup1_bze",
  };

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
          className="lg:mb-[-20px] z-2 mix-blend-screen w-[400px]  md:w-[400px] lg:w-[600px]"
        />
        <h1
          className="text-white ml-[1ch] mb-2 text-4xl md:text-6xl lg:text-6xl"
          style={{
            fontFamily: "Anton",
          }}
        >
          <span style={{ color: global.COLORS.GIALLO_COUNTDOWN }}> 31 | 0</span>
          5 | 24
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
      <section
        id="video-section"
        className="w-screen h-full bg-black hidden md:flex items-center p-10 flex-wrap justify-around "
        style={{
          fontFamily: "Anton",
        }}
      >
        <section className="flex flex-col gap-12 md:text-4xl xl:text-5xl">
          <div
            style={{
              ...speakerSelectionStyle,
              ...{
                color:
                  selectedVideoSpeaker === "BrunoMazzara"
                    ? global.COLORS.GIALLO_COUNTDOWN
                    : "grey",
              },
            }}
            onClick={() => {
              setIframeSource(videoLinks.BrunoMazzara);
              setSelectedVideoSpeaker("BrunoMazzara");
            }}
          >
            Bruno Mazzara
            <p
              style={{
                fontSize: "20px",
                opacity: selectedVideoSpeaker === "BrunoMazzara" ? 1 : 0,
                marginTop:
                  selectedVideoSpeaker === "BrunoMazzara" ? "0" : "-60px",
                transition: "0.5s all",
              }}
            >
              Una svolta green, ma quale?
            </p>
          </div>
          <div
            style={{
              ...speakerSelectionStyle,
              ...{
                color:
                  selectedVideoSpeaker === "AlessandroCorsini"
                    ? global.COLORS.GIALLO_COUNTDOWN
                    : "grey",
              },
            }}
            onClick={() => {
              setIframeSource(videoLinks.AlessandroCorsini);
              setSelectedVideoSpeaker("AlessandroCorsini");
            }}
          >
            Alessandro Corsini
            <p
              style={{
                fontSize: "20px",
                opacity: selectedVideoSpeaker === "AlessandroCorsini" ? 1 : 0,
                marginTop:
                  selectedVideoSpeaker === "AlessandroCorsini" ? "0" : "-60px",
                transition: "0.5s all",
              }}
            >
              Come pesci che modellano l'acqua
            </p>
          </div>
          <div
            style={{
              ...speakerSelectionStyle,
              ...{
                color:
                  selectedVideoSpeaker === "RaffaellaAbate"
                    ? global.COLORS.GIALLO_COUNTDOWN
                    : "grey",
              },
            }}
            onClick={() => {
              setIframeSource(videoLinks.RaffaellaAbate);
              setSelectedVideoSpeaker("RaffaellaAbate");
            }}
          >
            Raffaella Abate
            <p
              style={{
                fontSize: "20px",
                opacity: selectedVideoSpeaker === "RaffaellaAbate" ? 1 : 0,
                marginTop:
                  selectedVideoSpeaker === "RaffaellaAbate" ? "0" : "-60px",
                transition: "0.5s all",
              }}
            >
              Un viaggio nella natura: biofilia, solastalgia e benessere
            </p>
          </div>
          <div
            style={{
              ...speakerSelectionStyle,
              ...{
                color:
                  selectedVideoSpeaker === "MarceloConti"
                    ? global.COLORS.GIALLO_COUNTDOWN
                    : "grey",
              },
            }}
            onClick={() => {
              setIframeSource(videoLinks.MarceloConti);
              setSelectedVideoSpeaker("MarceloConti");
            }}
          >
            Marcelo Enrique Conti
            <p
              style={{
                fontSize: "20px",
                opacity: selectedVideoSpeaker === "MarceloConti" ? 1 : 0,
                marginTop:
                  selectedVideoSpeaker === "MarceloConti" ? "0" : "-60px",
                transition: "0.5s all",
              }}
            >
              Dalla complessità economica al cambiamento climatico
            </p>
          </div>
          <div
            style={{
              ...speakerSelectionStyle,
              ...{
                color:
                  selectedVideoSpeaker === "SabrinaLucibello"
                    ? global.COLORS.GIALLO_COUNTDOWN
                    : "grey",
              },
            }}
            onClick={() => {
              setIframeSource(videoLinks.SabrinaLucibello);
              setSelectedVideoSpeaker("SabrinaLucibello");
            }}
          >
            Sabrina Lucibello
            <p
              style={{
                fontSize: "20px",
                opacity: selectedVideoSpeaker === "SabrinaLucibello" ? 1 : 0,
                marginTop:
                  selectedVideoSpeaker === "SabrinaLucibello" ? "0" : "-60px",
                transition: "0.5s all",
              }}
            >
              Non si butta via niente!
            </p>
          </div>
          <div
            style={{
              ...speakerSelectionStyle,
              ...{
                color:
                  selectedVideoSpeaker === "NunzioAllocca"
                    ? global.COLORS.GIALLO_COUNTDOWN
                    : "grey",
              },
            }}
            onClick={() => {
              setIframeSource(videoLinks.NunzioAllocca);
              setSelectedVideoSpeaker("NunzioAllocca");
            }}
          >
            Nunzio Allocca
            <p
              style={{
                fontSize: "20px",
                opacity: selectedVideoSpeaker === "NunzioAllocca" ? 1 : 0,
                marginTop:
                  selectedVideoSpeaker === "NunzioAllocca" ? "0" : "-60px",
                transition: "0.5s all",
              }}
            >
              Responsabilità della cultura e cultura della responsabilità
            </p>
          </div>
        </section>

        <iframe
          width="800px"
          style={{ aspectRatio: "16/9" }}
          src={iframeSource}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

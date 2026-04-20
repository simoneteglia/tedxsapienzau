import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";

import backgroundVideo from "../../assets/videos/tedx.mp4";
import countdownCover from "../../assets/images/countdown24/earth.webp";
import backToZeroCover from "../../assets/images/backtozero23/header_blog23-card.webp";
import act22Cover from "../../assets/images/act22/Edizione2022.webp";
import paradoxa25Cover from "../../assets/images/paradoxa25/header_paradoxa2.png";
import youtubeLogo from "../../assets/images/general/youtube_logo.png";
import global from "../../resources/global.json";
import paradoxaCover from "../../assets/images/paradoxa25/panepinto.webp";

import CookieBox from "../components/CookieBox";
import Bento from "../components/bento";
import "./landing.css";
import {
  getLocalizedText,
  isEnglishLanguage,
  localized,
} from "../utils/localization";

const AnimatedNumber = ({ end, duration = 2000, locale = "it-IT" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += Math.ceil(end / 100);

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [duration, end]);

  return <span>{count.toLocaleString(locale)}</span>;
};

const thumbnailImages = import.meta.glob("../../assets/images/thumbnails/*.*", {
  eager: true,
});

function getThumbnailSrc(videoId) {
  const matchingKey = Object.keys(thumbnailImages).find((key) => {
    const filename = key.split("/").pop().split(".")[0];
    return filename === videoId;
  });
  return matchingKey ? thumbnailImages[matchingKey].default : null;
}

function TalkThumbnail({ videoId, alt, objectPosition = "center" }) {
  const thumbnail = getThumbnailSrc(videoId);

  if (!thumbnail) return null;

  return (
    <img
      className="landing-video-image"
      src={thumbnail}
      alt={alt}
      style={{ objectPosition }}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
    />
  );
}

const talkHighlights = [
  {
    videoId: "oel9-7Az0vw",
    title: "Pepa Pasatu",
    subtitle: "3 habits that ruin pleasurable sex",
    objectPosition: "center",
    href: "https://www.youtube.com/watch?v=oel9-7Az0vw&list=PL4-t_gJBexTAb7wP2mzg-S2bCfzptE58n&index=1",
  },
  {
    videoId: "q9f5TggigTI",
    title: "Nicola Armaroli",
    subtitle: "Is the energy transition a rip-off?",
    href: "https://www.youtube.com/watch?v=q9f5TggigTI&list=PL4-t_gJBexTAb7wP2mzg-S2bCfzptE58n&index=2&t=3s",
  },
  {
    videoId: "IYliyLgTnfk",
    title: "Rose Villain",
    subtitle: "Music and self-care: a new perspective on the world",
    href: "https://www.youtube.com/watch?v=IYliyLgTnfk&list=PL4-t_gJBexTBDgARWnLB3dmC0g1_OcxFc&index=7",
  },
  {
    videoId: "qVbiy9OiaHY",
    title: "Marcello Ienca",
    subtitle: "Human-AI Symbiosis and the Quest for Neurorights",
    href: "https://www.youtube.com/watch?v=qVbiy9OiaHY&list=PL4-t_gJBexTBDgARWnLB3dmC0g1_OcxFc&index=1&t=1s",
  },
];

const landingEvents = [
  {
    title: "Para Doxa",
    year: "2025",
    href: "/events/paradoxa2025",
    image: paradoxaCover,
  },
  {
    title: "Countdown",
    year: "2024",
    href: "/events/countdown2024",
    image: countdownCover,
  },
  {
    title: "Back to Zero",
    year: "2023",
    href: "/events/backtozero",
    image: backToZeroCover,
  },

  {
    title: "ACT: Lead the Change",
    year: "2022",
    href: "/events/act22",
    image: act22Cover,
  },
];

const landingCopy = {
  heroTitle: "RELIVE THE LATEST EDITION",
  aboutDescription: localized(
    "TEDxSapienzaU è il TEDx universitario dell'Ateneo Sapienza Università di Roma.",
    "TEDxSapienzaU is the university TEDx of Sapienza University of Rome.",
  ),
  talksTitle: localized(
    "Rivivi alcuni dei nostri talk.",
    "Rewatch some of our talks.",
  ),
  talksCopy: localized(
    "Una selezione di alcuni dei talks TEDxSapienzaU, scelti tra i più acclamati delle passate edizioni.",
    "A selection of some of our TEDxSapienzaU talks, chosen among the most acclaimed of the past editions.",
  ),
  eventsTitle: localized("I nostri eventi:", "Our events:"),
  eventCardAction: localized("Scopri", "Learn more"),
  eventsCta: localized("Scopri tutti gli eventi", "Browse all events"),
  youtubeCta: "Open on YouTube",
};

export default function Landing() {
  const [windowSize] = useOutletContext();
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "it";
  const locale = isEnglishLanguage(language) ? "en-US" : "it-IT";
  const copy = (value) => getLocalizedText(value, language);

  const isMobile = windowSize < global.UTILS.TABLET_WIDTH;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { end: 41, label: t("mvhome.speakers") },
    { end: 205000, label: t("mvhome.yt_views") },
    { end: 9000, label: t("mvhome.followers") },
    { end: 5000, label: t("mvhome.spectators") },
  ];

  return (
    <div className="text-white" style={{ backgroundColor: "transparent" }}>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: global.UTILS.NAV_HEIGHT,
          width: "100%",
          maxWidth: "100%",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          id="main-container"
          className="w-full h-full"
          style={{
            padding: global.UTILS.BENTO_BOX_PADDING,
            display: "flex",
            justifyContent: "center",
            alignItems:
              windowSize > global.UTILS.TABLET_WIDTH ? "flex-end" : "center",
            fontFamily: "ObjectSansHeavy",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {windowSize > global.UTILS.TABLET_WIDTH ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                objectPosition: "center",
                objectFit: "cover",
              }}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          ) : null}
          <div
            id="video-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))",
              display:
                windowSize > global.UTILS.TABLET_WIDTH ? "initial" : "none",
            }}
          />
          <div
            style={{
              color: "white",
              zIndex: 0,
              display: "flex",
              alignItems: "flex-end",
              gap: "20px",
            }}
          >
            <h2
              className="text-white"
              style={{
                fontSize:
                  windowSize > global.UTILS.TABLET_WIDTH ? "2vw" : "0.5vw",
                visibility:
                  windowSize > global.UTILS.TABLET_WIDTH ? "initial" : "hidden",
                transform: "translateY(6px)",
              }}
            >
              TEDXSAPIENZAU
            </h2>
            <h1
              style={{
                textAlign: "center",
                fontSize:
                  windowSize > 1245
                    ? "10vh"
                    : windowSize > global.UTILS.MOBILE_WIDTH
                      ? "80px"
                      : "60px",
                fontWeight: 700,
                maxWidth: "13ch",
                lineHeight: 1.02,
              }}
            >
              {copy(landingCopy.heroTitle)}
            </h1>
            <h2
              className="text-white"
              style={{
                fontSize: "2vw",
                visibility:
                  windowSize > global.UTILS.TABLET_WIDTH ? "initial" : "hidden",
                transform: "translateY(6px)",
              }}
            >
              PARA DOXA 2025
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full relative py-24">
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr 1fr",
              gridTemplateRows: isMobile ? "auto" : "repeat(2, 1fr)",
              gap: "24px",
              fontFamily: "'Object Sans', sans-serif",
            }}
          >
            <Bento
              style={{
                gridRow: isMobile ? "span 1" : "span 2",
                alignItems: "flex-start",
                textAlign: "left",
                padding: "40px",
              }}
              onMouseOver={(event) => {
                event.currentTarget.style.transform = "translateY(-5px)";
                event.currentTarget.style.borderColor = "rgba(235, 0, 40, 0.8)";
              }}
              onMouseOut={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.borderColor =
                  "rgba(255, 255, 255, 0.15)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  lineHeight: "1.4",
                  marginBottom: "30px",
                  color: "white",
                  fontFamily: "ObjectSans",
                }}
              >
                {copy(landingCopy.aboutDescription)}
              </h3>

              <Link
                to="/about"
                style={{
                  backgroundColor: "#eb0028",
                  color: "white",
                  border: "none",
                  padding: "15px 35px",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  boxShadow: "0 4px 15px rgba(235, 0, 40, 0.4)",
                  textDecoration: "none",
                  display: "inline-block",
                  fontFamily: "ObjectSans",
                }}
                onMouseOver={(event) => {
                  event.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(event) => {
                  event.currentTarget.style.transform = "scale(1)";
                }}
              >
                {t("common.learn_more")}
              </Link>
            </Bento>

            {stats.map((stat) => (
              <Bento key={stat.label}>
                <div
                  style={{
                    color: "white",
                    fontSize: "3.5rem",
                    fontWeight: "800",
                    marginBottom: "10px",
                  }}
                >
                  <AnimatedNumber
                    end={stat.end}
                    duration={2000}
                    locale={locale}
                  />
                </div>
                <div
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    color: "#ccc",
                    textAlign: "center",
                    fontFamily: "ObjectSans",
                  }}
                >
                  {stat.label}
                </div>
              </Bento>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-showcase-section">
        <div className="landing-showcase-shell">
          <div className="landing-section-head">
            <h2 className="landing-section-title">
              {copy(landingCopy.talksTitle)}
            </h2>
            <p className="landing-section-copy">
              {copy(landingCopy.talksCopy)}
            </p>
          </div>

          <div className="landing-video-grid">
            {talkHighlights.map((talk) => (
              <a
                key={talk.href}
                className="landing-video-card"
                href={talk.href}
                rel="noreferrer"
                target="_blank"
              >
                <TalkThumbnail
                  videoId={talk.videoId}
                  alt={talk.title}
                  objectPosition={talk.objectPosition}
                />
                <span className="landing-video-logo-badge" aria-hidden="true">
                  <img
                    className="landing-video-logo"
                    src={youtubeLogo}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <div className="landing-video-content">
                  <h3 className="landing-video-title">{talk.title}</h3>
                  <p className="landing-video-subtitle">
                    {copy(talk.subtitle)}
                  </p>
                  <span className="landing-video-footer">
                    {copy(landingCopy.youtubeCta)}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-showcase-section">
        <div className="landing-showcase-shell">
          <div className="landing-section-head">
            <h2 className="landing-section-title">
              {copy(landingCopy.eventsTitle)}
            </h2>
          </div>

          <div className="landing-events-grid">
            {landingEvents.map((event) => (
              <Link
                key={event.href}
                className="landing-event-card"
                to={event.href}
              >
                <img
                  className="landing-event-image"
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="landing-event-content">
                  <h3 className="landing-event-title">{event.title}</h3>
                  <div className="landing-event-footer">
                    <span>{event.year}</span>
                    <span className="landing-event-link">
                      <span>{copy(landingCopy.eventCardAction)}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="landing-showcase-cta">
            <Link className="landing-showcase-link" to="/events">
              {copy(landingCopy.eventsCta)}
            </Link>
          </div>
        </div>
      </section>

      <CookieBox />
    </div>
  );
}

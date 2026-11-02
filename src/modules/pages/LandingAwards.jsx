import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";

import countdownCover from "../../assets/images/countdown24/earth.webp";
import backToZeroCover from "../../assets/images/backtozero23/header_blog23-card.webp";
import paradoxa25Cover from "../../assets/images/paradoxa25/header_paradoxa2.png";
import youtubeLogo from "../../assets/images/general/youtube_logo.png";
import global from "../../resources/global.json";
import paradoxaCover from "../../assets/images/paradoxa25/panepinto.webp";
import otbCover from "../../assets/images/onthebrink26/otb_header.png";
import awardsLogo from "../../assets/images/awards24/awards24.webp";

import CookieBox from "../components/CookieBox";
import Bento from "../components/bento";
import TeamLogoScroll from "../components/TeamLogoScroll";
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
    videoId: "p9za10JtrpU",
    title: "Lorenzo Zazzeri",
    subtitle: "Cosa impari quando sei costretto a fermarti?",
    href: "https://youtu.be/p9za10JtrpU?si=m0tHbXuo3csf4OGe",
  },
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
  // {
  //   videoId: "qVbiy9OiaHY",
  //   title: "Marcello Ienca",
  //   subtitle: "Human-AI Symbiosis and the Quest for Neurorights",
  //   href: "https://www.youtube.com/watch?v=qVbiy9OiaHY&list=PL4-t_gJBexTBDgARWnLB3dmC0g1_OcxFc&index=1&t=1s",
  // },
];

const landingEvents = [
  {
    title: "On the Brink",
    year: "2026",
    href: "/events/onthebrink",
    image: otbCover,
    objectPosition: "32% center",
  },
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
        className="awards-hero-section"
        style={{
          backgroundColor: "#000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: isMobile
            ? "calc(100svh - 70px)"
            : `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          minHeight: isMobile ? "620px" : "660px",
          marginTop: isMobile ? "70px" : global.UTILS.NAV_HEIGHT,
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          id="main-container"
          className="w-full h-full"
          style={{
            backgroundColor: "#000000",
            padding: isMobile ? "12px" : global.UTILS.BENTO_BOX_PADDING,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* Top foreground row */}
          <TeamLogoScroll
            direction="right"
            logoHeight={isMobile ? 32 : 54}
            style={{ top: isMobile ? "2%" : "4%", zIndex: 3 }}
          />

          {/* Background dark scrolling logo rows */}
          {[
            { top: "15%", dir: "left" },
            { top: "27%", dir: "right" },
            { top: "39%", dir: "left" },
            { top: "51%", dir: "right" },
            { top: "63%", dir: "left" },
            { top: "75%", dir: "right" },
          ].map((row, idx) => (
            <TeamLogoScroll
              key={`bg-logo-row-${idx}`}
              direction={row.dir}
              dark
              logoHeight={isMobile ? 28 : 48}
              style={{ top: row.top, zIndex: 0 }}
            />
          ))}

          <div className="awards-hero-content">
            <div className="awards-hero-logo-wrapper">
              <img src={awardsLogo} alt="Awards" className="awards-hero-logo" />
            </div>

            <div
              className="awards-hero-bento"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? "12px" : "18px",
                padding: isMobile ? "20px 22px" : "32px 38px",
                borderRadius: isMobile ? "20px" : "28px",
                background: "rgba(18, 18, 18, 0.72)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                boxShadow: "0 18px 45px rgba(0, 0, 0, 0.55)",
              }}
            >
              <span
                style={{
                  fontFamily: "ObjectSansHeavy",
                  fontSize: "clamp(1.2rem, 2.6vw, 1.85rem)",
                  lineHeight: 1.25,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: global.COLORS?.ROSSO_TED || "#eb0028",
                    flexShrink: 0,
                    boxShadow: "0 0 12px rgba(235, 0, 40, 0.8)",
                  }}
                  aria-hidden="true"
                />
                {copy(
                  localized(
                    "Venerdì 4 Dicembre 2026 • ore 16:00",
                    "Friday December 04, 2026 • 4:00 PM",
                  ),
                )}
              </span>
              <span
                style={{
                  fontFamily: "ObjectSans",
                  fontWeight: 600,
                  fontSize: "clamp(1rem, 1.85vw, 1.4rem)",
                  lineHeight: 1.35,
                  color: "rgba(255, 255, 255, 0.94)",
                }}
              >
                Aula Odeion • Edificio di Lettere, Dipartimento di Scienze dell'
                Antichità
              </span>
              <span
                style={{
                  fontFamily: "ObjectSans",
                  fontWeight: 400,
                  fontSize: "clamp(0.9rem, 1.55vw, 1.2rem)",
                  lineHeight: 1.35,
                  color: "rgba(255, 255, 255, 0.72)",
                }}
              >
                Sapienza Università di Roma • Piazzale Aldo Moro, Roma
              </span>
              <span>
                <button
                  type="button"
                  disabled
                  className="landing-showcase-link"
                >
                  Tickets out soon
                </button>
              </span>
            </div>
          </div>

          {/* Bottom foreground row */}
          <TeamLogoScroll
            direction="left"
            logoHeight={isMobile ? 32 : 54}
            style={{ bottom: isMobile ? "2%" : "4%", zIndex: 3 }}
          />
        </div>
      </section>

      <section className={`w-full relative ${isMobile ? "py-12" : "py-24"}`}>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: isMobile ? "0 16px" : "0 24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "1.2fr 1fr 1fr",
              gridTemplateRows: isMobile ? "auto" : "repeat(2, 1fr)",
              gap: isMobile ? "14px" : "24px",
              fontFamily: "'Object Sans', sans-serif",
            }}
          >
            <Bento
              style={{
                gridColumn: isMobile ? "span 2" : "auto",
                gridRow: isMobile ? "span 1" : "span 2",
                alignItems: "flex-start",
                textAlign: "left",
                padding: isMobile ? "24px 20px" : "40px",
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
                  fontSize: isMobile ? "1.25rem" : "1.8rem",
                  fontWeight: "bold",
                  lineHeight: "1.35",
                  marginBottom: isMobile ? "20px" : "30px",
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
                  padding: isMobile ? "12px 28px" : "15px 35px",
                  borderRadius: "50px",
                  fontSize: isMobile ? "0.95rem" : "1rem",
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
              <Bento
                key={stat.label}
                style={{
                  padding: isMobile ? "20px 12px" : "2rem",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: isMobile
                      ? "clamp(1.7rem, 6.2vw, 2.3rem)"
                      : "3.5rem",
                    fontWeight: "800",
                    marginBottom: isMobile ? "6px" : "10px",
                    lineHeight: 1.1,
                    textAlign: "center",
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
                    fontSize: isMobile
                      ? "clamp(0.82rem, 2.8vw, 0.98rem)"
                      : "1.2rem",
                    fontWeight: "500",
                    color: "#ccc",
                    textAlign: "center",
                    fontFamily: "ObjectSans",
                    lineHeight: 1.25,
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
                  style={{
                    objectPosition: event.objectPosition || "center",
                  }}
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

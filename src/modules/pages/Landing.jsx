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
import onthebrinkText from "../../assets/images/onthebrink26/onthebrink_text.png";
import frecciagiu from "../../assets/images/onthebrink26/chevron_backward.png";
import parioli_logo_t from "../../assets/images/partners23/Parioli.png";

// import CookieBox from "../components/CookieBox";
import Bento from "../components/bento";
import OnTheBrinkBackground from "../components/OnTheBrinkBackground";
import OnTheBrinkSpeakers from "../components/OnTheBrinkSpeakers";
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
  heroDate: localized("25 Maggio • 14:00", "May 25 • 2PM"),
  ticketsCta: localized("Biglietti disponibili ora!", "Tickets available now!"),
  ticketsCtaShort: localized("Biglietti qui!", "Tickets here!"),
  otbDescription: localized(
    " On the Brink è il momento sospeso in cui le possibilità sono infinite perché tutto deve ancora avvenire, la moneta librante in volo che determinerà il futuro. È la soglia tra ciò che è stato e ciò che potrebbe diventare, dove tensione, desiderio e incertezza convivono in quell’attimo “prima di”. L’evento celebra questo spazio di liminalità, ci invita a sostare nel dubbio, a esplorare l’ignoto e ad abitarlo. La moneta cadrà, ma è nel suo volo che prende forma ciò che verrà.",
    " On the Brink is the suspended moment in which possibilities are infinite because everything is yet to happen, the hovering coin in flight that will determine the future. It is the threshold between what has been and what could become, where tension, desire and uncertainty coexist in that “before“ moment. The event celebrates this liminal space, inviting us to dwell in doubt, to explore the unknown and to inhabit it. The coin will fall, but it is in its flight that what is to come takes shape.",
  ),
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
      <OnTheBrinkBackground>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            width: "100%",
            maxWidth: "100%",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            className="landing-hero-rectangle"
            style={{ marginTop: `calc(3vh + ${global.UTILS.NAV_HEIGHT})` }}
          >
            <img
              src={onthebrinkText}
              alt="On The Brink"
              className="hero-onthebrink-text"
            />
            <div className="hero-demo-text">
              {copy(landingCopy.heroDate)}
              <br />
              <span className="hero-demo-subtext">Teatro Parioli Costanzo</span>
              <a
                href="https://www.eventbrite.it/e/biglietti-tedxsapienzau-on-the-brink-1988490962999?aff=oddtdtcreator"
                className="hero-ticket-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy(landingCopy.ticketsCta)}
              </a>
              <img
                src={parioli_logo_t}
                alt="Parioli"
                className="mt-5"
                width={130}
                style={{ display: "block", marginLeft: "auto" }}
              />
            </div>

            <img
              src={frecciagiu}
              alt="Scroll Down"
              className="hero-chevron"
              onClick={() =>
                document
                  .getElementById("concept-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{ cursor: "pointer" }}
            />
          </div>
        </section>

        <section className="landing-concept-section" id="concept-section">
          <div className="landing-concept-text">
            {copy(landingCopy.otbDescription)}
          </div>
          <a
            href="https://www.eventbrite.it/e/biglietti-tedxsapienzau-on-the-brink-1988490962999?aff=oddtdtcreator"
            className="landing-ticket"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="landing-ticket-notch-bottom" />
            <span className="landing-ticket-label">on the brink</span>
            <span className="landing-ticket-date">
              25 Maggio 2026
              <br />h 14:00
              <br />
              Teatro Parioli Costanzo
            </span>
            <span className="landing-ticket-cta">
              {copy(landingCopy.ticketsCtaShort)}
            </span>
          </a>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            width: "100%",
            maxWidth: "100%",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div className="landing-speakers-rectangle">
            <div className="hero-speakers-text">Speakers</div>
            <OnTheBrinkSpeakers />
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

        {/* <CookieBox /> */}
      </OnTheBrinkBackground>
    </div>
  );
}

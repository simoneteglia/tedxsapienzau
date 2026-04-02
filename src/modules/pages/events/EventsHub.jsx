import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import global from "../../../resources/global.json";

import paradoxaHeader from "../../../assets/images/paradoxa25/header_paradoxa2.png";
import awards24Poster from "../../../assets/images/awards24/awards24.webp";
import countdownCover from "../../../assets/images/countdown24/earth.webp";
import backToZeroCover from "../../../assets/images/backtozero23/header_blog23.webp";
import awards23Cover from "../../../assets/images/awards23/header_awards23.webp";
import act22Cover from "../../../assets/images/act22/Edizione2022.webp";
import awards22Cover from "../../../assets/images/awards22/awards2022.webp";

const events = [
  {
    title: "Para Doxa",
    type: "TEDx edition",
    year: "2025",
    date: "11 Apr 2025",
    href: "/events/paradoxa2025",
    image: paradoxaHeader,
    accent: "#ff009c",
    description:
      "Il capitolo piu recente del TEDxSapienzaU: una giornata di talks, paradossi contemporanei e idee che rompono gli schemi.",
  },
  {
    title: "SapienzaU Awards 2024",
    type: "Awards",
    year: "2024",
    date: "28 Nov 2024",
    href: "/events/awards24",
    image: awards24Poster,
    accent: "#ffd800",
    description:
      "La finale che porta sul palco artisti e speaker emergenti con idee da far circolare molto piu lontano dell'universita.",
  },
  {
    title: "Countdown 2024",
    type: "Special format",
    year: "2024",
    date: "31 May 2024",
    href: "/events/countdown2024",
    image: countdownCover,
    accent: "#f1ff39",
    description:
      "Il format dedicato alla crisi climatica: visioni interdisciplinari, urgenza concreta e un immaginario piu radicale.",
  },
  {
    title: "Back to Zero",
    type: "TEDx edition",
    year: "2023",
    date: "15 Nov 2023",
    href: "/events/backtozero",
    image: awards23Cover,
    accent: "#eb0028",
    description:
      "Un invito a ripartire dalle basi, ridurre il rumore e reimmaginare societa, scienza, arti e responsabilita collettiva.",
  },
  {
    title: "SapienzaU Awards 2023",
    type: "Awards",
    year: "2023",
    date: "18 Apr 2023",
    href: "/events/awards23",
    image: backToZeroCover,
    accent: "#eb0028",
    description:
      "Una selezione di artisti e speaker premiati per idee capaci di lasciare segno e aprire conversazioni nuove.",
  },
  {
    title: "ACT: Lead the Change",
    type: "TEDx edition",
    year: "2022",
    date: "29 Apr 2022",
    href: "/events/act22",
    image: act22Cover,
    accent: "#ff5a36",
    description:
      "La prima edizione del TEDxSapienzaU, costruita intorno ad azione, contaminazione dei saperi e trasformazione.",
  },
  {
    title: "SapienzaU Awards 2022",
    type: "Awards",
    year: "2022",
    date: "29 Apr 2022",
    href: "/events/awards22",
    image: awards22Cover,
    accent: "#ff9d00",
    description:
      "I vincitori della prima stagione awards, premiati sul palco e pronti a trasformare il loro progetto in una voce pubblica.",
  },
];

const stats = [
  { value: "2022 -> 2025", label: "stagioni raccolte" },
  { value: `${events.length}`, label: "pagine evento" },
  { value: "1 hub", label: "per arrivare ovunque" },
];

const featuredEvent = events[0];

export default function EventsHub() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="events-hub"
      style={{ paddingTop: `calc(${global.UTILS.NAV_HEIGHT} + 28px)` }}
    >
      <div className="events-hub-shell">
        <section className="events-hero">
          <div className="events-hero-copy">
            <p className="events-kicker">TEDxSapienzaU archive</p>
            <h1 className="events-hero-title">Eventi da rivivere e riaprire.</h1>
            <p className="events-hero-subtitle">
              Questa e la nuova porta d&apos;ingresso agli eventi TEDxSapienzaU:
              un archivio visivo, veloce e pieno di personalita, da cui puoi
              saltare direttamente a ogni pagina evento del sito.
            </p>

            <div className="events-hero-actions">
              <Link className="events-primary-link" to={featuredEvent.href}>
                Scopri l&apos;ultimo evento
              </Link>
              <a className="events-secondary-link" href="#events-archive">
                Vai all&apos;archivio
              </a>
            </div>

            <div className="events-stats">
              {stats.map((stat) => (
                <article className="events-stat" key={stat.label}>
                  <div className="events-stat-value">{stat.value}</div>
                  <div className="events-stat-label">{stat.label}</div>
                </article>
              ))}
            </div>
          </div>

          <Link
            className="events-feature-card"
            style={{ "--event-accent": featuredEvent.accent }}
            to={featuredEvent.href}
          >
            <img src={featuredEvent.image} alt={featuredEvent.title} />
            <div className="events-feature-content">
              <div className="events-pill-row">
                <span className="events-pill">In evidenza</span>
                <span className="events-pill events-pill--ghost">
                  {featuredEvent.year}
                </span>
              </div>
              <div className="events-feature-meta">
                {featuredEvent.type} . {featuredEvent.date}
              </div>
              <h2>{featuredEvent.title}</h2>
              <p>{featuredEvent.description}</p>
              <span className="events-card-link">Apri la pagina</span>
            </div>
          </Link>
        </section>

        <section className="events-archive-section" id="events-archive">
          <div className="events-archive-head">
            <p className="events-kicker">Browse all pages</p>
            <h2>Dall&apos;edizione zero ai format speciali.</h2>
            <p className="events-archive-copy">
              Tutte le pagine evento raccolte in un solo posto, ordinate per
              recency e pronte da esplorare.
            </p>
          </div>

          <div className="events-grid">
            {events.map((event) => (
              <Link
                className="events-card"
                key={event.href}
                style={{ "--event-accent": event.accent }}
                to={event.href}
              >
                <div className="events-card-image">
                  <img src={event.image} alt={event.title} />
                </div>

                <div className="events-card-body">
                  <div className="events-card-topline">
                    <span>{event.type}</span>
                    <span>{event.year}</span>
                  </div>

                  <div className="events-card-main">
                    <h3 className="events-card-title">{event.title}</h3>
                    <p className="events-card-description">{event.description}</p>
                  </div>

                  <div className="events-card-footer">
                    <span>{event.date}</span>
                    <span>Apri pagina</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

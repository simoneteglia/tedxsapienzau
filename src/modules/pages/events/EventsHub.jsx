import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import global from "../../../resources/global.json";

import paradoxaHeader from "../../../assets/images/paradoxa25/header_paradoxa2.png";
import awards24Poster from "../../../assets/images/awards24/awards24.webp";
import countdownCover from "../../../assets/images/countdown24/earth.webp";
import backToZeroCover from "../../../assets/images/backtozero23/header_blog23-card.webp";
import awards23Cover from "../../../assets/images/awards23/header_awards23.webp";
import act22Cover from "../../../assets/images/act22/Edizione2022.webp";
import awards22Cover from "../../../assets/images/awards22/awards2022-card.webp";
import { getLocalizedText, localized } from "../../utils/localization";

const events = [
  {
    title: "Para Doxa",
    type: localized("Edizione TEDx", "TEDx edition"),
    year: "2025",
    date: localized("11 apr 2025", "11 Apr 2025"),
    href: "/events/paradoxa2025",
    image: paradoxaHeader,
    accent: "#ff009c",
    description: localized(
      "Il capitolo piu recente del TEDxSapienzaU: una giornata di talk, paradossi contemporanei e idee che rompono gli schemi.",
      "The latest TEDxSapienzaU chapter: a day of talks, contemporary paradoxes and ideas that challenge familiar patterns.",
    ),
  },
  {
    title: "SapienzaU Awards 2024",
    type: "Awards",
    year: "2024",
    date: localized("28 nov 2024", "28 Nov 2024"),
    href: "/events/awards24",
    image: awards24Poster,
    doContain: true,
    accent: "#ffd800",
    description: localized(
      "La finale che porta sul palco artisti e speaker emergenti con idee capaci di viaggiare ben oltre l'universita.",
      "The final that brings emerging artists and speakers to the stage with ideas built to travel far beyond the university.",
    ),
  },
  {
    title: "Countdown 2024",
    type: localized("Format speciale", "Special format"),
    year: "2024",
    date: localized("31 mag 2024", "31 May 2024"),
    href: "/events/countdown2024",
    image: countdownCover,
    accent: "#f1ff39",
    description: localized(
      "Il format dedicato alla crisi climatica: visioni interdisciplinari, urgenza concreta e un immaginario piu radicale.",
      "The format focused on the climate crisis: interdisciplinary perspectives, concrete urgency and a more radical imagination.",
    ),
  },
  {
    title: "Back to Zero",
    type: localized("Edizione TEDx", "TEDx edition"),
    year: "2023",
    date: localized("15 nov 2023", "15 Nov 2023"),
    href: "/events/backtozero",
    image: awards23Cover,
    accent: "#eb0028",
    description: localized(
      "Un invito a ripartire dalle basi, ridurre il rumore e reimmaginare societa, scienza, arti e responsabilita collettiva.",
      "An invitation to start from the basics, cut the noise and rethink society, science, the arts and collective responsibility.",
    ),
  },
  {
    title: "SapienzaU Awards 2023",
    type: "Awards",
    year: "2023",
    date: localized("18 apr 2023", "18 Apr 2023"),
    href: "/events/awards23",
    image: backToZeroCover,
    accent: "#eb0028",
    description: localized(
      "Una selezione di artisti e speaker premiati per idee capaci di lasciare segno e aprire conversazioni nuove.",
      "A selection of artists and speakers awarded for ideas that leave a mark and open up new conversations.",
    ),
  },
  {
    title: "ACT: Lead the Change",
    type: localized("Edizione TEDx", "TEDx edition"),
    year: "2022",
    date: localized("29 apr 2022", "29 Apr 2022"),
    href: "/events/act22",
    image: act22Cover,
    accent: "#ff5a36",
    description: localized(
      "La prima edizione del TEDxSapienzaU, costruita intorno ad azione, contaminazione dei saperi e trasformazione.",
      "The first TEDxSapienzaU edition, built around action, cross-pollination between disciplines and transformation.",
    ),
  },
  {
    title: "SapienzaU Awards 2022",
    type: "Awards",
    year: "2022",
    date: localized("29 apr 2022", "29 Apr 2022"),
    href: "/events/awards22",
    image: awards22Cover,
    accent: "#ff9d00",
    description: localized(
      "I vincitori della prima stagione awards, premiati sul palco e pronti a trasformare il loro progetto in una voce pubblica.",
      "The winners of the first awards season, recognised on stage and ready to turn their project into a public voice.",
    ),
  },
];

const eventsHubCopy = {
  heroKicker: localized("Archivio TEDxSapienzaU", "TEDxSapienzaU archive"),
  heroTitle: localized(
    "Eventi da rivivere e riaprire.",
    "Events worth revisiting.",
  ),
  heroSubtitle: localized(
    "Questa e la nuova porta d'ingresso agli eventi TEDxSapienzaU: un archivio visivo, rapido e pieno di personalita, da cui puoi raggiungere direttamente ogni pagina evento del sito.",
    "This is the new front door to TEDxSapienzaU events: a visual archive that is fast, distinctive and built to take you straight into every event page on the site.",
  ),
  archiveKicker: localized("Tutte le pagine evento", "All event pages"),
  archiveTitle: localized(
    "Dall'edizione zero ai format speciali.",
    "From the first edition to special formats.",
  ),
  archiveCopy: localized(
    "Tutte le pagine evento raccolte in un solo posto, ordinate per data e pronte da esplorare.",
    "All the event pages collected in one place, ordered by date and ready to explore.",
  ),
};

export default function EventsHub() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "it";
  const copy = (value) => getLocalizedText(value, language);
  const stats = [
    {
      value: "2022 -> 2025",
      label: copy(localized("stagioni raccolte", "seasons collected")),
    },
    {
      value: `${events.length}`,
      label: copy(localized("pagine evento", "event pages")),
    },
    {
      value: "1 hub",
      label: copy(localized("per arrivare ovunque", "to reach everything")),
    },
  ];
  const featuredEvent = events[0];

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
            <p className="events-kicker">{copy(eventsHubCopy.heroKicker)}</p>
            <h1 className="events-hero-title">
              {copy(eventsHubCopy.heroTitle)}
            </h1>
            <p className="events-hero-subtitle">
              {copy(eventsHubCopy.heroSubtitle)}
            </p>

            <div className="events-hero-actions">
              <Link className="events-primary-link" to={featuredEvent.href}>
                {t("common.latest_event")}
              </Link>
              <a className="events-secondary-link" href="#events-archive">
                {t("common.go_to_archive")}
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
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              decoding="async"
            />
            <div className="events-feature-content">
              <div className="events-pill-row">
                <span className="events-pill">{t("common.featured")}</span>
                <span className="events-pill events-pill--ghost">
                  {featuredEvent.year}
                </span>
              </div>
              <div className="events-feature-meta">
                {copy(featuredEvent.type)} . {copy(featuredEvent.date)}
              </div>
              <h2>{featuredEvent.title}</h2>
              <p>{copy(featuredEvent.description)}</p>
              <span className="events-card-link">{t("common.open_page")}</span>
            </div>
          </Link>
        </section>

        <section className="events-archive-section" id="events-archive">
          <div className="events-archive-head">
            <p className="events-kicker">{copy(eventsHubCopy.archiveKicker)}</p>
            <h2>{copy(eventsHubCopy.archiveTitle)}</h2>
            <p className="events-archive-copy">
              {copy(eventsHubCopy.archiveCopy)}
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
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{ objectFit: event.doContain ? "contain" : "cover" }}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>

                <div className="events-card-body">
                  <div className="events-card-topline">
                    <span>{copy(event.type)}</span>
                    <span>{event.year}</span>
                  </div>

                  <div className="events-card-main">
                    <h3 className="events-card-title">{event.title}</h3>
                    <p className="events-card-description">
                      {copy(event.description)}
                    </p>
                  </div>

                  <div className="events-card-footer">
                    <span>{copy(event.date)}</span>
                    <span>{t("common.open_page")}</span>
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

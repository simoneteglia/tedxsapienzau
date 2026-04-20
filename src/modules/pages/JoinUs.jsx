import { Link } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import global from "../../resources/global.json";
import {
  joinUsFaqs,
  joinUsFinalCta,
  joinUsHeroCopy,
  joinUsInfoCards,
  joinUsSteps,
  joinUsTeamIntro,
  joinUsTeamSummaries,
} from "../../data/joinUsData";
import { getLocalizedValue, teamSections } from "../../data/teamData";
import { getTeamLogo } from "../../data/teamVisuals";

import "./joinUs.css";

function JoinUsInfoCard({ card, language }) {
  return (
    <article className="joinus-info-card">
      <p className="joinus-card-eyebrow">
        {getLocalizedValue(card.eyebrow, language)}
      </p>
      <h2>{getLocalizedValue(card.title, language)}</h2>
      <p>{getLocalizedValue(card.description, language)}</p>
    </article>
  );
}

function JoinUsStepCard({ step, language }) {
  return (
    <article className="joinus-step-card">
      <span className="joinus-step-number">{step.id}</span>
      <h3>{getLocalizedValue(step.title, language)}</h3>
      <p>{getLocalizedValue(step.description, language)}</p>
    </article>
  );
}

function JoinUsTeamCard({ team, language }) {
  const summary = joinUsTeamSummaries[team.id];
  const roleTags = team.members.slice(0, 4);
  const teamLogo = getTeamLogo(team.id);

  return (
    <article
      className="joinus-team-card"
      style={{ "--joinus-accent": team.accent }}
    >
      <div className="joinus-team-card-head">
        <p className="joinus-team-card-kicker">
          {getLocalizedValue(team.eyebrow, language)}
        </p>
        {teamLogo ? (
          <img
            className="joinus-team-card-logo"
            src={teamLogo}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </div>
      <h3>{team.label}</h3>
      <p className="joinus-team-card-summary">
        {summary ? getLocalizedValue(summary, language) : ""}
      </p>

      {/* <div className="joinus-team-tag-row">
        {roleTags.map((member, index) => (
          <span key={`${team.id}-tag-${index}`} className="joinus-team-tag">
            {getLocalizedValue(member.name, language)}
          </span>
        ))}
      </div> */}
    </article>
  );
}

function JoinUsFaqCard({ item, language }) {
  return (
    <article className="joinus-faq-card">
      <h3>{getLocalizedValue(item.question, language)}</h3>
      <p>{getLocalizedValue(item.answer, language)}</p>
    </article>
  );
}

export default function JoinUs() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "it";
  const recruitingTeams = teamSections.filter(({ id }) => id !== "board");
  const heroTitle = getLocalizedValue(joinUsHeroCopy.title, language);
  const heroTitleWords = heroTitle.split(" ");
  const [highlightNote, setHighlightNote] = useState(false);
  const [highlightFinalNote, setHighlightFinalNote] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="joinus-page"
      style={{ paddingTop: `calc(${global.UTILS.NAV_HEIGHT} + 28px)` }}
    >
      <div className="joinus-shell">
        <section className="joinus-hero">
          <div className="joinus-hero-copy">
            <p className="joinus-kicker">
              {getLocalizedValue(joinUsHeroCopy.kicker, language)}
            </p>
            <h1 className="joinus-title" aria-label={heroTitle}>
              {heroTitleWords.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className={`joinus-title-word ${index >= heroTitleWords.length - 2 ? "is-accent" : ""}`}
                  style={{ "--joinus-word-index": index }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="joinus-description">
              {getLocalizedValue(joinUsHeroCopy.description, language)}
            </p>

            <div className="joinus-signal-row">
              {joinUsHeroCopy.signals.map((signal) => (
                <span key={signal.it} className="joinus-signal-pill">
                  {getLocalizedValue(signal, language)}
                </span>
              ))}
            </div>

            <div className="joinus-action-row">
              <button
                type="button"
                className="joinus-primary-button"
                onClick={() => setHighlightNote(true)}
              >
                {getLocalizedValue(joinUsHeroCopy.inactiveCtaLabel, language)}
              </button>
              <a
                className="joinus-secondary-button"
                href="#joinus-team-directory"
              >
                {getLocalizedValue(joinUsHeroCopy.exploreTeamsLabel, language)}
              </a>
            </div>

            <p
              className={`joinus-action-note ${highlightNote ? "is-highlighted" : ""}`}
              onAnimationEnd={() => setHighlightNote(false)}
            >
              {getLocalizedValue(joinUsHeroCopy.inactiveCtaNote, language)}
            </p>
          </div>
        </section>

        <section className="joinus-info-grid">
          {joinUsInfoCards.map((card) => (
            <JoinUsInfoCard key={card.id} card={card} language={language} />
          ))}
        </section>

        <section className="joinus-process-section">
          <header className="joinus-section-head">
            <p className="joinus-section-kicker">
              {getLocalizedValue(joinUsHeroCopy.kicker, language)}
            </p>
            <h2>
              {getLocalizedValue(
                { it: "Come candidarsi:", en: "How to apply:" },
                language,
              )}
            </h2>
          </header>

          <div className="joinus-step-grid">
            {joinUsSteps.map((step) => (
              <JoinUsStepCard key={step.id} step={step} language={language} />
            ))}
          </div>
        </section>

        <section id="joinus-team-directory" className="joinus-team-section">
          <header className="joinus-section-head joinus-section-head--with-link">
            <div>
              <p className="joinus-section-kicker">
                {getLocalizedValue(joinUsTeamIntro.kicker, language)}
              </p>
              <h2>{getLocalizedValue(joinUsTeamIntro.title, language)}</h2>
              <p>{getLocalizedValue(joinUsTeamIntro.description, language)}</p>
            </div>

            <Link className="joinus-inline-link" to="/team">
              {getLocalizedValue(
                joinUsTeamIntro.exploreTeamPageLabel,
                language,
              )}
            </Link>
          </header>

          <div className="joinus-team-grid">
            {recruitingTeams.map((team) => (
              <JoinUsTeamCard key={team.id} team={team} language={language} />
            ))}
          </div>
        </section>

        <section className="joinus-faq-section">
          <header className="joinus-section-head">
            <p className="joinus-section-kicker">
              {getLocalizedValue(
                { it: "Domande frequenti", en: "Common questions" },
                language,
              )}
            </p>
            <h2>
              {getLocalizedValue(
                { it: "Prima di candidarti:", en: "Before you apply:" },
                language,
              )}
            </h2>
            <p>
              {getLocalizedValue(
                {
                  it: "Tre dubbi frequenti, leggi per chiarire subito cosa ti aspetta.",
                  en: "Three common doubts worth clarifying directly on the page, so people can quickly understand whether this pace is right for them.",
                },
                language,
              )}
            </p>
          </header>

          <div className="joinus-faq-grid">
            {joinUsFaqs.map((item) => (
              <JoinUsFaqCard key={item.id} item={item} language={language} />
            ))}
          </div>
        </section>

        <section className="joinus-cta-banner">
          <div className="joinus-cta-copy">
            <p className="joinus-section-kicker">
              {getLocalizedValue(joinUsFinalCta.kicker, language)}
            </p>
            <h2>{getLocalizedValue(joinUsFinalCta.title, language)}</h2>
            {/* <p>{getLocalizedValue(joinUsFinalCta.description, language)}</p> */}
          </div>

          <div className="joinus-cta-actions-wrapper">
            <div className="joinus-cta-actions">
              <button
                type="button"
                className="joinus-primary-button"
                onClick={() => setHighlightFinalNote(true)}
              >
                {getLocalizedValue(joinUsFinalCta.primaryLabel, language)}
              </button>
              <a
                className="joinus-secondary-button"
                href={`mailto:${joinUsHeroCopy.contactValue}`}
              >
                {getLocalizedValue(joinUsFinalCta.secondaryLabel, language)}
              </a>
            </div>
            <div className="joinus-cta-note-container">
              <p
                className={`joinus-description ${highlightFinalNote ? "is-highlighted" : ""}`}
                onAnimationEnd={() => setHighlightFinalNote(false)}
              >
                {getLocalizedValue(joinUsFinalCta.descriptionLabel, language)}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

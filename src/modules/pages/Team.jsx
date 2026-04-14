import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import global from "../../resources/global.json";
import { getLocalizedValue, teamSections } from "../../data/teamData";
import { getTeamLogo } from "../../data/teamVisuals";
import placeholderImage from "../../assets/images/team/placeholder.webp";

import "./team.css";

function TeamMemberCard({ member, accent, language, imageSrc }) {
  const name = getLocalizedValue(member.name, language);
  const role = member.role;

  return (
    <article className="team-member-card" style={{ "--team-accent": accent }}>
      <div className="team-member-visual">
        <img className="team-member-photo" src={imageSrc} alt={name} />
      </div>

      <div className="team-member-copy">
        <h3>{name}</h3>
        <p>{role ? role : ""}</p>
      </div>
    </article>
  );
}

export default function Team() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "it";
  const [activeTeamId, setActiveTeamId] = useState(teamSections[0].id);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const sectionRefs = useRef({});

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedTeamId) {
      return undefined;
    }

    const sections = teamSections
      .map(({ id }) => sectionRefs.current[id])
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (entryA, entryB) =>
              entryB.intersectionRatio - entryA.intersectionRatio,
          );

        if (!visibleEntries.length) {
          return;
        }

        const teamId = visibleEntries[0].target.dataset.teamId;

        if (teamId) {
          setActiveTeamId(teamId);
        }
      },
      {
        rootMargin: "-20% 0px -48% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [selectedTeamId]);

  const openTeamFocus = (teamId) => {
    setActiveTeamId(teamId);
    setSelectedTeamId(teamId);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeTeamFocus = () => {
    setSelectedTeamId(null);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const selectedTeam =
    teamSections.find(({ id }) => id === selectedTeamId) ?? null;
  const focusedTeam =
    selectedTeam ??
    teamSections.find(({ id }) => id === activeTeamId) ??
    teamSections[0];
  const focusedTeamLogo = getTeamLogo(focusedTeam.id);
  const isCompactFocusTitle = focusedTeam.label.length > 28;

  return (
    <main
      className="team-page"
      style={{ paddingTop: `calc(${global.UTILS.NAV_HEIGHT} + 28px)` }}
    >
      <div className={`team-page-shell ${selectedTeam ? "is-focus-mode" : ""}`}>
        <div className={`team-view-stack ${selectedTeam ? "is-focused" : ""}`}>
          <div
            aria-hidden={Boolean(selectedTeam)}
            className={`team-overview-view ${selectedTeam ? "is-hidden" : "is-visible"}`}
          >
            <section className="team-hero">
              <h1 className="team-hero-title">{t("team_page.hero_title")}</h1>
              <p className="team-hero-description">
                {t("team_page.hero_description")}
              </p>

              <div className="team-chip-row">
                {teamSections.map((team) => (
                  <button
                    key={team.id}
                    type="button"
                    className={`team-chip ${team.id === activeTeamId ? "is-active" : ""}`}
                    onClick={() => openTeamFocus(team.id)}
                    style={{ "--team-accent": team.accent }}
                  >
                    {team.label}
                  </button>
                ))}
              </div>
            </section>

            <section className="team-sections">
              {teamSections.map((team) => {
                const teamLogo = getTeamLogo(team.id);

                return (
                  <section
                    key={team.id}
                    id={`team-section-${team.id}`}
                    data-team-id={team.id}
                    className="team-section"
                    ref={(node) => {
                      if (node) {
                        sectionRefs.current[team.id] = node;
                      }
                    }}
                  >
                    <header
                      className="team-section-head"
                      style={{
                        "--team-accent": team.accent,
                        "--team-description-color":
                          team.id === "board"
                            ? "rgba(255, 255, 255, 0.84)"
                            : undefined,
                      }}
                    >
                      {teamLogo ? (
                        <div className="team-section-brand">
                          <img
                            className="team-section-logo"
                            src={teamLogo}
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ) : null}
                      <h2 className="team-section-title">{team.label}</h2>
                      <p className="team-section-description">
                        {t(team.descriptionKey)}
                      </p>
                    </header>

                    <div className="team-members-grid">
                      {team.members.map((member, index) => (
                        <TeamMemberCard
                          key={`${team.id}-${index}`}
                          member={member}
                          accent={team.accent}
                          language={language}
                          imageSrc={placeholderImage}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </section>
          </div>

          <section
            aria-hidden={!selectedTeam}
            className={`team-focus-view ${selectedTeam ? "is-visible" : "is-hidden"}`}
            style={{
              "--team-accent": focusedTeam.accent,
              "--team-description-color":
                focusedTeam.id === "board"
                  ? "rgba(255, 255, 255, 0.88)"
                  : undefined,
            }}
          >
            <div className="team-focus-stage">
              <div className="team-focus-mode-copy">
                {focusedTeamLogo ? (
                  <div className="team-focus-brand">
                    <img
                      className="team-focus-logo"
                      src={focusedTeamLogo}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : null}
                <h2
                  className={`team-focus-mode-title ${isCompactFocusTitle ? "is-compact" : ""}`}
                >
                  {focusedTeam.label}
                </h2>
                <p className="team-focus-mode-description">
                  {t(focusedTeam.descriptionKey)}
                </p>
              </div>

              <div className="team-focus-actions">
                <button
                  type="button"
                  className="team-focus-close"
                  aria-label="Close selected team"
                  onClick={closeTeamFocus}
                >
                  X
                </button>
                <span className="team-focus-pill">{focusedTeam.label}</span>
              </div>
            </div>

            <div className="team-members-grid team-members-grid--focused">
              {focusedTeam.members.map((member, index) => (
                <TeamMemberCard
                  key={`${focusedTeam.id}-${index}`}
                  member={member}
                  accent={focusedTeam.accent}
                  language={language}
                  imageSrc={placeholderImage}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

import global from "../../resources/global.json";
import {
  getLocalizedSponsorValue,
  sponsorHeroCopy,
  sponsorMarqueeItems,
  sponsorSections,
  sponsorStats,
} from "../../data/sponsorsData";

import "./sponsors.css";

function SponsorStatCard({ value, label }) {
  return (
    <article className="sponsor-stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function SponsorSlot({ sectionCode, slot, language, accent }) {
  const name = getLocalizedSponsorValue(slot.name, language);
  const note = getLocalizedSponsorValue(slot.note, language);

  return (
    <article
      className="sponsor-slot"
      style={{
        "--sponsor-accent": slot.accent ?? accent,
        "--sponsor-slot-logo-scale": slot.logoScale ?? 1,
      }}
    >
      <span className="sponsor-slot-code">{sectionCode}</span>

      <div className="sponsor-slot-visual">
        {slot.src ? (
          <img className="sponsor-slot-image" src={slot.src} alt={name} />
        ) : (
          <h3>{name}</h3>
        )}
      </div>

      <div className="sponsor-slot-copy">
        <h3>{name}</h3>
        <p>{note}</p>
      </div>
    </article>
  );
}

function SponsorLogoTile({ item, language }) {
  const name = getLocalizedSponsorValue(item.name, language);

  return (
    <article
      className="sponsor-logo-tile"
      style={{
        "--sponsor-accent": item.accent,
        "--sponsor-tile-logo-scale": item.tileLogoScale ?? item.logoScale ?? 1,
      }}
      aria-label={name}
      title={name}
    >
      {item.src ? (
        <img className="sponsor-logo-image" src={item.src} alt={name} />
      ) : (
        <strong>{name}</strong>
      )}
    </article>
  );
}

export default function Sponsors() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "it";
  const marqueeFirstRow = sponsorMarqueeItems.slice(0, Math.ceil(sponsorMarqueeItems.length / 2));
  const marqueeSecondRow = sponsorMarqueeItems.slice(Math.ceil(sponsorMarqueeItems.length / 2));
  const partnershipFormats = [
    t("partners.14th_st_el_1"),
    t("partners.14th_st_el_2"),
    t("partners.14th_st_el_3"),
    t("partners.14th_st_el_4"),
    t("partners.14th_st_el_5"),
  ];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="sponsors-page"
      style={{ paddingTop: `calc(${global.UTILS.NAV_HEIGHT} + 28px)` }}
    >
      <div className="sponsors-shell">
        <section className="sponsors-hero">
          <div className="sponsors-hero-copy">
            <p className="sponsors-kicker">
              {getLocalizedSponsorValue(sponsorHeroCopy.kicker, language)}
            </p>
            <h1 className="sponsors-title">
              {getLocalizedSponsorValue(sponsorHeroCopy.title, language)}
            </h1>
            <p className="sponsors-description">
              {getLocalizedSponsorValue(sponsorHeroCopy.description, language)}
            </p>

            <div className="sponsors-logo-marquee" aria-label={t("partners.slider_title")}>
              <div className="sponsors-logo-marquee-row">
                <div className="sponsors-logo-track">
                  {[...marqueeFirstRow, ...marqueeFirstRow].map((item, index) => (
                    <SponsorLogoTile
                      key={`${item.id}-row-a-${index}`}
                      item={item}
                      language={language}
                    />
                  ))}
                </div>
              </div>

              <div className="sponsors-logo-marquee-row is-slower">
                <div className="sponsors-logo-track">
                  {[...marqueeSecondRow, ...marqueeSecondRow].map((item, index) => (
                    <SponsorLogoTile
                      key={`${item.id}-row-b-${index}`}
                      item={item}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="sponsors-cta-card">
            <p className="sponsors-cta-kicker">
              {getLocalizedSponsorValue(sponsorHeroCopy.ctaEyebrow, language)}
            </p>
            <h2 className="sponsors-cta-title">
              {getLocalizedSponsorValue(sponsorHeroCopy.ctaTitle, language)}
            </h2>
            <p className="sponsors-cta-description">
              {getLocalizedSponsorValue(sponsorHeroCopy.ctaDescription, language)}
            </p>

            <div className="sponsors-format-row">
              {partnershipFormats.map((format) => (
                <span key={format} className="sponsors-format-chip">
                  {format}
                </span>
              ))}
            </div>

            <div className="sponsors-cta-contact">
              <span>{getLocalizedSponsorValue(sponsorHeroCopy.contactLabel, language)}</span>
              <a href={`mailto:${sponsorHeroCopy.contactValue}`}>
                {sponsorHeroCopy.contactValue}
              </a>
            </div>

            <button type="button" className="sponsors-contact-button">
              {t("partners.14th_st_el_6")}
            </button>
          </aside>
        </section>

        <section className="sponsors-stats-section">
          <div className="sponsors-stats-copy">
            <p className="sponsors-stats-kicker">{t("partners.stats")}</p>
            <h2>{t("partners.events")}</h2>
            <p>
              {language.toLowerCase().startsWith("en")
                ? "A quick snapshot of audience, reach and partnerships across the project."
                : "Una fotografia rapida di audience, reach e collaborazioni che orbitano intorno al progetto."}
            </p>
          </div>

          <div className="sponsors-stats-grid">
            {sponsorStats.map((stat) => (
              <SponsorStatCard
                key={stat.labelKey}
                value={stat.value}
                label={t(stat.labelKey)}
              />
            ))}
          </div>
        </section>

        <section className="sponsors-directory">
          <header className="sponsors-directory-head">
            <p className="sponsors-directory-kicker">{t("partners.slider_title")}</p>
            <h2>
              {language.toLowerCase().startsWith("en")
                ? "A modular sponsor page ready for real logos"
                : "Una sponsor page modulare pronta per i loghi reali"}
            </h2>
            <p>
              {language.toLowerCase().startsWith("en")
                ? "Each block below already maps one collaboration format, so later we can swap placeholder slots with real partner identities without changing the structure."
                : "Ogni blocco qui sotto corrisponde gia a un formato di collaborazione, cosi piu avanti potremo sostituire i placeholder con loghi reali senza toccare la struttura della pagina."}
            </p>
          </header>

          <div className="sponsor-category-grid">
            {sponsorSections.map((section) => (
              <article
                key={section.id}
                className={`sponsor-category-card ${section.featured ? "is-featured" : ""}`}
                style={{ "--sponsor-accent": section.accent }}
              >
                <header className="sponsor-category-head">
                  <div>
                    <p className="sponsor-category-code">{section.code}</p>
                    <h3>{getLocalizedSponsorValue(section.title, language)}</h3>
                  </div>
                  <span className="sponsor-category-count">
                    {section.slots.length} {section.slots.length === 1 ? "slot" : "slots"}
                  </span>
                </header>

                <p className="sponsor-category-description">
                  {getLocalizedSponsorValue(section.description, language)}
                </p>

                <div className="sponsor-slot-grid">
                  {section.slots.map((slot) => (
                    <SponsorSlot
                      key={slot.id}
                      sectionCode={section.code}
                      slot={slot}
                      language={language}
                      accent={section.accent}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Bento from "../components/bento";

import global from "../../resources/global.json";
import {
  getLocalizedSponsorValue,
  sponsorHeroCopy,
  sponsorMarqueeItems,
  sponsorSections,
} from "../../data/sponsorsData";

import "./sponsors.css";

// Componente striscia scorrevole
function SponsorLogoTile({ item, language }) {
  const name = getLocalizedSponsorValue(item.name, language);
  return (
    <article className="sponsor-logo-tile" aria-label={name} title={name}>
      {item.src ? (
        <img className="sponsor-logo-image" src={item.src} alt={name} />
      ) : (
        <strong>{name}</strong>
      )}
    </article>
  );
}

// IL NUOVO SPONSOR SLOT (Usa i dati del tuo file ma grafica Bento)
function SponsorSlot({ slot, language, isFeatured }) {
  const name = getLocalizedSponsorValue(slot.name, language);
  
  // Se la sezione è "featured" (es. Main Sponsor) la card è più grande
  const bentoHeight = isFeatured ? "260px" : "180px";

  return (
    <div className="flex flex-col h-full w-full">
      <Bento 
        style={{ 
          padding: "1.5rem", 
          height: bentoHeight, 
          background: "white", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          borderRadius: "32px" 
        }}
      >
        {slot.src ? (
          <img 
            src={slot.src} 
            alt={name} 
            className="w-full h-full object-contain drop-shadow-sm" 
            style={{ transform: `scale(${slot.logoScale ?? 1})` }}
          />
        ) : (
          <span className="text-black font-bold text-center leading-tight" style={{ fontFamily: "ObjectSansHeavy", fontSize: "1.5rem" }}>
            {name}
          </span>
        )}
      </Bento>
      
      {/* Link sotto al logo */}
      <a 
        href={slot.link || "#"} 
        target="_blank" 
        rel="noreferrer" 
        className="text-center text-gray-300 mt-4 text-sm underline underline-offset-4 hover:text-white transition-colors" 
        style={{ fontFamily: "ObjectSansHeavy" }}
      >
        {name} ↗
      </a>
    </div>
  );
}

export default function Sponsors() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language || "it";
  
  // STATO PER IL FILTRO ANNO (Impostato su 2023 per mostrare subito i tuoi dati reali)
  const [selectedYear, setSelectedYear] = useState("2023");

  const marqueeFirstRow = sponsorMarqueeItems.slice(0, Math.ceil(sponsorMarqueeItems.length / 2));
  const marqueeSecondRow = sponsorMarqueeItems.slice(Math.ceil(sponsorMarqueeItems.length / 2));
  const partnershipFormats = [
    t("partners.14th_st_el_1"), t("partners.14th_st_el_2"), t("partners.14th_st_el_3"), t("partners.14th_st_el_4"), t("partners.14th_st_el_5"),
  ];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sponsors-page" style={{ paddingTop: `calc(${global.UTILS.NAV_HEIGHT} + 28px)` }}>
      <div className="sponsors-shell">
        
        {/* HERO SECTION */}
        <section className="sponsors-hero">
          <div className="sponsors-hero-copy">
            <h1 className="sponsors-title">{getLocalizedSponsorValue(sponsorHeroCopy.title, language)}</h1>
            <p className="sponsors-description">{getLocalizedSponsorValue(sponsorHeroCopy.description, language)}</p>

            <div className="sponsors-logo-marquee">
              <div className="sponsors-logo-marquee-row">
                <div className="sponsors-logo-track">
                  {[...marqueeFirstRow, ...marqueeFirstRow].map((item, index) => (
                    <SponsorLogoTile key={`row-a-${index}`} item={item} language={language} />
                  ))}
                </div>
              </div>

              <div className="sponsors-logo-marquee-row is-slower">
                <div className="sponsors-logo-track">
                  {[...marqueeSecondRow, ...marqueeSecondRow].map((item, index) => (
                    <SponsorLogoTile key={`row-b-${index}`} item={item} language={language} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="sponsors-cta-card">
            <h2 className="sponsors-cta-title">{getLocalizedSponsorValue(sponsorHeroCopy.ctaTitle, language)}</h2>
            <p className="sponsors-cta-description">{getLocalizedSponsorValue(sponsorHeroCopy.ctaDescription, language)}</p>
            <div className="sponsors-format-row">
              {partnershipFormats.map((format) => (
                <span key={format} className="sponsors-format-chip">{format}</span>
              ))}
            </div>
            <div className="sponsors-cta-contact">
              <span>{getLocalizedSponsorValue(sponsorHeroCopy.contactLabel, language)}</span>
              <a href={`mailto:${sponsorHeroCopy.contactValue}`}>{sponsorHeroCopy.contactValue}</a>
            </div>
            <button type="button" className="sponsors-contact-button">{t("partners.14th_st_el_6")}</button>
          </aside>
        </section>

        {/* STATS SECTION - LIQUID GLASS */}
        <section className="max-w-6xl mx-auto mb-20 w-full">
          <div className="sponsors-stats-copy mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "ObjectSansHeavy" }}>{t("partners.events")}</h2>
            <p className="text-gray-300 text-lg mx-auto max-w-3xl" style={{ fontFamily: "ObjectSans" }}>
              {language.toLowerCase().startsWith("en") ? "A quick snapshot of audience, reach and partnerships across the project." : "Una fotografia rapida di audience, reach e collaborazioni che orbitano intorno al progetto."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Bento style={{ textAlign: "center", padding: "2rem 1rem", minHeight: "220px" }}>
              <strong className="text-[#eb0028] font-bold leading-tight block mb-2" style={{ fontSize: "clamp(42px, 5vw, 74px)", fontFamily: "ObjectSansHeavy", color:"white" }}>725113</strong>
              <span className="font-bold leading-tight text-white block" style={{ fontSize: "18px", fontFamily: "ObjectSansHeavy", letterSpacing: "1px" }}>account social raggiunti</span>
            </Bento>
            <Bento style={{ textAlign: "center", padding: "2rem 1rem", minHeight: "220px" }}>
              <strong className="text-[#eb0028] font-bold leading-tight block mb-2" style={{ fontSize: "clamp(42px, 5vw, 74px)", fontFamily: "ObjectSansHeavy", color:"white" }}>41</strong>
              <span className="font-bold leading-tight text-white block" style={{ fontSize: "18px", fontFamily: "ObjectSansHeavy", letterSpacing: "1px" }}>speakers</span>
            </Bento>
            <Bento style={{ textAlign: "center", padding: "2rem 1rem", minHeight: "220px" }}>
              <strong className="text-[#eb0028] font-bold leading-tight block mb-2" style={{ fontSize: "clamp(42px, 5vw, 74px)", fontFamily: "ObjectSansHeavy", color:"white" }}>4</strong>
              <span className="font-bold leading-tight text-white block" style={{ fontSize: "18px", fontFamily: "ObjectSansHeavy", letterSpacing: "1px" }}>eventi Awards</span>
            </Bento>
            <Bento style={{ textAlign: "center", padding: "2rem 1rem", minHeight: "220px" }}>
              <strong className="text-[#eb0028] font-bold leading-tight block mb-2" style={{ fontSize: "clamp(42px, 5vw, 74px)", fontFamily: "ObjectSansHeavy", color:"white" }}>320</strong>
              <span className="font-bold leading-tight text-white block" style={{ fontSize: "18px", fontFamily: "ObjectSansHeavy", letterSpacing: "1px" }}>volontari</span>
            </Bento>
            <Bento style={{ textAlign: "center", padding: "2rem 1rem", minHeight: "220px" }}>
              <strong className="text-[#eb0028] font-bold leading-tight block mb-2" style={{ fontSize: "clamp(42px, 5vw, 74px)", fontFamily: "ObjectSansHeavy", color:"white" }}>36</strong>
              <span className="font-bold leading-tight text-white block" style={{ fontSize: "18px", fontFamily: "ObjectSansHeavy", letterSpacing: "1px" }}>sponsors & partners</span>
            </Bento>
            <Bento style={{ textAlign: "center", padding: "2rem 1rem", minHeight: "220px" }}>
              <strong className="text-[#eb0028] font-bold leading-tight block mb-2" style={{ fontSize: "clamp(42px, 5vw, 74px)", fontFamily: "ObjectSansHeavy", color:"white" }}>3</strong>
              <span className="font-bold leading-tight text-white block" style={{ fontSize: "18px", fontFamily: "ObjectSansHeavy", letterSpacing: "1px" }}>eventi TEDx</span>
            </Bento>
          </div>
        </section>

        {/* LOGOS DIRECTORY (Dinamico da sponsorsData.js) */}
        <section className="max-w-6xl mx-auto mb-20 w-full">
          
          {/* HEADER CON SELETTORE ANNO */}
          <div className="flex justify-between items-center mb-12 border-b border-white/20 pb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "ObjectSansHeavy" }}>
              {language.toLowerCase().startsWith("en") ? "Our sponsors" : "I nostri sponsor"}
            </h2>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-transparent text-white border border-white/40 rounded-full px-5 py-2 cursor-pointer outline-none hover:bg-white/10 transition"
              style={{ fontFamily: "ObjectSansHeavy", fontSize: "16px" }}
            >
              <option value="2026" className="bg-[#101010] text-white">2026</option>
              <option value="2025" className="bg-[#101010] text-white">2025</option>
              <option value="2024" className="bg-[#101010] text-white">2024</option>
              <option value="2023" className="bg-[#101010] text-white">2023</option>
              <option value="2022" className="bg-[#101010] text-white">2022</option>
            </select>
          </div>

          {/* MAPPATURA SEZIONI DA sponsorsData.js */}
          <div className="flex flex-col gap-12">
            {sponsorSections.map((section) => {
              
              // Filtra gli sponsor per l'anno selezionato.
              // N.B: Se nel file dati un logo non ha l'attributo "year", lo mostra comunque per evitare pagine vuote!
              const filteredSlots = section.slots.filter(
                (slot) => !slot.year || String(slot.year) === selectedYear
              );

              if (filteredSlots.length === 0) return null;

              return (
                <article key={section.id} className="w-full flex flex-col">
                  {/* Titolo Categoria (es. MAIN SPONSORS) */}
                  <header className="mb-6">
                    <h3 className="text-[#ff92a3] text-sm font-bold uppercase" style={{ fontFamily: "ObjectSans", letterSpacing: "0.16em" }}>
                      {getLocalizedSponsorValue(section.title, language)}
                    </h3>
                  </header>

                  {/* Griglia Loghi */}
                  <div 
                    className="grid gap-6" 
                    style={{ 
                      gridTemplateColumns: section.featured 
                        ? "repeat(auto-fill, minmax(280px, 1fr))" 
                        : "repeat(auto-fill, minmax(220px, 1fr))" 
                    }}
                  >
                    {filteredSlots.map((slot) => (
                      <SponsorSlot
                        key={slot.id}
                        slot={slot}
                        language={language}
                        isFeatured={section.featured}
                      />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

        </section>
      </div>
    </main>
  );
}

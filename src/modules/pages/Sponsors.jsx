import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Bento from "../components/bento";

import global from "../../resources/global.json";
import {
  sponsorHeroCopy,
  sponsorMarqueeItems,
  sponsorSections,
} from "../../data/sponsorsData";

import "./sponsors.css";

// Componente striscia scorrevole
function SponsorLogoTile({ item }) {
  const name = item.name;
  return (
    <article className="sponsor-logo-tile" aria-label={name} title={name}>
      {item.src ? (
        <img 
          className="sponsor-logo-image" 
          src={item.src} 
          alt={name} 
          style={{ transform: `scale(${item.tileLogoScale || 1})` }}
        />
      ) : (
        <strong>{name}</strong>
      )}
    </article>
  );
}

// Sponsor Slot (Grafica Bento adattata ai nuovi dati)
function SponsorSlot({ slot, isFeatured }) {
  const name = slot.name;
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
  const { t } = useTranslation();
  
  // STATO PER IL FILTRO ANNO: Impostato su 2026 di default
  const [selectedYear, setSelectedYear] = useState("2026");

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
            <h1 className="sponsors-title">{sponsorHeroCopy.title}</h1>
            <p className="sponsors-description">{sponsorHeroCopy.description}</p>

            <div className="sponsors-logo-marquee">
              <div className="sponsors-logo-marquee-row">
                <div className="sponsors-logo-track">
                  {[...marqueeFirstRow, ...marqueeFirstRow].map((item, index) => (
                    <SponsorLogoTile key={`row-a-${index}`} item={item} />
                  ))}
                </div>
              </div>

              <div className="sponsors-logo-marquee-row is-slower">
                <div className="sponsors-logo-track">
                  {[...marqueeSecondRow, ...marqueeSecondRow].map((item, index) => (
                    <SponsorLogoTile key={`row-b-${index}`} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="sponsors-cta-card">
            <h2 className="sponsors-cta-title">{sponsorHeroCopy.ctaTitle}</h2>
            <p className="sponsors-cta-description">{sponsorHeroCopy.ctaDescription}</p>
            <div className="sponsors-format-row">
              {partnershipFormats.map((format) => (
                <span key={format} className="sponsors-format-chip">{format}</span>
              ))}
            </div>
            <div className="sponsors-cta-contact">
              <span>{sponsorHeroCopy.contactLabel}</span>
              <a href={`mailto:${sponsorHeroCopy.contactValue}`}>{sponsorHeroCopy.contactValue}</a>
            </div>
            <button type="button" className="sponsors-contact-button">{t("partners.14th_st_el_6")}</button>
          </aside>
        </section>

        {/* STATS SECTION */}
        <section className="max-w-6xl mx-auto mb-20 w-full">
          <div className="sponsors-stats-copy mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "ObjectSansHeavy" }}>{t("partners.events")}</h2>
            <p className="text-gray-300 text-lg mx-auto max-w-3xl" style={{ fontFamily: "ObjectSans" }}>
              Una fotografia rapida di audience, reach e collaborazioni che orbitano intorno al progetto.
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

        {/* LOGOS DIRECTORY */}
        <section className="max-w-6xl mx-auto mb-20 w-full">
          
          <div className="flex justify-between items-center mb-12 border-b border-white/20 pb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "ObjectSansHeavy" }}>
              I nostri sponsor
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

          <div className="flex flex-col gap-12">
            {sponsorSections.map((section) => {
              const filteredSlots = section.slots.filter(
                (slot) => !slot.year || String(slot.year) === selectedYear
              );

              if (filteredSlots.length === 0) return null;

              return (
                <article key={section.id} className="w-full flex flex-col">
                  <header className="mb-6">
                    <h3 className="text-[#ff92a3] text-sm font-bold uppercase" style={{ fontFamily: "ObjectSans", letterSpacing: "0.16em" }}>
                      {section.title}
                    </h3>
                  </header>

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
import React, { useLayoutEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

// --- COMPONENTS ---
import global from "../../../resources/global.json";
import SpeakerCard from "../../components/SpeakerCard"; 
import BioSpeakerPopup from "../../components/BioSpeakerPopup";

// --- IMAGES ---
// Header generico degli awards (uguale alle altre pagine)
import HeaderBg from "../../../assets/images/awards24/awards_sapienza.png"; 

// --- IMPORT IMMAGINI LOCALI DEGLI SPEAKER/ARTISTI (.jpg) ---
import ImgArtist1 from "../../../assets/images/awards22/artist1.jpg";
import ImgSpeaker1 from "../../../assets/images/awards22/speaker1.jpg";
import ImgSpeaker2 from "../../../assets/images/awards22/speaker2.jpg";
import ImgSpeaker3 from "../../../assets/images/awards22/speaker3.jpg";

// --- ICONE SVG PERSONALIZZATE ---
const CalendarIcon = () => (
  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#EB0028" strokeWidth="1.5"/>
    <line x1="3" y1="9" x2="21" y2="9" stroke="#EB0028" strokeWidth="1.5"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke="#EB0028" strokeWidth="1.5"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke="#EB0028" strokeWidth="1.5"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C12 22 20 16 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16 12 22 12 22Z" stroke="#EB0028" strokeWidth="1.5"/>
    <circle cx="12" cy="10" r="3" stroke="#EB0028" strokeWidth="1.5"/>
  </svg>
);

// --- LISTE SUDDIVISE (ARTISTS E SPEAKERS 2022) ---
const localArtists = [
  { id: 1, nome: "Volosumarte", categoria: "Artist", image: ImgArtist1 },
];

const localSpeakers = [
  { id: 2, nome: "Serena Spanò", categoria: "Speaker", image: ImgSpeaker1 },
  { id: 3, nome: "Eleonora Pariset", categoria: "Speaker", image: ImgSpeaker2 },
  { id: 4, nome: "Arianna Peduzzi", categoria: "Speaker", image: ImgSpeaker3 },
];

export default function Awards22() {
  const [windowSize] = useOutletContext(); 
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="text-white min-h-screen paradoxa-page"
      style={{ fontFamily: "'Object Sans', sans-serif", backgroundColor: "transparent" }}
    >
      
      <div>
        
        {/* HEADER IMMAGINE (Identico ad Awards24) */}
        <section className="w-full relative">
            <img 
                src={HeaderBg} 
                alt="Header Awards 2022" 
                className="w-full object-contain"
                style={{ height: "auto", maxHeight: "420px", backgroundColor: "#000" }}
            />
        </section>

        {/* SEZIONE INFORMAZIONI (Struttura da EventTemplate) */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
            
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-12 text-left notranslate" translate="no">
                Cosa sono i<br/>SapienzaU awards?
            </h1>

            <div className="paradoxa-glass-grid">
                <div className="paradoxa-glass-card">
                    <p className="font-gotham-book md:text-lg text-sm text-justify">
                        Il concorso ACT:Lead The Change Awards è organizzato
                        dal Comitato TEDxSapienzaU ed ha lo scopo di
                        promuovere idee di valore in linea con il motto TED "Ideas
                        worth spreading", offrendo ai vincitori la prestigiosa
                        opportunità di esibirsi sul palco dell' edizione 2022 del
                        TEDxSapienzaU. I 4 vincitori del concorso SapienzaU
                        Awards, 3 Speakers e 1 Artist, vengono premiati sul palco
                        della finale e hanno l'occasione di esibirsi durante
                        l'evento TEDxSapienzaU 2022!
                    </p>
                </div>

                <div className="paradoxa-glass-card paradoxa-glass-card--info">
                    <div className="paradoxa-info">
                        <div className="paradoxa-info-row">
                            <span className="paradoxa-info-icon">
                                <CalendarIcon />
                            </span>
                            <div className="paradoxa-info-text paradoxa-info-text--date notranslate" translate="no">
                                29.04.2022
                            </div>
                        </div>

                        <div className="paradoxa-info-row">
                            <span className="paradoxa-info-icon">
                                <LocationIcon />
                            </span>
                            <div className="paradoxa-info-text notranslate" translate="no">
                                Università La Sapienza - Nuovo<br/>
                                Teatro Ateneo Piazzale Aldo<br/>
                                Moro, 5, 00185 Roma RM
                            </div>
                        </div>
                    </div>

                    <a 
                        className="paradoxa-cta"
                        href="#"
                        target="_blank" 
                        rel="noreferrer"
                    >
                        Guarda i TEDx Talks
                    </a>
                </div>
            </div>
        </section>

        {/* SEZIONE VINCITORI AWARDS */}
        <section className="px-6 py-10 max-w-7xl mx-auto mb-20" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center event-title notranslate">
                I vincitori SapienzaU awards 2022
            </h2>
            
            {/* SUB-SEZIONE ARTIST */}
            <h3 className="text-4xl font-medium mb-10 text-white text-center">Artist</h3>
            <div className="paradoxa-speakers-grid mb-16">
                {localArtists.map((speaker) => (
                    <SpeakerCard 
                        key={speaker.id}
                        nomeSpeaker={speaker.nome}
                        imgSrc={speaker.image} 
                        ruoloSpeaker={speaker.categoria} 
                        showLinkTalk={false}
                        event="awards22"
                        tag={speaker.categoria}
                        setIsBioOpen={setIsBioOpen}
                        setSelectedSpeakerInfo={setSelectedSpeakerInfo}
                    />
                ))}
            </div>

            {/* SUB-SEZIONE SPEAKERS */}
            <h3 className="text-4xl font-medium mb-10 text-white text-center">Speakers</h3>
            <div className="paradoxa-speakers-grid">
                {localSpeakers.map((speaker) => (
                    <SpeakerCard 
                        key={speaker.id}
                        nomeSpeaker={speaker.nome}
                        imgSrc={speaker.image} 
                        ruoloSpeaker={speaker.categoria} 
                        showLinkTalk={false}
                        event="awards22"
                        tag={speaker.categoria}
                        setIsBioOpen={setIsBioOpen}
                        setSelectedSpeakerInfo={setSelectedSpeakerInfo}
                    />
                ))}
            </div>

        </section>

        {/* POPUP BIO */}
        <BioSpeakerPopup
          isBioOpen={isBioOpen}
          setIsBioOpen={setIsBioOpen}
          selectedSpeakerInfo={selectedSpeakerInfo}
          windowSize={windowSize}
          year={2022}
          sidebarTheme="dark"
        />
      </div>
    </div>
  );
}
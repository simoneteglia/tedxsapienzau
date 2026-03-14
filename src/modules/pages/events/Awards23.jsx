import React, { useLayoutEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

// --- COMPONENTS ---
import global from "../../../resources/global.json";
import SpeakerCard from "../../components/SpeakerCard"; 
import BioSpeakerPopup from "../../components/BioSpeakerPopup";

// --- IMAGES ---
import HeaderBg from "../../../assets/images/awards24/awards_sapienza.png"; 

// --- IMPORT IMMAGINI LOCALI DEGLI SPEAKER/ARTISTI (.jpg) ---
import ImgIlaria from "../../../assets/images/awards23/ilaria.jpg";
import ImgMatteo from "../../../assets/images/awards23/matteo.jpg";
import ImgMyriam from "../../../assets/images/awards23/myriam.jpg";
import ImgNina from "../../../assets/images/awards23/nina.jpg";
import ImgRiccardo from "../../../assets/images/awards23/riccardo.jpg";

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

// --- LISTE SUDDIVISE (ARTISTS E SPEAKERS) ---
const localArtists = [
  { id: 1, nome: "Nina Lambarelli", categoria: "Artist", image: ImgNina },
  { id: 2, nome: "Riccardo Roberto Basilone", categoria: "Artist", image: ImgRiccardo },
];

const localSpeakers = [
  { id: 3, nome: "Ilaria Lucrezia Rossi", categoria: "Speaker", image: ImgIlaria },
  { id: 4, nome: "Matteo Cervellini", categoria: "Speaker", image: ImgMatteo },
  { id: 5, nome: "Myriam Nakita Bossogueno Aboya", categoria: "Speaker", image: ImgMyriam },
];

export default function Awards23() {
  const [windowSize] = useOutletContext(); 
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="text-white min-h-screen"
      style={{ fontFamily: "'Object Sans', sans-serif", backgroundColor: "transparent" }}
    >
      
      <div style={{ paddingTop: global.UTILS.NAV_HEIGHT }}>
        
        {/* HEADER IMMAGINE */}
        <section className="w-full relative bg-black">
            <img 
                src={HeaderBg} 
                alt="Header Awards" 
                className="w-full object-contain"
                style={{ 
                    height: "auto",
                    maxHeight: "420px",
                    backgroundColor: "#000",
                }}
            />
        </section>

        {/* SEZIONE INFORMAZIONI */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
            
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-12 text-left">
                Cosa sono i<br/>SapienzaU awards?
            </h1>

            <div className="paradoxa-glass-grid">
                <div className="paradoxa-glass-card">
                    <p className="paradoxa-intro-text">
                        I SapienzaU Awards sono organizzati dall'associazione SapienzaU ed hanno lo scopo di promuovere idee di
                        valore, offrendo ai vincitori la prestigiosa opportunità di esibirsi sul palco dell'edizione del TEDxSapienzaU. I
                        vincitori del concorso SapienzaU Awards, Speakers e Artists, vengono premiati sul palco della 
                        finale e avranno l'occasione di condividere le loro idee con un pubblico ampio, promuovendo il loro messaggio di
                        innovazione e ispirazione.
                    </p>
                    <div className="mt-6">
                        <p className="text-white font-medium text-2xl leading-snug">
                            <span className="text-4xl align-top">“</span> 
                            L'uomo e il mondo che lo circonda non sono binari separati, 
                            ma rotaie che si muovono insieme, hanno bisogno l'uno dell'altro.
                            <span className="text-4xl align-bottom leading-none"> ”</span>
                        </p>
                    </div>
                </div>

                <div className="paradoxa-glass-card paradoxa-glass-card--info">
                    <div className="paradoxa-info">
                        <div className="paradoxa-info-row">
                            <span className="paradoxa-info-icon">
                                <CalendarIcon />
                            </span>
                            <div className="paradoxa-info-text paradoxa-info-text--date">18.04.2023</div>
                        </div>

                        <div className="paradoxa-info-row">
                            <span className="paradoxa-info-icon">
                                <LocationIcon />
                            </span>
                            <div className="paradoxa-info-text">
                                Università La Sapienza - Nuovo Teatro Ateneo
                                <br />
                                Piazzale Aldo Moro, 5, 00185 Roma RM
                            </div>
                        </div>
                    </div>

                    <a 
                        className="paradoxa-cta"
                        href="https://youtube.com/playlist?list=PL4-t_gJBexTBDgARWnLB3dmC0g1_OcxFc&si=o_xQf51xiEvfXWl4"
                        target="_blank" 
                        rel="noreferrer"
                    >
                        Guarda i TEDx Talks
                    </a>
                </div>
            </div>
        </section>

        {/* SEZIONE VINCITORI AWARDS */}
       {/* SEZIONE VINCITORI AWARDS */}
        <section className="px-6 py-10 max-w-7xl mx-auto mb-20">
            
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
                I vincitori SapienzaU awards 2023
            </h2>
            
            {/* SUB-SEZIONE ARTISTS */}
            <h3 className="text-4xl font-medium mb-10 text-white text-center">Artists</h3>
            <div className="paradoxa-speakers-grid mb-16">
                {localArtists.map((speaker) => (
                    <SpeakerCard 
                        key={speaker.id}
                        nomeSpeaker={speaker.nome}
                        imgSrc={speaker.image} 
                        showName={true}
                        showLinkTalk={false}
                        event="awards23"
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
                        showName={true}
                        showLinkTalk={false}
                        event="awards23"
                        tag={speaker.categoria}
                        setIsBioOpen={setIsBioOpen}
                        setSelectedSpeakerInfo={setSelectedSpeakerInfo}
                    />
                ))}
            </div>

        </section>

        <BioSpeakerPopup
          isBioOpen={isBioOpen}
          setIsBioOpen={setIsBioOpen}
          selectedSpeakerInfo={selectedSpeakerInfo}
          windowSize={windowSize}
          year={2023}
          sidebarTheme="dark"
        />


      </div>
    </div>
  );
}

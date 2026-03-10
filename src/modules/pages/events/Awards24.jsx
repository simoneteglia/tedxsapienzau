import React, { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";

// --- COMPONENTS ---
import global from "../../../resources/global.json";
import SpeakerCard from "../../components/SpeakerCard"; 

// --- IMAGES ---
import HeaderBg from "../../../assets/images/awards24/awards24.webp"; 

// --- IMPORT IMMAGINI LOCALI DEGLI SPEAKER/ARTISTI (.webp) ---
import ImgAbbozzo from "../../../assets/images/awards24/abbozzo.webp";
import ImgDapoto from "../../../assets/images/awards24/dapoto.webp";
import ImgNardi from "../../../assets/images/awards24/nardi.webp";
import ImgPasatu from "../../../assets/images/awards24/pasatu.webp";
import ImgSaltarelli from "../../../assets/images/awards24/saltarelli.webp";

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

// --- LISTE SUDDIVISE (ARTISTS E SPEAKERS 2024) ---
const localArtists = [
  { id: 1, nome: "Abozzo", categoria: "Artist", image: ImgAbbozzo },
  { id: 2, nome: "Lorenzo Saltarelli", categoria: "Artist", image: ImgSaltarelli },
];

const localSpeakers = [
  { id: 3, nome: "Alessia Dapoto", categoria: "Speaker", image: ImgDapoto },
  { id: 4, nome: "Lorenzo Nardi", categoria: "Speaker", image: ImgNardi },
  { id: 5, nome: "Pepa Pasatu", categoria: "Speaker", image: ImgPasatu },
];

export default function Awards24() {
  const [windowSize] = useOutletContext(); 

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: "'Object Sans', sans-serif" }}>
      
      <div style={{ paddingTop: global.UTILS.NAV_HEIGHT }}>
        
        {/* HEADER IMMAGINE */}

{/* HEADER IMMAGINE */}
        <section className="w-full relative">
            <img 
                src={HeaderBg} 
                alt="Header Awards" 
                className="w-full h-auto object-cover"
                style={{ maxHeight: "80vh", minHeight: "300px" }}
            />
        </section>
        {/* SEZIONE INFORMAZIONI */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
            
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-12 text-left">
                Cosa sono i<br/>SapienzaU awards?
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="flex flex-col gap-6">
                    <p className="text-gray-300 text-lg leading-relaxed text-justify font-light">
                        I SapienzaU Awards sono organizzati dall'associazione SapienzaU ed hanno lo scopo di promuovere idee di
                        valore, offrendo ai vincitori la prestigiosa opportunità di esibirsi sul palco dell'edizione 2025 del TEDxSapienzaU. I
                        vincitori del concorso SapienzaU Awards, 3 Speakers e 2 Artists, vengono premiati sul palco della 
                        finale e avranno l'occasione di condividere le loro idee con un pubblico ampio, promuovendo il loro messaggio di
                        innovazione e ispirazione.
                    </p>
                    <div className="mt-4">
                        <p className="text-white font-medium text-2xl leading-snug">
                            <span className="text-4xl align-top">“</span> 
                            L'uomo e il mondo che lo circonda non sono binari separati, 
                            ma rotaie che si muovono insieme, hanno bisogno l'uno dell'altro.
                            <span className="text-4xl align-bottom leading-none"> ”</span>
                        </p>
                    </div>
                </div>

                {/* ICONE E BOTTONE YOUTUBE */}
                <div className="flex flex-col gap-8 lg:pl-10 justify-end pb-4">
                    
                    <div className="flex items-start gap-6">
                        <div className="shrink-0">
                            <CalendarIcon />
                        </div>
                        <span className="text-xl font-normal text-white pt-2">28.11.2024</span>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="shrink-0">
                            <LocationIcon />
                        </div>
                        <span className="text-xl font-normal text-white pt-1">
                            Università La Sapienza - Nuovo Teatro Ateneo<br/>
                            Piazzale Aldo Moro, 5<br/>
                            00185 Roma RM
                        </span>
                    </div>
                    
                    <a 
                        href="#"
                        target="_blank" 
                        rel="noreferrer"
                        className="mt-6 bg-[#EB0028] text-white font-bold py-4 px-8 text-center uppercase rounded-lg hover:bg-white hover:text-[#EB0028] transition-colors w-full md:w-auto self-start"
                        style={{ letterSpacing: "1px" }}
                    >
                        Guarda i TEDx Talks
                    </a>
                </div>
            </div>
        </section>

        {/* SEZIONE VINCITORI AWARDS */}
    {/* SEZIONE VINCITORI AWARDS */}
        <section className="px-6 py-10 max-w-7xl mx-auto mb-20 text-center">
            
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
                I vincitori SapienzaU awards 2024
            </h2>
            
            {/* SUB-SEZIONE ARTISTS */}
            <div className="w-full flex justify-center">
                <h3 className="text-3xl font-medium mb-10 text-white border-b border-gray-800 pb-2 inline-block">Artists</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-16 max-w-4xl mx-auto">
                {localArtists.map((speaker) => (
                    <div key={speaker.id} className="w-full sm:w-[280px] flex justify-center">
                        <SpeakerCard 
                            nomeSpeaker={speaker.nome}
                            imgSrc={speaker.image} 
                            ruoloSpeaker={speaker.categoria} 
                            showLinkTalk={false}
                            event="awards24"
                            style={{ width: "100%", maxWidth: "100%", padding: 0, margin: 0 }}
                        />
                    </div>
                ))}
            </div>

            {/* SUB-SEZIONE SPEAKERS */}
            <div className="w-full flex justify-center">
                <h3 className="text-3xl font-medium mb-10 text-white border-b border-gray-800 pb-2 inline-block">Speakers</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 max-w-5xl mx-auto">
                {localSpeakers.map((speaker) => (
                    <div key={speaker.id} className="w-full sm:w-[280px] flex justify-center">
                        <SpeakerCard 
                            nomeSpeaker={speaker.nome}
                            imgSrc={speaker.image} 
                            ruoloSpeaker={speaker.categoria} 
                            showLinkTalk={false}
                            event="awards24"
                            style={{ width: "100%", maxWidth: "100%", padding: 0, margin: 0 }}
                        />
                    </div>
                ))}
            </div>

        </section>
      </div>
    </div>
  );
}
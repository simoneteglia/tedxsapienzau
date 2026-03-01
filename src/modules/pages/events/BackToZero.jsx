import React, { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";

// --- COMPONENTS ---
import global from "../../../resources/global.json";
import SpeakerCard from "../../components/SpeakerCard"; 

// --- IMAGES ---
import HeaderBg from "../../../assets/images/backtozero23/Edizione2023.webp"; 

// --- IMPORT IMMAGINI LOCALI DEGLI SPEAKER ---
// Sostituisci i nomi dei file (.webp, .jpg, .png) con quelli esatti presenti nella tua cartella
import Img1 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Tullio.webp";
import Img2 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Rossi.webp";
import Img3 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Freymann.webp";
import Img4 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Basilone.webp";
import Img5 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Schito.webp";
import Img6 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Cervellini.webp";
import Img7 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Estrela.webp";
import Img8 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Lambarelli.webp";
import Img9 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Ienca.webp";
import Img10 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Villain.webp";
import Img11 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Onofri.webp";
import Img12 from "../../../assets/images/backtozero23/speakersBTZ/speakersBTZ/Nakita.webp";

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

// --- LISTA SPEAKER LOCALE ---
const localSpeakers = [
   { id: 10, nome: "Rose Villain", categoria: "Cantautrice", image: Img10 },
  { id: 1, nome: "Damiano Tullio", categoria: "Antropologo", image: Img1 },
  { id: 2, nome: "Ilaria Lucrezia Rossi", categoria: "Fisica", image: Img2 },
  { id: 3, nome: "Edward von Freymann", categoria: "Fondazione Gaia", image: Img3 },
  { id: 4, nome: "Riccardo Basilone", categoria: "Fisico", image: Img4 },
  { id: 5, nome: "Gloria Schito", categoria: "Founder ICONICA", image: Img5 },
  { id: 6, nome: "Matteo Cervellini", categoria: "Fisioterapista", image: Img6 },
  { id: 7, nome: "Ana Estrela", categoria: "Ethnic Cook", image: Img7 },
  { id: 8, nome: "Nina Lambarelli", categoria: "Poetessa", image: Img8 },
  { id: 9, nome: "Marcello Ienca", categoria: "Professore", image: Img9 },
 
  { id: 11, nome: "Silvano Onofri", categoria: "Presidente CSNA", image: Img11 },
  { id: 12, nome: "Nakita Aboya", categoria: "Economista", image: Img12 },
];

// --- PROGRAMMA ---
const programSchedule = [
  { time: "08:45 - 09:30", title: "Accrediti" },
  { time: "09:45 - 10:00", title: "Presentazione Iniziale" },
  { 
    time: "10:00 - 10:15", 
    title: "Interventi Istituzionali", 
    desc: "• Prof. Massimo Ralli → Delegato per il TEDxSapienzaU\n• Ass. Sabrina Alfonsi, Assessora all'Ambiente, all'Agricoltura e ai Rifiuti del Comune di Roma" 
  },
  { 
    time: "10:15 - 11:30", 
    title: "Session I", 
    desc: "• Damiano Tullio → Antropologo e fondatore di Antropostudio\n• Ilaria Lucrezia Rossi → Studentessa di fisica e divulgatrice online\n• Edward von Freymann → Fondazione Gaia von Freymann\n• Riccardo Basilone → Studente di fisica e cantautore" 
  },
  { time: "11:30 - 12:00", title: "I break" },
  { 
    time: "12:00 - 13:00", 
    title: "Session II", 
    desc: "• Gloria Schito → Fondatrice di ICONICA brand e content creator nel settore moda\n• Matteo Cervellini → Fisioterapista\n• Ana Estrela → Fondatrice di Ethnic Cook\n• Nina Lambarelli → Poetessa e studentessa di lingue, culture, letterature e traduzione" 
  },
  { time: "13:00 - 15:00", title: "Lunch Break, Village TEDxSapienzaU" },
  { time: "15:00 - 15:15", title: "TED GLOBAL" },
  { 
    time: "15:15 - 16:30", 
    title: "Session III", 
    desc: "• Marcello Ienca → Professore di Etica dell'Intelligenza Artificiale e Neuroscienze\n• Rose Villain → Rapper e cantautrice\n• Silvano Onofri → Presidente della Commissione Scientifica Nazionale per l'Antartide\n• Nakita Aboya → Studentessa dottoranda in Economia" 
  },
  { time: "16:30 - 16:45", title: "Ringraziamenti Team TEDxSapienzaU" },
  { 
    time: "16:45 - 17:00", 
    title: "Esibizione Coro MuSa Blues - Diretto da Giorgio Monari",
    desc: "MuSa è un progetto musicale curato dal centro Sapienza CREA. Quattro le sue formazioni: Classica, Jazz, Blues ed Etno." 
  },
  { time: "17:00", title: "Saluti Finali" },
];

export default function BackToZero() {
  const [windowSize] = useOutletContext(); 

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: "'Object Sans', sans-serif" }}>
      
      <div style={{ paddingTop: global.UTILS.NAV_HEIGHT }}>
        
        <section className="w-full relative">
            <img 
                src={HeaderBg} 
                alt="Header Back To Zero" 
                className="w-full h-auto object-cover"
                style={{ maxHeight: "80vh", minHeight: "300px" }}
            />
        </section>

        <section className="px-6 py-16 max-w-7xl mx-auto">
            
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-12 text-left">
                Back to zero
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="flex flex-col gap-6">
                    <p className="text-gray-300 text-lg leading-relaxed text-justify font-light">
                        Il nostro obiettivo è azzerare, ricercare un punto zero: le disuguaglianze, 
                        i conflitti, i cattivi stili di vita, le emissioni e i rifiuti. Ridurre quei
                        fattori inquinanti che rallentano la crescita della nostra società, peggiorando
                        la qualità della nostra vita. Riconsiderare noi stessi ed il nostro modo di 
                        confrontarci. Imparare ed interagire con la società contemporanea, con le 
                        arti e le scienze. È fondamentale per costruire un mondo dove l'essere umano 
                        possa 'rinascere', prosperando ed esprimendosi al meglio in ogni disciplina. 
                        Riscoprire le basi per rinascere, diventare persone migliori in un luogo migliore.
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

                <div className="flex flex-col gap-8 lg:pl-10 justify-end pb-4">
                    
                    <div className="flex items-start gap-6">
                        <div className="shrink-0">
                            <CalendarIcon />
                        </div>
                        <span className="text-xl font-normal text-white pt-2">15.11.2023, 08:45 - 17:00</span>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="shrink-0">
                            <LocationIcon />
                        </div>
                        <span className="text-xl font-normal text-white pt-1">
                            Aula Magna,<br/>
                            Palazzo del Rettorato<br/>
                            Sapienza Università di Roma
                        </span>
                    </div>
                    
                    <a 
                        href="https://youtube.com/playlist?list=PL4-t_gJBexTBDgARWnLB3dmC0g1_OcxFc&si=o_xQf51xiEvfXWl4"
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

        {/* SPEAKERS SECTION CON DATI LOCALI */}
        <section className="px-6 py-10 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-white border-b border-gray-800 pb-4 inline-block">Speakers</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center min-h-[200px]">
                {localSpeakers.map((speaker) => (
                    <SpeakerCard 
                        key={speaker.id}
                        nomeSpeaker={speaker.nome}
                        imgSrc={speaker.image} // Qui passiamo direttamente l'immagine importata
                        ruoloSpeaker={speaker.categoria} 
                        showLinkTalk={false}
                        event="backtozero"
                        style={{ 
                            width: "100%", 
                            maxWidth: "100%", 
                            flex: "none",
                            padding: 0, 
                            margin: 0
                        }}
                    />
                ))}
            </div>
        </section>

        <section className="px-6 py-10 max-w-7xl mx-auto mb-20">
             <h2 className="text-4xl font-bold mb-16 text-white border-b border-gray-800 pb-4 inline-block">Programma</h2>
             
             <div className="flex flex-col gap-0">
                {programSchedule.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 py-6 border-b border-gray-900 last:border-0">
                       <div className="w-full md:w-[160px] shrink-0 text-lg md:text-xl font-normal text-white"> 
                            {item.time}
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl font-normal text-white mb-2">{item.title}</h3>
                            {item.desc && (
                                <p className="text-gray-300 text-base leading-relaxed whitespace-pre-line pl-2 mt-1 font-light">
                                    {item.desc}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
             </div>
        </section>

      </div>
    </div>
  );
}
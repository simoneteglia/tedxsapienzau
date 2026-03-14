import React, { useLayoutEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

// --- COMPONENTS ---
import global from "../../../resources/global.json";
import SpeakerCard from "../../components/SpeakerCard";
import BioSpeakerPopup from "../../components/BioSpeakerPopup";

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
  <svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="18"
      rx="2"
      stroke="#EB0028"
      strokeWidth="1.5"
    />
    <line x1="3" y1="9" x2="21" y2="9" stroke="#EB0028" strokeWidth="1.5" />
    <line x1="8" y1="2" x2="8" y2="6" stroke="#EB0028" strokeWidth="1.5" />
    <line x1="16" y1="2" x2="16" y2="6" stroke="#EB0028" strokeWidth="1.5" />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C12 22 20 16 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 16 12 22 12 22Z"
      stroke="#EB0028"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="10" r="3" stroke="#EB0028" strokeWidth="1.5" />
  </svg>
);

// --- LISTA SPEAKER LOCALE ---
const localSpeakers = [
  { id: 10, nome: "Rose Villain", categoria: "Cantautrice", image: Img10 },
  { id: 1, nome: "Damiano Tullio", categoria: "Antropologo", image: Img1 },
  { id: 2, nome: "Ilaria Lucrezia Rossi", categoria: "Fisica", image: Img2 },
  {
    id: 3,
    nome: "Edward von Freymann",
    categoria: "Fondazione Gaia",
    image: Img3,
  },
  { id: 4, nome: "Riccardo Basilone", categoria: "Fisico", image: Img4 },
  { id: 5, nome: "Gloria Schito", categoria: "Founder ICONICA", image: Img5 },
  {
    id: 6,
    nome: "Matteo Cervellini",
    categoria: "Fisioterapista",
    image: Img6,
  },
  { id: 7, nome: "Ana Estrela", categoria: "Ethnic Cook", image: Img7 },
  { id: 8, nome: "Nina Lambarelli", categoria: "Poetessa", image: Img8 },
  { id: 9, nome: "Marcello Ienca", categoria: "Professore", image: Img9 },

  {
    id: 11,
    nome: "Silvano Onofri",
    categoria: "Presidente CSNA",
    image: Img11,
  },
  { id: 12, nome: "Nakita Aboya", categoria: "Economista", image: Img12 },
];

export default function BackToZero() {
  const [windowSize] = useOutletContext();
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="text-white min-h-screen"
      style={{
        fontFamily: "'Object Sans', sans-serif",
        backgroundColor: "transparent",
      }}
    >
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

          <div className="paradoxa-glass-grid">
            <div className="paradoxa-glass-card">
              <p className="paradoxa-intro-text">
                Il nostro obiettivo è azzerare, ricercare un punto zero: le
                disuguaglianze, i conflitti, i cattivi stili di vita, le
                emissioni e i rifiuti. Ridurre quei fattori inquinanti che
                rallentano la crescita della nostra società, peggiorando la
                qualità della nostra vita. Riconsiderare noi stessi ed il nostro
                modo di confrontarci. Imparare ed interagire con la società
                contemporanea, con le arti e le scienze. È fondamentale per
                costruire un mondo dove l'essere umano possa 'rinascere',
                prosperando ed esprimendosi al meglio in ogni disciplina.
                Riscoprire le basi per rinascere, diventare persone migliori in
                un luogo migliore.
              </p>
              <div className="mt-6">
                <p className="text-white font-medium text-2xl leading-snug">
                  <span className="text-4xl align-top">“</span>
                  L'uomo e il mondo che lo circonda non sono binari separati, ma
                  rotaie che si muovono insieme, hanno bisogno l'uno dell'altro.
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
                  <div className="paradoxa-info-text paradoxa-info-text--date">
                    15.11.2023, 08:45 - 17:00
                  </div>
                </div>

                <div className="paradoxa-info-row">
                  <span className="paradoxa-info-icon">
                    <LocationIcon />
                  </span>
                  <div className="paradoxa-info-text">
                    Aula Magna,
                    <br />
                    Palazzo del Rettorato
                    <br />
                    Sapienza Università di Roma
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

        {/* SPEAKERS SECTION CON DATI LOCALI */}
        <section className="px-6 py-10 max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 text-white inline-block">
            Speakers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center min-h-[200px]">
            {localSpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                nomeSpeaker={speaker.nome}
                imgSrc={speaker.image} // Qui passiamo direttamente l'immagine importata
                ruoloSpeaker={speaker.categoria}
                showLinkTalk={false}
                event="backtozero"
                tag={speaker.categoria}
                setIsBioOpen={setIsBioOpen}
                setSelectedSpeakerInfo={setSelectedSpeakerInfo}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  flex: "none",
                  padding: 0,
                  margin: 0,
                }}
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

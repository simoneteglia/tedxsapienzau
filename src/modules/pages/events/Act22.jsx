import EventTemplate from "./EventTemplate";

import Act22Header from "../../../assets/images/act22/Edizione2022.webp";
import Amoroso from "../../../assets/images/act22/Amoroso.png";
import Baccini from "../../../assets/images/act22/Baccini.jpg";
import Bottaro from "../../../assets/images/act22/Bottaro.jpg";
import Dallari from "../../../assets/images/act22/Dallari.jpg";
import Ewelina from "../../../assets/images/act22/Ewelina.jpg";
import Fasma from "../../../assets/images/act22/Fasma.jpg";
import Loreto from "../../../assets/images/act22/Loreto.jpg";
import Melandri from "../../../assets/images/act22/Melandri.jpg";
import Pariset from "../../../assets/images/act22/Pariset.jpg";
import Peduzzi from "../../../assets/images/act22/Peduzzi.jpg";
import Spano from "../../../assets/images/act22/Spano.png";
import Trombetta from "../../../assets/images/act22/Trombetta.jpeg";
import Volosumarte from "../../../assets/images/act22/Volosumarte.JPG";

const act22Data = {
  title: "ACT: Lead the Change",
  description:
    "La prima edizione del TEDxSapienzaU ha portato sul palco un invito chiaro: agire, contaminare i saperi e trasformare il presente. In pieno spirito TEDx, ACT ha intrecciato idee, discipline ed esperienze diverse per raccontare un cambiamento concreto, interdisciplinare e condiviso.",
  date: "29.04.2022",
  location: "Aula Magna, Palazzo del Rettorato Sapienza Universita di Roma",
  link_talks:
    "https://youtube.com/playlist?list=PL4-t_gJBexTAtUGEpHCVgcV0Zwt8RyYG6&si=oP9pKvJScQewfqGa",
};

const act22SpeakerImages = {
  Amoroso,
  Baccini,
  Bottaro,
  Dallari,
  Ewelina,
  Fasma,
  Loreto,
  Melandri,
  Pariset,
  Peduzzi,
  Spano,
  Trombetta,
  Volosumarte,
};

const act22Speakers = [
  { name: "Amoroso", img: "Amoroso" },
  { name: "Baccini", img: "Baccini" },
  { name: "Bottaro", img: "Bottaro" },
  { name: "Dallari", img: "Dallari" },
  { name: "Ewelina", img: "Ewelina" },
  { name: "Fasma", img: "Fasma" },
  { name: "Loreto", img: "Loreto" },
  { name: "Melandri", img: "Melandri" },
  { name: "Eleonora Pariset", img: "Pariset" },
  { name: "Arianna Peduzzi", img: "Peduzzi" },
  { name: "Serena Spano", img: "Spano" },
  { name: "Trombetta", img: "Trombetta" },
  { name: "Volosumarte", img: "Volosumarte" },
];

const act22ThemePillars = [
  {
    letter: "A",
    title: "Action",
    description:
      "La cultura dell'azione contro la cultura dell'inerzia e il ruolo della cittadinanza attiva nell'educazione del futuro.",
  },
  {
    letter: "C",
    title: "Cross-Fertilization",
    description:
      "La predisposizione alla creativita ed empatia, la pop education e i nuovi orizzonti della contaminazione tra i saperi.",
  },
  {
    letter: "T",
    title: "Transformation",
    description:
      "Il digitale e la realta integrata, la trasformazione dei modelli educativi e il valore dell'esperienza nella crescita dell'individuo.",
  },
];

function ThemePillarCard({ letter, title, description }) {
  return (
    <article
      className="paradoxa-glass-card"
      style={{
        minHeight: "320px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "GothamBold",
          fontSize: "clamp(82px, 14vw, 150px)",
          lineHeight: 0.9,
          color: "#EB0028",
        }}
      >
        {letter}
      </div>
      <div style={{ display: "grid", gap: "12px" }}>
        <h3
          style={{
            margin: 0,
            fontFamily: "GothamBold",
            fontSize: "28px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: 0,
            fontFamily: "GothamBook",
            fontSize: "16px",
            lineHeight: 1.55,
            color: "#d9d9d9",
          }}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default function Act22() {
  return (
    <EventTemplate
      imagePath={Act22Header}
      headerAlt="ACT 2022 header"
      eventData={act22Data}
      speakerImages={act22SpeakerImages}
      speakerSections={[{ title: "Speakers", items: act22Speakers }]}
      year={2022}
      sidebarTheme="dark"
    >
      <section>
        <h2
          className="event-title"
          style={{ fontSize: "clamp(42px, 6vw, 64px)", marginBottom: "28px" }}
        >
          Il tema dell'evento
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {act22ThemePillars.map((pillar) => (
            <ThemePillarCard key={pillar.letter} {...pillar} />
          ))}
        </div>
      </section>
    </EventTemplate>
  );
}

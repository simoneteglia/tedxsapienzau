import EventTemplate from "./EventTemplate";
import sidebarContent from "../../../data/eventSidebarContent.json";

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

const act22SidebarContent = sidebarContent.act22;

const getAct22SpeakerContent = (lookupName) =>
  act22SidebarContent.find((speaker) => speaker.name.includes(lookupName)) || {};

const buildAct22Speaker = (lookupName, image, displayName = lookupName) => {
  const speaker = getAct22SpeakerContent(lookupName);
  const shouldHideTalk = lookupName === "Viviana Bottaro";

  return {
    name: displayName,
    category: speaker.category,
    bio: speaker.bio_it,
    bioeng: speaker.bio_en,
    linkTalk: shouldHideTalk ? null : speaker.youtube_embed_url,
    image,
  };
};

const act22Data = {
  title: "ACT: Lead the Change",
  description:
    "La prima edizione del TEDxSapienzaU ha portato sul palco un invito chiaro: agire, contaminare i saperi e trasformare il presente. In pieno spirito TEDx, ACT ha intrecciato idee, discipline ed esperienze diverse per raccontare un cambiamento concreto, interdisciplinare e condiviso.",
  date: "29.04.2022",
  location: "Aula Magna, Palazzo del Rettorato Sapienza Universita di Roma",
  link_talks:
    "https://youtube.com/playlist?list=PL4-t_gJBexTAtUGEpHCVgcV0Zwt8RyYG6&si=oP9pKvJScQewfqGa",
  speakers: {
    speaker1: buildAct22Speaker("Giusy Amoroso", Amoroso),
    speaker2: buildAct22Speaker("Mario Baccini", Baccini),
    speaker3: buildAct22Speaker("Viviana Bottaro", Bottaro),
    speaker4: buildAct22Speaker("Valentina Dallari", Dallari),
    speaker5: buildAct22Speaker("Ewelina", Ewelina, "Ewelina Jelenkowska-Luca"),
    speaker6: buildAct22Speaker("Fasma", Fasma),
    speaker7: buildAct22Speaker("Vittorio Loreto", Loreto),
    speaker8: buildAct22Speaker("Giovanna Melandri", Melandri),
    speaker9: buildAct22Speaker("Eleonora Parisiet", Pariset, "Eleonora Pariset"),
    speaker10: buildAct22Speaker("Arianna Peduzzi", Peduzzi),
    speaker11: buildAct22Speaker("Serena Span", Spano, "Serena Spano"),
    speaker12: buildAct22Speaker("Valeria Trombetta", Trombetta),
    speaker13: buildAct22Speaker("Volosumarte", Volosumarte),
  },
};

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
      eventData={act22Data}
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

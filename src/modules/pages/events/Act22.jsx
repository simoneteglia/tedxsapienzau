import EventTemplate from "./EventTemplate";
import Act22Header from "../../../assets/images/act22/Edizione2022.webp";

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

export default function Act22({ eventData }) {
  return (
    <EventTemplate
      imagePath={Act22Header}
      eventData={eventData}
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

import EventTemplate from "./EventTemplate";

import Awards24Header from "../../../assets/images/awards24/awards_sapienza.png";

const awards24Data = {
  title: "SapienzaU Awards 2024",
  description:
    "I SapienzaU Awards sono organizzati dall'associazione SapienzaU ed hanno lo scopo di promuovere idee di valore, offrendo ai vincitori la prestigiosa opportunita di esibirsi sul palco dell'edizione 2025 del TEDxSapienzaU. I vincitori del concorso SapienzaU Awards, 3 Speakers e 2 Artists, vengono premiati sul palco della finale e avranno l'occasione di condividere le loro idee con un pubblico ampio, promuovendo il loro messaggio di innovazione e ispirazione.",
  date: "28.11.2024",
  location:
    "Universita La Sapienza - Nuovo Teatro Ateneo, Piazzale Aldo Moro, 5, 00185 Roma RM",
  link_talks: "#",
  speakers: {
    speaker1: {
      name: "Abbozzo",
      bio: "Artist",
      img: "Abbozzo",
    },
    speaker2: {
      name: "Lorenzo Saltarelli",
      bio: "Artist",
      img: "Saltarelli",
    },
    speaker3: {
      name: "Alessia Dapoto",
      bio: "Speaker",
      img: "Dapoto",
    },
    speaker4: {
      name: "Lorenzo Nardi",
      bio: "Speaker",
      img: "Nardi",
    },
    speaker5: {
      name: "Pepa Pasatu",
      bio: "Speaker",
      img: "Pasatu",
    },
  },
};

export default function Awards24() {
  return (
    <EventTemplate
      imagePath={Awards24Header}
      eventData={awards24Data}
      year={2024}
      sidebarTheme="dark"
    />
  );
}

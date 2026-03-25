import EventTemplate from "./EventTemplate";

import Awards23Header from "../../../assets/images/awards23/header_awards23.webp";

const awards23Data = {
  title: "SapienzaU Awards 2023",
  description:
    "I SapienzaU Awards sono organizzati dall'associazione SapienzaU ed hanno lo scopo di promuovere idee di valore, offrendo ai vincitori la prestigiosa opportunita di esibirsi sul palco dell'edizione del TEDxSapienzaU. I vincitori del concorso SapienzaU Awards, Speakers e Artists, vengono premiati sul palco della finale e avranno l'occasione di condividere le loro idee con un pubblico ampio, promuovendo il loro messaggio di innovazione e ispirazione.",
  date: "18.04.2023",
  location:
    "Universita La Sapienza - Nuovo Teatro Ateneo, Piazzale Aldo Moro, 5, 00185 Roma RM",
  link_talks:
    "https://youtube.com/playlist?list=PL4-t_gJBexTBDgARWnLB3dmC0g1_OcxFc&si=o_xQf51xiEvfXWl4",
  speakers: {
    speaker1: {
      name: "Nina Lambarelli",
      bio: "Artist",
      img: "Lambarelli",
    },
    speaker2: {
      name: "Riccardo Roberto Basilone",
      bio: "Artist",
      img: "Basilone",
    },
    speaker3: {
      name: "Ilaria Lucrezia Rossi",
      bio: "Speaker",
      img: "Rossi",
    },
    speaker4: {
      name: "Matteo Cervellini",
      bio: "Speaker",
      img: "Cervellini",
    },
    speaker5: {
      name: "Myriam Nakita Bossogueno Aboya",
      bio: "Speaker",
      img: "Aboya",
    },
  },
};

export default function Awards23() {
  return (
    <EventTemplate
      imagePath={Awards23Header}
      eventData={awards23Data}
      year={2023}
      sidebarTheme="dark"
    />
  );
}

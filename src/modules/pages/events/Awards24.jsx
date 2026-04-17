import EventTemplate from "./EventTemplate";
import { localized } from "../../utils/localization";

import Awards24Header from "../../../assets/images/awards24/awards_sapienza.png";

const awards24Data = {
  title: "SapienzaU Awards 2024",
  description: localized(
    "I SapienzaU Awards sono organizzati dall'associazione SapienzaU per promuovere idee di valore, offrendo ai vincitori la prestigiosa opportunita di salire sul palco dell'edizione 2025 di TEDxSapienzaU. I cinque vincitori del concorso, tre speaker e due artisti, vengono premiati durante la finale e hanno l'occasione di condividere il proprio progetto con un pubblico piu ampio.",
    "The SapienzaU Awards are organized by the SapienzaU association to promote ideas worth spreading, giving the winners the opportunity to step onto the stage of TEDxSapienzaU 2025. The five winners of the competition, three speakers and two artists, are celebrated during the final and get the chance to share their work with a broader audience.",
  ),
  date: localized("28.11.2024", "28 Nov 2024"),
  location: localized(
    "Universita La Sapienza - Nuovo Teatro Ateneo, Piazzale Aldo Moro, 5, 00185 Roma RM",
    "Sapienza University - Nuovo Teatro Ateneo, Piazzale Aldo Moro 5, 00185 Rome",
  ),
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

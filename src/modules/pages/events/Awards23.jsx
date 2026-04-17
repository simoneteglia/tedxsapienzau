import EventTemplate from "./EventTemplate";
import { localized } from "../../utils/localization";

import Awards23Header from "../../../assets/images/awards23/header_awards23.webp";

const awards23Data = {
  title: "SapienzaU Awards 2023",
  description: localized(
    "I SapienzaU Awards sono organizzati dall'associazione SapienzaU per promuovere idee di valore, offrendo ai vincitori la prestigiosa opportunita di esibirsi sul palco di TEDxSapienzaU. I finalisti, tra speaker e artisti, vengono premiati durante la finale e hanno la possibilita di condividere il proprio messaggio con un pubblico piu ampio, trasformando intuizioni personali in conversazioni pubbliche.",
    "The SapienzaU Awards are organized by the SapienzaU association to spotlight ideas worth spreading and give the winners the opportunity to perform on the TEDxSapienzaU stage. Finalists across both speaking and artistic categories are celebrated during the final and given the chance to share their work with a broader audience, turning personal ideas into public conversations.",
  ),
  date: localized("18.04.2023", "18 Apr 2023"),
  location: localized(
    "Universita La Sapienza - Nuovo Teatro Ateneo, Piazzale Aldo Moro, 5, 00185 Roma RM",
    "Sapienza University - Nuovo Teatro Ateneo, Piazzale Aldo Moro 5, 00185 Rome",
  ),
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

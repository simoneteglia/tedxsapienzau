import awardsBanner from "../../../assets/images/awards24/awards_sapienza.png";
import awards22Data from "../../../data/awards22.json";
import EventTemplate from "./EventTemplate";
import { localized } from "../../utils/localization";

const awards22EventData = {
  ...awards22Data,
  title: localized(
    "I vincitori SapienzaU Awards 2022",
    "The winners of SapienzaU Awards 2022",
  ),
  description: localized(
    "Il concorso ACT: Lead the Change Awards e organizzato dal Comitato TEDxSapienzaU per promuovere idee di valore in linea con il motto TED, \"Ideas worth spreading\", offrendo ai vincitori la prestigiosa opportunita di salire sul palco dell'edizione 2022 di TEDxSapienzaU. I 4 vincitori del contest, 3 speaker e 1 artist, sono stati premiati durante la finale e hanno avuto l'occasione di esibirsi all'interno dell'evento TEDxSapienzaU 2022.",
    "The ACT: Lead the Change Awards were organized by the TEDxSapienzaU Committee to promote ideas worth spreading in line with TED's mission, giving the winners the opportunity to step onto the stage of TEDxSapienzaU 2022. The four winners of the competition, three speakers and one artist, were awarded during the final and had the chance to perform as part of the 2022 TEDxSapienzaU edition.",
  ),
  date: localized("29.04.2022", "29 Apr 2022"),
  location: localized(
    "Universita La Sapienza - Nuovo Teatro Ateneo Piazzale Aldo Moro, 5, 00185 Roma RM",
    "Sapienza University - Nuovo Teatro Ateneo, Piazzale Aldo Moro 5, 00185 Rome",
  ),
  speakersHeading: localized(
    "I vincitori SapienzaU Awards 2022",
    "SapienzaU Awards 2022 winners",
  ),
};

export default function Awards22Page() {
  return <EventTemplate imagePath={awardsBanner} eventData={awards22EventData} />;
}

import btzHeader from "../../../assets/images/backtozero23/Edizione2023.webp";
import backtozeroData from "../../../data/backtozero.json";
import EventTemplate from "./EventTemplate";
import { localized } from "../../utils/localization";

const backToZeroEventData = {
  ...backtozeroData,
  description: localized(
    "Il nostro obiettivo e azzerare, cercare un punto zero: disuguaglianze, conflitti, cattivi stili di vita, emissioni e rifiuti. Ridurre quei fattori che inquinano la crescita della nostra societa e peggiorano la qualita della vita. Riconsiderare noi stessi e il nostro modo di stare nel mondo. Imparare a confrontarci con la societa contemporanea, con le arti e con le scienze. E da qui che puo nascere un mondo in cui l'essere umano torni a prosperare e a esprimersi al meglio in ogni disciplina. Riscoprire le basi per rinascere, per diventare persone migliori in un luogo migliore.",
    "Our goal is to reset, to search for a true zero point: inequalities, conflicts, destructive lifestyles, emissions and waste. To reduce the forces that pollute our society's growth and erode our quality of life. To reconsider ourselves and the way we relate to the world around us. To learn how to engage with contemporary society, with the arts and with the sciences. That is how we begin to build a world where human beings can be reborn, thrive and express themselves fully across every discipline. Rediscovering the basics becomes the first step toward becoming better people in a better place.",
  ),
  date: localized("15.11.2023, 08:45 - 17:00", "15 Nov 2023, 08:45 - 17:00"),
  location: localized(
    "Aula Magna, Palazzo del Rettorato Sapienza Universita di Roma",
    "Great Hall, Rectorate Building, Sapienza University of Rome",
  ),
};

export default function BackToZeroPage() {
  return <EventTemplate imagePath={btzHeader} eventData={backToZeroEventData} />;
}

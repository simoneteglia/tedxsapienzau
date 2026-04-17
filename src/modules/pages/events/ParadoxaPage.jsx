import paradoxaHeader from "../../../assets/images/paradoxa25/header_paradoxa2.png";
import paradoxaData from "../../../data/paradoxa.json";
import sidebarContent from "../../../data/eventSidebarContent.json";
import EventTemplate from "./EventTemplate";
import { localized } from "../../utils/localization";

const normalizeSpeakerName = (value = "") => value.trim().toLowerCase();

const buildSidebarLookup = (items) =>
  new Map(
    (items || []).map((item) => [normalizeSpeakerName(item.name), item]),
  );

const paradoxaSidebarLookup = buildSidebarLookup(sidebarContent.paradoxa2025);

const paradoxaEventData = {
  ...paradoxaData,
  description: localized(
    "Dal greco para doxa, letteralmente \"contro l'opinione comune\". La storia dei paradossi affonda le radici nella nascita della logica, ma se un tempo assomigliavano soprattutto a giochi mentali, oggi emergono con forza nella realta che ci circonda. La giustizia che produce disuguaglianza, le opportunita che generano immobilismo, i conflitti messi in scena per costruire la pace. Come gli antichi pensatori li usavano per stimolare il pensiero, anche noi dobbiamo affrontare, non evitare, i paradossi che attraversano il mondo umano per far nascere idee capaci di migliorarlo. PARA DOXA e il terreno fertile in cui coltivarle.",
    "From the Greek para doxa, literally \"against common opinion.\" The history of paradoxes goes back to the birth of logic, but while the earliest ones looked more like thought experiments, modern life keeps generating new paradoxes in the world around us. Justice producing inequality, opportunity creating inertia, conflict staged in the name of peace. Just as ancient thinkers used paradoxes to provoke reflection, we too must confront, rather than avoid, the contradictions running through the human world so that stronger ideas can emerge from them. PARA DOXA is the fertile ground where those ideas can grow.",
  ),
  date: localized("11.04.2025, 09:00 - 17:00", "11 Apr 2025, 09:00 - 17:00"),
  location: localized(
    "Aula Magna, Palazzo del Rettorato Sapienza Universita di Roma",
    "Great Hall, Rectorate Building, Sapienza University of Rome",
  ),
  speakers: Object.fromEntries(
    Object.entries(paradoxaData.speakers || {}).map(([key, speaker]) => {
      const sidebarSpeaker = paradoxaSidebarLookup.get(
        normalizeSpeakerName(speaker.name),
      );

      return [
        key,
        {
          ...speaker,
          category: sidebarSpeaker?.category,
          bio: sidebarSpeaker?.bio_it || speaker.bio,
          bioeng: sidebarSpeaker?.bio_en,
          linkTalk: sidebarSpeaker?.youtube_embed_url || speaker.linkTalk,
        },
      ];
    }),
  ),
};

export default function ParadoxaPage() {
  return <EventTemplate imagePath={paradoxaHeader} eventData={paradoxaEventData} />;
}

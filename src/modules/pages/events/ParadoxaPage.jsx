import paradoxaHeader from "../../../assets/images/paradoxa25/header_paradoxa2.png";
import paradoxaData from "../../../data/paradoxa.json";
import sidebarContent from "../../../data/eventSidebarContent.json";
import EventTemplate from "./EventTemplate";

const normalizeSpeakerName = (value = "") => value.trim().toLowerCase();

const buildSidebarLookup = (items) =>
  new Map(
    (items || []).map((item) => [normalizeSpeakerName(item.name), item]),
  );

const paradoxaSidebarLookup = buildSidebarLookup(sidebarContent.paradoxa2025);

const paradoxaEventData = {
  ...paradoxaData,
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

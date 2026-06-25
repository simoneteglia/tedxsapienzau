import React from "react";
import EventTemplate from "./EventTemplate";
import sidebarContent from "../../../data/eventSidebarContent.json";

// --- IMPORT IMMAGINI EVENTO E SPEAKER ---
import onthebrinkText from "../../../assets/images/onthebrink26/onthebrink_text.png";
import AmatoCocino from "../../../assets/images/onthebrink26/Amato-Cocino.jpeg";
import AuroraRuffino from "../../../assets/images/onthebrink26/Aurora Ruffino.jpeg";
import CarolinaVenosi from "../../../assets/images/onthebrink26/CarolinaVenosi.jpg";
import CristinaSimone from "../../../assets/images/onthebrink26/CristinaSimone.jpg";
import GiulianaMazzoni from "../../../assets/images/onthebrink26/GiulianaMazzoni.jpeg";
import GuidoChiefalo from "../../../assets/images/onthebrink26/GuidoChiefalo.jpeg";
import LorenzoZazzeri from "../../../assets/images/onthebrink26/Lorenzo Zazzeri.jpg";
import StefanoMagno from "../../../assets/images/onthebrink26/Stefano Magno.jpg";

// Mappa per associare i nomi presenti nel tuo JSON alle immagini fisiche
const speakerImagesMap = {
  "Aurora Ruffino": AuroraRuffino,
  "Giuliana Mazzoni": GiulianaMazzoni,
  "Lorenzo Zazzeri": LorenzoZazzeri,
  "Alessandra Amato & Claudio Cocino": AmatoCocino,
  "Cristina Simone": CristinaSimone,
  "Stefano Magno": StefanoMagno,
  "Guido Chiefalo": GuidoChiefalo,
  "Carolina Venosi": CarolinaVenosi,
};

// Funzione di formattazione per iniettare l'immagine giusta in ogni speaker
const formatEventData = (rawEventData) => {
  if (!rawEventData) return {};

  return {
    ...rawEventData,
    speakers: Object.fromEntries(
      Object.entries(rawEventData.speakers || {}).map(([key, speaker]) => {
        let matchedImage = speakerImagesMap[speaker.name];
        
        if (!matchedImage) {
            const possibleMatch = Object.keys(speakerImagesMap).find(mapName => speaker.name?.includes(mapName) || mapName.includes(speaker.name));
            if (possibleMatch) matchedImage = speakerImagesMap[possibleMatch];
        }

        return [
          key,
          {
            ...speaker,
            bio: speaker.bio_it,
            bioeng: speaker.bio_en,
            linkTalk: speaker.youtube_embed_url,
            image: matchedImage, 
          },
        ];
      })
    ),
  };
};

export default function OnTheBrink() {
  const baseData = {
    title: {
      it: "On the Brink",
      en: "On the Brink"
    },
    description: {
      it: "On the Brink è il momento sospeso in cui le possibilità sono infinite perché tutto deve ancora avvenire, la moneta librante in volo che determinerà il futuro. È la soglia tra ciò che è stato e ciò che potrebbe diventare, dove tensione, desiderio e incertezza convivono in quell’attimo “prima di”. L’evento celebra questo spazio di liminalità, ci invita a sostare nel dubbio, a esplorare l’ignoto e ad abitarlo. La moneta cadrà, ma è nel suo volo che prende forma ciò che verrà.",
      en: "On the Brink is the suspended moment in which possibilities are infinite because everything is yet to happen, the hovering coin in flight that will determine the future. It is the threshold between what has been and what could become, where tension, desire and uncertainty coexist in that “before“ moment. The event celebrates this liminal space, inviting us to dwell in doubt, to explore the unknown and to inhabit it. The coin will fall, but it is in its flight that what is to come takes shape."
    },
    date: {
      it: "25 Maggio 2026 • 14:00",
      en: "May 25, 2026 • 2:00 PM"
    },
    location: {
      it: "Teatro Parioli Costanzo",
      en: "Teatro Parioli Costanzo"
    },
    talksLabel: {
      it: "Guarda i talk",
      en: "Watch the talks"
    },
    speakersHeading: {
      it: "Speakers",
      en: "Speakers"
    },
    link_talks: "" 
  };

  const rawOnTheBrinkData = sidebarContent.onthebrink26?.[0] || {};
  const formattedSpeakers = formatEventData(rawOnTheBrinkData).speakers || {};

  const eventData = {
    ...baseData,
    ...rawOnTheBrinkData,
    speakers: formattedSpeakers
  };

  return (
    <>
      {/* TRUCCHETTO CSS: Modifica il comportamento dell'immagine solo in questa pagina */}
      <style>{`
        .paradoxa-page > section:first-child img {
          object-fit: contain !important;
          background: linear-gradient(135deg, #a578c3 0%, #ffc299 100%); 
          padding: 8%;
        }
      `}</style>

      <EventTemplate
        imagePath={onthebrinkText}
        eventData={eventData}
        year={2026}
      />
    </>
  );
}
import btzHeader from "../../../assets/images/backtozero23/Edizione2023.webp";
import backtozeroData from "../../../data/backtozero.json";
import EventTemplate from "./EventTemplate";

export default function BackToZeroPage() {
  return <EventTemplate imagePath={btzHeader} eventData={backtozeroData} />;
}

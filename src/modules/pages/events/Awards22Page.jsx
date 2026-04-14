import awardsBanner from "../../../assets/images/awards24/awards_sapienza.png";
import awards22Data from "../../../data/awards22.json";
import EventTemplate from "./EventTemplate";

export default function Awards22Page() {
  return <EventTemplate imagePath={awardsBanner} eventData={awards22Data} />;
}

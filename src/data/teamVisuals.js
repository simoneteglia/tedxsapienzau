import orangeLogo from "../assets/images/joinus/arancione.png";
import blueLogo from "../assets/images/joinus/blu.png";
import lightBlueLogo from "../assets/images/joinus/celeste.png";
import fuchsiaLogo from "../assets/images/joinus/fucsia.png";
import yellowLogo from "../assets/images/joinus/giallo.png";
import pinkLogo from "../assets/images/joinus/rosa.png";
import redLogo from "../assets/images/joinus/rosso.png";
import greenLogo from "../assets/images/joinus/verde.png";

const teamLogos = {
  "it-website": orangeLogo,
  "planning-event-management": fuchsiaLogo,
  "legal-administrative": lightBlueLogo,
  "design": yellowLogo,
  "speakers-event-curation": greenLogo,
  "human-resources-academy": blueLogo,
  "external-relations-sponsor": pinkLogo,
  "communication-editorial-marketing-media": redLogo,
};

export function getTeamLogo(teamId) {
  return teamLogos[teamId] ?? null;
}

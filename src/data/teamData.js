const localized = (it, en = it) => ({ it, en });

const ensureMemberCount = (members, count) =>
  Array.from({ length: count }, (_, index) => ({
    ...members[index % members.length],
  }));

const baseTeamSections = [
  {
    id: "board",
    label: "Board",
    code: "BD",
    accent: "#ff5e73",
    eyebrow: localized("Direzione trasversale", "Cross-team direction"),
    descriptionKey: "team_page.board_description",
    members: [
      {
        name: localized("Presidenza", "Presidency"),
        role: localized(
          "Visione, governance e direzione del progetto",
          "Vision, governance and project direction",
        ),
      },
      {
        name: localized("Coordinamento", "Coordination"),
        role: localized(
          "Priorita, ritmi operativi e allineamento tra team",
          "Priorities, operating rhythm and team alignment",
        ),
      },
      {
        name: localized("Produzione", "Production"),
        role: localized(
          "Timeline condivise, deliverable e momenti chiave",
          "Shared timelines, deliverables and key moments",
        ),
      },
      {
        name: localized("Community", "Community"),
        role: localized(
          "Cultura interna, energia e cura delle persone",
          "Internal culture, energy and care for people",
        ),
      },
    ],
  },
  {
    id: "it-website",
    label: "IT & Website",
    code: "IT",
    accent: "#5db4ff",
    eyebrow: localized("Esperienza digitale", "Digital experience"),
    descriptionKey: "joinus.IT",
    members: [
      {
        name: localized("Frontend", "Frontend"),
        role: localized(
          "Interfacce, componenti e performance del sito",
          "Interfaces, components and website performance",
        ),
      },
      {
        name: localized("Backend", "Backend"),
        role: localized(
          "Dati, integrazioni e logiche a supporto del progetto",
          "Data, integrations and project-facing logic",
        ),
      },
      {
        name: localized("Product & UX", "Product & UX"),
        role: localized(
          "Flussi, accessibilita e chiarezza dei percorsi",
          "Flows, accessibility and clarity across journeys",
        ),
      },
      {
        name: localized("Newsletter", "Newsletter"),
        role: localized(
          "CRM, invii e strumenti per restare in contatto",
          "CRM, email sends and tools to stay connected",
        ),
      },
    ],
  },
  {
    id: "planning-event-management",
    label: "Planning & Event Management",
    code: "PM",
    accent: "#ffb347",
    eyebrow: localized("Macchina operativa", "Operational engine"),
    descriptionKey: "joinus.PEM",
    members: [
      {
        name: localized("Production", "Production"),
        role: localized(
          "Run of show, scalette e coordinamento generale",
          "Run of show, schedules and overall coordination",
        ),
      },
      {
        name: localized("Logistica", "Logistics"),
        role: localized(
          "Setup, fornitori, spostamenti e tempi tecnici",
          "Setup, suppliers, transport and technical timing",
        ),
      },
      {
        name: localized("Hospitality", "Hospitality"),
        role: localized(
          "Accrediti, ospitalita e cura dei flussi in venue",
          "Accreditation, hospitality and in-venue flows",
        ),
      },
      {
        name: localized("Partner Ops", "Partner Ops"),
        role: localized(
          "Attivazioni on-site e raccordo con gli sponsor",
          "On-site activations and sponsor coordination",
        ),
      },
    ],
  },
  {
    id: "legal-administrative",
    label: "Legal & Administrative",
    code: "LA",
    accent: "#c2b8ff",
    eyebrow: localized("Struttura e conformita", "Structure and compliance"),
    descriptionKey: "joinus.LA",
    members: [
      {
        name: localized("Contratti", "Contracts"),
        role: localized(
          "Accordi, revisioni e passaggi autorizzativi",
          "Agreements, reviews and approval steps",
        ),
      },
      {
        name: localized("Amministrazione", "Administration"),
        role: localized(
          "Budget, rimborsi e presidio economico",
          "Budgeting, reimbursements and financial control",
        ),
      },
      {
        name: localized("Privacy", "Privacy"),
        role: localized(
          "Liberatorie, consenso e tutela dei dati",
          "Releases, consent flows and data care",
        ),
      },
      {
        name: localized("Compliance", "Compliance"),
        role: localized(
          "Linee guida TEDx e rapporti con l'ateneo",
          "TEDx guidelines and university-facing compliance",
        ),
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    code: "DE",
    accent: "#ff7cd6",
    eyebrow: localized("Identita visiva", "Visual identity"),
    descriptionKey: "joinus.DESIGN",
    members: [
      {
        name: localized("Visual Identity", "Visual Identity"),
        role: localized(
          "Sistemi grafici, campagne e coerenza visiva",
          "Graphic systems, campaigns and visual coherence",
        ),
      },
      {
        name: localized("Social Design", "Social Design"),
        role: localized(
          "Post, cover e asset per i lanci editoriali",
          "Posts, covers and assets for editorial launches",
        ),
      },
      {
        name: localized("Stage & Print", "Stage & Print"),
        role: localized(
          "Allestimenti, signage e materiali fisici",
          "Setups, signage and physical materials",
        ),
      },
      {
        name: localized("Motion", "Motion"),
        role: localized(
          "Animazioni, reel e contenuti per gli schermi",
          "Animation, reels and screen-ready content",
        ),
      },
    ],
  },
  {
    id: "speakers-event-curation",
    label: "Speakers & Event Curation",
    code: "SE",
    accent: "#58d39b",
    eyebrow: localized("Narrativa dell'evento", "Event narrative"),
    descriptionKey: "joinus.SEC",
    members: [
      {
        name: localized("Theme Research", "Theme Research"),
        role: localized(
          "Direzioni narrative, temi e domande forti",
          "Narrative directions, themes and strong questions",
        ),
      },
      {
        name: localized("Speaker Scouting", "Speaker Scouting"),
        role: localized(
          "Ricerca, outreach e selezione degli speaker",
          "Research, outreach and speaker selection",
        ),
      },
      {
        name: localized("Speaker Care", "Speaker Care"),
        role: localized(
          "Email, materiali, esigenze e accompagnamento",
          "Email, materials, needs and speaker care",
        ),
      },
      {
        name: localized("Stage Coaching", "Stage Coaching"),
        role: localized(
          "Timing, flow e prove prima del palco",
          "Timing, flow and rehearsal before the stage",
        ),
      },
    ],
  },
  {
    id: "human-resources-academy",
    label: "Human Resources & Academy",
    code: "HR",
    accent: "#8be0ff",
    eyebrow: localized("Persone e crescita", "People and growth"),
    descriptionKey: "joinus.HRA",
    members: [
      {
        name: localized("Recruiting", "Recruiting"),
        role: localized(
          "Call, candidature e attivazione dei nuovi ingressi",
          "Open calls, applications and new member intake",
        ),
      },
      {
        name: localized("Interviste", "Interviews"),
        role: localized(
          "Screening, matching e colloqui conoscitivi",
          "Screening, matching and introductory interviews",
        ),
      },
      {
        name: localized("Onboarding", "Onboarding"),
        role: localized(
          "Rituali, passaggi e integrazione nel gruppo",
          "Rituals, handoffs and integration into the group",
        ),
      },
      {
        name: localized("Academy", "Academy"),
        role: localized(
          "Formazione interna, masterclass e crescita condivisa",
          "Internal training, masterclasses and shared growth",
        ),
      },
    ],
  },
  {
    id: "external-relations-sponsor",
    label: "External Relations & Sponsor",
    code: "ER",
    accent: "#ffd84a",
    eyebrow: localized("Relazioni e partnership", "Relations and partnerships"),
    descriptionKey: "joinus.ERS",
    members: [
      {
        name: localized("Sponsor Scouting", "Sponsor Scouting"),
        role: localized(
          "Prospecting, contatti e pipeline commerciali",
          "Prospecting, contacts and commercial pipelines",
        ),
      },
      {
        name: localized("Partnerships", "Partnerships"),
        role: localized(
          "Relazioni media, istituzioni e alleanze strategiche",
          "Media relations, institutions and strategic alliances",
        ),
      },
      {
        name: localized("Proposal Design", "Proposal Design"),
        role: localized(
          "Offerte, deck e follow-up con i partner",
          "Offers, decks and partner follow-up",
        ),
      },
      {
        name: localized("Bandi", "Grants"),
        role: localized(
          "Call pubbliche, patrocini e rendicontazione",
          "Public calls, sponsorships and reporting",
        ),
      },
    ],
  },
  {
    id: "communication-editorial-marketing-media",
    label: "Communication, Editorial, Marketing & Media",
    code: "CM",
    accent: "#ff8e63",
    eyebrow: localized("Voce del progetto", "Voice of the project"),
    descriptionKey: "joinus.CEM",
    members: [
      {
        name: localized("Social Media", "Social Media"),
        role: localized(
          "Canali, calendario editoriale e publishing",
          "Channels, editorial calendar and publishing",
        ),
      },
      {
        name: localized("Editorial", "Editorial"),
        role: localized(
          "Articoli, newsletter e scrittura dei contenuti",
          "Articles, newsletters and content writing",
        ),
      },
      {
        name: localized("Photo & Video", "Photo & Video"),
        role: localized(
          "Copertura, montaggio e memoria visiva dell'evento",
          "Coverage, editing and the visual memory of the event",
        ),
      },
      {
        name: localized("Press Office", "Press Office"),
        role: localized(
          "Media kit, press release e relazioni con la stampa",
          "Media kits, press releases and press relations",
        ),
      },
    ],
  },
];

export const teamSections = baseTeamSections.map((team) => ({
  ...team,
  members: ensureMemberCount(team.members, 8),
}));

export function getLocalizedValue(value, language = "it") {
  if (typeof value === "string") {
    return value;
  }

  const isEnglish = language.toLowerCase().startsWith("en");

  return isEnglish ? (value.en ?? value.it) : (value.it ?? value.en);
}

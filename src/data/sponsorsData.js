const localized = (it, en = it) => ({ it, en });

const sponsorAssetModules = import.meta.glob(
  "../assets/images/partners23/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const sponsorAssetMap = Object.fromEntries(
  Object.entries(sponsorAssetModules).map(([path, src]) => [
    path.split("/").pop().replace(/\.(png|jpe?g|webp)$/i, ""),
    src,
  ]),
);

const resolveSponsorAsset = (key) =>
  sponsorAssetMap[`${key}-Photoroom`] ?? sponsorAssetMap[key];

const createSponsorLogo = (key, it, en = it, accent = "#ffffff", options = {}) => ({
  id: key.toLowerCase(),
  name: localized(it, en),
  src: resolveSponsorAsset(key),
  accent,
  ...options,
});

const sponsorLogoLibrary = {
  Balduina1: createSponsorLogo("Balduina1", "Balduina", "Balduina", "#f6d4ac"),
  CBCR: createSponsorLogo("CBCR", "CBCR", "CBCR", "#ff8a63"),
  CE: createSponsorLogo("CE", "CE", "CE", "#ffd84a"),
  CNR: createSponsorLogo("CNR", "CNR", "CNR", "#f0f0f0"),
  Collettivo: createSponsorLogo("Collettivo", "Collettivo", "Collettivo", "#ffa5d4"),
  Copernico: createSponsorLogo("Copernico", "Copernico", "Copernico", "#8de2ff"),
  CrikCrok: createSponsorLogo("CrikCrok", "Crik Crok", "Crik Crok", "#ffbf5c"),
  Deloitte: createSponsorLogo("Deloitte", "Deloitte", "Deloitte", "#9cff8c"),
  Dias: createSponsorLogo("Dias", "DIAS", "DIAS", "#f2f2f2"),
  eCo: createSponsorLogo("eCo", "eCo", "eCo", "#7be7c0"),
  EF: createSponsorLogo("EF", "Education First", "Education First", "#ffffff"),
  Enav: createSponsorLogo("Enav", "ENAV", "ENAV", "#9ed3ff"),
  Enea: createSponsorLogo("Enea", "ENEA", "ENEA", "#f5e7c0"),
  Eni: createSponsorLogo("Eni", "Eni", "Eni", "#ffd84a"),
  Innocent: createSponsorLogo("Innocent", "Innocent", "Innocent", "#ff7f83"),
  JESAP: createSponsorLogo("JESAP", "JESAP", "JESAP", "#ffffff"),
  Marziali: createSponsorLogo("Marziali", "Marziali", "Marziali", "#f3c9a0"),
  MentorsNova: createSponsorLogo("MentorsNova", "Mentors Nova", "Mentors Nova", "#c8bcff"),
  Millionaire: createSponsorLogo("Millionaire", "Millionaire", "Millionaire", "#f0f0f0"),
  MyDiet: createSponsorLogo("MyDiet", "MyDiet", "MyDiet", "#ff8a63", {
    tileLogoScale: 1.22,
    slotLogoScale: 1.68,
  }),
  Peekaboo: createSponsorLogo("Peekaboo", "Peekaboo", "Peekaboo", "#8de2ff"),
  Pioda: createSponsorLogo("Pioda", "Pioda", "Pioda", "#ffd1b0"),
  RadioKaos: createSponsorLogo("RadioKaos", "Radio Kaos", "Radio Kaos", "#ff5d73"),
  RadioSapienza: createSponsorLogo("RadioSapienza", "Radio Sapienza", "Radio Sapienza", "#ffffff"),
  Redbull: createSponsorLogo("Redbull", "Red Bull", "Red Bull", "#82b8ff", {
    tileLogoScale: 1.8,
  }),
  RegioneLazio: createSponsorLogo("RegioneLazio", "Regione Lazio", "Regione Lazio", "#ffffff"),
  Roma: createSponsorLogo("Roma", "Roma", "Roma", "#ffd84a"),
  Sanarti: createSponsorLogo("Sanarti", "Sanarti", "Sanarti", "#f6e5c8"),
  SFClubSapienza: createSponsorLogo("SFClubSapienza", "SF Club Sapienza", "SF Club Sapienza", "#ffa5d4"),
  Thesis4u: createSponsorLogo("Thesis4u", "Thesis4u", "Thesis4u", "#8de2ff"),
  Tim: createSponsorLogo("Tim", "TIM", "TIM", "#ff5d73"),
  Tlon: createSponsorLogo("Tlon", "TLON", "TLON", "#8de2ff"),
  Unicredit: createSponsorLogo("Unicredit", "UniCredit", "UniCredit", "#ffffff"),
  VAIA: createSponsorLogo("VAIA", "VAIA", "VAIA", "#9cff8c"),
  WAYouth: createSponsorLogo("WAYouth", "WA Youth", "WA Youth", "#c8bcff"),
};

const createLogoSlot = (key, noteIt, noteEn = noteIt) => {
  const sponsor = sponsorLogoLibrary[key];

  return {
    id: `slot-${sponsor.id}`,
    name: sponsor.name,
    src: sponsor.src,
    note: localized(noteIt, noteEn),
    accent: sponsor.accent,
    logoScale: sponsor.slotLogoScale ?? sponsor.logoScale,
  };
};

export const sponsorHeroCopy = {
  kicker: localized(
    "Collaborazioni che fanno crescere il progetto",
    "Partnerships that help the project grow",
  ),
  title: localized("Sponsors & Partners", "Sponsors & Partners"),
  description: localized(
    "TEDxSapienzaU costruisce ogni edizione insieme a brand, istituzioni e community che scelgono di investire in idee, persone e impatto culturale. Questa pagina e pronta per ospitare livelli diversi di sponsorship, partnership e patrocinio con una struttura facile da aggiornare quando avrai i loghi reali.",
    "TEDxSapienzaU builds each edition with brands, institutions and communities that choose to invest in ideas, people and cultural impact. This page is ready to host different sponsorship, partnership and patronage levels with a structure that will be easy to update once you have the real logos.",
  ),
  ctaEyebrow: localized("Partnership formats", "Partnership formats"),
  ctaTitle: localized(
    "Vuoi costruire la prossima edizione con noi?",
    "Want to build the next edition with us?",
  ),
  ctaDescription: localized(
    "Per ora il pulsante resta intenzionalmente fermo, ma questa area e pronta per diventare il punto di contatto per sponsorship, media partnership, community activation e patrocinio.",
    "For now the button intentionally goes nowhere, but this area is ready to become the contact point for sponsorships, media partnerships, community activations and patronage.",
  ),
  contactLabel: localized("Contatto diretto", "Direct contact"),
  contactValue: "info@tedxsapienzau.com",
};

export const sponsorStats = [
  { value: "3000", labelKey: "partners.people" },
  { value: "35000", labelKey: "partners.yt_views" },
  { value: "50", labelKey: "partners.partners" },
  { value: "300", labelKey: "partners.volunteers" },
];

export const sponsorMarqueeItems = [
  sponsorLogoLibrary.EF,
  sponsorLogoLibrary.MyDiet,
  sponsorLogoLibrary.Tlon,
  sponsorLogoLibrary.Copernico,
  sponsorLogoLibrary.Dias,
  sponsorLogoLibrary.Deloitte,
  sponsorLogoLibrary.Unicredit,
  sponsorLogoLibrary.Tim,
  sponsorLogoLibrary.Eni,
  sponsorLogoLibrary.RegioneLazio,
  sponsorLogoLibrary.Roma,
  sponsorLogoLibrary.RadioSapienza,
  sponsorLogoLibrary.RadioKaos,
  sponsorLogoLibrary.Millionaire,
  sponsorLogoLibrary.Redbull,
  sponsorLogoLibrary.VAIA,
].filter((item) => Boolean(item?.src));

export const sponsorSections = [
  {
    id: "main-sponsor",
    title: localized("Main Sponsor", "Main Sponsor"),
    description: localized(
      "Lo spazio premium per il brand che guida la presenza piu visibile dell'edizione tra hero, palco e touchpoint chiave.",
      "The premium space for the brand leading the most visible presence across hero assets, stage moments and key touchpoints.",
    ),
    code: "MS",
    accent: "#ff5d73",
    featured: true,
    slots: [
      createLogoSlot("Deloitte", "Main sponsor", "Main sponsor"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "supporting-sponsors",
    title: localized("Supporting Sponsors", "Supporting Sponsors"),
    description: localized(
      "Brand che sostengono la produzione con presenza distribuita su materiali, venue e racconto editoriale.",
      "Brands supporting production with distributed visibility across materials, venue moments and editorial storytelling.",
    ),
    code: "SS",
    accent: "#ff8a63",
    slots: [
      createLogoSlot("Unicredit", "Supporting sponsor", "Supporting sponsor"),
      createLogoSlot("Tim", "Supporting sponsor", "Supporting sponsor"),
      createLogoSlot("Eni", "Supporting sponsor", "Supporting sponsor"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "technical-sponsors",
    title: localized("Technical Sponsors", "Technical Sponsors"),
    description: localized(
      "Partner che mettono a disposizione strumenti, tecnologia, servizi e infrastrutture operative.",
      "Partners providing tools, technology, services and operating infrastructure.",
    ),
    code: "TS",
    accent: "#59b6ff",
    slots: [
      createLogoSlot("Copernico", "Technical sponsor", "Technical sponsor"),
      createLogoSlot("Enav", "Technical sponsor", "Technical sponsor"),
      createLogoSlot("Enea", "Technical sponsor", "Technical sponsor"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "smart-sponsor",
    title: localized("Smart Sponsor", "Smart Sponsor"),
    description: localized(
      "Uno spazio agile per collaborazioni innovative, digitali o orientate a servizi smart.",
      "An agile space for innovative, digital or service-oriented smart collaborations.",
    ),
    code: "SM",
    accent: "#67d6a7",
    slots: [
      createLogoSlot("MyDiet", "Smart sponsor", "Smart sponsor"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "gastronomic-sponsor",
    title: localized("Gastronomic Sponsor", "Gastronomic Sponsor"),
    description: localized(
      "Partnership food e beverage per hospitality, backstage, speaker care e networking.",
      "Food and beverage partnerships for hospitality, backstage, speaker care and networking.",
    ),
    code: "GS",
    accent: "#ffbf5c",
    slots: [
      createLogoSlot("Innocent", "Gastronomic sponsor", "Gastronomic sponsor"),
      createLogoSlot("CrikCrok", "Gastronomic sponsor", "Gastronomic sponsor"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "friendly-sponsors",
    title: localized("Friendly Sponsors", "Friendly Sponsors"),
    description: localized(
      "Supporti flessibili, contributi in kind e collaborazioni puntuali che alzano il livello dell'esperienza.",
      "Flexible support, in-kind contributions and focused collaborations that raise the quality of the experience.",
    ),
    code: "FS",
    accent: "#ffa5d4",
    slots: [
      createLogoSlot("Balduina1", "Friendly sponsor", "Friendly sponsor"),
      createLogoSlot("Marziali", "Friendly sponsor", "Friendly sponsor"),
      createLogoSlot("Pioda", "Friendly sponsor", "Friendly sponsor"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "media-sponsors",
    title: localized("Media Sponsors", "Media Sponsors"),
    description: localized(
      "Testate, network e format editoriali che amplificano visibilita, awareness e copertura.",
      "Publications, networks and editorial formats that amplify visibility, awareness and coverage.",
    ),
    code: "MD",
    accent: "#ffd84a",
    slots: [
      createLogoSlot("Millionaire", "Media sponsor", "Media sponsor"),
      createLogoSlot("RadioKaos", "Media sponsor", "Media sponsor"),
      createLogoSlot("RadioSapienza", "Media sponsor", "Media sponsor"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "partners",
    title: localized("Partners", "Partners"),
    description: localized(
      "Collaborazioni trasversali con realta che condividono visione, pubblico o attivazioni con il progetto.",
      "Cross-functional collaborations with organizations that share audience, vision or activations with the project.",
    ),
    code: "PT",
    accent: "#8de2ff",
    slots: [
      createLogoSlot("EF", "Partner", "Partner"),
      createLogoSlot("Tlon", "Partner", "Partner"),
      createLogoSlot("VAIA", "Partner", "Partner"),
      createLogoSlot("Thesis4u", "Partner", "Partner"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "membership-partners",
    title: localized("Membership Partners", "Membership Partners"),
    description: localized(
      "Associazioni, network e membership community che portano continuita, accesso e relazioni.",
      "Associations, networks and membership communities bringing continuity, access and relationships.",
    ),
    code: "MP",
    accent: "#c8bcff",
    slots: [
      createLogoSlot("JESAP", "Membership partner", "Membership partner"),
      createLogoSlot("WAYouth", "Membership partner", "Membership partner"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "creative-partner",
    title: localized("Creative Partner", "Creative Partner"),
    description: localized(
      "Spazio dedicato a chi supporta identita, campagne, contenuti e produzioni speciali.",
      "A dedicated space for the collaborator supporting identity, campaigns, content and special productions.",
    ),
    code: "CP",
    accent: "#ff8e63",
    slots: [
      createLogoSlot("Peekaboo", "Creative partner", "Creative partner"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "community-partners",
    title: localized("Community Partners", "Community Partners"),
    description: localized(
      "Collettivi, organizzazioni e realta universitarie che estendono il progetto dentro e fuori Sapienza.",
      "Collectives, organizations and university realities that extend the project inside and beyond Sapienza.",
    ),
    code: "CM",
    accent: "#9cff8c",
    slots: [
      createLogoSlot("Collettivo", "Community partner", "Community partner"),
      createLogoSlot("SFClubSapienza", "Community partner", "Community partner"),
      createLogoSlot("MentorsNova", "Community partner", "Community partner"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "patronage",
    title: localized("Con il patrocinio di", "With the sponsorship of"),
    description: localized(
      "Enti e istituzioni che riconoscono il valore culturale, formativo e territoriale dell'iniziativa.",
      "Entities and institutions recognizing the cultural, educational and territorial value of the initiative.",
    ),
    code: "PA",
    accent: "#f2f2f2",
    slots: [
      createLogoSlot("RegioneLazio", "Patrocinio", "Patronage"),
      createLogoSlot("Roma", "Patrocinio", "Patronage"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "high-patronage",
    title: localized("Sotto l'alto patrocinio", "Under the high patronage of"),
    description: localized(
      "Una posizione dedicata a riconoscimenti istituzionali di massimo rilievo.",
      "A dedicated position for high-profile institutional recognition.",
    ),
    code: "HP",
    accent: "#f7dca1",
    slots: [
      createLogoSlot("CNR", "Alto patrocinio", "High patronage"),
    ].filter((slot) => Boolean(slot.src)),
  },
];

export function getLocalizedSponsorValue(value, language = "it") {
  if (typeof value === "string") {
    return value;
  }

  const isEnglish = language.toLowerCase().startsWith("en");

  return isEnglish ? (value.en ?? value.it) : (value.it ?? value.en);
}

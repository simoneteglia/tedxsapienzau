const sponsorAssetModules = import.meta.glob(
  "../assets/images/partners23/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  },
);

const sponsorAssetMap = Object.fromEntries(
  Object.entries(sponsorAssetModules).map(([path, src]) => [
    path.split("/").pop().replace(/\.(png|jpe?g|webp|svg)$/i, ""),
    src,
  ]),
);

const resolveSponsorAsset = (key) =>
  sponsorAssetMap[`${key}-Photoroom`] ?? sponsorAssetMap[key];

const createSponsorLogo = (key, name, link, options = {}) => ({
  id: key.toLowerCase(),
  name,
  link,
  src: resolveSponsorAsset(key),
  ...options,
});

const sponsorLogoLibrary = {
  Autocentri: createSponsorLogo("Autocentri-Balduina", "Autocentri Balduina", "https://www.autocentribalduina.com"),
  Aesperta: createSponsorLogo("Aesperta", "Aesperta Group", "https://www.aespertagroup.com"),
  AVIS: createSponsorLogo("Avis", "AVIS", "https://www.avisroma.it"),
  Bonduelle: createSponsorLogo("Bonduelle", "Bonduelle", "https://www.bonduelle.it"),
  CBCR: createSponsorLogo("CBCR", "Cose Belle Cose Rare", "https://www.icosebellecoserare.com"),
  CE: createSponsorLogo("CE", "CE", "https://www.commission.europa.eu"),
  CNR: createSponsorLogo("CNR", "Consiglio Nazionale delle Ricerche", "https://www.cnr.it/"),
  CDP: createSponsorLogo("CDP", "La Consigliera di Parità", "https://www.cittametropolitanaroma.it/homepage/la-citta-metropolitana/struttura-organizzativa/altri-organismi/la-consigliera-di-parita/"),
  Copernico: createSponsorLogo("Copernico", "Copernico", "https://www.copernicofm.com/"),
  CrikCrok: createSponsorLogo("CrikCrok", "Crik Crok", "#"),
  Deloitte: createSponsorLogo("Deloitte", "Deloitte", "https://www.deloitte.com/it/"),
  Dias: createSponsorLogo("Dias", "Libreria Dias", "https://www.libreriadias.com/"),
  DirezioneLavoro: createSponsorLogo("Direzione-Lavoro", "Direzione Lavoro", "https://www.direzionelavoro.it/"),
  Dotcampus: createSponsorLogo("Dotcampus", "Dotcampus", "https://www.dotcampus.it/"),
  eCo: createSponsorLogo("eCo", "eCo", "#"),
  EF: createSponsorLogo("EF", "Education First", "https://www.ef-italia.it/",{
    tileLogoScale: 1.9,
  }),
  Enav: createSponsorLogo("Enav", "ENAV", "https://www.enav.it/",{
    tileLogoScale: 1.9,
    slotLogoScale: 1.68,
  }),
  Enea: createSponsorLogo("Enea", "ENEA", "https://www.enea.it/"),
  HyperFoundry: createSponsorLogo("Hyper-Foundry", "Hyper Foundry", "https://www.hyper-foundry.com/"),
  HXO: createSponsorLogo("HXO", "Humanities InventriX Opera", "https://www.hxo.it/"),
  Innocent: createSponsorLogo("Innocent", "Innocent Drinks", "https://www.innocentdrinks.it/"),
  JESAP: createSponsorLogo("JESAP", "JESAP", "https://www.jesap.it/"),
  Kortpress: createSponsorLogo("Kortpress", "Kortpress", "https://www.kortpress.io/"),
  Marziali: createSponsorLogo("Marziali", "Marziali", "https://www.marzialicaffe.it/"),
  MentorsNova: createSponsorLogo("MentorsNova", "Mentors Nova", "https://mentors4u.com/"),
  MIC: createSponsorLogo("MIC", "Musei in Comune Card", "https://www.museiincomuneroma.it/it/infopage/mic-card/"),
  Millionaire: createSponsorLogo("Millionaire", "Millionaire", "https://millionaire.it/"),
  MyDiet: createSponsorLogo("MyDiet", "MyDiet", "https://mydietroma.it/", {
    tileLogoScale: 1.22,
    slotLogoScale: 1.68,
  }),
  MSG: createSponsorLogo("MSG", "Ministro per lo Sport e i Giovani", "https://sportegiovani.governo.it/"),
  NAM: createSponsorLogo("NAM", "NAM Studio", "https://namstudio.it/"),
  NovoNordisk: createSponsorLogo("Novo-Nordisk", "Novo Nordisk", "https://www.novonordisk.it/",{
    tileLogoScale: 1.3,
  
  }),
  Peekaboo: createSponsorLogo("Peekaboo", "Peekaboo", "https://www.peekaboovision.com/"),
  Pioda: createSponsorLogo("Pioda", "Pioda Imaging", "https://www.piodaimaging.it/"),
  PE: createSponsorLogo("PE", "Parlamento Europeo", "https://www.europarl.europa.eu/"),
  RadioKaos: createSponsorLogo("RadioKaos", "Radio Kaos", "https://www.radiokaositaly.com/"),
  RadioSapienza: createSponsorLogo("RadioSapienza", "Radio Sapienza", "https://www.radiosapienza.net/"),
  Redbull: createSponsorLogo("Redbull", "Red Bull", "https://www.redbull.com/it-it/", {
    tileLogoScale: 1.8,
  }),
  RegioneLazio: createSponsorLogo("RegioneLazio", "Regione Lazio", "https://www.regione.lazio.it/"),
  Roma: createSponsorLogo("Roma", "Comune di Roma Capitale", "https://www.comune.roma.it/"),
  RFW: createSponsorLogo("RFW", "Rome Future Week", "https://www.romefutureweek.it/"),
  Sanarti: createSponsorLogo("Sanarti", "Sanarti", "https://www.sanarti.it/"),
  SapienzaGladiators: createSponsorLogo("SapienzaGladiators", "Sapienza Gladiators", "https://www.sapienzagladiators.it/"),
  SFClubSapienza: createSponsorLogo("SFClubSapienza", "SF Club Sapienza", "https://www.instagram.com/sfclubsapienza/"),
  Technotown: createSponsorLogo("Technotown", "TechnoTown", "https:/www.technotown.it/"),
  TFI: createSponsorLogo("TFI", "Teach For Italy", "https://www.teachforitaly.org/"),
  Thesis4u: createSponsorLogo("Thesis4u", "Thesis4u", "https://thesisforyou.com/"),
  Tim: createSponsorLogo("Tim", "TIM", "https://www.gruppotim.it/",{
    tileLogoScale: 1.9,

  }),
  Tlon: createSponsorLogo("Tlon", "TLON", "https://tlon.it/"),
  Tucano: createSponsorLogo("Tucano", "Tucano", "https://tucano.com/"),
  Unicredit: createSponsorLogo("Unicredit", "UniCredit", "https://www.unicredit.it/",{
    tileLogoScale: 1.9,
  }),
  Underpark: createSponsorLogo("UPR", "Underpark Radio", "https://www.underparkradio.com/"),
  VAIA: createSponsorLogo("VAIA", "VAIA", "https://www.vaia.eu/"),
  Viscosa: createSponsorLogo("Viscosa", "Collettivo Viscosa", "https://www.instagram.com/collettivoviscosa/"),
  WAYouth: createSponsorLogo("WAYouth", "WA Youth", "https://www.wayouth.it/"),
  YPT: createSponsorLogo("YPT", "Your Personal Trainer", "https://www.yptrainer.com/"),
  Zeta: createSponsorLogo("Zeta", "Zeta", "#"),
};

const createLogoSlot = (key, options = {}) => {
  const sponsor = sponsorLogoLibrary[key];
  return {
    id: `slot-${sponsor.id}${options.year ? `-${options.year}` : ""}`,
    name: sponsor.name,
    src: sponsor.src,
    link: sponsor.link, // <-- La proprietà link viene passata allo slot finale
    logoScale: sponsor.slotLogoScale ?? sponsor.logoScale,
    ...options,
  };
};

const createYearSlot = (year, key, options = {}) =>
  createLogoSlot(key, { year, ...options });



export const sponsorMarqueeItems = [
  sponsorLogoLibrary.Unicredit,
  sponsorLogoLibrary.Tim,
  sponsorLogoLibrary.NovoNordisk,
  sponsorLogoLibrary.Enav,
  sponsorLogoLibrary.Tucano,
  sponsorLogoLibrary.HyperFoundry,
  sponsorLogoLibrary.EF,
].filter((item) => Boolean(item?.src));

export const sponsorSections = [
  {
    id: "main-sponsor",
    title: "Main Sponsor",
    featured: true,
    slots: [
      createYearSlot(2026, "Unicredit"),
      createYearSlot(2025, "Unicredit"),
      createYearSlot(2024, "Unicredit"),
      createYearSlot(2023, "Unicredit"),
      createYearSlot(2022, "Unicredit"),
      createYearSlot(2023, "Tim"),
      createYearSlot(2022, "Tim"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "supporting-sponsors",
    title: "Supporting Sponsors",
    slots: [
      createYearSlot(2025, "NovoNordisk"),
      createYearSlot(2025, "Autocentri"),
      createYearSlot(2024, "NovoNordisk"),
      createYearSlot(2024, "Autocentri"),
      createYearSlot(2023, "Autocentri"),
      createYearSlot(2023, "Enav"),
      createYearSlot(2023, "Pioda"),
      createYearSlot(2022, "Autocentri"),
      createYearSlot(2022, "Enav"),
      createYearSlot(2022, "Pioda"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "mobility-sponsors",
    title: "Mobility Sponsors",
    slots: [
      createYearSlot(2026, "Autocentri"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "technical-sponsors",
    title: "Technical Sponsors",
    slots: [
      createYearSlot(2026, "Tucano"),
      createYearSlot(2025, "Tucano"),
      createYearSlot(2025, "Pioda"),
      createYearSlot(2024, "Tucano"),
      createYearSlot(2024, "Pioda"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "supporting-sponsors",
    title: "Supporting Sponsors",
    slots: [
      createYearSlot(2026, "Dotcampus"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "smart-sponsors",
    title: "Smart Sponsors",
    slots: [
      createYearSlot(2025, "HyperFoundry"),
      createYearSlot(2024, "HyperFoundry"),
      createYearSlot(2023, "VAIA"),
      createYearSlot(2023, "EF"),
      createYearSlot(2023, "CBCR"),
      createYearSlot(2023, "Deloitte"),
      createYearSlot(2023, "MyDiet"),
      createYearSlot(2022, "VAIA"),
      createYearSlot(2022, "EF"),
      createYearSlot(2022, "CBCR"),
      createYearSlot(2022, "Deloitte"),
      createYearSlot(2022, "MyDiet"),

    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "gastronomic-sponsors",
    title: "Gastronomic Sponsors",
    slots: [
      createYearSlot(2025, "Aesperta"),
      createYearSlot(2025, "Bonduelle"),
      createYearSlot(2024, "Aesperta"),
      createYearSlot(2024, "Bonduelle"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "friendly-sponsors",
    title: "Friendly Sponsors",
    slots: [
      createYearSlot(2025, "EF"),
      createYearSlot(2025, "YPT"),
      createYearSlot(2025, "Redbull"),
      createYearSlot(2025, "HXO"),
      createYearSlot(2025, "TFI"),
      createYearSlot(2025, "Copernico"),
      createYearSlot(2025, "DirezioneLavoro"),
      createYearSlot(2024, "EF"),
      createYearSlot(2024, "YPT"),
      createYearSlot(2024, "Redbull"),
      createYearSlot(2024, "HXO"),
      createYearSlot(2024, "TFI"),
      createYearSlot(2024, "Copernico"),
      createYearSlot(2024, "DirezioneLavoro"),
      createYearSlot(2023, "Tlon"),
      createYearSlot(2023, "Sanarti"),
      createYearSlot(2023, "Dias"),
      createYearSlot(2023, "Innocent"),
      createYearSlot(2023, "CrikCrok"),
      createYearSlot(2023, "Copernico"),
      createYearSlot(2023, "Redbull"),
      createYearSlot(2023, "Marziali"),
      createYearSlot(2022, "Tlon"),
      createYearSlot(2022, "Sanarti"),
      createYearSlot(2022, "Dias"),
      createYearSlot(2022, "Innocent"),
      createYearSlot(2022, "CrikCrok"),
      createYearSlot(2022, "Copernico"),
      createYearSlot(2022, "Redbull"),
      createYearSlot(2022, "Marziali"),

    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "partners",
    title: "Partners",
    slots: [
      createYearSlot(2026, "AVIS"),
      createYearSlot(2025, "MIC"),
      createYearSlot(2025, "Technotown"),
      createYearSlot(2024, "MIC"),
      createYearSlot(2024, "Technotown"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "media-partners",
    title: "Media Partners",
    slots: [
      createYearSlot(2025, "RadioSapienza"),
      createYearSlot(2025, "Zeta"),
      createYearSlot(2025, "Underpark"),
      createYearSlot(2024, "RadioSapienza"),
      createYearSlot(2024, "Zeta"),
      createYearSlot(2024, "Underpark"),
      createYearSlot(2023, "RadioSapienza"),
      createYearSlot(2023, "Millionaire"),
      createYearSlot(2023, "eCo"),
      createYearSlot(2023, "RadioKaos"),
      createYearSlot(2023, "Viscosa"),
      createYearSlot(2022, "RadioSapienza"),
      createYearSlot(2022, "Millionaire"),
      createYearSlot(2022, "eCo"),
      createYearSlot(2022, "RadioKaos"),
      createYearSlot(2022, "Viscosa"),

    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "technical-partners",
    title: "Technical Partners",
    slots: [
      createYearSlot(2026, "Kortpress"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "creative-partners",
    title: "Creative Partners",
    slots: [
      createYearSlot(2025, "NAM"),
      createYearSlot(2024, "NAM"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "community-sponsors",
    title: "Community Sponsorss",
    slots: [

      createYearSlot(2025, "Thesis4u"),
      createYearSlot(2025, "JESAP"),
      createYearSlot(2025, "SapienzaGladiators"),
      createYearSlot(2025, "AVIS"),
      createYearSlot(2025, "SFClubSapienza"),
      createYearSlot(2025, "RFW"),
      createYearSlot(2024, "Thesis4u"),
      createYearSlot(2024, "JESAP"),
      createYearSlot(2024, "SapienzaGladiators"),
      createYearSlot(2024, "AVIS"),
      createYearSlot(2024, "SFClubSapienza"),
      createYearSlot(2024, "RFW"),
      createYearSlot(2023, "Thesis4u"),
      createYearSlot(2023, "WAYouth"),
      createYearSlot(2023, "Peekaboo"),
      createYearSlot(2023, "SFClubSapienza"),
      createYearSlot(2023, "JESAP"),
      createYearSlot(2022, "Thesis4u"),
      createYearSlot(2022, "WAYouth"),
      createYearSlot(2022, "Peekaboo"),
      createYearSlot(2022, "SFClubSapienza"),
      createYearSlot(2022, "JESAP"),
      createYearSlot(2022, "MentorsNova"),
      //manca logo verde acqua
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "alto-patrocinio",
    title: "Con l'alto patrocinio di",
    slots: [
      createYearSlot(2025, "PE"),
      createYearSlot(2024, "PE"),
    ].filter((slot) => Boolean(slot.src)),
  },
  {
    id: "patrocinio",
    title: "Con il patrocinio di",
    slots: [
      createYearSlot(2025, "CE"),
      createYearSlot(2025, "MSG"),
      createYearSlot(2025, "Enea"),
      createYearSlot(2025, "CNR"),
      createYearSlot(2025, "RegioneLazio"),
      createYearSlot(2025, "CDP"),
      createYearSlot(2025, "Roma"),
      createYearSlot(2024, "CE"),
      createYearSlot(2024, "MSG"),
      createYearSlot(2024, "Enea"),
      createYearSlot(2024, "CNR"),
      createYearSlot(2024, "RegioneLazio"),
      createYearSlot(2024, "CDP"),
      createYearSlot(2024, "Roma"),
      createYearSlot(2023, "Enea"),
      createYearSlot(2023, "CNR"),
      createYearSlot(2023, "CE"),
      createYearSlot(2023, "RegioneLazio"),
      createYearSlot(2023, "Roma"),
      createYearSlot(2022, "Enea"),
      createYearSlot(2022, "CNR"),
      createYearSlot(2022, "CE"),
      createYearSlot(2022, "RegioneLazio"),
      createYearSlot(2022, "Roma"),
    ].filter((slot) => Boolean(slot.src)),
  },
];
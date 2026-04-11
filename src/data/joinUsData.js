const localized = (it, en = it) => ({ it, en });

export const joinUsHeroCopy = {
  kicker: localized("Dentro il progetto", "Inside the project"),
  title: localized("Build TEDx with us", "Build TEDx with us"),
  description: localized(
    "Entrare nel team significa lavorare su eventi, contenuti, partnership, design e tecnologia insieme a studenti che trasformano idee in esperienze concrete. La pagina e pronta per diventare il punto di ingresso della prossima call, ma gia oggi racconta bene ritmo, aree e modo di lavorare.",
    "Joining the team means working on events, content, partnerships, design and technology with students who turn ideas into real experiences. This page is ready to become the entry point for the next open call, but already shows the rhythm, the areas and the way we work.",
  ),
  statusEyebrow: localized("Application rhythm", "Application rhythm"),
  statusTitle: localized(
    "Le candidature non sono sempre aperte, ma quando partono il percorso e chiaro.",
    "Applications are not always open, but when they do open the path is clear.",
  ),
  statusDescription: localized(
    "La prossima call verra annunciata su sito, social e newsletter. Per ora il bottone resta intenzionalmente fermo, cosi possiamo costruire prima una pagina solida e poi collegare il form reale.",
    "The next open call will be announced on the site, social channels and newsletter. For now the main button intentionally stays inactive, so we can build a solid page first and connect the real form later.",
  ),
  inactiveCtaLabel: localized(
    "Candidati appena apriamo",
    "Apply when applications open",
  ),
  inactiveCtaNote: localized(
    "Il form verra collegato alla prossima apertura candidature.",
    "The form will be connected to the next application window.",
  ),
  exploreTeamsLabel: localized("Esplora le aree", "Explore the areas"),
  contactLabel: localized("Contatto diretto", "Direct contact"),
  contactValue: "info@tedxsapienzau.com",
  signals: [
    localized("Studenti Sapienza", "Sapienza students"),
    localized("Team multidisciplinari", "Multidisciplinary teams"),
    localized("Onboarding incluso", "Onboarding included"),
  ],
  statusPoints: [
    localized(
      "Call dedicate, non recruiting continuo",
      "Dedicated open calls, not always-on recruiting",
    ),
    localized(
      "Screening e colloqui introduttivi",
      "Screening and introductory interviews",
    ),
    localized(
      "Ingresso graduale con affiancamento",
      "Gradual onboarding with guided support",
    ),
  ],
};

export const joinUsInfoCards = [
  {
    id: "who",
    eyebrow: localized("Chi puo candidarsi", "Who can apply"),
    title: localized("Studenti di Sapienza", "Sapienza students"),
    description: localized(
      "La call puo essere pensata per studenti regolarmente iscritti a corsi di laurea, laurea magistrale, master, dottorato o scuole di specializzazione.",
      "The open call can be built for students currently enrolled in bachelor, master, postgraduate, PhD or specialization programmes.",
    ),
  },
  {
    id: "pace",
    eyebrow: localized("Come si lavora", "How the work feels"),
    title: localized(
      "Operativita vera, non solo volontariato simbolico",
      "Hands-on work, not symbolic volunteering",
    ),
    description: localized(
      "Ogni area contribuisce con task reali: planning, produzione, contenuti, contatti, design, sviluppo e supporto durante gli eventi.",
      "Every area contributes through real tasks: planning, production, content, outreach, design, development and live event support.",
    ),
  },
  {
    id: "growth",
    eyebrow: localized("Cosa ti porti a casa", "What you gain"),
    title: localized(
      "Metodo, responsabilita, rete",
      "Process, ownership, network",
    ),
    description: localized(
      "Si entra in un contesto dove si impara lavorando con persone di team diversi, con piu responsabilita nel tempo e occasioni concrete di crescita.",
      "You enter a context where you learn by working with people across teams, gain more ownership over time and build real growth opportunities.",
    ),
  },
];

export const joinUsSteps = [
  {
    id: "01",
    title: localized("Leggi la call", "Read the open call"),
    description: localized(
      "Quando apriremo, troverai qui requisiti, team coinvolti, timing e il link diretto al form.",
      "When applications open, this page will host requirements, involved teams, timeline and the direct form link.",
    ),
  },
  {
    id: "02",
    title: localized(
      "Raccontaci dove vuoi contribuire",
      "Tell us where you want to contribute",
    ),
    description: localized(
      "Potrai indicare le aree che senti piu vicine a te e spiegare il tipo di contributo che vuoi portare.",
      "You will be able to indicate the areas that feel closest to you and explain the kind of contribution you want to bring.",
    ),
  },
  {
    id: "03",
    title: localized("Colloquio conoscitivo", "Introductory interview"),
    description: localized(
      "La selezione non serve a mettere in scena un esame, ma a capire fit, disponibilita e potenziale di crescita.",
      "Selection is not about staging an exam, but about understanding fit, availability and growth potential.",
    ),
  },
  {
    id: "04",
    title: localized(
      "Onboarding e primo inserimento",
      "Onboarding and first integration",
    ),
    description: localized(
      "Se entri, inizi con un affiancamento chiaro: strumenti, rituali del team, persone di riferimento e prime attivita.",
      "If you join, you start with a clear onboarding: tools, team rituals, reference people and first tasks.",
    ),
  },
];

export const joinUsTeamIntro = {
  kicker: localized("Aree del team", "Team areas"),
  title: localized("Dove potresti entrare", "Where you could join"),
  description: localized(
    "Le aree qui sotto sono i punti di ingresso piu naturali per una call. Ognuna ha un linguaggio, un ritmo e un tipo di responsabilita diverso, ma tutte contribuiscono alla stessa esperienza finale.",
    "The areas below are the most natural entry points for a future open call. Each one has its own language, pace and kind of ownership, but they all build the same final experience together.",
  ),
  exploreTeamPageLabel: localized("Apri la pagina team", "Open the team page"),
};

export const joinUsTeamSummaries = {
  "it-website": localized(
    "Tiene online il sito, la web app, la newsletter e il supporto tecnico durante i momenti chiave del progetto.",
    "Keeps the website, web app, newsletter and technical support alive across the key moments of the project.",
  ),
  "planning-event-management": localized(
    "Gestisce venue, logistica, fornitori, timeline, flussi e coordinamento operativo degli eventi.",
    "Handles venue, logistics, suppliers, timelines, flows and operational event coordination.",
  ),
  "legal-administrative": localized(
    "Presidia contratti, contabilita, privacy, copyright e allineamento con linee guida TEDx e ateneo.",
    "Covers contracts, accounting, privacy, copyright and alignment with TEDx and university guidelines.",
  ),
  design: localized(
    "Costruisce l'identita visiva dell'edizione: asset digitali, materiali stampati, allestimenti e motion.",
    "Builds the edition visual identity: digital assets, print materials, setups and motion.",
  ),
  "speakers-event-curation": localized(
    "Lavora su temi, scouting speaker, speaker care e preparazione dei talk fino al palco.",
    "Works on themes, speaker scouting, speaker care and talk preparation all the way to the stage.",
  ),
  "human-resources-academy": localized(
    "Segue candidature, colloqui, onboarding, benessere interno e formazione condivisa del team.",
    "Handles applications, interviews, onboarding, internal wellbeing and shared learning across the team.",
  ),
  "external-relations-sponsor": localized(
    "Cerca sponsor, partnership, patrocini e costruisce relazioni che permettono al progetto di crescere.",
    "Finds sponsors, partnerships and patronage while building the relationships that allow the project to grow.",
  ),
  "communication-editorial-marketing-media": localized(
    "Guida social, editorial, newsletter, press office e contenuti visuali che raccontano il progetto al pubblico.",
    "Leads social, editorial, newsletter, press office and visual content that shape the public-facing voice of the project.",
  ),
};

export const joinUsFaqs = [
  {
    id: "experience",
    question: localized(
      "Serve esperienza pregressa?",
      "Do I need previous experience?",
    ),
    answer: localized(
      "Aiuta, ma non e l'unico criterio. Contano molto chiarezza, costanza, voglia di imparare e il motivo per cui vuoi entrare nel progetto.",
      "It helps, but it is not the only criterion. Clarity, consistency, willingness to learn and your motivation matter a lot.",
    ),
  },
  {
    id: "time",
    question: localized(
      "Quanto tempo richiede?",
      "How much time does it require?",
    ),
    answer: localized(
      "Dipende dall'area e dalla fase dell'anno. Alcuni periodi sono piu intensi, ma il lavoro viene organizzato per team e milestone, non lasciato al caso.",
      "It depends on the area and the moment of the year. Some periods are more intense, but work is organized through teams and milestones, not left to improvisation.",
    ),
  },
  {
    id: "fit",
    question: localized(
      "E se non so ancora dove mi vedo?",
      "What if I do not know where I fit yet?",
    ),
    answer: localized(
      "Va bene cosi. La call serve anche a capire quale area ti permette di esprimerti meglio: puoi arrivare con curiosita, non per forza con una risposta definitiva.",
      "That is completely fine. The open call also helps understand which area fits you best: you can arrive with curiosity, not necessarily with a final answer.",
    ),
  },
];

export const joinUsFinalCta = {
  kicker: localized("Restiamo in contatto", "Stay in touch"),
  title: localized(
    "La prossima call passera da qui.",
    "The next open call will start here.",
  ),
  description: localized(
    "Per ora possiamo usare questa pagina per raccontare bene il progetto, indirizzare chi e curioso verso i team e raccogliere interesse attraverso email e canali social. Quando vorrai, collegheremo il form reale al bottone principale.",
    "For now this page can explain the project clearly, direct curious people to the teams and gather interest through email and social channels. When you want, we can connect the real form to the main button.",
  ),
  primaryLabel: localized(
    "Candidati appena apriamo",
    "Apply when applications open",
  ),
  secondaryLabel: localized("Scrivici una mail", "Send us an email"),
};

const localized = (it, en = it) => ({ it, en });

export const joinUsHeroCopy = {
  kicker: localized("Dentro il progetto", "Inside the project"),
  title: localized("Build TEDx with us", "Build TEDx with us"),
  description: localized(
    "Entrare nel team significa lavorare su eventi, contenuti, partnership, design e tecnologia insieme a studenti che trasformano idee in esperienze concrete.",
    "Joining the team means working on events, content, partnerships, design and technology with students who turn ideas into real experiences.",
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
    "Candidati appena apriamo *",
    "Apply when applications open *",
  ),
  inactiveCtaNote: localized(
    "* Le candidature sono attualmente chiuse, ma non per sempre! Seguici sui social per non perderti le prossime call!",
    "* Applications are currently closed, but not forever! Follow us on social media so you don't miss the next open calls!",
  ),
  exploreTeamsLabel: localized("Esplora le aree", "Explore the areas"),
  contactLabel: localized("Contatto diretto", "Direct contact"),
  contactValue: "info@tedxsapienzau.com",
  signals: [
    localized("Studenti Sapienza", "Sapienza students"),
    localized("Team multidisciplinari", "Multidisciplinary teams"),
    localized("Networking", "Networking"),
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
    eyebrow: localized("Chi può candidarsi:", "Who can apply:"),
    title: localized("Studenti Sapienza", "Sapienza students"),
    description: localized(
      "La call è pensata per studenti regolarmente iscritti a corsi di laurea, laurea magistrale, master, dottorato o scuole di specializzazione.",
      "The open call can be built for students currently enrolled in bachelor, master, postgraduate, PhD or specialization programmes.",
    ),
  },
  {
    id: "pace",
    eyebrow: localized("Come si lavora:", "How the work feels:"),
    title: localized(
      "Operatività vera, non solo volontariato simbolico",
      "Hands-on work, not symbolic volunteering",
    ),
    description: localized(
      "Ogni team contribuisce con task reali: planning, produzione, contenuti, contatti, design, sviluppo e supporto durante gli eventi.",
      "Every area contributes through real tasks: planning, production, content, outreach, design, development and live event support.",
    ),
  },
  {
    id: "growth",
    eyebrow: localized("Cosa ti porti a casa:", "What you gain:"),
    title: localized("Metodo, esperienza, rete", "Method, experience, network"),
    description: localized(
      "Si entra in un contesto dove si impara lavorando con persone di team diversi, con occasioni concrete di crescita.",
      "You enter a context where you learn by working with people across teams, gain more ownership over time and build real growth opportunities.",
    ),
  },
];

export const joinUsSteps = [
  {
    id: "01",
    title: localized("Leggi la call", "Read the open call"),
    description: localized(
      "Quando apriremo le candidature, troverai qui i requisiti, i team coinvolti, le date e il link diretto al form.",
      "When applications open, this page will host requirements, teams involved, timeline and the direct form link.",
    ),
  },
  {
    id: "02",
    title: localized(
      "Raccontaci dove e come vuoi contribuire",
      "Tell us where and how you want to contribute",
    ),
    description: localized(
      "Potrai indicare le aree che senti più vicine a te e spiegare il tipo di contributo che vuoi portare.",
      "You will be able to indicate the areas that feel closest to you and explain the kind of contribution you want to bring.",
    ),
  },
  {
    id: "03",
    title: localized("Colloquio conoscitivo", "Introductory interview"),
    description: localized(
      "La selezione non serve a mettere in scena un esame, ma a capire cosa fa per te, disponibilità e dedizione al progetto.",
      "Selection is not about staging an exam, but about understanding fit, availability and dedication to the project.",
    ),
  },
  {
    id: "04",
    title: localized("Primo inserimento", "First integration"),
    description: localized(
      "Se entri, sarai subito affiancato da altri membri del team e verrai guidato step by step sulle tasks, sugli obiettivi e avrai subito occasione di conoscere persone nuove.",
      "If you join, you will be supported by other team members and guided step by step on tasks, goals and you will immediately have the opportunity to meet new people.",
    ),
  },
];

export const joinUsTeamIntro = {
  kicker: localized("Aree del team", "Team areas"),
  title: localized("Dove potresti entrare:", "Where you could join:"),
  description: localized(
    "Le aree qui sotto sono i punti di ingresso piu naturali per una call. Ognuna ha un linguaggio, un ritmo e un tipo di responsabilita diverso, ma tutte contribuiscono alla stessa esperienza finale.",
    "The areas below are the most natural entry points for a future open call. Each one has its own language, pace and kind of ownership, but they all build the same final experience together.",
  ),
  exploreTeamPageLabel: localized("Apri la pagina team", "Open the team page"),
};

export const joinUsTeamSummaries = {
  "it-website": localized(
    "Garantisce il corretto funzionamento del sito web, lato front-end e back-end, gestisce la web app ufficiale e coordina la newsletter, assicurando un'esperienza utente ottimale. Supporta la regia tecnica durante gli eventi.",
    "Ensures the proper functioning of the website, both front-end and back-end, manages the official web app and coordinates the newsletter, ensuring an optimal user experience. Supports the technical direction during the events.",
  ),
  "planning-event-management": localized(
    "Pianifica e gestisce gli aspetti organizzativi delle conferenze TEDxSapienzaU e di altri eventi dedicati agli studenti Sapienza, anche in collaborazione con gli Sponsor. Si occupa delle richieste di preventivi alle aziende, della ricerca degli spazi per gli eventi e della loro promozione.",
    "Plans and manages the organizational aspects of TEDxSapienzaU conferences and other events dedicated to Sapienza students, also in collaboration with Sponsors. Handles requests for quotes from companies, searches for event spaces and promotes them.",
  ),
  "legal-administrative": localized(
    "Gestisce gli aspetti giuridici e amministrativi degli eventi TEDxSapienzaU. Si occupa della stesura dei contratti, della contabilità, della ricerca dei bandi per il recupero fondi. Garantisce il rispetto delle regole TEDx e delle linee guida dell'Ateneo, insieme alla tutela della privacy e del diritto d'autore.",
    "Manages the legal and administrative aspects of TEDxSapienzaU events. Handles contract drafting, accounting, and the search for funding opportunities. Ensures compliance with TEDx rules and University guidelines, as well as protecting privacy and copyright.",
  ),
  design: localized(
    "Si occupa della progettazione grafica dell’evento. Crea l'identità visiva e grafica, gestisce l’ideazione e la realizzazione di prodotti e allestimenti, assicurando un'esperienza visiva coinvolgente e coerente con il tema dell’evento.",
    "Designs the event's visual identity. Creates and manages the visual and graphic identity, handles the ideation and production of materials and setups, ensuring an engaging visual experience consistent with the event theme.",
  ),
  "speakers-event-curation": localized(
    "Propone i temi degli eventi, seleziona gli Speaker e ne cura i dettagli burocratici e pratici (email, contatti, slides, speech). Si occupa di ogni fase del rapporto con gli Speaker, garantendo attenzione alle loro necessità e assicurando una preparazione ottimale.",
    "Proposes event themes, selects speakers and manages their logistical and administrative details (emails, contacts, slides, speech). Takes care of every phase of the relationship with speakers, ensuring attention to their needs and ensuring optimal preparation.",
  ),
  "human-resources-academy": localized(
    "Gestisce la selezione dei volontari attraverso candidature e colloqui conoscitivi, e ne promuove il benessere promuovendo un ambiente creativo e produttivo. Si occupa inoltre della formazione interna tramite masterclass, create e esposte da membri interni e collaboratori esterni.",
    "Manages volunteer selection through applications and interviews, promotes wellbeing in a creative and productive environment, and organizes internal training through masterclasses led by team members and external collaborators.",
  ),
  "external-relations-sponsor": localized(
    "Gestisce sponsorizzazioni, partnership, patrocini e bandi pubblici. Si occupa della ricerca di aziende, startup, PMI, media, associazioni, enti e istituzioni e della firma dei contratti, coltivando collaborazioni reciprocamente vantaggiose. I fondi raccolti finanziano il progetto e le iniziative del TEDxSapienzaU.",
    "Manages sponsorships, partnerships, patronage and public calls. Searches for companies, startups, SMEs, media, associations, bodies and institutions and handles contract signing, fostering mutually beneficial collaborations. The funds raised finance the project and TEDxSapienzaU initiatives.",
  ),
  "communication-editorial-marketing-media": localized(
    "Si occupa della comunicazione di TEDxSapienzaU. Pianifica e cura la reputazione online, l'awareness e le campagne per coinvolgere il pubblico. Realizza comunicati stampa, newsletter, articoli e contenuti visuali e video, curando l’efficacia dei messaggi. Gestisce la collaborazione con i Media Partner.",
    "Handles TEDxSapienzaU's communication. Plans and manages online reputation, awareness and campaigns to engage the public. Creates press releases, newsletters, articles, visual and video content, ensuring effective messaging. Manages collaboration with Media Partners.",
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
      "Aiuta, ma non è necessaria. Contano molto impegno, costanza, voglia di imparare e il motivo per cui vuoi entrare nel progetto.",
      "It helps, but it is not necessary. Commitment, consistency, willingness to learn and your motivation matter a lot.",
    ),
  },
  {
    id: "time",
    question: localized(
      "Quanto tempo richiede?",
      "How much time does it require?",
    ),
    answer: localized(
      "Dipende dal team e dalla fase dell'anno. Alcuni periodi sono più intensi, ma il lavoro viene organizzato per team e necessità, non lasciato al caso.",
      "It depends on the team and the moment of the year. Some periods are more intense, but work is organized through teams and needs, not left to improvisation.",
    ),
  },
  {
    id: "fit",
    question: localized(
      "Posso usarlo come tirocinio curriculare?",
      "Can I use it as a curricular internship?",
    ),
    answer: localized(
      "Sì, per determinate facoltà. Richiede però un impegno maggiore in termini di ore e responsabilità, concordati con il proprio relatore. Più informazioni in fase di colloquio.",
      "Yes, for certain faculties. However, it requires a greater commitment in terms of hours and responsibilities, agreed with your supervisor. More information during the interview.",
    ),
  },
];

export const joinUsFinalCta = {
  kicker: localized("Restiamo in contatto", "Stay in touch"),
  title: localized(
    "La prossima call passerà da qui.",
    "The next open call will start here.",
  ),
  description: localized(
    "Per ora vi raccontiamo progetto. ",
    "For now this page can explain the project clearly, direct curious people to the teams and gather interest through email and social channels. When you want, we can connect the real form to the main button.",
  ),
  primaryLabel: localized(
    "Candidati appena apriamo * ",
    "Apply when applications open *",
  ),
  descriptionLabel: localized(
    "* Le candidature sono attualmente chiuse, ma non per sempre! Seguici sui social per non perderti le prossime call!",
    "* Applications are currently closed, but not forever! Follow us on social media so you don't miss the next open calls!",
  ),
  secondaryLabel: localized("Scrivici una mail", "Send us an email"),
};

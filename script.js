const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const themeToggle = document.querySelector(".theme-toggle");
const rootEl = document.documentElement;
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

if (storedTheme) {
  rootEl.setAttribute("data-theme", storedTheme);
} else if (prefersDark) {
  rootEl.setAttribute("data-theme", "dark");
}

const updateThemeIcon = () => {
  const icon = document.querySelector(".theme-icon");
  if (!icon) return;
  const current = rootEl.getAttribute("data-theme");
  icon.textContent = current === "dark" ? "☾" : "◐";
};

updateThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = rootEl.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    rootEl.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon();
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

const translations = {
  nl: {
    nav_home: "Home",
    nav_about: "About",
    nav_systems: "Systems",
    nav_work: "Work",
    nav_contact: "Contact",

    hero_eyebrow: "AUTOMOTIVE · SOFTWARE · TRAINING",
    hero_title: "Ik bouw systemen die werkvloeren kalmer maken en resultaten sneller.",
    hero_body:
      "Ik ben Motouzani: automotive software consultant, trainer binnen BMW HQ Belux en founder van DigitalFarmers.be. Ik combineer menselijkheid met scherpe systemen — zodat teams écht vooruitgaan.",
    hero_b1: "⚡ Tech‑savvy",
    hero_b2: "🧠 Systeemdenken",
    hero_b3: "🤝 Menselijk leiderschap",
    cta_primary: "Plan een kennismaking",
    cta_secondary: "Bekijk mijn aanpak",
    hero_badge_1: "BMW CFD Training Center partner",
    hero_badge_2: "4,7/5 tevredenheid",
    panel_label: "SYSTEM BLUEPRINT",
    panel_title: "Operational clarity",
    panel_body: "Workflow, kwaliteit, delivery — één lijn, één systeem.",
    panel_m1: "clarity",
    panel_m2: "flow",
    panel_m3: "feedback",

    value_eyebrow: "GITHUB‑LEVEL CLARITY",
    value_title: "Minimalistisch, technisch, en menselijk",
    value_1_title: "Vertrouwen",
    value_1_body: "Ik maak complex werk begrijpelijk en uitvoerbaar.",
    value_2_title: "Impact",
    value_2_body: "Elke stap is gekoppeld aan resultaat, niet aan ruis.",
    value_3_title: "Rust",
    value_3_body: "Teams bewegen sneller zodra de flow klopt.",

    roles_eyebrow: "ROL & IDENTITEIT",
    roles_title: "Tech‑savvy. Entrepreneur. Leader. Speaker.",
    role_1_title: "Speaker",
    role_1_body: "Duidelijke taal die mensen in beweging zet.",
    role_2_title: "System thinker",
    role_2_body: "Structuur die schaalbaar en menselijk blijft.",
    role_3_title: "Entrepreneur",
    role_3_body: "Oplossingen die bedrijven concreet vooruit brengen.",

    connect_eyebrow: "VERBINDING",
    connect_title: "Een gezicht achter het systeem",
    connect_body:
      "Mensen vertrouwen mensen. Daarom combineer ik precisie met menselijkheid — zodat teams zich veilig voelen om te groeien.",
    connect_1: "Menselijk leiderschap",
    connect_2: "Meetbare verbetering",
    connect_3: "Praktische uitvoering",
    profile_role: "Consultant • Leader • Speaker",
    profile_quote: "“Ik maak systemen die mensen sterker maken — niet andersom.”",

    track_eyebrow: "TRACK RECORD",
    track_title: "Ervaring die vertrouwen creëert",
    partner_label: "Partner",
    metric_1_title: "20+ jaar",
    metric_1_body: "Automotive ervaring, gestart als carrosserier & special painting (2008)",
    metric_2_title: "BMW Jorssen Zuid",
    metric_2_body: "Startte op de vloer, later Teamleader Accident Advisor",
    metric_3_title: "Enterprise + Agency",
    metric_3_body: "Ik optimaliseer workflows bij grote dealers en bouw oplossingen voor tientallen klanten",

    cta_eyebrow: "LET’S BUILD MOMENTUM",
    cta_title: "Klaar om jouw team te versterken?",
    cta_body: "Stuur me een bericht voor consultancy, training of een softwareproject.",
    cta_link: "Ga naar contact →",
    cta_note: "Directe route naar een heldere intake.",

    about_eyebrow: "ABOUT",
    about_title: "Mens, vakman, systeemdenker",
    about_intro:
      "Van carrosserie en special painting tot enterprise consultancy: ik verbind vakmanschap met technologie.",
    about_story_eyebrow: "STORY",
    about_story_title: "Een traject gebouwd op respect voor het werk",
    about_year_1: "2008",
    about_event_1_title: "Carrosserier & special painting",
    about_event_1_body: "Afgestudeerd en meteen aan de slag bij BMW Jorssen Zuid.",
    about_year_2: "2013+",
    about_event_2_title: "Teamleader Accident Advisor",
    about_event_2_body: "Groeide door met focus op kwaliteit en coaching.",
    about_year_3: "Vandaag",
    about_event_3_title: "Consultant, trainer, founder",
    about_event_3_body: "Automotive software consultant, BMW trainer, founder van DigitalFarmers.",
    about_values_eyebrow: "VALUES",
    about_values_title: "Waarom teams zich verbonden voelen",
    about_values_body:
      "Ik werk vanuit vertrouwen, duidelijke communicatie en respect voor de realiteit op de werkvloer.",
    about_value_1_title: "Menselijkheid",
    about_value_1_body: "Ik luister eerst. Pas dan bouw ik een oplossing.",
    about_value_2_title: "Precisie",
    about_value_2_body: "Automotive is detail. Dat respecteer ik in elk proces.",
    about_value_3_title: "Ownership",
    about_value_3_body: "We maken systemen die teams zelf blijven dragen.",

    sys_eyebrow: "SYSTEMS",
    sys_title: "Systeemdenken in automotive operations",
    sys_intro: "Ik ontwerp heldere processen die snelheid en kwaliteit samenbrengen.",
    sys_layers_eyebrow: "FRAMEWORK",
    sys_layers_title: "De 3 lagen van performance",
    sys_layer_1_title: "Clarity",
    sys_layer_1_body: "Iedereen kent de prioriteiten, rollen en impact.",
    sys_layer_2_title: "Flow",
    sys_layer_2_body: "Processen lopen strak, zonder bottlenecks of ruis.",
    sys_layer_3_title: "Feedback",
    sys_layer_3_body: "We meten, leren en verbeteren continu.",
    sys_deliver_eyebrow: "DELIVERABLES",
    sys_deliver_title: "Wat je concreet krijgt",
    sys_deliver_body:
      "Een systeemkaart, duidelijke KPI’s, training, en tooling die het team zelf kan beheren.",
    sys_deliver_1_title: "Workflow blueprint",
    sys_deliver_1_body: "Stap‑voor‑stap visualisatie van het proces.",
    sys_deliver_2_title: "Training & coaching",
    sys_deliver_2_body: "Teams leren het systeem begrijpen én dragen.",
    sys_deliver_3_title: "Digital layer",
    sys_deliver_3_body: "Tools die data, kwaliteit en snelheid verbinden.",

    work_eyebrow: "WORK",
    work_title: "Consultancy, training en agency delivery",
    work_intro: "Ik combineer enterprise consulting met een agency die oplossingen levert.",
    work_services_eyebrow: "SERVICES",
    work_services_title: "Wat we samen kunnen realiseren",
    work_service_1_title: "Consultancy",
    work_service_1_body: "Strategie, roadmap, teamcoaching en kwaliteitsverbetering.",
    work_service_2_title: "Training",
    work_service_2_body: "Hands‑on workshops voor operationele teams en leadership.",
    work_service_3_title: "Build",
    work_service_3_body: "End‑to‑end software trajecten via DigitalFarmers.be.",
    work_impact_eyebrow: "IMPACT",
    work_impact_title: "Resultaten die je voelt op de vloer",
    work_impact_1_title: "Workflow",
    work_impact_1_body: "Snellere doorlooptijd, duidelijk ownership, minder rework.",
    work_impact_2_title: "Kwaliteit",
    work_impact_2_body: "Consistente standaarden die teams zelf blijven borgen.",
    work_impact_3_title: "Digitale flow",
    work_impact_3_body: "Tools die data, teams en klanten verbinden.",

    contact_eyebrow: "CONTACT",
    contact_title: "Laten we samenwerken",
    contact_intro: "Ik reageer snel en praktisch. Kies de route die het beste past.",
    contact_form_eyebrow: "DIRECTE LIJNEN",
    contact_form_title: "Plan een kennismaking",
    contact_form_body: "Consultancy, training of een softwaretraject — we starten met een korte intake.",
    form_name: "Naam",
    form_email: "E-mail",
    form_company: "Bedrijf",
    form_topic: "Waarover?",
    form_opt_1: "Consultancy",
    form_opt_2: "Training",
    form_opt_3: "Agency project",
    form_msg: "Message",
    form_submit: "Verstuur aanvraag",
    form_note: "Ik antwoord meestal binnen 24 uur.",
    contact_channels_eyebrow: "CONTACT OPTIES",
    contact_channels_title: "Snelle routes",
    contact_email_title: "E-mail",
    contact_whatsapp_title: "WhatsApp",
    contact_linkedin_title: "LinkedIn"
  },
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_systems: "Systèmes",
    nav_work: "Services",
    nav_contact: "Contact",

    hero_eyebrow: "AUTOMOBILE · LOGICIEL · FORMATION",
    hero_title: "Je crée des systèmes qui apaisent le terrain et accélèrent les résultats.",
    hero_body:
      "Je suis Motouzani : consultant software dans l’automobile, formateur au BMW HQ Belux et fondateur de DigitalFarmers.be. J’allie l’humain et la précision pour faire avancer les équipes.",
    hero_b1: "⚡ Tech‑savvy",
    hero_b2: "🧠 Pensée système",
    hero_b3: "🤝 Leadership humain",
    cta_primary: "Planifier un échange",
    cta_secondary: "Voir mon approche",
    hero_badge_1: "Partenaire BMW CFD Training Center",
    hero_badge_2: "4,7/5 satisfaction",
    panel_label: "PLAN SYSTÈME",
    panel_title: "Clarté opérationnelle",
    panel_body: "Workflow, qualité, delivery — un seul système.",
    panel_m1: "clarté",
    panel_m2: "flux",
    panel_m3: "feedback",

    value_eyebrow: "CLARTÉ GITHUB‑LEVEL",
    value_title: "Minimaliste, technique et humain",
    value_1_title: "Confiance",
    value_1_body: "Je transforme la complexité en clarté.",
    value_2_title: "Impact",
    value_2_body: "Chaque étape est liée au résultat.",
    value_3_title: "Sérénité",
    value_3_body: "Les équipes avancent sans chaos.",

    roles_eyebrow: "RÔLE & IDENTITÉ",
    roles_title: "Tech‑savvy. Entrepreneur. Leader. Speaker.",
    role_1_title: "Speaker",
    role_1_body: "Une communication claire qui met l’équipe en mouvement.",
    role_2_title: "Pensée système",
    role_2_body: "Des processus plus rapides, cohérents et scalables.",
    role_3_title: "Entrepreneur",
    role_3_body: "Des solutions qui font avancer l’entreprise.",

    connect_eyebrow: "CONNEXION",
    connect_title: "Un visage derrière le système",
    connect_body:
      "Les gens font confiance aux gens. J’allie précision et humanité pour faire grandir les équipes en sécurité.",
    connect_1: "Leadership humain",
    connect_2: "Amélioration mesurable",
    connect_3: "Exécution concrète",
    profile_role: "Consultant • Leader • Speaker",
    profile_quote: "« Je crée des systèmes qui renforcent les personnes — pas l’inverse. »",

    track_eyebrow: "RÉFÉRENCES",
    track_title: "Une expérience qui crée la confiance",
    partner_label: "Partenaire",
    metric_1_title: "20+ ans",
    metric_1_body: "Expérience auto, début carrosserie & peinture spéciale (2008)",
    metric_2_title: "BMW Jorssen Zuid",
    metric_2_body: "Démarré sur le terrain, puis Teamleader Accident Advisor",
    metric_3_title: "Enterprise + Agency",
    metric_3_body: "J’optimise les workflows des grands dealers et construis des solutions pour des dizaines de clients",

    cta_eyebrow: "LET’S BUILD MOMENTUM",
    cta_title: "Prêt à renforcer votre équipe ?",
    cta_body: "Écrivez‑moi pour du conseil, de la formation ou un projet logiciel.",
    cta_link: "Aller au contact →",
    cta_note: "Accès direct à un échange clair.",

    about_eyebrow: "À PROPOS",
    about_title: "Humain, artisan, penseur système",
    about_intro:
      "De la carrosserie et peinture spéciale au conseil enterprise : je relie le métier et la technologie.",
    about_story_eyebrow: "HISTOIRE",
    about_story_title: "Un parcours construit sur le respect du travail",
    about_year_1: "2008",
    about_event_1_title: "Carrosserie & peinture spéciale",
    about_event_1_body: "Diplômé et directement chez BMW Jorssen Zuid.",
    about_year_2: "2013+",
    about_event_2_title: "Teamleader Accident Advisor",
    about_event_2_body: "Évolution avec focus sur qualité et coaching.",
    about_year_3: "Aujourd’hui",
    about_event_3_title: "Consultant, formateur, founder",
    about_event_3_body: "Consultant software auto, formateur BMW, founder DigitalFarmers.",
    about_values_eyebrow: "VALEURS",
    about_values_title: "Pourquoi les équipes se sentent connectées",
    about_values_body:
      "Je travaille avec confiance, communication claire et respect du terrain.",
    about_value_1_title: "Humanité",
    about_value_1_body: "J’écoute d’abord. Puis je construis.",
    about_value_2_title: "Précision",
    about_value_2_body: "L’automobile est détail. Je le respecte.",
    about_value_3_title: "Ownership",
    about_value_3_body: "Des systèmes que l’équipe porte elle‑même.",

    sys_eyebrow: "SYSTÈMES",
    sys_title: "Pensée système dans les opérations auto",
    sys_intro: "Je conçois des processus clairs qui unissent vitesse et qualité.",
    sys_layers_eyebrow: "FRAMEWORK",
    sys_layers_title: "Les 3 couches de performance",
    sys_layer_1_title: "Clarté",
    sys_layer_1_body: "Priorités, rôles et impact sont clairs.",
    sys_layer_2_title: "Flux",
    sys_layer_2_body: "Processus fluides, sans goulots ni bruit.",
    sys_layer_3_title: "Feedback",
    sys_layer_3_body: "Mesure, apprentissage, amélioration continue.",
    sys_deliver_eyebrow: "DELIVERABLES",
    sys_deliver_title: "Ce que vous recevez",
    sys_deliver_body:
      "Une carte système, KPI, formation et outils maîtrisés par l’équipe.",
    sys_deliver_1_title: "Blueprint workflow",
    sys_deliver_1_body: "Visualisation étape par étape.",
    sys_deliver_2_title: "Formation & coaching",
    sys_deliver_2_body: "L’équipe comprend et porte le système.",
    sys_deliver_3_title: "Couche digitale",
    sys_deliver_3_body: "Des outils qui connectent data, qualité et vitesse.",

    work_eyebrow: "WORK",
    work_title: "Conseil, formation et delivery agency",
    work_intro: "J’allie consulting enterprise et agency de delivery.",
    work_services_eyebrow: "SERVICES",
    work_services_title: "Ce que nous réalisons ensemble",
    work_service_1_title: "Conseil",
    work_service_1_body: "Stratégie, roadmap, coaching et qualité.",
    work_service_2_title: "Formation",
    work_service_2_body: "Workshops pratiques pour équipes et leaders.",
    work_service_3_title: "Build",
    work_service_3_body: "Projets logiciels end‑to‑end via DigitalFarmers.be.",
    work_impact_eyebrow: "IMPACT",
    work_impact_title: "Des résultats visibles sur le terrain",
    work_impact_1_title: "Workflow",
    work_impact_1_body: "Délais réduits, ownership clair, moins de rework.",
    work_impact_2_title: "Qualité",
    work_impact_2_body: "Standards cohérents maintenus par l’équipe.",
    work_impact_3_title: "Flux digital",
    work_impact_3_body: "Outils qui relient data, équipes et clients.",

    contact_eyebrow: "CONTACT",
    contact_title: "Travaillons ensemble",
    contact_intro: "Réponse rapide et pragmatique. Choisissez la meilleure voie.",
    contact_form_eyebrow: "LIGNES DIRECTES",
    contact_form_title: "Planifier un échange",
    contact_form_body: "Conseil, formation ou projet logiciel — une courte intake suffit.",
    form_name: "Nom",
    form_email: "E-mail",
    form_company: "Société",
    form_topic: "Sujet",
    form_opt_1: "Conseil",
    form_opt_2: "Formation",
    form_opt_3: "Projet agency",
    form_msg: "Message",
    form_submit: "Envoyer",
    form_note: "Je réponds généralement sous 24h.",
    contact_channels_eyebrow: "OPTIONS",
    contact_channels_title: "Routes rapides",
    contact_email_title: "E-mail",
    contact_whatsapp_title: "WhatsApp",
    contact_linkedin_title: "LinkedIn"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_systems: "Systems",
    nav_work: "Work",
    nav_contact: "Contact",

    hero_eyebrow: "AUTOMOTIVE · SOFTWARE · TRAINING",
    hero_title: "I build systems that calm the floor and speed up results.",
    hero_body:
      "I’m Motouzani: automotive software consultant, trainer at BMW HQ Belux, and founder of DigitalFarmers.be. I combine human leadership with sharp systems so teams actually move.",
    hero_b1: "⚡ Tech‑savvy",
    hero_b2: "🧠 Systems thinking",
    hero_b3: "🤝 Human leadership",
    cta_primary: "Book a quick call",
    cta_secondary: "See my approach",
    hero_badge_1: "BMW CFD Training Center partner",
    hero_badge_2: "4.7/5 satisfaction",
    panel_label: "SYSTEM BLUEPRINT",
    panel_title: "Operational clarity",
    panel_body: "Workflow, quality, delivery — one line, one system.",
    panel_m1: "clarity",
    panel_m2: "flow",
    panel_m3: "feedback",

    value_eyebrow: "GITHUB‑LEVEL CLARITY",
    value_title: "Minimal, technical, and human",
    value_1_title: "Trust",
    value_1_body: "I turn complexity into clarity and direction.",
    value_2_title: "Impact",
    value_2_body: "Every step is tied to outcomes, not noise.",
    value_3_title: "Calm",
    value_3_body: "Teams move faster once the flow is right.",

    roles_eyebrow: "ROLE & IDENTITY",
    roles_title: "Tech‑savvy. Entrepreneur. Leader. Speaker.",
    role_1_title: "Speaker",
    role_1_body: "Clear language that moves teams forward.",
    role_2_title: "System thinker",
    role_2_body: "Structure that scales without losing the human layer.",
    role_3_title: "Entrepreneur",
    role_3_body: "Solutions that push businesses forward.",

    connect_eyebrow: "CONNECTION",
    connect_title: "A face behind the system",
    connect_body:
      "People trust people. I combine precision with humanity so teams feel safe to grow.",
    connect_1: "Human leadership",
    connect_2: "Measurable improvement",
    connect_3: "Practical execution",
    profile_role: "Consultant • Leader • Speaker",
    profile_quote: "“I build systems that make people stronger — not the other way around.”",

    track_eyebrow: "TRACK RECORD",
    track_title: "Experience that builds trust",
    partner_label: "Partner",
    metric_1_title: "20+ years",
    metric_1_body: "Automotive experience, started in bodywork & special painting (2008)",
    metric_2_title: "BMW Jorssen Zuid",
    metric_2_body: "Started on the floor, later Teamleader Accident Advisor",
    metric_3_title: "Enterprise + Agency",
    metric_3_body: "I optimize workflows for major dealers and build solutions for dozens of clients",

    cta_eyebrow: "LET’S BUILD MOMENTUM",
    cta_title: "Ready to strengthen your team?",
    cta_body: "Message me for consulting, training or a software project.",
    cta_link: "Go to contact →",
    cta_note: "Direct route to a clear intake.",

    about_eyebrow: "ABOUT",
    about_title: "Human, craftsman, system thinker",
    about_intro:
      "From bodywork and special painting to enterprise consulting: I connect craft with technology.",
    about_story_eyebrow: "STORY",
    about_story_title: "A journey built on respect for the work",
    about_year_1: "2008",
    about_event_1_title: "Bodywork & special painting",
    about_event_1_body: "Graduated and started at BMW Jorssen Zuid.",
    about_year_2: "2013+",
    about_event_2_title: "Teamleader Accident Advisor",
    about_event_2_body: "Grew with focus on quality and coaching.",
    about_year_3: "Today",
    about_event_3_title: "Consultant, trainer, founder",
    about_event_3_body: "Automotive software consultant, BMW trainer, DigitalFarmers founder.",
    about_values_eyebrow: "VALUES",
    about_values_title: "Why teams feel connected",
    about_values_body: "I work from trust, clear communication, and respect for real operations.",
    about_value_1_title: "Humanity",
    about_value_1_body: "I listen first. Then I build.",
    about_value_2_title: "Precision",
    about_value_2_body: "Automotive is detail. I respect that.",
    about_value_3_title: "Ownership",
    about_value_3_body: "Systems teams can carry themselves.",

    sys_eyebrow: "SYSTEMS",
    sys_title: "Systems thinking in automotive operations",
    sys_intro: "I design clear processes that combine speed and quality.",
    sys_layers_eyebrow: "FRAMEWORK",
    sys_layers_title: "The 3 layers of performance",
    sys_layer_1_title: "Clarity",
    sys_layer_1_body: "Everyone knows priorities, roles, and impact.",
    sys_layer_2_title: "Flow",
    sys_layer_2_body: "Processes run tight, without bottlenecks or noise.",
    sys_layer_3_title: "Feedback",
    sys_layer_3_body: "We measure, learn, and improve continuously.",
    sys_deliver_eyebrow: "DELIVERABLES",
    sys_deliver_title: "What you get",
    sys_deliver_body:
      "A system map, clear KPIs, training, and tools the team can run.",
    sys_deliver_1_title: "Workflow blueprint",
    sys_deliver_1_body: "Step‑by‑step process visualization.",
    sys_deliver_2_title: "Training & coaching",
    sys_deliver_2_body: "Teams understand and carry the system.",
    sys_deliver_3_title: "Digital layer",
    sys_deliver_3_body: "Tools connecting data, quality, and speed.",

    work_eyebrow: "WORK",
    work_title: "Consulting, training, and agency delivery",
    work_intro: "I combine enterprise consulting with an agency that delivers solutions.",
    work_services_eyebrow: "SERVICES",
    work_services_title: "What we can build together",
    work_service_1_title: "Consulting",
    work_service_1_body: "Strategy, roadmap, team coaching, and quality improvement.",
    work_service_2_title: "Training",
    work_service_2_body: "Hands‑on workshops for operations and leadership.",
    work_service_3_title: "Build",
    work_service_3_body: "End‑to‑end software projects via DigitalFarmers.be.",
    work_impact_eyebrow: "IMPACT",
    work_impact_title: "Results you feel on the floor",
    work_impact_1_title: "Workflow",
    work_impact_1_body: "Faster throughput, clear ownership, less rework.",
    work_impact_2_title: "Quality",
    work_impact_2_body: "Consistent standards teams sustain themselves.",
    work_impact_3_title: "Digital flow",
    work_impact_3_body: "Tools connecting data, teams, and customers.",

    contact_eyebrow: "CONTACT",
    contact_title: "Let’s work together",
    contact_intro: "Fast, pragmatic response. Choose the route that fits.",
    contact_form_eyebrow: "DIRECT LINES",
    contact_form_title: "Book a quick call",
    contact_form_body: "Consulting, training, or a software project — we start with a short intake.",
    form_name: "Name",
    form_email: "Email",
    form_company: "Company",
    form_topic: "Topic",
    form_opt_1: "Consulting",
    form_opt_2: "Training",
    form_opt_3: "Agency project",
    form_msg: "Message",
    form_submit: "Send request",
    form_note: "I usually reply within 24 hours.",
    contact_channels_eyebrow: "CONTACT OPTIONS",
    contact_channels_title: "Fast routes",
    contact_email_title: "Email",
    contact_whatsapp_title: "WhatsApp",
    contact_linkedin_title: "LinkedIn"
  }
};

const setLanguage = (lang) => {
  const dict = translations[lang] || translations.nl;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("lang", lang);
};

const storedLang = localStorage.getItem("lang") || "nl";
setLanguage(storedLang);

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

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

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal, .draw").forEach((el) => revealObserver.observe(el));

const translations = {
  nl: {
    nav_home: "Home",
    nav_about: "About",
    nav_systems: "Systems",
    nav_work: "Work",
    nav_contact: "Contact",

    df_badge: "Founding Farmer · DigitalFarmers",
    hero_eyebrow: "AUTOMOTIVE · SOFTWARE · TRAINING",
    hero_title: "Ik bouw systemen die rust brengen op de vloer en snelheid in het resultaat.",
    hero_body: "Automotive software consultant. BMW trainer. Agency founder.",
    hero_b1: "⚡ Tech‑savvy",
    hero_b2: "🧠 Systems",
    hero_b3: "🤝 Leadership",
    cta_primary: "Plan een call",
    cta_secondary: "Bekijk mijn aanpak",
    mono_label: "SYSTEM BLUEPRINT",
    mono_body: "Clarity · Flow · Feedback",

    roles_eyebrow: "ROL & IDENTITEIT",
    roles_title: "Tech‑savvy. Entrepreneur. Leader. Speaker.",
    role_1_title: "🎤 Speaker",
    role_1_body: "Heldere communicatie die teams in beweging zet.",
    role_2_title: "⚙️ System thinker",
    role_2_body: "Structuur die schaalbaar en menselijk blijft.",
    role_3_title: "🚀 Entrepreneur",
    role_3_body: "Oplossingen die bedrijven vooruit brengen.",

    visuals_eyebrow: "VISUAL SIGNALS",
    visuals_title: "Clarity you can see",
    visuals_1: "Flow map",
    visuals_2: "Signal",
    visuals_3: "Delivery",

    track_eyebrow: "TRACK RECORD",
    track_title: "Ervaring die vertrouwen creëert",
    metric_1_title: "20+ jaar",
    metric_1_body: "Automotive experience",
    metric_2_title: "BMW HQ",
    metric_2_body: "Training & excellence",
    metric_3_title: "Agency",
    metric_3_body: "Dozens of clients",

    cta_eyebrow: "LET’S BUILD MOMENTUM",
    cta_title: "Klaar om jouw team te versterken?",
    cta_body: "Korte intake. Duidelijke next step.",
    cta_link: "Book a call →",
    cta_note: "Eigen formulier, geen ruis.",

    about_eyebrow: "ABOUT",
    about_title: "Vakman → Teamlead → Consultant",
    about_intro: "Carrosserie, BMW, systems. Kort en duidelijk.",
    about_signal: "Craft → Systems",
    about_p1: "2008 · Carrosserie",
    about_p2: "BMW · Teamlead",
    about_p3: "Consulting · Systems",

    sys_eyebrow: "SYSTEMS",
    sys_title: "Clarity · Flow · Feedback",
    sys_intro: "Drie woorden. Eén systeem.",
    sys_signal: "System grid",
    sys_p1: "Clarity = ownership",
    sys_p2: "Flow = snelheid",
    sys_p3: "Feedback = groei",

    work_eyebrow: "WORK",
    work_title: "Consult · Train · Build",
    work_intro: "Kort, direct, resultaat.",
    work_signal: "Delivery pipeline",
    work_p1: "Consulting",
    work_p2: "Training",
    work_p3: "Delivery",

    contact_eyebrow: "CONTACT",
    contact_title: "Book a call",
    contact_intro: "Korte intake. Heldere volgende stap.",
    contact_form_eyebrow: "INTAKE",
    contact_form_title: "Vertel kort wat je nodig hebt",
    contact_form_body: "Ik antwoord snel met een concrete volgende stap.",
    form_name: "Naam",
    form_email: "E-mail",
    form_company: "Bedrijf",
    form_topic: "Waarover?",
    form_opt_1: "Consultancy",
    form_opt_2: "Training",
    form_opt_3: "Agency project",
    form_msg: "Message",
    form_submit: "Send →",
    form_note: "Ik antwoord meestal binnen 24 uur."
  },
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_systems: "Systèmes",
    nav_work: "Services",
    nav_contact: "Contact",

    df_badge: "Founding Farmer · DigitalFarmers",
    hero_eyebrow: "AUTOMOBILE · LOGICIEL · FORMATION",
    hero_title: "Je crée des systèmes qui apaisent le terrain et accélèrent les résultats.",
    hero_body: "Consultant auto. Formateur BMW. Founder agency.",
    hero_b1: "⚡ Tech‑savvy",
    hero_b2: "🧠 Systems",
    hero_b3: "🤝 Leadership",
    cta_primary: "Planifier un call",
    cta_secondary: "Voir mon approche",
    mono_label: "SYSTEM BLUEPRINT",
    mono_body: "Clarity · Flow · Feedback",

    roles_eyebrow: "RÔLE & IDENTITÉ",
    roles_title: "Tech‑savvy. Entrepreneur. Leader. Speaker.",
    role_1_title: "🎤 Speaker",
    role_1_body: "Une communication claire qui met l’équipe en mouvement.",
    role_2_title: "⚙️ System thinker",
    role_2_body: "Structure scalable et humaine.",
    role_3_title: "🚀 Entrepreneur",
    role_3_body: "Des solutions qui font avancer l’entreprise.",

    visuals_eyebrow: "VISUAL SIGNALS",
    visuals_title: "Clarté visible",
    visuals_1: "Flow map",
    visuals_2: "Signal",
    visuals_3: "Delivery",

    track_eyebrow: "RÉFÉRENCES",
    track_title: "Expérience qui crée la confiance",
    metric_1_title: "20+ ans",
    metric_1_body: "Automotive experience",
    metric_2_title: "BMW HQ",
    metric_2_body: "Training & excellence",
    metric_3_title: "Agency",
    metric_3_body: "Dozens of clients",

    cta_eyebrow: "LET’S BUILD MOMENTUM",
    cta_title: "Prêt à renforcer votre équipe ?",
    cta_body: "Intake courte. Étape claire.",
    cta_link: "Book a call →",
    cta_note: "Formulaire propre, sans bruit.",

    about_eyebrow: "À PROPOS",
    about_title: "Artisan → Teamlead → Consultant",
    about_intro: "Carrosserie, BMW, systems. Simple.",
    about_signal: "Craft → Systems",
    about_p1: "2008 · Carrosserie",
    about_p2: "BMW · Teamlead",
    about_p3: "Consulting · Systems",

    sys_eyebrow: "SYSTÈMES",
    sys_title: "Clarity · Flow · Feedback",
    sys_intro: "Trois mots. Un système.",
    sys_signal: "System grid",
    sys_p1: "Clarity = ownership",
    sys_p2: "Flow = vitesse",
    sys_p3: "Feedback = croissance",

    work_eyebrow: "WORK",
    work_title: "Consult · Train · Build",
    work_intro: "Court, direct, résultat.",
    work_signal: "Delivery pipeline",
    work_p1: "Consulting",
    work_p2: "Training",
    work_p3: "Delivery",

    contact_eyebrow: "CONTACT",
    contact_title: "Book a call",
    contact_intro: "Intake courte. Étape claire.",
    contact_form_eyebrow: "INTAKE",
    contact_form_title: "Dites l’essentiel",
    contact_form_body: "Je réponds vite avec un next step.",
    form_name: "Nom",
    form_email: "E-mail",
    form_company: "Société",
    form_topic: "Sujet",
    form_opt_1: "Consultancy",
    form_opt_2: "Training",
    form_opt_3: "Agency project",
    form_msg: "Message",
    form_submit: "Send →",
    form_note: "Réponse sous 24h."
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_systems: "Systems",
    nav_work: "Work",
    nav_contact: "Contact",

    df_badge: "Founding Farmer · DigitalFarmers",
    hero_eyebrow: "AUTOMOTIVE · SOFTWARE · TRAINING",
    hero_title: "I build systems that calm the floor and speed up results.",
    hero_body: "Automotive consultant. BMW trainer. Agency founder.",
    hero_b1: "⚡ Tech‑savvy",
    hero_b2: "🧠 Systems",
    hero_b3: "🤝 Leadership",
    cta_primary: "Book a call",
    cta_secondary: "See my approach",
    mono_label: "SYSTEM BLUEPRINT",
    mono_body: "Clarity · Flow · Feedback",

    roles_eyebrow: "ROLE & IDENTITY",
    roles_title: "Tech‑savvy. Entrepreneur. Leader. Speaker.",
    role_1_title: "🎤 Speaker",
    role_1_body: "Clear language that moves teams forward.",
    role_2_title: "⚙️ System thinker",
    role_2_body: "Structure that scales without losing the human layer.",
    role_3_title: "🚀 Entrepreneur",
    role_3_body: "Solutions that push businesses forward.",

    visuals_eyebrow: "VISUAL SIGNALS",
    visuals_title: "Clarity you can see",
    visuals_1: "Flow map",
    visuals_2: "Signal",
    visuals_3: "Delivery",

    track_eyebrow: "TRACK RECORD",
    track_title: "Experience that builds trust",
    metric_1_title: "20+ years",
    metric_1_body: "Automotive experience",
    metric_2_title: "BMW HQ",
    metric_2_body: "Training & excellence",
    metric_3_title: "Agency",
    metric_3_body: "Dozens of clients",

    cta_eyebrow: "LET’S BUILD MOMENTUM",
    cta_title: "Ready to strengthen your team?",
    cta_body: "Short intake. Clear next step.",
    cta_link: "Book a call →",
    cta_note: "Own form, zero noise.",

    about_eyebrow: "ABOUT",
    about_title: "Craft → Teamlead → Consultant",
    about_intro: "Bodywork, BMW, systems. Simple.",
    about_signal: "Craft → Systems",
    about_p1: "2008 · Bodywork",
    about_p2: "BMW · Teamlead",
    about_p3: "Consulting · Systems",

    sys_eyebrow: "SYSTEMS",
    sys_title: "Clarity · Flow · Feedback",
    sys_intro: "Three words. One system.",
    sys_signal: "System grid",
    sys_p1: "Clarity = ownership",
    sys_p2: "Flow = speed",
    sys_p3: "Feedback = growth",

    work_eyebrow: "WORK",
    work_title: "Consult · Train · Build",
    work_intro: "Short, direct, results.",
    work_signal: "Delivery pipeline",
    work_p1: "Consulting",
    work_p2: "Training",
    work_p3: "Delivery",

    contact_eyebrow: "CONTACT",
    contact_title: "Book a call",
    contact_intro: "Short intake. Clear next step.",
    contact_form_eyebrow: "INTAKE",
    contact_form_title: "Tell me what you need",
    contact_form_body: "I reply fast with a concrete next step.",
    form_name: "Name",
    form_email: "Email",
    form_company: "Company",
    form_topic: "Topic",
    form_opt_1: "Consulting",
    form_opt_2: "Training",
    form_opt_3: "Agency project",
    form_msg: "Message",
    form_submit: "Send →",
    form_note: "I usually reply within 24 hours."
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

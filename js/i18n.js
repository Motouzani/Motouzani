/* NL/EN dictionary + toggle. NL is bron in de markup, EN overschrijft. */
(() => {
  const DICT = {
    nl: {
      "nav.cta": "Praat met mij",
      "hero.eyebrow": "Carya consultant · Digital Farmers founder",
      "hero.t1": "Ik bouw",
      "hero.t2": "systemen.",
      "hero.sub":
        "Overdag scherp ik workflows aan bij de grootste dealergroepen, als consultant bij Carya, de marktleider in DMS voor automotive. Daarnaast bouw ik met Digital Farmers software die zichzelf draait. Twee werelden, één signatuur.",
      "hero.cta1": "Start de reis",
      "hero.cta2": "Bekijk wat draait",
      "hero.scroll": "scroll om het systeem te lezen",
      "ch1.label": "de vloer · 2008",
      "ch1.title": "Ik leerde kwaliteit met mijn handen.",
      "ch1.text":
        "Carrosserie en special painting. Daar zie je meteen wat klopt en wat niet: een laklaag liegt nooit. Ik groeide door tot Teamleader Accident Advisor bij BMW Jorssen Zuid en leerde leiden vanuit de praktijk, niet vanuit een vergaderzaal.",
      "ch1.p1": "carrosserie & special painting",
      "ch1.p2": "teamleader accident advisor",
      "ch1.p3": "training in BMW HQ Belux",
      "ch2.label": "het systeem · Carya",
      "ch2.title": "Ik leerde hoe een dealer ademt in data.",
      "ch2.text":
        "Vandaag ben ik consultant bij Carya, de marktleider in DMS voor automotive. Ik sta bij de grootste dealergroepen en lees hun volledige flow: van intake tot facturatie. Waar het knelt, maak ik het meetbaar. Waar het klopt, maak ik het sneller.",
      "ch3.label": "de code · Digital Farmers",
      "ch3.title": "Toen bouwde ik mijn eigen technologie.",
      "ch3.text":
        "Digital Farmers is mijn agency. Wij bouwen websites, platformen en automatisering voor bedrijven die willen schalen zonder chaos. Eigen CMS, eigen tooling, eigen AI. Ik ontwerp de visie, mijn team en mijn systemen leveren de uitvoering.",
      "ch3.p1": "multi-tenant CMS & platformen",
      "ch3.p2": "automatisering die zichzelf draait",
      "ch3.p3": "beveiligd tot op audit-niveau",
      "farm.label": "04 · de farm",
      "farm.title": "Systemen die vandaag draaien.",
      "farm.sub":
        "Geen moodboard. Elk van deze projecten is gebouwd, gelanceerd en wordt beheerd door Digital Farmers. Verschillende sectoren, telkens hetzelfde principe: een systeem dat klopt en zichzelf draagt.",
      "farm.live": "LIVE",
      "farm.s1": "interieur & maatwerk",
      "farm.d1": "Premium merksite met moodboards en een volledig eigen platform.",
      "farm.s2": "zorg",
      "farm.d2": "Zorgplatform met eigen beheeromgeving: de klant bewerkt alles zelf.",
      "farm.s3": "events & horeca",
      "farm.d3": "Volledige technische overname en modernisering, zonder downtime.",
      "farm.s4": "retail & food",
      "farm.d4": "Meertalige merksite voor artisanale chocolade, verkopen en vertellen tegelijk.",
      "farm.s5": "verzekeringen",
      "farm.d5": "Leadgeneratie met beveiligde formulieren en wekelijkse rapportering.",
      "farm.s6": "eigen producten",
      "farm.d6": "Eigen software: CMS, kassa, AI-assistenten en zorgtools. Eén ecosysteem.",
      "method.label": "de methode",
      "method.title": "Vijf bewegingen. Eén loop.",
      "method.sub":
        "Elk traject loopt door dezelfde cyclus. Niet één keer, maar telkens opnieuw. Zo blijft een systeem leven in plaats van te verslijten.",
      "method.loop": "loop ∞",
      "method.s1": "Diagnose",
      "method.s1t": "We lezen het systeem zoals het echt werkt, niet zoals het ooit ontworpen is.",
      "method.s2": "Design",
      "method.s2t": "We herschrijven de flow en maken keuzes die teams begrijpen.",
      "method.s3": "Activatie",
      "method.s3t": "Training, ritme en rituelen zodat nieuw gedrag blijft hangen.",
      "method.s4": "Digitalisering",
      "method.s4t": "Software die de flow versterkt in plaats van vertraagt.",
      "method.s5": "Momentum",
      "method.s5t": "Meetpunten, ownership en feedback loops die groei dragen.",
      "proof.label": "track record",
      "proof.title": "Cijfers die niet liegen.",
      "proof.c1": "jaar automotive, gestart in carrosserie en special painting",
      "proof.c2": "consultant bij Carya, de marktleider in DMS voor automotive",
      "proof.c3": "systemen gebouwd en beheerd via Digital Farmers",
      "proof.c4": "signatuur. Er is maar één Motouzani.",
      "proof.q1": '"We voelen eindelijk richting en rust tegelijk. Het team beweegt sneller zonder extra druk."',
      "proof.q1m": "operationeel manager",
      "proof.q2": '"Zijn kracht is dat hij het hele systeem leest: mensen, data en gedrag."',
      "proof.q2m": "training lead",
      "contact.label": "laatste hoofdstuk · het jouwe",
      "contact.title": "Klaar om jouw systeem te bouwen?",
      "contact.sub":
        "Consultancy, training of een digitaal project: geef me jouw uitdaging en ik toon je hoe het Motouzani-effect werkt in jouw realiteit. Reactie binnen 24 tot 48 uur.",
      "contact.direct": "liever direct?",
      "form.name": "naam",
      "form.namePh": "Jouw naam",
      "form.email": "e-mail",
      "form.topic": "waarover",
      "form.o1": "Consultancy",
      "form.o2": "Training",
      "form.o3": "Digitaal project",
      "form.msg": "jouw uitdaging",
      "form.msgPh": "Waar wil je dat het sneller, beter of duidelijker wordt?",
      "form.send": "Verstuur aanvraag",
      "form.sending": "Versturen…",
      "form.ok": "Bedankt! Je aanvraag is verstuurd. Je hoort snel van me.",
      "form.err": "Versturen mislukte. Mail me gerust rechtstreeks op mo@digitalfarmers.be.",
    },
    en: {
      "nav.cta": "Talk to me",
      "hero.eyebrow": "Carya consultant · Digital Farmers founder",
      "hero.t1": "I build",
      "hero.t2": "systems.",
      "hero.sub":
        "By day I sharpen workflows at the largest dealer groups as a consultant at Carya, the market leader in automotive DMS. Alongside that, I build software that runs itself with Digital Farmers. Two worlds, one signature.",
      "hero.cta1": "Start the journey",
      "hero.cta2": "See what's running",
      "hero.scroll": "scroll to read the system",
      "ch1.label": "the floor · 2008",
      "ch1.title": "I learned quality with my hands.",
      "ch1.text":
        "Bodywork and special painting. There you instantly see what works and what doesn't: a paint layer never lies. I grew into Teamleader Accident Advisor at BMW Jorssen Zuid and learned to lead from practice, not from a meeting room.",
      "ch1.p1": "bodywork & special painting",
      "ch1.p2": "teamleader accident advisor",
      "ch1.p3": "training at BMW HQ Belux",
      "ch2.label": "the system · Carya",
      "ch2.title": "I learned how a dealer breathes in data.",
      "ch2.text":
        "Today I am a consultant at Carya, the market leader in automotive DMS. I work with the largest dealer groups and read their entire flow: from intake to invoicing. Where it jams, I make it measurable. Where it works, I make it faster.",
      "ch3.label": "the code · Digital Farmers",
      "ch3.title": "Then I built my own technology.",
      "ch3.text":
        "Digital Farmers is my agency. We build websites, platforms and automation for companies that want to scale without chaos. Own CMS, own tooling, own AI. I design the vision, my team and my systems deliver.",
      "ch3.p1": "multi-tenant CMS & platforms",
      "ch3.p2": "automation that runs itself",
      "ch3.p3": "secured to audit level",
      "farm.label": "04 · the farm",
      "farm.title": "Systems running today.",
      "farm.sub":
        "No moodboard. Every one of these projects is built, launched and managed by Digital Farmers. Different sectors, always the same principle: a system that works and carries itself.",
      "farm.live": "LIVE",
      "farm.s1": "interior & custom work",
      "farm.d1": "Premium brand site with moodboards and a fully owned platform.",
      "farm.s2": "healthcare",
      "farm.d2": "Care platform with its own admin: the client edits everything.",
      "farm.s3": "events & hospitality",
      "farm.d3": "Full technical takeover and modernisation, without downtime.",
      "farm.s4": "retail & food",
      "farm.d4": "Multilingual brand site for artisan chocolate, selling and storytelling at once.",
      "farm.s5": "insurance",
      "farm.d5": "Lead generation with secured forms and weekly reporting.",
      "farm.s6": "own products",
      "farm.d6": "Own software: CMS, POS, AI assistants and care tools. One ecosystem.",
      "method.label": "the method",
      "method.title": "Five moves. One loop.",
      "method.sub":
        "Every project runs through the same cycle. Not once, but again and again. That is how a system stays alive instead of wearing out.",
      "method.loop": "loop ∞",
      "method.s1": "Diagnosis",
      "method.s1t": "We read the system as it really works, not as it was once designed.",
      "method.s2": "Design",
      "method.s2t": "We rewrite the flow and make choices teams understand.",
      "method.s3": "Activation",
      "method.s3t": "Training, rhythm and rituals so new behaviour sticks.",
      "method.s4": "Digitalisation",
      "method.s4t": "Software that strengthens the flow instead of slowing it down.",
      "method.s5": "Momentum",
      "method.s5t": "Metrics, ownership and feedback loops that carry growth.",
      "proof.label": "track record",
      "proof.title": "Numbers that don't lie.",
      "proof.c1": "years in automotive, started in bodywork and special painting",
      "proof.c2": "consultant at Carya, the market leader in automotive DMS",
      "proof.c3": "systems built and managed through Digital Farmers",
      "proof.c4": "signature. There is only one Motouzani.",
      "proof.q1": '"We finally feel direction and calm at the same time. The team moves faster without extra pressure."',
      "proof.q1m": "operations manager",
      "proof.q2": '"His strength is that he reads the whole system: people, data and behaviour."',
      "proof.q2m": "training lead",
      "contact.label": "final chapter · yours",
      "contact.title": "Ready to build your system?",
      "contact.sub":
        "Consultancy, training or a digital project: give me your challenge and I will show you how the Motouzani effect works in your reality. Reply within 24 to 48 hours.",
      "contact.direct": "prefer direct?",
      "form.name": "name",
      "form.namePh": "Your name",
      "form.email": "email",
      "form.topic": "about",
      "form.o1": "Consultancy",
      "form.o2": "Training",
      "form.o3": "Digital project",
      "form.msg": "your challenge",
      "form.msgPh": "Where do you want things faster, better or clearer?",
      "form.send": "Send request",
      "form.sending": "Sending…",
      "form.ok": "Thanks! Your request has been sent. You will hear from me soon.",
      "form.err": "Sending failed. Feel free to mail me directly at mo@digitalfarmers.be.",
    },
  };

  const getLang = () => localStorage.getItem("lang") || "nl";

  const apply = (lang) => {
    const dict = DICT[lang] || DICT.nl;
    document.documentElement.lang = lang === "en" ? "en" : "nl";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll(".lang-opt").forEach((opt) => {
      opt.classList.toggle("active", opt.dataset.langOpt === lang);
    });
  };

  window.MOTO_I18N = {
    t: (key) => (DICT[getLang()] || DICT.nl)[key] || key,
    lang: getLang,
  };

  document.addEventListener("DOMContentLoaded", () => {
    apply(getLang());
    const toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const next = getLang() === "nl" ? "en" : "nl";
        localStorage.setItem("lang", next);
        apply(next);
      });
    }
  });
})();

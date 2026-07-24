/* NL/EN dictionary + toggle. NL is bron in de markup, EN overschrijft. */
(() => {
  const DICT = {
    nl: {
      "nav.cta": "Breng het binnen",

      "hero.eyebrow": "register / sectorpioniers / 2008 tot 2126",
      "hero.t1": "Jouw sector,",
      "hero.t2": "100 jaar vooruit.",
      "hero.stamp": "vandaag gebouwd, vandaag live",
      "hero.now": "vandaag",
      "hero.sub":
        "Elke rij in het register hieronder kwam binnen met iets dat vastliep: een proces, een platform, een heel bedrijf. Wat vertrok, is een systeem dat verder denkt dan de markt. Gebouwd om decennia te dragen, niet om een template te vullen.",
      "hero.cta1": "Breng het binnen",
      "hero.cta2": "Open het register",
      "hero.scroll": "scroll: het register opent",

      "ch1.label": "de vloer · 2008",
      "ch1.title": "Een laklaag liegt nooit.",
      "ch1.text":
        "Kwaliteit leer je niet uit een handboek. In de carrosserie, tussen special painting en schadeherstel, zie je meteen wat klopt en wat niet. Wie daar heeft leren kijken, ziet in elk bedrijf binnen het uur waar het wringt.",
      "ch1.p1": "carrosserie & special painting",
      "ch1.p2": "teamleader accident advisor",
      "ch1.p3": "training in BMW HQ Belux",

      "ch2.label": "het systeem · automotive",
      "ch2.title": "Een dealer die goed draait, hoor je niet.",
      "ch2.text":
        "Twintig jaar in de automotive, vandaag als software consultant bij Carya, tussen de grootste dealergroepen van het land. Elke flow van intake tot facturatie vertelt hetzelfde verhaal: waar data stokt, stokt het bedrijf. Meetbaar maken is het halve werk. De rest is ritme.",

      "ch3.label": "de code · Digital Farmers",
      "ch3.title": "Software hoort te werken terwijl jij slaapt.",
      "ch3.text":
        "Daarom bestaat Digital Farmers: eigen team, eigen CMS, eigen AI-tooling. Websites, platformen en automatisering voor bedrijven die willen groeien zonder chaos. Geen standaardpakketten, wel systemen die op maat gebouwd zijn en zichzelf draaien.",
      "ch3.p1": "multi-tenant CMS & platformen",
      "ch3.p2": "automatisering die zichzelf draait",
      "ch3.p3": "beveiligd tot op audit-niveau",

      "farm.label": "04 · het register",
      "farm.title": "Sectorpioniers.",
      "farm.sub":
        "Geen selectie van paradepaardjes: dit is het volledige register. Elke rij is een bedrijf dat in zijn sector een stap zette die de rest nog moet maken. Klik door en controleer zelf, alles draait vandaag.",

      "reg.h1": "sector",
      "reg.h2": "naam",
      "reg.h3": "de zet",
      "reg.h4": "status",
      "reg.live": "LIVE",
      "reg.managed": "IN BEHEER",
      "reg.since": "SINDS 2008",
      "reg.s1": "houtbouw & interieur",
      "reg.m1": "WordPress eruit, eigen platform erin: verkoopt terwijl het atelier draait.",
      "reg.s2": "zorg",
      "reg.m2": "Eerste praktijk in haar sector met een platform dat ze volledig zelf beheert.",
      "reg.s3": "events & feestzalen",
      "reg.m3": "Verouderde techniek volledig gered en gemoderniseerd, zonder een minuut downtime.",
      "reg.s4": "chocolade",
      "reg.m4": "Tweetalig verkopen en vertellen, zonder vertaalbureau of tussenlaag.",
      "reg.s5": "patisserie & retail",
      "reg.m5": "Twee merken op een systeem: dubbele uitstraling, half het onderhoud.",
      "reg.s6": "verzekeringen",
      "reg.m6": "Digitale schadeflow met tweestapsverificatie: dossiers zonder papier.",
      "reg.s7": "beauty & wellness",
      "reg.m7": "Omzet meetbaar gemaakt: verkoop en statistieken terug in eigen huis.",
      "reg.s8": "verhuur",
      "reg.m8": "Aanvraagflow herbouwd zodat geen enkele aanvraag nog verloren loopt.",
      "reg.s9": "hr & psychologie",
      "reg.m9": "Psychometrische tests op eigen domein, migratie zonder dataverlies.",
      "reg.s10": "vastgoed",
      "reg.m10": "Eigen verhuurkanaal: nul commissie aan externe platformen.",
      "reg.s11": "automotive",
      "reg.n11": "94+ dealerbedrijven",
      "reg.m11":
        "Twintig jaar flows van intake tot facturatie, vandaag als consultant bij Carya, marktleider in DMS.",
      "reg.s12": "eigen software",
      "reg.m12": "TinyCare, TinyBot, eigen CMS en AI-tooling: gebouwd, niet gehuurd.",
      "reg.s13": "digitaal",
      "reg.m13": "Het moederschip: eigen team, eigen servers, eigen standaarden.",
      "reg.f1": "register wordt bijgehouden, niet opgesmukt",
      "reg.f2": "13 rijen · 12 sectoren · 0 templates",

      "method.label": "05 · de methode",
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

      "proof.label": "06 · track record",
      "proof.title": "Cijfers die niet liegen.",
      "proof.c1": "jaar automotive, gestart in carrosserie en special painting",
      "proof.c2": "sectoren in het register, elk met een eigen pioniersstap",
      "proof.c3": "systemen gebouwd en beheerd via Digital Farmers",
      "proof.c4": "signatuur. Er is maar één Motouzani.",
      "proof.q1":
        "Geen verzonnen testimonials op deze pagina. Het register staat hierboven en is publiek: klik door, kijk zelf, oordeel zelf.",
      "proof.q1m": "bewijs boven beloftes",

      "contact.label": "07 · jouw rij in het register",
      "contact.title": "Wat mag hier binnenkomen?",
      "contact.sub":
        "Een proces dat sleept, een systeem dat ontbreekt, of gewoon een gesprek dat je al even wil voeren. Alles mag binnen. Reactie binnen 24 tot 48 uur.",
      "contact.direct": "liever rechtstreeks?",

      "form.name": "naam",
      "form.namePh": "Jouw naam",
      "form.email": "e-mail",
      "form.topic": "waarover",
      "form.o1": "Consultancy",
      "form.o2": "Training",
      "form.o3": "Digitaal project",
      "form.msg": "wat zit er vast, of wat wil je bespreken?",
      "form.msgPh": "Vertel het zoals je het aan een collega zou vertellen.",
      "form.send": "Verstuur aanvraag",
      "form.sending": "Versturen...",
      "form.ok": "Goed ontvangen. Je hoort binnen 24 tot 48 uur van Mo.",
      "form.err": "Versturen lukte niet. Mail rechtstreeks naar contact@motouzani.com.",

      "footer.df": "Designed & developed by",
    },

    en: {
      "nav.cta": "Bring it in",

      "hero.eyebrow": "register / sector pioneers / 2008 to 2126",
      "hero.t1": "Your sector,",
      "hero.t2": "100 years ahead.",
      "hero.stamp": "built today, live today",
      "hero.now": "today",
      "hero.sub":
        "Every row in the register below came in with something stuck: a process, a platform, an entire business. What left is a system that thinks further than the market. Built to carry decades, not to fill a template.",
      "hero.cta1": "Bring it in",
      "hero.cta2": "Open the register",
      "hero.scroll": "scroll: the register opens",

      "ch1.label": "the floor · 2008",
      "ch1.title": "A paint layer never lies.",
      "ch1.text":
        "You do not learn quality from a manual. In the body shop, between special painting and collision repair, you instantly see what is right and what is not. Anyone who learned to look there spots what is off in any business within the hour.",
      "ch1.p1": "body shop & special painting",
      "ch1.p2": "team leader accident advisor",
      "ch1.p3": "training at BMW HQ Belux",

      "ch2.label": "the system · automotive",
      "ch2.title": "A dealership that runs well makes no noise.",
      "ch2.text":
        "Twenty years in automotive, today as software consultant at Carya, among the country's largest dealer groups. Every flow from intake to invoicing tells the same story: where data stalls, the business stalls. Making it measurable is half the work. The rest is rhythm.",

      "ch3.label": "the code · Digital Farmers",
      "ch3.title": "Software should work while you sleep.",
      "ch3.text":
        "That is why Digital Farmers exists: own team, own CMS, own AI tooling. Websites, platforms and automation for businesses that want to grow without chaos. No off-the-shelf bundles, but tailor-made systems that run themselves.",
      "ch3.p1": "multi-tenant CMS & platforms",
      "ch3.p2": "automation that runs itself",
      "ch3.p3": "secured to audit level",

      "farm.label": "04 · the register",
      "farm.title": "Sector pioneers.",
      "farm.sub":
        "No showcase selection: this is the full register. Every row is a business that took a step its sector has yet to make. Click through and verify it yourself, everything runs today.",

      "reg.h1": "sector",
      "reg.h2": "name",
      "reg.h3": "the move",
      "reg.h4": "status",
      "reg.live": "LIVE",
      "reg.managed": "MANAGED",
      "reg.since": "SINCE 2008",
      "reg.s1": "timber & interiors",
      "reg.m1": "WordPress out, own platform in: it sells while the workshop runs.",
      "reg.s2": "healthcare",
      "reg.m2": "First practice in its sector with a platform it fully manages itself.",
      "reg.s3": "events & venues",
      "reg.m3": "Outdated tech fully rescued and modernised, without a minute of downtime.",
      "reg.s4": "chocolate",
      "reg.m4": "Selling and storytelling in two languages, without agencies in between.",
      "reg.s5": "patisserie & retail",
      "reg.m5": "Two brands on one system: double the presence, half the upkeep.",
      "reg.s6": "insurance",
      "reg.m6": "Digital claims flow with two-step verification: files without paper.",
      "reg.s7": "beauty & wellness",
      "reg.m7": "Revenue made measurable: sales and statistics back in-house.",
      "reg.s8": "rental",
      "reg.m8": "Request flow rebuilt so not a single lead gets lost again.",
      "reg.s9": "hr & psychology",
      "reg.m9": "Psychometric testing on its own domain, migrated without data loss.",
      "reg.s10": "real estate",
      "reg.m10": "Own rental channel: zero commission to external platforms.",
      "reg.s11": "automotive",
      "reg.n11": "94+ dealerships",
      "reg.m11":
        "Twenty years of flows from intake to invoicing, today as consultant at Carya, market leader in DMS.",
      "reg.s12": "own software",
      "reg.m12": "TinyCare, TinyBot, own CMS and AI tooling: built, not rented.",
      "reg.s13": "digital",
      "reg.m13": "The mothership: own team, own servers, own standards.",
      "reg.f1": "the register is maintained, not polished",
      "reg.f2": "13 rows · 12 sectors · 0 templates",

      "method.label": "05 · the method",
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

      "proof.label": "06 · track record",
      "proof.title": "Numbers that do not lie.",
      "proof.c1": "years in automotive, starting in body work and special painting",
      "proof.c2": "sectors in the register, each with its own pioneering step",
      "proof.c3": "systems built and managed through Digital Farmers",
      "proof.c4": "signature. There is only one Motouzani.",
      "proof.q1":
        "No invented testimonials on this page. The register is right above and it is public: click through, look for yourself, judge for yourself.",
      "proof.q1m": "proof over promises",

      "contact.label": "07 · your row in the register",
      "contact.title": "What may come in here?",
      "contact.sub":
        "A process that drags, a system that is missing, or simply a conversation you have been meaning to have. Everything is welcome. Reply within 24 to 48 hours.",
      "contact.direct": "prefer direct?",

      "form.name": "name",
      "form.namePh": "Your name",
      "form.email": "email",
      "form.topic": "about",
      "form.o1": "Consultancy",
      "form.o2": "Training",
      "form.o3": "Digital project",
      "form.msg": "what is stuck, or what would you like to discuss?",
      "form.msgPh": "Tell it the way you would tell a colleague.",
      "form.send": "Send request",
      "form.sending": "Sending...",
      "form.ok": "Received. You will hear from Mo within 24 to 48 hours.",
      "form.err": "Sending failed. Email contact@motouzani.com directly.",

      "footer.df": "Designed & developed by",
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

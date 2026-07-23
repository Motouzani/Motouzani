/* NL/EN dictionary + toggle. NL is bron in de markup, EN overschrijft. */
(() => {
  const DICT = {
    nl: {
      "nav.cta": "Praat met mij",
      "hero.eyebrow": "systemen · automotive · digitaal",
      "hero.t1": "Loopt het vast?",
      "hero.t2": "Breng het binnen.",
      "hero.sub":
        "Wagens, techniek, processen, hele bedrijven: al twintig jaar komt hier binnen wat blokkeert. Wat terugkeert is een systeem dat zichzelf draait, en maximaal van jou wegneemt.",
      "hero.cta1": "Kom binnen",
      "hero.cta2": "Bekijk wat draait",
      "hero.scroll": "scroll om het systeem te lezen",
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
      "farm.label": "04 · de farm",
      "farm.title": "Systemen die vandaag draaien.",
      "farm.sub":
        "Geen beloftes, geen moodboards. Deze systemen zijn gebouwd, gelanceerd en draaien elke dag voor echte bedrijven. Verschillende sectoren, telkens hetzelfde principe: een systeem dat klopt en zichzelf draagt.",
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
      "method.s1t": "Het systeem lezen zoals het echt werkt, niet zoals het ooit ontworpen is.",
      "method.s2": "Design",
      "method.s2t": "De flow herschrijven met keuzes die teams begrijpen.",
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
      "form.sending": "Versturen…",
      "form.ok": "Goed ontvangen. Je krijgt meteen een bevestiging in je mailbox.",
      "form.err": "Versturen mislukte. Mail gerust rechtstreeks naar contact@motouzani.com.",
      "footer.df": "Designed & developed by",
    },
    en: {
      "nav.cta": "Talk to me",
      "hero.eyebrow": "systems · automotive · digital",
      "hero.t1": "Something stuck?",
      "hero.t2": "Bring it in.",
      "hero.sub":
        "Cars, tech, processes, entire companies: for twenty years, whatever blocks has been brought in here. What returns is a system that runs itself, and takes as much off your plate as possible.",
      "hero.cta1": "Come in",
      "hero.cta2": "See what's running",
      "hero.scroll": "scroll to read the system",
      "ch1.label": "the floor · 2008",
      "ch1.title": "A paint layer never lies.",
      "ch1.text":
        "Quality is not learned from a handbook. In the body shop, between special painting and accident repair, you instantly see what works and what doesn't. Whoever learned to look there spots what jams in any company within the hour.",
      "ch1.p1": "bodywork & special painting",
      "ch1.p2": "teamleader accident advisor",
      "ch1.p3": "training at BMW HQ Belux",
      "ch2.label": "the system · automotive",
      "ch2.title": "A dealer that runs well makes no noise.",
      "ch2.text":
        "Twenty years in automotive, today as software consultant at Carya, among the country's largest dealer groups. Every flow from intake to invoicing tells the same story: where data stalls, the business stalls. Making it measurable is half the work. The rest is rhythm.",
      "ch3.label": "the code · Digital Farmers",
      "ch3.title": "Software should work while you sleep.",
      "ch3.text":
        "That is why Digital Farmers exists: own team, own CMS, own AI tooling. Websites, platforms and automation for companies that want to grow without chaos. No standard packages, but systems built to measure that run themselves.",
      "ch3.p1": "multi-tenant CMS & platforms",
      "ch3.p2": "automation that runs itself",
      "ch3.p3": "secured to audit level",
      "farm.label": "04 · the farm",
      "farm.title": "Systems running today.",
      "farm.sub":
        "No promises, no moodboards. These systems are built, launched and run every day for real businesses. Different sectors, always the same principle: a system that works and carries itself.",
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
      "method.s1t": "Reading the system as it really works, not as it was once designed.",
      "method.s2": "Design",
      "method.s2t": "Rewriting the flow with choices teams understand.",
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
      "contact.title": "What may come in?",
      "contact.sub":
        "A process that drags, a system that is missing, or simply a conversation you have been meaning to have. Everything may come in. Reply within 24 to 48 hours.",
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
      "form.sending": "Sending…",
      "form.ok": "Received. A confirmation is on its way to your mailbox.",
      "form.err": "Sending failed. Feel free to mail directly to contact@motouzani.com.",
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

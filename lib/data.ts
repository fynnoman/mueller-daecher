export const BETRIEB = {
  name: "MÜLLERDÄCHER",
  fullName: "MÜLLERDÄCHER® – Dachdeckermeisterbetrieb Patrick Raphael Müller",
  claim: "…einfach besser!",
  meister: "DDM Patrick Müller",
  meisterExtra: "gepr. Sachverständiger nach TRGS 519",
  phone: "06831 98 82 62",
  phoneRaw: "+4968319886262",
  mobile: "0178 468 55 37",
  mobileRaw: "+491784685537",
  email: "info@mueller-daecher.de",
  emailKarriere: "info@mueller-daecher.de",
  web: "www.mueller-daecher.de",
  standorte: [
    { name: "Ensdorf (Hauptsitz)", street: "Saarstraße 28", zip: "66806", city: "Ensdorf" },
    { name: "Saarlouis", street: "Oststraße 12", zip: "66740", city: "Saarlouis" },
    { name: "Wallerfangen", street: "Margarethenstraße 58", zip: "66798", city: "Wallerfangen" }
  ]
};

// Kurze Abkürzung für Standard-Adresse
export const HAUPTSITZ = BETRIEB.standorte[0];

export const NAV = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/team", label: "Team" },
  { href: "/karriere", label: "Karriere" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" }
];

/** WERTARBEIT — Original-Wortlaut Patrick Müller. */
export const WERTARBEIT = [
  "Wir beherrschen unser traditionsreiches Handwerk.",
  "Wir kennen und können das, was Kunden von uns erwarten.",
  "Wir überzeugen mit unserer hochprofessionellen Einstellung.",
  "Wir arbeiten selbständig, aufmerksam und eigenverantwortlich.",
  "Wir arbeiten hervorragend.",
  "Wir beraten kompetent, initiativ und über den Tellerrand hinaus.",
  "Wir arbeiten zügig, geräuscharm, sauber, ordentlich und strukturiert.",
  "Wir arbeiten zuverlässig und präzise in unseren Timings.",
  "Wir wirtschaften effizient – für uns und für unsere Kunden.",
  "Wir bieten Service, vom Erstkontakt bis über das Projektende hinaus.",
  "Wir verkörpern das, wofür „Familienunternehmen“ und „Traditionshandwerk“ stehen.",
  "Wir sprechen offen, verständlich und aufrichtig.",
  "Wir sind stressresistent, kritikfähig und belastbar.",
  "Wir sind hochmotiviert und brennen für unsere Arbeit.",
  "Wir sind nie Problem, sondern immer Lösung."
];

export type LeistungIconName =
  | "steilflach" | "notfall" | "holz" | "dachfenster" | "daemmung"
  | "gauben" | "balkon" | "fassade" | "drohne" | "energie";

export type Leistung = {
  slug: string;
  title: string;
  short: string;
  bullets: string[];
  extra?: string;
  icon: LeistungIconName;
};

/** LEISTUNGEN — Original-Texte 1:1 aus der Website übernommen. */
export const LEISTUNGEN: Leistung[] = [
  {
    slug: "steildaecher-flachdaecher",
    title: "Steildächer & Flachdächer",
    short: "Alles rund ums Dach für Steil- und Flachdächer.",
    bullets: [
      "Neubau",
      "Sanierung/Modernisierung",
      "gewerblich & privat",
      "Eindeckung",
      "Gebälkbau",
      "Bauklempnerei",
      "Einfassungen & Bekleidungen",
      "Dachinstallationen (Photovoltaik, Solarthermie)",
      "Gefahrstoffsanierung",
      "Planung, Beratung, Bauabwicklung"
    ],
    extra: "Starten Sie unseren Dachsanierungs-Konfigurator und fordern Sie ein unverbindliches Angebot für Ihr Wunschdach an.",
    icon: "steilflach"
  },
  {
    slug: "sturmschaden-notreparatur",
    title: "Sturmschaden & Notreparatur",
    short: "Notfallhilfe, wenn's schnell gehen muss.",
    bullets: [
      "Notfallhilfe",
      "Sofortmaßnahmen",
      "provisorische Dachabdichtung",
      "Leckageverortung & -beseitigung",
      "Ziegeltausch",
      "Bauklempnerei",
      "Dokumentationen für Versicherungen",
      "Dachwartung, Inspektion"
    ],
    icon: "notfall"
  },
  {
    slug: "zimmermanns-holzarbeiten",
    title: "Zimmermanns- & Holzarbeiten",
    short: "Alle Arbeiten rund um Holz und Gebälk.",
    bullets: [
      "Gebälkbau",
      "Gebälkausbesserung",
      "Sparrenaustausch & -wechsel",
      "Zustandsermittlung & -überwachung",
      "Holzanbau & -balkonaufbauten",
      "Terrassenbau",
      "Wintergärten",
      "Einfassungen & Bekleidungen"
    ],
    icon: "holz"
  },
  {
    slug: "dachfenster",
    title: "Dachfenster",
    short: "Beratung & Planung mit qualifizierten Partnern wie VELUX®.",
    bullets: [
      "Dachfenstereinbau (Liegefenster, Gaubenfenster)",
      "Dachfensteraustausch",
      "Dachfenstervergrößerung",
      "Sparrenwechsel",
      "Abdichtungen",
      "Energieeffizienzoptimierung nach KfW-Anforderungen",
      "Statikberechnungen"
    ],
    icon: "dachfenster"
  },
  {
    slug: "dachdaemmung",
    title: "Dachdämmung",
    short: "Dachdämmung für Zwischen- und Aufsparrenlösungen.",
    bullets: [
      "Energieberatung",
      "KfW-Beratung",
      "Anschlussarbeiten wie Neuverkleidungen und Umbauten"
    ],
    icon: "daemmung"
  },
  {
    slug: "gauben-aufstockungen",
    title: "Gauben & Aufstockungen",
    short: "Modernisierung und Umbauten von Dachgauben.",
    bullets: [
      "Nachträglicher Einbau von Dachgauben",
      "Bekleidung",
      "Bauklempnerei",
      "Anschlussarbeiten",
      "Aufstockungen von Dachgeschossen und Dachgeschossteilen",
      "z. B. für Glasgroßflächen oder Oberlichter"
    ],
    icon: "gauben"
  },
  {
    slug: "balkone-terrassen",
    title: "Balkone & Terrassen",
    short: "Modernisierung & Neubau von Terrassen & Balkonen.",
    bullets: [
      "Holzständerwerke",
      "Holz-, Schiefer- und Blechbekleidungen",
      "Carportplanung & -bau",
      "Gartenhaus- & Garagenbedachungen",
      "Flachdachsanierung"
    ],
    icon: "balkon"
  },
  {
    slug: "fassade",
    title: "Fassade",
    short: "Vorgehängte, hinterlüftete Fassaden aller Art nach aktuellem Gebäudeenergiegesetz.",
    bullets: [
      "Für Neu- und Altbau",
      "KfW-Beratung",
      "Rekonstruktion von Fassaden",
      "Gerüstbau",
      "Maler- und Lackierarbeiten"
    ],
    icon: "fassade"
  },
  {
    slug: "drohnenservice",
    title: "Drohnenservice",
    short: "Für Privat, Gewerbe & Industrie.",
    bullets: [
      "Dachinspektion aus der Luft",
      "Bestandsaufnahme",
      "Foto- & Videodokumentation"
    ],
    icon: "drohne"
  },
  {
    slug: "energieausweis",
    title: "Bedarfs- & Verbrauchsausweis",
    short: "Von uns erhalten Sie alle Informationen rund um das Thema Energieausweis für Ihre Immobilie.",
    bullets: [
      "Ohne Vor-Ort-Termin möglich",
      "Zahlung per PayPal, Sofortüberweisung, SEPA",
      "Nach Zahlungseingang sofort im E-Mail-Postfach",
      "Bei Überweisung 1–2 Werktage"
    ],
    icon: "energie"
  }
];

/** REFERENZEN — Original-Projekte aus der bestehenden Website. */
export type Referenz = {
  jahr: string;
  titel: string;
  ort: string;
  kategorie: string;
  leistungen: string;
  besonderheiten?: string;
};

export const REFERENZEN: Referenz[] = [
  {
    jahr: "2017",
    titel: "Dachsanierung 2 FH Überherrn",
    ort: "Überherrn",
    kategorie: "Steildachsanierung",
    leistungen: "Vollständige Sanierung von 160 qm Dachflächen, Aufsparrendämmung mit 160 mm Stärke (KfW-Förderung), 5 neue Dachliegefenster inkl. Sparrenwechsel, Kaminverkleidung, Erneuerung der Dachüberstände mittels Nut- und Federbretter.",
    besonderheiten: "Erschwerter Dachfenstereinbau durch Dämmstärke."
  },
  {
    jahr: "2015",
    titel: "Dachsanierung Saarlouis Innenstadt",
    ort: "Saarlouis",
    kategorie: "Schieferdachsanierung",
    leistungen: "Vollständige Sanierung von 211 qm Dachflächen, 120 mm Mineralwolldämmung, Dampfbremse, Unterspannbahn, Konterlattung, Schalung, Naturschiefer, Kaminverkleidungen.",
    besonderheiten: "Erschwerter Dachfenstereinbau durch Dämmstärke."
  },
  {
    jahr: "2017",
    titel: "Flachdachsanierung Ensdorf",
    ort: "Ensdorf",
    kategorie: "Flachdach",
    leistungen: "27 m² Flachdach mit Trapezblechen inkl. An- und Abschlüsse.",
    besonderheiten: "Leistungen an 1 Tag erbracht."
  },
  {
    jahr: "2016",
    titel: "Steildach mit Gebälk (Neubau) Dillingen",
    ort: "Dillingen",
    kategorie: "Steildach mit Gebälk",
    leistungen: "171 m² Steildach inkl. Schleppgaube mit Gebälk.",
    besonderheiten: "Steildachgebälk mit Schleppgaube."
  },
  {
    jahr: "2017",
    titel: "Flachdachsanierung Überherrn",
    ort: "Überherrn",
    kategorie: "Flachdachsanierung",
    leistungen: "Vollständige Sanierung von 147 m² Flachdach mit Bitumen inkl. Blecharbeiten, Fassadenbekleidung und Gebälk für eine Terrassenüberdachung.",
    besonderheiten: "Schwierige Gebäudebedingungen."
  },
  {
    jahr: "2014",
    titel: "Flachdachsanierung Merzig",
    ort: "Merzig",
    kategorie: "Dachsanierung",
    leistungen: "Vollständige Sanierung von 223 m² Flachdach mit Alwitra, inkl. Blecharbeiten.",
    besonderheiten: "Extreme Wetterverhältnisse."
  },
  {
    jahr: "2017",
    titel: "Dachsanierung 2 FH Fraulautern",
    ort: "Fraulautern",
    kategorie: "Steildachsanierung",
    leistungen: "Vollständige Sanierung von 210 m² Dachflächen, Aufsparrendämmung mit 140 mm Stärke (KfW-Förderung), 3 neue Dachliegefenster inkl. Sparrenwechsel, Kaminverkleidung, Giebelverkleidung mit Naturschiefer und Gaubenbekleidungen.",
    besonderheiten: "Hochsommerliche Temperaturen."
  },
  {
    jahr: "2017",
    titel: "Dachsanierung Steinrausch",
    ort: "Steinrausch",
    kategorie: "Wellplattensanierung",
    leistungen: "Vollständige Sanierung von 145 m² Dachflächen mit Wellplatten, 120 mm Mineralwolldämmung, Dampfbremse sowie Verputz des Giebels.",
    besonderheiten: "Realisiert in 10 Tagen."
  },
  {
    jahr: "2017",
    titel: "Dachsanierung 2 FH Ensdorf",
    ort: "Ensdorf",
    kategorie: "Steildachsanierung",
    leistungen: "Vollständige Sanierung von 172 m² Dachflächen, 120 mm Mineralwolldämmung, Dampfbremse, Unterspannbahn, Konterlattung, Traglattung, Dachziegel, Kaminverkleidung.",
    besonderheiten: "Aufstellen von Gauben inkl. Schieferbekleidung."
  }
];

/** TESTIMONIALS — echte Google-Bewertungen, Wortlaut. */
export const TESTIMONIALS = [
  {
    name: "Andreas Roth",
    when: "vor 2 Tagen",
    text: "Am vergangenen Wochenende hatten wir aufgrund verrutschter Ziegel einen Notfalleinsatz. Die Firma war trotz Feiertag (Maria Himmelfahrt) problemlos erreichbar. Alles wurde schnell und effizient organisiert. Reparatur erfolgte schon direkt am darauffolgenden Sonntag. Alles tadellos ausgeführt, Mitarbeiter total freundlich, und das alles noch zu einem wirklich richtig fairen Preis. Uns hat es überzeugt."
  },
  {
    name: "Dirk Becker",
    when: "vor 5 Tagen",
    text: "Gute Beratung, schneller Service, also rund um happy. Dankeschön"
  },
  {
    name: "Stephan A.",
    when: "vor 1 Woche",
    text: "Wir waren sehr zufrieden! Ein klasse Team! Sehr freundliche Arbeiter und auch ein sehr freundlicher Chef. Hier merkt man das Wert auf ein gutes Betriebsklima gelegen wird. Es hat alles gepasst, von Anfang an. Das Angebot wurde zügig erstellt, sowie die Sanierung des Daches erfolgte nach Auftragserteilung sehr schnell, was heute bei der Auftragslage bei den Firmen nicht üblich ist. Die Mitarbeiter haben sehr ordentlich und sauber gearbeitet und es ging alles flott. Wer mich kennt weiß, dass ich eigentlich schwer zufrieden zu stellen bin."
  },
  {
    name: "Sandra Junk",
    when: "vor 3 Wochen",
    text: "Klare 5 Sterne von uns! Super freundlicher Erstkontakt, schnelle Angebotserstellung und perfekte Ausführung (3× Dachfensteraustausch + diverse Kleinigkeiten am Dach). Das Montageteam (Sascha, Jean-Marie & David) hat bei uns einen super Job gemacht — offen, erklärend und das Gewerk immer im Fokus. Dazu schnell und sauber gearbeitet! Vielen Dank auch an Tanja im Backoffice für die super Orga drumherum. Wir waren sehr zufrieden und können dieses Team nur weiterempfehlen!"
  },
  {
    name: "Carsten Platte",
    when: "vor 1 Monat",
    text: "Ich habe absolut positive Erfahrungen mit der Firma Müller Dächer gemacht. Sowohl bei der Erstbesichtigung mit einem Dachdecker vor Ort, als auch bei Rückfragen zum erstellten Angebot, konnten mir die Damen aus dem Büro umgehend und kompetent Rückmeldung geben. Daher vielen Dank und eine absolute Weiterempfehlung."
  },
  {
    name: "Manfred Faschinka",
    when: "vor 5 Monaten",
    text: "Die Arbeiten an meinem Dach wurden sehr gut und sehr zügig von Mitarbeitern der Firma Müller Dächer erledigt. Diese Firma kann man mit gutem Gewissen empfehlen."
  }
];

export const YT_VIDEOS = [
  { id: "TX-UT8dSMho", title: "Wie lang hältn Dach?", tag: "Imageinterview 16/21" },
  { id: "ZFY9LCbb9VU", title: "Machen ihr ach Dachfenschta?", tag: "Imageinterview 15/21" },
  { id: "OLYhLzf68Q8", title: "Biberschwanzeindeckung", tag: "Imageinterview" }
];

export const BLOG_TEASER = [
  {
    date: "26. April 2023",
    kategorie: "Müller Blog · Patrick Müller",
    title: "Wie lang hält ein Dach eigentlich?",
    excerpt: "Ein Dach ist eine wichtige Komponente jedes Hauses, die es vor Witterungseinflüssen und anderen äußeren Einflüssen schützt. Aber wie lange hält ein Dach eigentlich?",
    href: "https://www.mueller-daecher.de/blog"
  },
  {
    date: "24. April 2023",
    kategorie: "Müller Blog · Patrick Müller",
    title: "Machen wir auch Dachfenster?",
    excerpt: "Dachfenster sind eine beliebte Möglichkeit, um in Dachgeschossräumen Tageslicht und Frischluft zu ermöglichen. Sie bieten nicht nur eine funktionale Lösung für die Belüftung und Beleuchtung von Dachräumen.",
    href: "https://www.mueller-daecher.de/blog"
  },
  {
    date: "19. April 2023",
    kategorie: "Müller Blog · Patrick Müller",
    title: "Biberschwanzeindeckung, was ist das und wie sieht das aus?",
    excerpt: "Die Biberschwanzeindeckung ist eine besonders haltbare und ästhetische Art der Dachdeckung, die seit Jahrhunderten verwendet wird.",
    href: "https://www.mueller-daecher.de/blog"
  }
];

/** Original-Text zur Gruppe / zum Selbstverständnis. */
export const GRUPPE_TEXT = {
  intro: "MÜLLERDÄCHER® ist ein deutschlandweit agierender inhabergeführter Dachdeckerbetrieb aus dem Saarland, welcher durch DDM Patrick Raphael Müller in dritter Generation geführt wird. Innerhalb der MÜLLERGRUPPE® vereinen wir alle Kompetenzbereiche, um die Anliegen unserer Kunden:innen vom Keller bis zum Dach ganzheitlich zu betreuen.",
  zirkel: "Dabei bedienen wir uns aus drei Generationen deutscher Handwerksmeister-Erfahrung sowie dem MÜLLERZIRKEL®, einem über Jahrzehnte hochprofessionell gewachsenem Netzwerk, dem nur die Besten ihrer Zunft angehören. Durch diese einzigartige Verbindung und unserem Selbstverständnis für Spitzenleistung stehen wir täglich für unsere Kunden über den Dächern des Saarlandes."
};

/** Original-Stellenanzeigen. */
export const STELLEN = [
  {
    slug: "dachdeckermeister",
    title: "Dachdeckermeister (m/w/d) gesucht in Ensdorf",
    aufgaben: [
      "klassische Dachdeckerarbeiten",
      "Aufmaßerstellung sowie Mengen- bzw. Massenermittlung",
      "Technische Zeichnungen nach Aufmaßerfassung zur Vorbereitung von Teil- und Schlussrechnungen"
    ],
    erwarten: [
      "Berufserfahrung",
      "Unternehmerisches Denken und Handeln",
      "Teamfähigkeit, Führungsqualität als Vorarbeiter",
      "Führerschein PKW Klasse 3 bzw. B (BE), Fahren mit Anhänger"
    ],
    bieten: [
      "einen sicheren, attraktiven Arbeitsplatz in einem renommierten, führenden Unternehmen",
      "ein hohes Maß an Eigenverantwortung und Freiraum",
      "erstklassiges Team und ein sehr gutes Betriebsklima",
      "einen leistungsgerechten Lohn",
      "vielfältige Perspektiven für Ihre Zukunft"
    ]
  },
  {
    slug: "dachdeckergeselle",
    title: "Dachdeckergeselle/in (m/w/d)",
    intro: "Du hast deinen Gesellenbrief in der Hand und bereits ein paar Jahre Berufserfahrung gesammelt? Dann bist du bei uns genau richtig. Wir suchen zur Ergänzung unseres Teams einen kollegialen Mitarbeiter (m/w/d), der bereit ist sein fundiertes Fachwissen und selbständiges Arbeiten gewerblich umzusetzen.",
    rahmen: "Arbeitsbeginn: sofort · Angestellter · Vollzeit (unbefristet)",
    aufgaben: [
      "Arbeiten im Flachdach-, Steildach- und Metalldachbereich",
      "Ausführung von Servicearbeiten",
      "Reparaturen und Wartungen"
    ],
    profil: [
      "selbstständige und strukturierte Arbeitsweise",
      "Ausbildung als Dachdecker/in und/oder entsprechende Berufserfahrung",
      "Führerschein Klasse B",
      "Einsatzbereitschaft und Durchsetzungsvermögen",
      "Verantwortungsbewusstsein, Zuverlässigkeit & Teamfähigkeit"
    ],
    bieten: [
      "ein tolles Team",
      "sicheren Arbeitsplatz",
      "leistungsgerechtes Einkommen",
      "Weiterbildungsmöglichkeiten"
    ]
  }
];

export const PATRICK_ZITAT = {
  text: "Wir stehen für Wertarbeit und faire Preise. Darauf gebe ich Ihnen mein Wort.",
  autor: "Patrick Müller, Dachdeckermeister"
};

export const EUDAIMONIA = {
  titel: "Eudaimonia — Das Buch für Gründer im Handwerk",
  intro: "Patrick Raphael Müller ist Dachdeckermeister und baute das Unternehmen MÜLLERDÄCHER® mit sich als Personenmarke auf. Er ist Vielleser, Wissbegieriger, passionierter Netzwerker und überzeugter Familienmensch.",
  zitat: "Ich arbeite nicht. Alles ist mein Leben.",
  outro: "Sein Buch „Eudaimonia — das Buch für Gründer im Handwerk“ ist alles andere als ein klassischer Ratgeber. Es überzeugt durch seine ungewohnte Sicht auf erfolgreiches und zeitgemäßes Unternehmertum im Handwerksbereich. Absolut lesenswert — nicht nur für Handwerker."
};

export const NETZWERK_TEXT = {
  headline: "Unser Netzwerk aus starken Partnern",
  body: "Müller Dächer weiß den Vorteil von starken Partnerunternehmen zu schätzen und ist deswegen stolzes Mitglied bei BNI - Chapter Vauban Saarlouis. Sprechen Sie uns an, in unserem Netzwerk können wir alle Gewerke vermitteln."
};

export const KONTAKT_INTRO = {
  headline: "Ihr Dach in besten Händen",
  sub: "Unverbindliches Angebot oder Reparaturanfrage",
  body: "Ob Sie von einem neuen Wunschdach träumen oder schnelle Hilfe bei einer Dachreparatur benötigen — wir sind für Sie da. Beschreiben Sie Ihre Vorstellungen oder den Schaden, und unser Team meldet sich zeitnah mit einem maßgeschneiderten Angebot oder einer Lösung für Ihr Anliegen."
};

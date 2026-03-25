import type { Project } from "./projects";

type TranslatableFields = Pick<
  Project,
  "title" | "tags" | "summary" | "category" | "overview" | "problem" | "process" | "solution" | "results"
>;

export const germanProjectTranslations: Record<string, TranslatableFields> = {
  "bottle-pirates": {
    title: "Bottle Pirates",
    tags: ["Mobile App", "UX/UI Design", "Marktplatz", "Community", "Social Commerce"],
    summary:
      "Bottle Pirates (Flaschenpiraten) ist ein sozialer Wein-Marktplatz für Sammler, Enthusiasten und Verkäufer. Die Plattform verbindet Handel mit Community und macht den Prozess wie eine Schatzsuche erlebbar.",
    category: "Mobile App • UX/UI Design • Marktplatz",
    overview:
      "Bottle Pirates (Flaschenpiraten) bringt Weinhandel und Community in einer App zusammen. Nutzer können Flaschen entdecken, handeln, kaufen oder verkaufen und sich mit anderen Mitgliedern austauschen.\n\nDas Produkt kombiniert Marktplatz-Mechaniken mit sozialer Interaktion, damit Weinhandel weniger transaktional und mehr wie ein gemeinsames Hobby wirkt.",
    problem:
      "Weinhandel ist vertrauensbasiert und informationsintensiv. Angebote brauchen klare Herkunftsangaben, Käufer wollen Sicherheit und Oberflächen werden schnell unübersichtlich.\n\nDie Herausforderung war, den Prozess einfach, sozial und angenehm zu gestalten, ohne die notwendige Seriosität bei hochpreisigen Flaschen zu verlieren.",
    process:
      "Der Fokus lag auf einem Community-First-Ansatz. Wir analysierten bestehende Plattformen, identifizierten Friktionen und entwickelten eine Lösung, die soziale Interaktion und Handel gleichwertig behandelt.\n\nWichtige Leitpunkte:\n\n• Einfachheit trotz komplexer Produktdaten\n• Vertrauen bei wertigen Transaktionen\n• Intuitive Inserat-Erstellung\n• Community-Features für Engagement\n• Mobile-First für unterwegs",
    solution:
      "Die Lösung schafft einen klaren Ablauf: Inserate schnell erstellen, Angebote einfach durchsuchen und ohne Umwege vom Entdecken in den Austausch wechseln.\n\nDie UX setzt auf starke visuelle Hierarchie, transparente Angebotsdetails und leichte Community-Mechaniken, die Nutzer auch langfristig binden.",
    results:
      "Bottle Pirates etabliert ein eigenständiges Marktplatz-Erlebnis mit Community-Charakter. Weinhandel wird zugänglicher, lebendiger und emotionaler.\n\nDurch Vertrauen, Interaktion und soziale Entdeckung entsteht ein nachhaltiges Ökosystem, in das Nutzer nicht nur zum Kaufen und Verkaufen zurückkehren.",
  },
  "weight-loss-conversion": {
    title: "Abnehmprogramm für Online-Fitnesscoaches",
    tags: ["UX/UI", "Conversion-Optimierung", "Case Study", "Landingpage", "UX Research"],
    summary:
      "Konzeptionelle UX/UI-Case-Study, wie strategische Designentscheidungen den Drop-off zwischen Social-Media-Interesse und bezahlter Programmanmeldung reduzieren können.",
    category: "UX/UI Design & Conversion",
    overview:
      "Diese Case Study zeigt, wie UX-Entscheidungen den Abbruch zwischen Social-Media-Interaktion und Programmanmeldung senken.\n\nViele Coaches haben hohe Reichweite und starkes Engagement, aber geringe Conversion. Nutzer sind interessiert, zögern jedoch beim entscheidenden Schritt.",
    problem:
      "Nutzer vertrauen dem Content, aber nicht ausreichend dem Produkterlebnis. Typische Fragen sind: Passt das Programm zu mir? Was passiert nach dem Klick? Ist der Aufwand es wert?\n\nWenn diese Fragen offen bleiben, steigt Unsicherheit statt Vertrauen.",
    process:
      "Die Neugestaltung konzentrierte sich auf vier Ziele:\n\n• Vertrauen vor Commitment aufbauen\n• Unsicherheit an kritischen Punkten reduzieren\n• Das Angebot klar strukturieren\n• Nutzer schrittweise führen\n\nGrundprinzipien: Spezifität schafft Vertrauen, Struktur reduziert Angst, weniger Entscheidungen steigern Conversion.",
    solution:
      "Die Lösung fügt keine Komplexität hinzu, sondern nimmt Unsicherheit heraus: klare Erwartungsrahmen, handlungsorientierte CTAs, beruhigende Microcopy, konkrete Social Proofs und aktives Einwand-Handling.",
    results:
      "Erwartete Effekte: weniger CTA-Zögern, höhere wahrgenommene Glaubwürdigkeit, besser qualifizierte Leads und stärkere Übereinstimmung zwischen Content und Produkt.\n\nDie Arbeit zeigt, wie UX direkte Wirkung auf Vertrauen und Umsatz hat.",
  },
  focasma: {
    title: "Gassner – Mobile App Redesign",
    tags: ["UX/UI", "Mobile Redesign", "Datenvisualisierung", "Industrial Tech"],
    summary:
      "Modernes Redesign der Gassner-App mit Fokus auf bessere Bedienbarkeit, visuelle Klarheit und datengetriebene Funktionen für industrielle Mess- und Monitoring-Anwendungen.",
    category: "Mobile UX/UI Design",
    overview:
      "Die App von Gassner Wägen wurde als professionelle Lösung für industrielle Messprozesse weiterentwickelt. Die alte Version bot Basisfunktionen, aber ein veraltetes Nutzungserlebnis.\n\nZiel war eine klare, effiziente und moderne Oberfläche für Techniker, Betreiber und Kunden.",
    problem:
      "Die bisherige App hatte eine schwache visuelle Hierarchie, eingeschränkte Zugänglichkeit und erschwerte Navigation. Messdaten waren schwer interpretierbar, Analyse- und Anpassungsoptionen fehlten weitgehend.",
    process:
      "Der Prozess startete mit einem Usability-Audit und Benchmarking im Industrial-IoT-Umfeld. Navigation, Datenvisualisierung und Informationsstruktur wurden überarbeitet.\n\nWireframes, Flows und Prototypen wurden mit Nutzern aus unterschiedlichen technischen Hintergründen getestet.",
    solution:
      "Das Redesign führt ein datenorientiertes Interface mit modularen Dashboards, Verlaufsdaten, Geräteverwaltung und besserer Typografie ein. Das Designsystem orientiert sich an der Marke Gassner und funktioniert konsistent in hellen und dunklen Umgebungen.",
    results:
      "Das neue Design verbessert Klarheit, Effizienz und Akzeptanz deutlich. Nutzer können Leistung präziser auswerten und schneller handeln. Gleichzeitig stärkt die App die digitale Markenwirkung von Gassner.",
  },
  mydiabetes: {
    title: "MyDiabetes – Website Redesign",
    tags: ["UX/UI", "Web Redesign", "Healthcare", "Case Study"],
    summary:
      "Komplette Neugestaltung der Website des Diabär-Vereins, um Zugänglichkeit, Struktur und emotionale Ansprache für Kinder und Familien zu verbessern.",
    category: "UX/UI Design",
    overview:
      "MyDiabetes war ein Redesign der Diabär-Website für Kinder und Familien mit Typ-1- und Typ-2-Diabetes. Die alte Seite war unübersichtlich, wenig responsiv und visuell veraltet.\n\nZiel war eine moderne Plattform, die Vertrauen, Gemeinschaft und Orientierung vermittelt.",
    problem:
      "Die bestehende Website war textlastig, visuell inkonsistent und schwer nutzbar. Eltern und Kinder fanden Informationen, Services und Community-Angebote nur mit hohem Aufwand.",
    process:
      "Durch Content- und Wettbewerbsanalyse, User-Research und Personas wurden Anforderungen an Tonalität, Struktur und Accessibility abgeleitet.\n\nDarauf aufbauend entstanden neues Branding, Wireframes und High-Fidelity-Designs mit modularem Komponentenansatz.",
    solution:
      "Das Ergebnis ist eine klare, responsive Informationsarchitektur mit verbesserter Navigation, familienfreundlicher visueller Sprache und konsistentem Designsystem. Wichtige Funktionen wie Events, Buchungen und Lerninhalte sind schnell erreichbar.",
    results:
      "Die neue Plattform ist strukturierter, nahbarer und inklusiver. Sie verbessert Auffindbarkeit und Vertrauen und bietet eine skalierbare Designbasis für den Verein. Die Live-Website ist im Bereich Links & Dateien verlinkt.",
  },
  "caffe-stella-polare": {
    title: "Caffe Stella Polare",
    tags: ["Web Design", "UX/UI", "Branding", "Responsive", "Menuedesign"],
    summary:
      "Website-Konzept für ein historisches Triester Kaffeehaus mit Wiener Identität, mehrsprachiger Struktur und mobilem Menüfokus.",
    category: "Web Design & Branding",
    overview:
      "Das Konzept positioniert Caffe Stella Polare als klassisches Kaffeehaus in Triest. Historische Markenelemente bleiben erhalten, Farbwelt und Bildsprache wurden gezielt modernisiert.\n\nDie Informationsarchitektur ist auf DE/EN/IT vorbereitet, mit Schwerpunkt auf mobiler Menü-Nutzung und klarer Auffindbarkeit.",
    problem:
      "Der bisherige Auftritt vermittelte Herkunft und Charakter des Hauses nicht klar genug. Gewünscht waren eine stärkere kulturelle Einbettung, bessere mobile Menüführung und eine prägnante visuelle Richtung ohne gelateria-Anmutung.",
    process:
      "Die Arbeit umfasste Recherche, Content-Konzeption, Bild- und Typografie-Tests, Verfeinerung von Wortmarke und Layoutsystem sowie Desktop- und Mobile-Entwürfe.",
    solution:
      "Entstanden ist ein verfeinertes visuelles Erscheinungsbild mit klarer Narration, mobile-first Menükarte und gut sichtbarem Find-us-Bereich. Die Gestaltung verbindet traditionelle Kaffeehausidentität mit zeitgemäßem Interface.",
    results:
      "Das Projekt lieferte Desktop- und Mobile-Mockups mit besserer Markenwirkung, schnellerer Menü-Orientierung und stärkerem Ortsbezug. Es bildet eine skalierbare Basis für den mehrsprachigen Rollout.",
  },
  "mydiabetes-game": {
    title: "MyDiabetes – Mobile Game Redesign",
    tags: ["UX/UI", "Mobile App", "Gamification", "Healthcare"],
    summary:
      "Redesign des MyDiabetes-Lernspiels für Kinder, das Diabeteswissen spielerisch vermittelt und eine zeitgemäße visuelle Identität schafft.",
    category: "Mobile App UX/UI",
    overview:
      "Die App wurde als Lernwerkzeug für Kinder konzipiert: Ein Avatar wird im Alltag betreut, etwa durch Essen, Insulin und Routinen. Ziel des Redesigns war ein moderneres, klareres und motivierendes Nutzungserlebnis.",
    problem:
      "Die bestehende App wirkte veraltet, uneinheitlich und wenig motivierend. Kerninteraktionen waren nicht intuitiv genug und die visuelle Sprache unterstützte den Lernzweck nur eingeschränkt.",
    process:
      "Ausgehend von einer Analyse der Altversion wurde ein kinderfreundlicher Stylescape mit klarer Ikonografie und spielerischer Farbwelt entwickelt. Danach folgten Wireframes und Hi-Fi-Entwürfe für zentrale Interaktionen.",
    solution:
      "Die neue Version bietet eine lebendige, gut verständliche Benutzerführung mit spielnahem Charakter. Lerninhalte bleiben zentral, wirken aber deutlich zugänglicher und emotional positiver.",
    results:
      "Das Redesign verbindet Bildung und Unterhaltung wirksam. Kinder verstehen Diabetes-Management besser, bleiben länger engagiert und erhalten eine sichere, motivierende Lernerfahrung.",
  },
  "xocoatl-branding": {
    title: "Xocoatl – Der Kakao der Azteken",
    tags: ["Branding", "Logodesign", "Packaging", "Web Design", "Identity", "Brand Guide"],
    summary:
      "Branding-Projekt für Xocoatl: ein traditionelles aztekisches Kakaogetränk modern, hochwertig und nachhaltig im Markt positionieren.",
    category: "Brand Identity & Packaging",
    overview:
      "Xocoatl ist ein Identity-Projekt, das ein traditionelles Kakaoprodukt in den modernen Retail-Kontext überträgt. Die Gestaltung balanciert Tradition und Moderne und betont Authentizität, Stärke und Transparenz.",
    problem:
      "Viele Kakao-Brands arbeiten mit Klischees und zu wenig Storytelling. Xocoatl brauchte eine visuelle Identität, die Herkunft, Qualität und Nachhaltigkeit klar kommuniziert und sich im Regal differenziert.",
    process:
      "Der Prozess umfasste Konzeptarbeit zu Herkunft und Zutatenreinheit, den Aufbau eines Stylescapes sowie die Entwicklung von Logo, Packaging, Landingpage und Merch. Alle Assets wurden im Brand Guide konsolidiert.",
    solution:
      "Geliefert wurde ein vollständiges Branding mit prägender Wortmarke, Illustration, Packaging-System, Web-Entwurf und Merch. Das visuelle System ist robust, modern und skalierbar.",
    results:
      "Xocoatl erhält dadurch einen hochwertigen, authentischen Marktauftritt. Packaging und digitale Touchpoints wirken konsistent und premium. Der Brand Guide schafft eine belastbare Grundlage für Wachstum.",
  },
  "agility-plus": {
    title: "Agility Plus",
    tags: ["UX/UI", "Branding", "Produktdesign", "Sports Tech", "Rehabilitation"],
    summary:
      "Agility Plus ist ein modulares digitales Trainingssystem, das körperliche Agilität und kognitive Reize über LED-gestützte Übungen und App-Steuerung verbindet.",
    category: "UX/UI & Produktdesign",
    overview:
      "Agility Plus ist ein mobiles Koordinationstrainingssystem für Körper und Geist. Eine 7x7-LED-Matrix in Kombination mit App-Logik ermöglicht reaktionsbasiertes Training für Sport, Coaching und Rehabilitation.",
    problem:
      "Klassische Trainingsmethoden sind oft monoton, wenig messbar und kognitiv unterfordernd. Das führt zu sinkender Motivation, ineffizienten Prozessen und höherem Verletzungsrisiko.",
    process:
      "Das Konzept wurde in vielen Prototyping- und Testrunden mit Vereinen, Athleten, Physios und Sportwissenschaftlern iteriert. Die Erkenntnisse flossen direkt in UX, Gamification und MVP-Funktionen ein.",
    solution:
      "Die Lösung kombiniert LED-Impulse mit App-basierten Trainingsprogrammen und spielerischen Challenges. Das modulare Hardware-Setup ist schnell einsatzbereit und für zukünftige Sensorik vorbereitet.",
    results:
      "Frühe Tests zeigten hohe Motivation und positives Feedback. Agility Plus steigert Trainingseffizienz, unterstützt sichere Belastungssteuerung und hat das Potenzial, sich als neuer Standard in Sport und Therapie zu etablieren.",
  },
  "burrito-casa": {
    title: "Burrito Casa",
    tags: ["Branding", "Konzeptprojekt", "Food Service"],
    summary:
      "Eigeninitiiertes Konzeptprojekt, wie eine moderne Burrito- und Taco-Marke über digitale und physische Touchpoints konsistent gestaltet werden kann.",
    category: "Konzept / Branding",
    overview:
      "Burrito Casa ist ein spekulatives Designprojekt für ein verspieltes, modernes Restaurantkonzept. Ziel war die Verbindung aus starker visueller Identität, mutiger Typografie und konsistentem Markenauftritt.",
    problem:
      "Es gab keinen realen Kundenauftrag. Das Projekt diente als bewusst gesetzte Design-Challenge, um Branding-, UI/UX- und Identity-Skills im Food-Bereich weiterzuentwickeln.",
    process:
      "Aus Moodboards entstanden Stylescape, Logo-Iterationen und Mockups für digitale und physische Anwendungen wie Menüs, Packaging, Social Media und Mobile Ordering.",
    solution:
      "Das Ergebnis ist eine mutige, eigenständige Marke mit lebendiger Farbwelt, moderner Typografie und illustrativer Sprache - übertragbar auf Packaging, Merch und App-Erlebnis.",
    results:
      "Burrito Casa zeigt die Entwicklung eines kompletten Markensystems von Grund auf und verbindet Strategie, visuelle Identität und User Experience zu einer konsistenten Vision.",
  },
  tailmate: {
    title: "TailMate",
    tags: ["Branding", "UI/UX Design", "Konzeptprojekt"],
    summary:
      "Konzeptprojekt für eine moderne Hunde-Adoptionsplattform mit neuer Markenidentität, spielerischer Visualität und benutzerfreundlicher Website-Struktur.",
    category: "Konzept / Branding",
    overview:
      "TailMate entstand aus der Beobachtung, dass viele Adoptionsseiten veraltet wirken und emotional wenig mitnehmen. Das Projekt entwickelt eine warme, moderne und vertrauensvolle Alternative.",
    problem:
      "Viele Adoptionsseiten leiden unter alter Interface-Qualität, inkonsistentem Branding und fehlender Storytelling-Tiefe für einzelne Tiere.",
    process:
      "Dazu wurden eine spielerische Markenidentität, ein Stylescape mit warmen Farben und pfoteninspirierten Elementen sowie Mockups für den gesamten Adoptionsfluss erstellt.",
    solution:
      "Die Lösung kombiniert freundliche Illustration, klares Designsystem und nahtlosen Flow. Die Marke transportiert Wärme, Vertrauen und Freude - zentrale Werte bei Adoption.",
    results:
      "TailMate zeigt, wie sich Branding und UX/UI zu einem kohärenten Produkt verbinden lassen und wie durchdachtes Design aus einer funktionalen Website ein emotionales Erlebnis macht.",
  },
};

/* ===========================================================================
   Data Act Pioneer – Geschäftsgeheimnisschutz: Zeitlicher Ablauf
   DATENDATEI

   Rechtsstand 7. November 2026.
   Primärquellen: Verordnung (EU) 2023/2854 (Data Act) und das
   Datenverordnung-Anwendungs-und-Durchsetzungs-Gesetz (DADG) vom
   26. Mai 2026, BGBl. 2026 I Nr. 157, in Kraft seit 30. Mai 2026.

   SCHRITTE
     spalte / zeile  Position im Raster (Spalte 1–3, Zeile 1–5)
     typ             "start" | "normal" | "entscheidung" | "ja" | "nein" | "folge"
     beleg           "belegt" | "offen"   – steuert den Hinweis im Detailfeld
     frist           optionale Zeile "Frist und Zeitmaßstab"
     offenerPunkt    optionale Warnbox "Noch abzusichern"

   VERBINDUNGEN
     von / nach      IDs aus SCHRITTE
     label           optionale Beschriftung am Pfeil ("Ja" / "Nein")
   =========================================================================== */

const SCHRITTE = [
  {
    id: "s1",
    nummer: "1",
    titel: "Nutzer oder Dritter fordert Datenzugang",
    zusatz: "Art. 4 ff. DA",
    spalte: 1, zeile: 1, typ: "start", beleg: "belegt",

    was: "Am Anfang steht der Zugangsanspruch des Nutzers nach Art. 4 Abs. 1 und 2 DA oder der Anspruch auf Weitergabe an einen vom Nutzer benannten Dritten nach Art. 5 Abs. 1 und 2 DA. Die Daten sind grundsätzlich unverzüglich, kostenlos und in derselben Qualität bereitzustellen, in der sie dem Dateninhaber vorliegen.",
    hinweis: "Der Dateninhaber ist verpflichtet zu antworten. Ein Ignorieren der Anfrage ist keine Option, weil es eine Beschwerde nach Art. 38 DA und ein Verfahren der Bundesnetzagentur auslösen kann. Eingang bestätigen, Anfrage registrieren und mitteilen, welche Prüfung noch aussteht.",
    frist: "Keine starre Antwortfrist im Data Act. Maßstab ist „unverzüglich“, also ohne schuldhaftes Zögern. Die sachlich notwendige Prüfungsdauer für Identität, Umfang, Datenschutz und Geheimnisschutz bleibt zulässig.",
    normen: "Art. 4 Abs. 1, 2 DA · Art. 5 Abs. 1, 2 DA · Art. 38 DA",
    quelle: "Verordnung (EU) 2023/2854"
  },
  {
    id: "s2",
    nummer: "2",
    titel: "Anfrage validieren und Umfang eingrenzen",
    zusatz: "Vorprüfung vor dem Geheimnisschutz",
    spalte: 2, zeile: 1, typ: "normal", beleg: "belegt",

    was: "Vor der Geheimnisprüfung steht die Vorfrage, ob der Anspruch überhaupt besteht. Zu prüfen sind die Berechtigung des Antragstellers als Nutzer oder zulässiger Dritter, die Eröffnung des Anwendungsbereichs, die Einordnung als ohne Weiteres verfügbare Produkt- oder verbundene Dienstdaten, die Betroffenheit personenbezogener Daten und Rechte Dritter sowie die hinreichende Bestimmtheit des Antrags.",
    hinweis: "Bei der Identitätsprüfung gilt eine Grenze. Nach Art. 4 Abs. 5 DA darf der Dateninhaber nur die dafür erforderlichen Informationen verlangen. Ein Verstoß ist nach § 15 Abs. 2 Nr. 3 DADG bußgeldbewehrt. Lässt sich der Antrag nur teilweise erfüllen, ist die Teilbereitstellung zu prüfen, statt insgesamt abzulehnen.",
    normen: "Art. 2, Art. 3 DA · Art. 4 Abs. 3 bis 5 DA · § 15 Abs. 2 Nr. 3 DADG",
    quelle: "Verordnung (EU) 2023/2854 · DADG, BGBl. 2026 I Nr. 157"
  },
  {
    id: "s3",
    nummer: "3",
    titel: "Prüfung auf Geschäftsgeheimnisse",
    zusatz: "",
    spalte: 3, zeile: 1, typ: "normal", beleg: "belegt",

    was: "Der Dateninhaber prüft datenfeldbezogen, ob die verlangten Daten Geschäftsgeheimnisse enthalten und welcher Offenlegungsschaden droht. Eine eigenständige Prüfpflicht mit dieser Bezeichnung enthält der Data Act nicht, sie folgt mittelbar aus den Schutzvorschriften, weil Schutzmaßnahmen nur verlangt werden können, wenn das Geheimnis zuvor bestimmt ist.",
    hinweis: "Logdaten und Wartungsprotokolle sind nicht pauschal Geschäftsgeheimnisse. Sie können solche enthalten, wenn sie Rückschlüsse auf Produktionsabläufe, Fehlerquoten, Konfigurationen oder Wartungsstrategien zulassen. Auch Geheimnisse Dritter, etwa von Zulieferern, sind zu erfassen. Eine pauschale Einstufung sämtlicher Betriebsdaten als Geheimnis wird voraussichtlich nicht genügen. Praktisch hilft ein Dateninventar mit markierten Geheimnissen und dokumentiertem Schadensszenario.",
    normen: "Art. 4 Abs. 6 DA · Begriff über die Richtlinie (EU) 2016/943",
    quelle: "Kiefer/Schneider, GRUR-Prax 2025, 648, Rn. 7–8, 25"
  },
  {
    id: "s4",
    nummer: "4",
    titel: "Schutzmaßnahmen vereinbaren",
    zusatz: "Vertraulichkeit, Zweckbindung, Zugangskontrolle",
    spalte: 3, zeile: 2, typ: "normal", beleg: "belegt",

    was: "Als Geschäftsgeheimnis eingestufte Daten dürfen nach Art. 4 Abs. 6 DA nur offengelegt werden, wenn Dateninhaber und Nutzer vorher alle erforderlichen Vertraulichkeitsmaßnahmen getroffen haben. Der Dateninhaber bestimmt, welche Daten geschützt sind, und kennzeichnet sie auch in den Metadaten.",
    hinweis: "In Betracht kommen Vertraulichkeitsvereinbarungen, Zweck- und Nutzungsbeschränkungen, Zugangsbeschränkungen und Zugriffskontrollen, Protokollierung, Verschlüsselung, Löschpflichten, Weitergabeverbote und Vertragsstrafen. Mustervertragsklauseln, technische Normen und Verhaltenskodizes sind Umsetzungsinstrumente, sie ersetzen die Einzelfallprüfung nicht. Zu unterscheiden sind drei Stufen, nämlich vorgeschlagen, vereinbart und tatsächlich implementiert.",
    frist: "Der Zugang darf zurückgehalten werden, bis die vereinbarten Maßnahmen tatsächlich umgesetzt sind. Ein unbefristetes Zurückhalten oder das Verlangen von Maßnahmen über das Erforderliche hinaus wäre unverhältnismäßig.",
    normen: "Art. 4 Abs. 6 DA · für die Weitergabe die Parallelregelung in Art. 5 DA",
    quelle: "Kiefer/Schneider, GRUR-Prax 2025, 648, Rn. 13–14"
  },
  {
    id: "s5",
    nummer: "5",
    titel: "Ist der Schutz ausreichend?",
    zusatz: "Entscheidungspunkt",
    spalte: 2, zeile: 2, typ: "entscheidung", beleg: "belegt",

    was: "Maßgeblich ist kein freies Ermessen des Dateninhabers, sondern ein objektiver, risikobezogener und verhältnismäßiger Maßstab. Zu fragen ist, ob die Maßnahmen nach Art und Sensibilität der Daten geeignet sind, eine unbefugte Nutzung oder Weitergabe praktisch hinreichend zu verhindern.",
    hinweis: "Einzubeziehen sind die wirtschaftliche Bedeutung des Geheimnisses, Zahl und Zuverlässigkeit der zugriffsberechtigten Personen, der Nutzungszweck, die Möglichkeit einer Rekonstruktion, die technische Absicherung, die Dauer des Zugangs und die Folgen eines Verstoßes. Eine kurze dokumentierte Risikoentscheidung genügt, sie sollte das Schadensszenario und die Ablehnung milderer Mittel festhalten. Eine veröffentlichte Entscheidung, Leitlinie oder Verwaltungspraxis, die diesen Maßstab speziell für Art. 4 oder Art. 5 DA konkretisiert, liegt bislang nicht vor. Der objektive Maßstab beruht auf der Systematik der Vorschrift und auf der allgemeinen Auslegung angemessener Geheimhaltungsmaßnahmen.",
    normen: "Art. 4 Abs. 6, 7 DA",
    quelle: "Kiefer/Schneider, GRUR-Prax 2025, 648, Rn. 14–15"
  },
  {
    id: "s6a",
    nummer: "6a",
    titel: "Zugang unter Schutzmaßnahmen",
    zusatz: "Begrenzt auf erforderliche Daten, Personen und Zeiträume",
    spalte: 1, zeile: 3, typ: "ja", beleg: "belegt",

    was: "Sind die Maßnahmen ausreichend und umgesetzt, sind die Daten bereitzustellen. Die Bereitstellung darf auf die erforderlichen Daten, Personen, Zwecke und Zeiträume begrenzt werden.",
    hinweis: "Zulässig ist die Kontrolle der vereinbarten Schutzmaßnahmen im erforderlichen Umfang, nicht eine umfassende Verhaltensüberwachung des Nutzers. Bei einem Verstoß kann die weitere Bereitstellung für die Zukunft verweigert werden. Der Verstoß ist zu dokumentieren und die Entscheidung verhältnismäßig zu begründen. Eine rückwirkende Sanktionierung bereits rechtmäßig bereitgestellter Daten folgt daraus nicht.",
    normen: "Art. 4 Abs. 6, 7 DA · Art. 5 DA · ergänzend §§ 4 ff. GeschGehG bei unbefugter Nutzung",
    quelle: "Verordnung (EU) 2023/2854"
  },
  {
    id: "s6b",
    nummer: "6b",
    titel: "Einschränkung oder Verweigerung",
    zusatz: "Begründung an den Nutzer und Mitteilung an die Behörde",
    spalte: 3, zeile: 3, typ: "nein", beleg: "belegt",

    was: "Nach Art. 4 Abs. 7 DA darf der Dateninhaber die Weitergabe verweigern oder aussetzen, wenn keine Einigung über die Schutzmaßnahmen zustande kommt, der Nutzer vereinbarte Maßnahmen nicht umsetzt oder die Vertraulichkeit verletzt. Nach Art. 4 Abs. 8 DA ist im Einzelfall auch eine vollständige Ablehnung möglich, wenn der Dateninhaber nachweist, dass trotz der Schutzmaßnahmen mit hoher Wahrscheinlichkeit ein schwerer wirtschaftlicher Schaden droht. Der Nachweis beruht auf objektiven Tatsachen, etwa der Durchsetzbarkeit des Geheimnisschutzes in Drittländern, der Art und dem Vertraulichkeitsgrad der Daten sowie der Neuheit des Produkts.",
    hinweis: "Die vollständige Verweigerung ist kein Regelmodell. Vorrangig sind Schwärzung, Herausgabe nicht sensibler Teile, Aggregation oder Pseudonymisierung. Beide Absätze verlangen zusätzlich eine Mitteilung an die nach Art. 37 DA benannte Behörde, in Deutschland die Bundesnetzagentur. Diese Mitteilung ist keine Genehmigung, der Dateninhaber muss also nicht zuwarten. Eine Ablehnung sollte die betroffenen Datenkategorien, das konkrete Geheimnis, das Schadensszenario, die geprüften milderen Mittel und den Hinweis auf Beschwerde und Streitbeilegung enthalten.",
    frist: "Begründung nach Art. 4 Abs. 7 DA und Nachweis nach Art. 4 Abs. 8 DA sind dem Nutzer unverzüglich und schriftlich zu übermitteln. Eine feste Frist in Tagen nennt der Data Act nicht. Unterbleibt die Mitteilung oder der Nachweis, droht ein Bußgeld bis 50 000 Euro nach § 15 Abs. 2 Nr. 4 und 5, Abs. 4 DADG.",
    normen: "Art. 4 Abs. 7, 8 DA · für die Weitergabe Art. 5 Abs. 10, 11 DA · § 15 Abs. 2 Nr. 4, 5 DADG",
    quelle: "Verordnung (EU) 2023/2854 · DADG, BGBl. 2026 I Nr. 157 · Kiefer/Schneider, GRUR-Prax 2025, 648, Rn. 16–18",
    hinweisKasten: "Welche Schwelle „schwerer wirtschaftlicher Schaden“ konkret erreicht, ist bislang nicht durch Rechtsprechung oder Verwaltungspraxis geklärt. Die Begründung muss den Einzelfall tragen."
  },
  {
    id: "s7",
    nummer: "7",
    titel: "Beschwerde, Behörde und Streitbeilegung",
    zusatz: "Bundesnetzagentur · § 2 Abs. 1 DADG",
    spalte: 2, zeile: 4, typ: "folge", beleg: "belegt",

    was: "Drei Wege sind zu unterscheiden. Die Beschwerde bei der zuständigen Behörde nach Art. 38 DA, das Verfahren der nach Art. 37 DA benannten Behörde, in Deutschland nach § 2 Abs. 1 DADG die Bundesnetzagentur, und die Streitbeilegung durch zugelassene Stellen nach Art. 10 DA, die die Bundesnetzagentur nach § 5 DADG zulässt und in einem öffentlichen Verzeichnis führt.",
    hinweis: "Der Behördenweg ist keine zwingende Vorstufe eines Zivilverfahrens. Der Zivilrechtsweg bleibt daneben offen, in Betracht kommen Leistungsklage, einstweiliger Rechtsschutz und Schadensersatz. Wer der Behörde Unterlagen vorlegt, muss Geschäftsgeheimnisse nach § 10 DADG kennzeichnen und eine einsehbare Fassung beifügen. Fehlt sie, kann die Behörde von einer Einwilligung in die Einsicht ausgehen. Für personenbezogene Daten ist nach § 3 DADG grundsätzlich der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit zuständig, beide Behörden arbeiten zusammen.",
    frist: "Die Bundesnetzagentur kann nach § 9 DADG Abhilfe innerhalb einer angemessenen Frist verlangen und die erforderlichen Maßnahmen anordnen. Zur Durchsetzung steht ein Zwangsgeld bis 500 000 Euro zur Verfügung.",
    normen: "Art. 10, Art. 37, Art. 38 DA · §§ 2, 3, 5, 6, 9, 10 DADG",
    quelle: "DADG vom 26. Mai 2026, BGBl. 2026 I Nr. 157, in Kraft seit 30. Mai 2026"
  },
  {
    id: "s8",
    nummer: "8",
    titel: "Sanktionen und zivilrechtliche Haftung",
    zusatz: "§ 15 DADG · §§ 6 ff. GeschGehG",
    spalte: 2, zeile: 5, typ: "folge", beleg: "belegt",

    was: "Art. 40 DA verpflichtet die Mitgliedstaaten zu wirksamen, verhältnismäßigen und abschreckenden Sanktionen. Deutschland hat sie in § 15 DADG ausgestaltet. Wer Daten entgegen Art. 4 Abs. 1 Satz 1 oder Art. 5 Abs. 1 Satz 1 DA nicht, nicht richtig, nicht vollständig oder nicht rechtzeitig bereitstellt, handelt nach § 15 Abs. 2 Nr. 2 DADG ordnungswidrig. Bußgeldbehörde ist nach § 15 Abs. 7 und § 16 DADG die Bundesnetzagentur.",
    hinweis: "Bußgeldverfahren und Zivilverfahren sind zu trennen. Neben dem Bußgeld bleiben der Anspruch auf Bereitstellung, einstweiliger Rechtsschutz und Schadensersatz. Nutzt oder offenbart der Empfänger ein Geschäftsgeheimnis anschließend unbefugt, greifen die Ansprüche nach §§ 6 bis 10 GeschGehG, die nach § 9 GeschGehG bei Unverhältnismäßigkeit ausgeschlossen sein können.",
    frist: "Der Bußgeldrahmen des § 15 Abs. 4 DADG ist gestaffelt und reicht von 50 000 Euro über 100 000 und 500 000 Euro bis zu 5 Millionen Euro. Für Unternehmen mit mehr als 250 Millionen Euro Gesamtumsatz tritt nach § 15 Abs. 5 DADG eine Umsatzgrenze von 2 Prozent hinzu. Der höchste Rahmen gilt nicht für die Verweigerung des Datenzugangs, sondern für das Abwerben von Nutzern nach Art. 5 Abs. 3 DA.",
    normen: "Art. 40 DA · § 15, § 16 DADG · §§ 6 bis 10 GeschGehG",
    quelle: "DADG, BGBl. 2026 I Nr. 157, § 15 Abs. 2 Nr. 2, Abs. 4, Abs. 7"
  }
];

const VERBINDUNGEN = [
  { von:"s1",  nach:"s2",  label:"" },
  { von:"s2",  nach:"s3",  label:"" },
  { von:"s3",  nach:"s4",  label:"" },
  { von:"s4",  nach:"s5",  label:"" },
  { von:"s5",  nach:"s6a", label:"Ja",   labelTyp:"ja" },
  { von:"s5",  nach:"s6b", label:"Nein", labelTyp:"nein" },
  { von:"s6b", nach:"s7",  label:"" },
  { von:"s7",  nach:"s8",  label:"" }
];

/* Disclaimer, über dem Diagramm */
const DISCLAIMER = "Diese Darstellung dient der Orientierung über den typischen Ablauf und stellt keine Rechtsberatung dar. Sie ersetzt insbesondere nicht die Prüfung des Einzelfalls durch eine Rechtsanwältin oder einen Rechtsanwalt. Rechtsstand 7. November 2026.";

const STAND = "Grundlage sind die Verordnung (EU) 2023/2854 und das Datenverordnung-Anwendungs-und-Durchsetzungs-Gesetz (DADG) vom 26. Mai 2026, BGBl. 2026 I Nr. 157. Eine Rechtsprechung speziell zu Art. 4 oder Art. 5 DA und eine konsolidierte Verwaltungspraxis der Bundesnetzagentur zum Geheimnisschutz sind bislang nicht nachgewiesen. Der Digital Omnibus befindet sich im Gesetzgebungsverfahren und ist nicht geltendes Recht, mögliche Änderungen der Art. 4 und 5 DA sind hier nicht eingearbeitet.";

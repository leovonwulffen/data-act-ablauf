# Geschäftsgeheimnisschutz – Zeitlicher Ablauf

Die Ablaufgrafik aus der Unternehmensdialog-Präsentation als anklickbare Version.
Jeder Schritt öffnet ein Detailfeld mit Rechtsgrundlage, Zeitmaßstab,
Praxishinweis und Quellenlage.

**Rechtsstand 7. November 2026.**

## Öffnen

**In VS Code:** Extension *Live Server* installieren, dann Rechtsklick auf
`index.html` → „Open with Live Server“.

**Ohne VS Code:** `index.html` doppelklicken. Funktioniert ebenfalls, weil die
Daten über ein `<script>`-Tag geladen werden und nicht per `fetch()`.

## Schrift und Farbe

Nach Brand Guide: Projektfarbe **#6023F2**, Schrift **Hasköy**.

Hasköy ist quelloffen (SIL Open Font License, Ertekin Erdin) und liegt unter
`github.com/ertekinno/haskoy`. Im Repository unter `fonts/woff2/` liegen die
fertigen Webfont-Dateien.

**Drei Dateien in denselben Ordner legen wie `index.html`:**

```
Haskoy-Regular.woff2
Haskoy-SemiBold.woff2
Haskoy-Bold.woff2
```

**Fehlen die Dateien, greift Helvetica Neue als Ersatz** – die Grafik
funktioniert also auch ohne, sieht dann aber nicht markenkonform aus.

## Inhalte pflegen

Alles Inhaltliche steht in `daten.js`.

**Neuer Schritt:** Block in `SCHRITTE` ergänzen. `spalte` und `zeile` legen die
Position im Raster fest (3 Spalten, beliebig viele Zeilen).

**Neuer Pfeil:** Eintrag in `VERBINDUNGEN`. Die Linienführung wird automatisch
berechnet, gerade bei gleicher Zeile oder Spalte, sonst als Stufe. Zweige aus
demselben Knoten werden seitlich versetzt geführt, damit sie sich nicht
überdecken.

**Felder je Schritt:** `was`, `frist` (optional), `hinweis`, `normen`, `quelle`,
dazu zwei optionale Felder für offene Punkte. `hinweisKasten` setzt den Text in
einen ockerfarbenen Kasten innerhalb des Praxishinweises, `offenerPunkt` hängt
ihn als eigenen Abschnitt „Noch abzusichern“ unten an. Beide erzeugen die Marke
„offen“ am Kasten im Diagramm.

**Disclaimer und Fußtext:** `DISCLAIMER` steht über dem Diagramm, `STAND`
darunter. Beide am Ende von `daten.js`.

**Typen** steuern Farbe und Rahmen:

| Typ            | Wirkung                                |
|----------------|----------------------------------------|
| `start`        | violetter Rand                         |
| `normal`       | grauer Rand                            |
| `entscheidung` | violett hinterlegt                     |
| `ja`           | grün                                   |
| `nein`         | rot                                    |
| `folge`        | ocker, für die Schritte 7 und 8        |

## Quellenlage

Primärquellen sind die Verordnung (EU) 2023/2854 und das
Datenverordnung-Anwendungs-und-Durchsetzungs-Gesetz (DADG) vom 26. Mai 2026,
BGBl. 2026 I Nr. 157, in Kraft seit 30. Mai 2026. Dazu kommt die
Projektquelle Kiefer/Schneider, GRUR-Prax 2025, 648.

Nach der Abstimmung mit Johanna vom 9. November sind die Hinweiskästen zu den
Schritten 3, 4 und 8 entfernt. Der Hinweis zu Schritt 5 steht jetzt im
Praxishinweis, der zu Schritt 6b ebenfalls, dort weiterhin farbig hinterlegt.
Als offen markiert ist damit nur noch Schritt 6b, nämlich die Schwelle des
schweren wirtschaftlichen Schadens.

Zwei Punkte sind weiterhin redaktionell offen, auch wenn sie nicht mehr im
Detailfeld stehen. Die Nummer der Begriffsbestimmung in Art. 2 DA, über die der
Verweis auf Art. 2 Nr. 1 der Richtlinie (EU) 2016/943 läuft, und der Absatz der
Parallelregelung in Art. 5 DA für die Schutzmaßnahmen. Die Zuordnung der
Nichtbereitstellung zum Bußgeldrahmen bis 500 000 Euro folgt aus der
Zusammenschau von § 15 Abs. 2 Nr. 2 und Abs. 4 DADG.

Der Digital Omnibus ist nicht eingearbeitet, weil er kein geltendes Recht ist.

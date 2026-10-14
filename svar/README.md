# Mottak for svarene

GitHub Pages kan bare vise sida, ikke ta imot data. Svarene sendes derfor til et
Google-regneark via Apps Script. Oppsettet tar rundt fem minutter:

1. Lag et nytt Google-regneark (sheets.new) og kall det «Kortsortering».
2. Velg **Utvidelser → Apps Script**. Slett innholdet i `Code.gs` og lim inn
   innholdet i `svar/Code.gs` fra dette repoet. Lagre.
3. Velg **Distribuer → Ny distribusjon**, type **Nettapp**. Sett «Kjør som»
   til deg selv og «Hvem har tilgang» til **Alle**. Trykk Distribuer og godkjenn
   tilgangen.
4. Kopier adressen til nettappen (slutter på `/exec`).
5. Åpne `index.html` i repoet, finn linja `const SVAR_ENDEPUNKT = "";` og lim
   adressen inn mellom anførselstegnene. Commit og push; GitHub Pages
   oppdaterer seg på et minutt.

Hvert svar blir én rad i regnearket. Kolonnen «kort → gruppe» sier hvilket
gruppenavn hvert kort fikk, så du kan lage en pivot per linje.

Til svarene er koblet, får deltakerne laste ned svaret som fil eller kopiere
det, og kan sende det til deg.

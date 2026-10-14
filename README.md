# Kortsortering: ferge og hurtigbåt i Nordland

Åpen kortsortering til brukertest av områdeinndelingen på reisnordland.no.
Deltakeren sorterer de 48 ferge- og hurtigbåtlinjene i Nordland i grupper de
lager og navngir selv. Legg `#ferge`, `#hurtigbat` eller `#begge` bak adressen
for å forhåndsvelge kortsettet.

## Sett opp på Netlify (ca. fem minutter)

1. Gå til app.netlify.com, velg **Add new site → Import an existing project**
   og koble til GitHub. Velg dette repoet. Bygg-kommando står tom, publish
   directory er `.` (ligger i `netlify.toml`). Trykk Deploy.
2. Gå til **Site configuration → Forms** og slå på **Form detection**.
   Trykk **Trigger deploy** én gang til, så Netlify finner skjemaet
   «kortsortering».
3. Under **Forms → Form notifications** legger du inn e-posten din, så får du
   hvert svar på e-post. Alle svar ligger også under **Forms → kortsortering**,
   med nedlasting som CSV.
4. Gi sida et bedre navn under **Site configuration → Site details → Change
   site name**, for eksempel `reis-kortsortering`.

Hvert svar har kolonnene alias, bor, kjenner, sett, antallGrupper,
antallFlyttinger, kommentar, `grupper` (JSON), `kortTilGruppe` (JSON: linje →
gruppenavn) og `svar` (hele svaret som JSON).

## Alternativ: Vercel eller annen statisk hosting

Vercel har ikke skjema-mottak. Sett da `const MOTTAK = "";` i `index.html`
og bruk Google Apps Script-mottaket i `svar/` (se `svar/README.md`).

Kildefila vedlikeholdes i prosjektmappa som `design/kortsortering.html`.

# Lukkarikone
Hae suoraan oman ryhmän tiedot lukkarikoneesta.

## Selainlaajennus

Projektin rakenne on Chrome- ja Chromium-pohjaisille selaimille tarkoitettu Manifest V3 -laajennus:

```text
manifest.json
src/
	content/lukkarikone.js        # hakee ja lisää ryhmän automaattisesti
```

Ryhmän nimi vaihdetaan tiedoston `src/content/lukkarikone.js` alussa olevan
`groupName`-muuttujan arvoksi. Laajennus toimii vain osoitteessa
`https://lukkarit.centria.fi/#/schedule`.

### Kehitys

1. Avaa selaimen laajennussivu, esimerkiksi `chrome://extensions`.
2. Ota kehittäjätila käyttöön.
3. Valitse **Lataa pakkaamaton** ja valitse tämä projektikansio.
4. Avaa Lukkarikoneen sivu ja laajennuksen popup.

Lukkarikoneen HTML-rakenne voi vaihdella. Sivukohtainen sovitus tehdään tiedostossa `src/content/lukkarikone.js`.

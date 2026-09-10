# Lukkarikone
Hae suoraan oman ryhmän tiedot lukkarikoneesta.

# Ryhmän vaihtaminen
1. Avaa tiedosto [src/content/lukkarikone.js](./src/content/lukkarikone.js#3).
2. Etsi rivi:

	```javascript
	const groupName = "ATIS26K";
	```

3. Vaihda `ATIS26K` toiseksi ryhmän nimeksi, esimerkiksi `ESIMERKKI-RYHMÄ-TUNNUS`:

	```javascript
	const groupName = "ESIMERKKI-RYHMÄ-TUNNUS";
	```

4. Päivitä laajennus selaimen laajennussivulla.
5. Avaa tai lataa uudelleen Lukkarikoneen sivu.

# ASENNUS CHROME
1. Avaa chromessa: `chrome://extensions`.
2. Ota kehittäjätila käyttöön.
3. Valitse **Lataa pakkaamaton** ja valitse tämä projektikansio.
4. Avaa Lukkarikoneen sivu.

# ASENNUS FIREFOX
1. Avaa firefoxissa: about:debugging#/runtime/this-firefox
2. Valitse Load Temporary Add-on...
3. Valitse projektin manifest.json
4. Avaa Lukkarikoneen sivu
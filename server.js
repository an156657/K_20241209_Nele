/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

// Das Modul express wird mit der Funktion require einer Konstanten namens express zugwiesen.

const express = require('express');

// Der Body-Parser ermöglicht es uns, Daten aus dem Kundenformular auf dem Server entgegenzunehmen.
// Der Body-Parser wird im Terminal mit dem Befehl 'npm install -g body-parser' installiert.

const bodyParser = require('body-parser');

// Die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links 
// zugewiesen an die Konstante namens PORT. Das einfache Gleichheitszeichen lässt sich also übersetzen
// mit "... wird zugewiesen an ..."

const PORT = 3000;

// Der Wert '0.0.0.0' wird zugewiesen an eine Konstante namens HOST 
const HOST = '0.0.0.0';

// App

const app = express();

// Es wird der App bekanntgegeben, wo die styles zu finden sind.
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Der Bodyparser wird in der app eingebunden.

app.use(bodyParser.urlencoded({extended: true}))


// Hier kommt das Kunden(-berater) objekt hin:

class Kunde {constructor(){ this.Name
							this.Vorname
							this.Benutzername
							this.Kennwort
							this.KundenId		}}


let kunde1 = new Kunde()
kunde1.Name="Müller"
kunde1.Vorname="Franz"
kunde1.Benutzername="franz.müller123"
kunde1.Kennwort="123456789"
kunde1.KundenId=3


class Kundenberater {constructor(){ this.Name
									this.Vorname		}}							


let kundenberater1=new Kundenberater()
kundenberater1.Name="Kiff"
kundenberater1.Vorname="Pit"			

let kundenberater2 = new Kundenberater()
kundenberater2.Name="Schmidt"
kundenberater2.Vorname="Otto"


let kundenId = 3

if(kundenId>10){kundenberater2.Name} else{if kundenId<=10}{kundenberater1.Name} else{if (kundenId<=0){"kein Kundenberater"}}



// 4. Geben Sie die Werte Ihres Kundenberaterobjekts auf der Seite aus, indem Sie entsprechende Anpassungen in der app.get und der ejs-Datei vornehmen. Wenn sich das Objekt ändert, muss sich natürlich die Ausgabe auf Ihrer Seite ändern. 
// 5. Erweitern Sie das Projekt um einen zweiten Kundenberater. Wenn der Kunde eine ID zwischen 1 und 10 hat, soll ihm der erste Kundenberater angezeigt werden. Kunden mit höherer ID bekommen den zweiten Kundenberater zugeordnet. 


// 3. Erstellen Sie die Loginformular, indem Benutername und Kennwort abgefragt werden.
// 4. Wenn Kennwort und Benutzername korrekt sind, dann soll auf der Login-Seite angezeigt werden "Sie wurden eingeloggt", ansonsten soll auf der Seite stehen: "Versuchen Sie es erneut"


app.get('/', (req, res) => {
	res.render('index.ejs',{});
});


app.get('/agb', (req, res) => {
	res.render('agb.ejs',{});
});

app.get('/hilfe', (req, res) => {
	res.render('hilfe.ejs',{});
});

app.get('/kontenuebersicht', (req, res) => {
	res.render('kontenuebersicht.ejs',{});
});


app.get('/postfach', (req, res) => {
	res.render('postfach.ejs',{});
});

app.get('/kreditBeantragen', (req, res) => {
	res.render('kreditBeantragen.ejs',{
		Meldung:""
	});
});



app.get('/ueberweisungAusfuehren', (req, res) => {
	res.render('ueberweisungAusfuehren.ejs',{});
});


app.get('/profil', (req, res) => {
	res.render('profil.ejs',{});
});




// Die Funktion app.get('/geldAnlegen...) wird abgearbeitet, wenn der Benutzer die Seite geldAnlegen
// im Browser ansurft.

app.get('/geldAnlegen', (req, res) => {

	// Die Serverantwort an den Browser wird gerendert an den Browser zurückgegeben.
	// Dazu wird die Funktion render() aufgerufen. 

	res.render('geldAnlegen.ejs',{

		// In der geldAnlegen.ejs gibt es die Variablen Betrag und Laufzeit.
		// Der Server übergibt die folgenden Werte an den Browser:

		Betrag:120,
		Laufzeit:2,
		Meldung: ""
	})
});

// Die Funktion app.post('/geldAnlegen...) wird abgearbeitet, wenn der Kunde auf dem Formular den Absenden-Button klickt.

app.post('/geldAnlegen', (req, res) => {

	// Die Werte, die der Kunde im Formular eingegeben hat, werden an den Server gesendet.
	// Der Wert der Variablen Betrag wird aus dem body der Kundenanfrage (req) ausgelesen und zugewiesen an die lokale Variable
	// namens betrag.

	let betrag = req.body.Betrag;
	console.log("geldAnlegen: Gewünschter Betrag: " + betrag + " Euro")

	let laufzeit = req.body.Laufzeit;
	console.log("geldAnlegen: Gewünschte Laufzeit: " + laufzeit + " Jahre")

	let zinssatz = 0.1

	let zinsen = betrag * zinssatz;

	res.render('geldAnlegen.ejs',{
		Betrag: betrag,
		Laufzeit: laufzeit,
		Meldung: "Ihre Zinsen betragen: " + zinsen
	});
});

app.get('/login', (req, res) => {
	res.render('login.ejs',{});
});



// Mit listen() wird der Server angewiesen, auf den angegebenen Host und
// Port zu lauschen.  
app.listen(PORT, HOST);

// Mit der Anweisung console.log() wird dem Server-Administrator auf der
// Konsole angezeigt, was der Server macht. Der Programmierer schreibt dazu 
// in die runden Klammern den Ausdruck, der auf der Konsole angezeigt
// werden soll. Die Werte der beiden Konstanten HOST und PORT werden in den
// Ausdruck übergeben. Ein Verb mit anschließenden runden Klammern steht
// immer für eine Anweisung etwas zu tun. 
console.log(`Running on http://${HOST}:${PORT}`);




app.post('/kreditBeantragen', (req, res) => {

	let betrag = req.body.Betrag;
	console.log("kreditBeantragen: Gewünschter Kreditbetrag: " + betrag + " Euro")

	let zinssatz = req.body.Zinssatz;
	console.log("kreditBeantragen: Gewünschter Zinssatz: " + zinssatz)

	let laufzeit = req.body.Laufzeit;
	console.log("kreditBeantragen: Gewünschte Laufzeit: " + laufzeit + " Jahre")

	
	let rückzahlungsbetrag = betrag * Math.pow((1+zinssatz),laufzeit)

	res.render('kreditBeantragen.ejs',{
		Betrag: betrag,
		Laufzeit: laufzeit,
		Meldung: "Ihr Rückzahlungsbetrag beträgt: " + rückzahlungsbetrag
	});
});

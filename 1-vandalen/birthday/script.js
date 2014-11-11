"use strict";

window.onload = function(){

	var birthday = function(date){
		//Om inte inmatat datum är på formen "ÅÅÅÅ-MM-DD" så ska du kasta ett undantag med ett lämpligt felmeddelande.
		//Utifrån den inmatade strängen ska du i funktionen räkna ut hur många dagar det är kvar till att användaren fyller år och returnera detta.
		//Din kod här.
		var birthDate = new Date(date); // Nytt date-objekt skapas som tar det inmatade datumet från användaren som argument.
		var todaysDate = new Date(); //Nytt date-objekt skapas med dagens datum.
		var daysUntilBirthday = (todaysDate.getTime() - birthDate.getTime())/(1000*60*60*24);   //get.Time används för att räkna ut millisekunderna mellan de två datumen.
		if(isNaN(birthDate)){
			throw new Error("Du måste skriva in ett datum i formatet: 'ÅÅÅÅ-MM-DD'"); //Om användaren inte matar in några siffor så visas ett felmeddelande.
		}
	var days = todaysDate.getDate() - birthDate.getDate();
	var months = todaysDate.getMonth() - birthDate.getMonth();
	if (days === 0 && months === 0){
		return 0;
	}
	if (days === -1 && months === 0) {
		return 1;
	}
	if (birthDate < todaysDate){
		birthDate.setFullYear(todaysDate.getFullYear() + 1);
	}
	return Math.round(Math.abs(daysUntilBirthday));
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}

	});



};

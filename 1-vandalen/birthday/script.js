"use strict";

window.onload = function(){


	var birthday = function(date){
		//Om inte inmatat datum är på formen "ÅÅÅÅ-MM-DD" så ska du kasta ett undantag med ett lämpligt felmeddelande.
		//Utifrån den inmatade strängen ska du i funktionen räkna ut hur många dagar det är kvar till att användaren fyller år och returnera detta.
		//Din kod här.

		var birthDate = new Date(date); // Nytt date-objekt skapas som tar det inmatade datumet från användaren som argument.
		var todaysDate = new Date(); //Nytt date-objekt skapas med dagens datum.
		var daysUntilBirthday = todaysDate-birthDate;


		if(isNaN(birthDate)){
			throw new Error("Du måste skriva in ett datum i formatet: 'ÅÅÅÅ-MM-DD'");
		}





		//Betrakta speciellt hur du ska hantera följande:
		//Användaren kan redan ha fyllt år? Exempelvis i mars.
		//Vad händer vid skottår?
		//Fundera kring om din kod uppför sig olika före eller efter klockan 12.00 på dagen.






		// Skapa utifrån det inlästa datumet ett datumobjekt som representerar när användaren fyller år nästa gång.
		// Utgå ifrån att användaren fyller år i år.
		// Fundera på hur du kan få fram aktuellt år utan att skriva in det i klartext.
		// Skapa sedan ytterligare ett datumobjekt med dagens datum.
		// Genom att subtrahera antalet millisekunder till dags dato från antalet millisekunder
		// då du fyller år får du skillnaden mellan datumen.
		// Kan du via denna skillnad se om användaren fyllt år?
		// Om så vad blir då nästa steg?
		// När du fått detta att fungera kan du sedan omvandla antalet millisekunder
		//till dagar och du är klar med uppgiften.

		//För att ta reda på hur många millisekunder som förflutit
		//sedan 1 januari, 1970 till ett visst datum
		//går det bra att använda följande funktion på en Date-variabel: getTime()


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

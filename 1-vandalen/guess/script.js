"use strict";

window.onload = function(){

	var secret = Math.floor((Math.random() * 100) + 1); // Detta tal behöver bytas ut mot ett slumpat tal.
	var guesses = 0;


	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		guesses +=1;
		// Plats för förändring.


		// Returnera exempelvis:
	if (1>number||number>100){
		return [false, "Det angivna talet ligger inte inom intervallet 0-100. Försök igen."];
	}
	else if (number==secret){
		return [true, "Grattis! Det hemliga talet var " + secret + " och du behövde " + guesses + " gissningar för att lista ut det."];
	}
	else if (number<secret){
		return [false, "Tyvärr, det hemliga talet är större än så. Gissa högre!"];
  }
	else if (number>secret){
		return [false, "Tyvärr, det hemliga talet är mindre än så. Gissa lägre!"];
	}

	};

	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}

	});
};

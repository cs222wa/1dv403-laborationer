"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren.

	//ändra alla versaler i argumentet till gemener och alla gemener i argumentet till versaler
	//även å, ä, ö ska påverkas.


	strToUpper = str.toUpperCase();  //ändrar alla gemener till versaler
	strToLower = str.toLowerCase();	//ändrar alla versaler till gemener

	strCombined = (strToUpper + strToLower);	//slå ihop de två nya strängarna

	// alla a och A == #

	result1 = strCombined.replace(/a/g, “#”);		//omvandla alla gemena "a" till "#"
	result2 = result.replace(/A/g, “#”);				//omvandla alla versala "A" till "#"

	finalResult = (result1 + result2);					//Slå ihop de två resultaten


	return finalResult;			//return text efter omvandlingen är klar.


	//Om användaren klickar på "omvandla" utan att ha skrivit in en text så ska din funktion kasta ett undantag med ett lämpligt felmeddelande.
	try{
		convertString == NaN
		throw new FormatException();
	}
	catch (FormatException){
		return ["Du måste skriva in ett ord/ en mening i text-fältet."];
	}

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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}

	});



};

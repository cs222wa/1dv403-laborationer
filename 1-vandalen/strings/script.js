"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren.

//ändra alla versaler i argumentet till gemener och alla gemener i argumentet till versaler
//även å, ä, ö ska påverkas.


convertString.toUpperCase();
convertString.toLowerCase();

// alla a och A == #

converString.replace(/a/g, “#”);

//return text efter omvandlingen är klar.


//Om användaren klickar på "omvandla" utan att ha skrivit in en text så ska din funktion kasta ett undantag med ett lämpligt felmeddelande.
try{
	convertString == NaN
	throw new FormatException();
}
catch (FormatException){
	console.log("Du måste skriva in ett ord/ en mening i text-fältet.");
}




//var stringValue = “hello world”;

//alert(stringValue.toUpperCase());        //”HELLO WORLD”

//alert(stringValue.toLowerCase());        //”hello world”


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

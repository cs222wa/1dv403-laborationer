"use strict";

/*Informationen i persArr ska sorteras och skrivas ut:
Högsta, lägsta och medelålder + en sträng med
namnen sorterade i bokstavsordning och separerade med ", " (komma och efterföljande mellanslag). */

var makePerson = function(persArr){			//Tar emot en array (data) som argument och gör om det till ett objekt (persArr).

	var namesArr = persArr.map(function(name){  //.map hämtar ut värdet från varje person i arrayen och skapar en ny array (föreläsning 3)
    return name.names;											//returnerar value (t.ex. Johan Leitet) ifrån egenskapen name i arrayen persArr.
  });

	var names = namesArr.sort();		//sortera den nya arrayen innehållande namn.

	// var ages = persArr.map(function(ages){		//se ovan, men arrayen som skapas innehåller värdena för ages.
	// 	return age.ages;
	// });
	//



var minAge;
var maxAge;
var averageAge;



{var result = {names: names};
return result;}
};

//
// var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];  //Arrayen som innehåller informationen.
//
// var result = makePerson(data);  //Arrayen som ska behandlas skickas till makePerson.
//
// console.log(result); //resultatet av makePerson skrivs ut.


/*
jag använde aldrig det som Johan skrev i labben.
Ta bort det och kör en for loop med persArr.lenght.
Plocka ut text persArr[i].name och spara dem i en ny array som du kan sortera i bokstavsordning.
Logga ut det så kommer du börja förstå.
Så var det för mig iallafall.

Gjorde om min nya array till en sträng med alla namnen och
satte det som result.names = strängen…
Sist returnerar jag result.

Du ska bara ha en return i koden (sist).
Result är ett nytt objekt där du samlar alla dina nya egenskaper
som textsträngen med alla namn eller när du räknat ut average.
Du kan inte använda dig av Johans array rakt av utan måste
bearbeta lite innan så det bli rätt
*/

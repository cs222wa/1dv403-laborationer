"use strict";

/*Informationen i persArr ska sorteras och skrivas ut:
Högsta, lägsta och medelålder + en sträng med
namnen sorterade i bokstavsordning och separerade med ", " (komma och efterföljande mellanslag). */

var makePerson = function(persArr){			//Tar emot en array (data) som argument och gör om det till ett objekt (persArr).

	var namesArr = persArr.map(function(name){  //.map hämtar ut värdet från varje person i arrayen och skapar en ny array (föreläsning 3)
    return name.names;											//returnerar value (t.ex. Johan Leitet) ifrån egenskapen name i arrayen persArr.
  });

	var names = namesArr.sort();		//sortera den nya arrayen innehållande namn.

	// var agesArr = persArr.map(function(age){		//se ovan, men arrayen som skapas innehåller värdena för ages.
	// 	return age.ages;
	// });

	// var agesSorted = agesArr.sort(function(a, b){return a-b});		//sorterade åldrarna i stigande nummerordning

	//
	// var maxAge = agesSorted.max(function(agesSorted){					//Letade upp Maxvärdet i den sorterade Arrayen för åldrar.
	//     return Math.max.apply(Math, agesSorted);
	// });
	//

	// var minAge = agesSorted.min(function(agesSorted){			//Letade upp minimumvärdet i den sorterade Arrayen för åldrar.
	// 	return Math.min.apply(Math, agesSorted);
	// });


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

"use strict";

/*Informationen i persArr ska sorteras och skrivas ut:
Högsta, lägsta och medelålder + en sträng med
namnen sorterade i bokstavsordning och separerade med ", " (komma och efterföljande mellanslag). */

var makePerson = function(persArr){			//Tar emot en array (data) som argument och gör om det till ett objekt (persArr).

	// var names = persArr.map(function(name){  //.map hämtar ut värdet från varje person i arrayen och skapar en ny array (föreläsning 3)
  //   return name.names;												//genom att skapa en funktion.
	// });
	//
  // function names(persArr){						//en funktion som heter names.
  //     return names.sort(function (a, b){			//sorterar namnen i bokstavsordning
  //         return a.localeCompare(b);					//sorterar efter Å Ä och Ö.
  //     }).join(", ");}													//skriver ihop alla namn till en och samma sträng.

var result = {};
    var namesArray = [];
    var agesArray = [];

function getArrayElements(elem, index, arr) {
        namesArray[index] = elem.name;
        agesArray[index] = elem.age;
    }
    persArr.forEach(getArrayElements);

namesArray.sort(function(a, b) {
        return a.localeCompare(b);
    });

    nameString= namesArray.join(", ");

console.log(namesArray);



	// var agesArr = persArr.map(function(age){		//se ovan, men arrayen som skapas innehåller värdena för ages.
	// 	return age.ages;
	// });
	//
	// var agesSorted = agesArr.sort(function(a, b){return a-b});		//sorterade åldrarna i stigande nummerordning
	//
	// var maxAge = agesSorted.max(function(agesSorted){					//Letade upp Maxvärdet i den sorterade Arrayen för åldrar.
	//     return Math.max.apply(Math, agesSorted);
	// });
	//
	//
	// var minAge = agesSorted.min(function(agesSorted){			//Letade upp minimumvärdet i den sorterade Arrayen för åldrar.
	// 	return Math.min.apply(Math, agesSorted);
	// });
	//
	//
	// var averageAge = agesSorted.reduce(function(a,b){			//summerar alla värden i arrayen och delar dem på 2.
	// 	return (a+b)/2;
	// });
	//
	//

return {names: name};

};


var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];  //Arrayen som innehåller informationen.

var result = makePerson(data);  //Arrayen som ska behandlas skickas till makePerson.

console.log(result); //resultatet av makePerson skrivs ut.

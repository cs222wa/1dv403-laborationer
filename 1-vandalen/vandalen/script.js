"use strict";

/*Informationen i persArr ska sorteras och skrivas ut:
Högsta, lägsta och medelålder + en sträng med
namnen sorterade i bokstavsordning och separerade med ", " (komma och efterföljande mellanslag). */

var makePerson = function(persArr){					//Tar emot en array (data) som argument och gör om det till ett objekt (persArr).

 


	//FUNGERAR
	var namesArr = [];
	var agesArr = [];
	

	
	function getProperties(elem, index, arr){						//Letar upp indexvärdena för elementen ålder/namn en array och sparar dem till varsin ny array
		namesArr[index] = elem.name;
		agesArr[index] = elem.age;
	}
	persArr.forEach(getProperties);									//Skickar arrayen persArray till funktionen getProperties
	namesArr.sort(function(a, b){									//sorterar elementen i arrayen för namn (inklusive Å, Ä och Ö)
		return a.localeCompare(b);		
	});
	var namesStr = namesArr.join(", ");								//Sätter ihop alla elementen i arrayen för namn till en sträng, åtskildja av ett "," och ett mellanslag.
	
	var agesSorted = agesArr.sort(function(a, b){return a-b});		//sorterade åldrarna i stigande nummerordning
	var minAge = agesSorted[0];		
	var maxAge = agesSorted[agesSorted.length - 1];
	var agesTotal = agesSorted.reduce(function(a,b){				//summerar alla värden i arrayen.
		return a+b 
	});
	var averageAge = Math.round(agesSorted.reduce(function(a,b){				//Rundar av och returnerar det totala värdet av arrayen delat med arrayens längd..
		return (agesTotal)/agesSorted.length;
	}));
	 










	 
	//VARFÖR FUNGERAR INTE DETTA?
	 
	//var names = persArr.map(function(people){  //.map hämtar ut värdet från varje person i arrayen och skapar en ny array (föreläsning 3)
 	//    return people.name;												//genom att skapa en funktion.
 	// });
	
	// function people(persArr){						//en funktion som heter names.
	//     return names.sort(function (a, b){			//sorterar namnen i bokstavsordning
	//         return a.localeCompare(b);					//sorterar efter Å Ä och Ö.
	//     }).join(", ");}													//skriver ihop alla namn till en och samma sträng.
	 
	//	var agesArr = persArr.map(function(age){		//se ovan, men arrayen som skapas innehåller värdena för ages.
 	// 	return age.ages;
 	// });

	// var agesSorted = agesArr.sort(function(a, b){return a-b});		//sorterade åldrarna i stigande nummerordning

	 
	// var minAge = agesSorted.min(function(agesSorted){				//Letade upp Minvärdet i den sorterade Arrayen för åldrar.
	// 	return Math.min.apply(Math, agesSorted)
	// });
	
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





	


return {minAge: minAge, maxAge: maxAge, averageAge: averageAge, names: namesStr};

};
/*maxAge: maxAge,*/ /*minAge: minAge,*/

// var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];  //Arrayen som innehåller informationen.

// var result = makePerson(data);  //Arrayen som ska behandlas skickas till makePerson.

// console.log(result); //resultatet av makePerson skrivs ut.

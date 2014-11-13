"use strict";

/*Informationen i persArr ska sorteras och skrivas ut:
Högsta, lägsta och medelålder + en sträng med
namnen sorterade i bokstavsordning och separerade med ", " (komma och efterföljande mellanslag). */

var makePerson = function(persArr){					//Tar emot en array (data) som argument och gör om det till ett objekt (persArr).

	var namesArr = persArr							//letar upp elementen "name" i arrayen persArr
		.map(function(person){
			if(typeof person.name !== "string"){		//Om inte värdet i arrayen kan tolkas som en sträng visas ett felmeddelande
   			throw new TypeError ("Det angivna värdet kan inte tolkas som ett namn.");
  			}
			return person.name;
		})
		.sort(function(a, b){						//sorterar elementen i arrayen för namn (inklusive Å, Ä och Ö)
		return a.localeCompare(b);		
	})
	.join(", ")										//Sätter ihop alla elementen i arrayen för namn till en sträng, åtskildja av ett "," och ett mellanslag innan den returneras.
	.toString();
	var agesArr = persArr							//letar upp elementen "age" i arrayen persArr
		.map(function(person){
			if(isNaN(person.age)){					//Om inte värdet i arrayen kan tolkas som ett tal så visas ett felmeddelande.
			throw new TypeError ("Det angivna värdet kan inte tolkas som ett tal.");
			}
			return person.age;						
		})
		.sort(function(a, b){return a-b}			//sorterar värdena i nummerordning innan de returneras
	);
	var minAge = agesArr[0];											//sätter första index i den sorterade arrayen agesArr till minAge.
	var maxAge = agesArr[agesArr.length - 1];							//sätter den sista i index i den sorterade arrayen agesArr till maxAge.
	var agesTotal = agesArr.reduce(function(a,b){						//summerar alla värden i arrayen.
		return a+b 
	});
	var averageAge = Math.round(agesArr.reduce(function(a,b){			//Rundar av och returnerar det totala värdet av arrayen delat med arrayens längd..
		return (agesTotal)/agesArr.length;
	}));
	return {minAge: minAge, maxAge: maxAge, averageAge: averageAge, names: namesArr};
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);
	
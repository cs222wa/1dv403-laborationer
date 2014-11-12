"use strict";

var makePerson = function(persArr){ //tar emot en array som argument och gör om det till ett objekt. (persArr)

{ var result = {};






	var names = persArr.map(function (name){
		return name.names;
	});

var names = persArr.Name;
var ages = persArr.Age;

var minAge;
var maxAge;
var averageAge;









return result; }


var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);
}

/*Informationen i persArr ska sorteras och skrivas ut:
Högsta, lägsta och medelålder + en sträng med
namnen sorterade i bokstavsordning och separerade med ", " (komma och efterföljande mellanslag). */

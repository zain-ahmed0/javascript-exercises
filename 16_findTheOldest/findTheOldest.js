const findTheOldest = function (people) {
	let age = 0;
	let person;

	for (let i = 0; i < people.length; i++) {
		if (!people[i].yearOfDeath) {
			people[i].yearOfDeath = new Date().getFullYear();
		}

		let newAge = people[i].yearOfDeath - people[i].yearOfBirth;
		if (newAge > age) {
			age = newAge;
			person = people[i];
		}
	}
	return person;
};

// Do not edit below this line
module.exports = findTheOldest;

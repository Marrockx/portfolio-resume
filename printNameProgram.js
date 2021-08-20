/** @format */

class Name {
	constructor(name) {
		this.name = name;
	}
	// getter
	get myName() {
		return this.name;
	}
}
const printMyName = new Name("Mariam Adekola");
console.log(`My Name is: ${printMyName.myName}`);

// To test code, type in terminal - node printNameProgram.js and ENTER KEY

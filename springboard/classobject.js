class Vehicle {
	constructor(make, model) {
		/* Base class Vehicle with constructor initializing two-member attributes */
		this.make = make;
		this.model = model;
	}
}
class Car extends Vehicle {
	constructor(make, model, regNo, fuelType) {
		super(make, model); // Sub class calling Base class Constructor 
		this.regNo = regNo;
		this.fuelType = fuelType;
	}
	getDetails() {
		/* Template literals used for displaying details of Car. */
		console.log(`${this.make},${this.model},${this.regNo},${this.fuelType}`);
	}
}
let c = new Car("Hundai", "i10", "KA-016447", "Petrol"); // Creating a Car object 
c.getDetails(); 

// Excercise:
// Rewrite function with Class
function createCar(brand, model, speed) {
	let car = {
		// properties
        brand,
        model, // We use the function parameter
		speed,
		// methods:
		accelerate: function(amount) {
			this.speed += amount;
		},

		brake: function(amount) {
			this.speed -= amount;
		},

		status: function() {
			return this.brand + this.model + " running at " + this.speed + " km/h";
		}
	};
	return car;
}

// Now use create a Car object using the class

class Car {
    // Your code
}

let car = new Car("Renault", "Scenic", 60);

console.log(car); // Should return new object
console.log(car.status()); // Renault Scenic running at 60 km/h 

// Then create additinal class CarColor, exteds from the Car class and add new method carColor() in this class
// which return brand model and car color
car = new CarColor("Renault", "Scenic", "Red");

console.log(car);
console.log(car.carColor()); // Renault Scenic has Red color


/*********************** My code **************************/

class CreateCar{
    constructor (brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
		accelerate (amount){
			this.speed += amount;
		};

		brake (amount) {
			this.speed -= amount;
		};

		status (){
			return `${this.brand} ${this.model} running at ${this.speed} km/h`;
		}
    }

let car = new CreateCar("Renault", "Scenic", 60);

console.log(car);
console.log(car.status());

class CarColor extends CreateCar{
    constructor(brand, model, color){
        super(brand, model);
        this.color = color;
    }
    carColor(){
        return `${this.brand} ${this.model} has ${this.color} color`;
    }
}

car = new CarColor("Renault", "Scenic", "Red");

console.log(car);
console.log(car.carColor()); 
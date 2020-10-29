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
// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
	getMakeModel(){
		string str = make+" "+model;
		return str;
	}
}

function SportsCar(make, model, topSpeed) {
	this.make = make;
	this.model = model;
	this.topSpeed = topSpeed;
	super.car(make,model);
	getTopSpeed(){
		return topSpeed;
	}
	
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

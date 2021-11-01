

function Car(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;

}

Car.prototype.getFullName = function(){
    return this.name + this.model
}

Car.prototype.getAge = function(){

    let today = new Date();
    let todayYear = today.getFullYear();

    carYear = this.year;
    carAge = todayYear - carYear;
}

Car.prototype.changeColor = function(carColor){

    if(carColor == this.color){
        return  `Авто уже покрашено в ${this.color} цвет`;
    }
    else{
        return this.color = carColor
        console.log(`Авто перекрашено в ${this.color} цвет`);     
    }

}

Car.prototype.calculateWay = function(kilometers, fuel) {

    if(fuel < 10) {
        console.log(`Топлива осталсь: ${fuel}, сори нужна дозоправка`);
    }
    else {

        let totalFuelConsumption = kilometers / 100 * this.fuelCapacity

        if(totalFuelConsumption <= fuel) {
            let temp = fuel - totalFuelConsumption;
            let timetoway = kilometers / this.maxSpeed;
            console.log(`Расход топлива на расстояние: ${totalFuelConsumption}, по окончанию маршрута останется ${temp} топлива`);
            console.log(`Примерное время в пути ${timetoway} часа/ов`);
        }
        else {
            let temp = totalFuelConsumption - fuel;
            console.log(`Мы не доедем, нужна дозоправкa, не хватает ${temp} топлива`);
        }

    }
    
}

function BMW() {
    Car.apply(this, arguments);  
}
BMW.prototype = Object.create(Car.prototype);


function Lexus() {
    Car.apply(this, arguments);
}
Lexus.prototype = Object.create(Car.prototype);


function Audi() {
    Car.apply(this, arguments);
}
Audi.prototype = Object.create(Car.prototype);


BMW.prototype.PanoramicRoof = function() {

    console.log(`PanoramicRoof - "on" `);
}

Lexus.prototype.СlimateСontrol = function() {

    console.log(`СlimateСontrol - "off" `);
}

Audi.prototype.StartstopSystem = function() {

    console.log(`StartstopSystem - "on" `);
}


let vehicle = new Car("BMW", "e60", 1999, "красный", 150, 10, 60);

vehicle.calculateWay(300, 50);

let secondvehicle = new BMW("BMW", "e60", 1999, "красный", 150, 10, 60);

secondvehicle.calculateWay(350, 50);

let LX = new Lexus("BMW", "e60", 1999, "красный", 150, 10, 60);

LX.calculateWay(500, 60);



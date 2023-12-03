
class Vehicle{
        constructor(type, model, parts, fuel){
            this.type = type;
            this.model = model;
            this.parts = {
                engine: parts.engine,
                power: parts.power,
                quality: parts.power * parts.engine
            };
            this.fuel = fuel;
        }
        drive(fuelLose){
            this.fuel -= fuelLose;
        }
    }

//function vehicle(type, model, parts, fuel){
//}
//vehicle(opel, corsa, engine, benzin) - taka se podavat parametri na funktia

//let vehicle = new Vehicle('a', 'b', parts, 200); - taka se podavat parametri na klas

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

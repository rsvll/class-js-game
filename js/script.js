// var camry = {
//   wheels: 4,
//   engine: true,
//   windows: 6,
//   topSpeed: 120,
//   make:'Toyota',
//   model: 'Camry',
//   year: 2000,
//   honk: function() {
//     console.log("beep beep");
//   }
// };
// var focus = {
//   wheels: 4,
//   engine: 4,
//   windows: 6,
//   topSpeed: 130,
//   make: 'ford',
//   year: 2001,
//   honk function{
//     console.log("beep beep");
//   }
// };

class Car {
  constructor(topSpeed, make, model, year){
    this.wheels = 4;
    this.engine = true;
    this.windows = 6;
    this.topSpeed = topSpeed;
    this.make = make;
    this.mode = model;
    this.year = year;

  }

  honk(){
    console.log('beep beep');
  }
  sayHi(){
    console.log('Hello I am' + this.make + "" + this.model);
  }
  function raceTrack(car1, car2) {
    car1.sayHi();
    car2.sayHi();

    if(car1.topSpeed > car2.topSpeed){
      console.log(car1.model + 'Wins!!');
    } else if(car2.topSpeed > car1.topSpeed){
      console.log(car2.model + 'Wins!!');
    }else{
      console.log(car1.model + "and" + car2.model + " tie!");
    }
  }
}

var taurus = new Car(130, 'Ford', 'Taurus', 2010);
var camry = new Car(120, 'Toyota','Camry', 2000);
var focus = new Car(110, 'Ford','Focus', 2005);

raceTrack(focus, camry);

class Vehicle {
  /* public drive(): void {
    console.log('chugga chugga');
  } */

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.honk();
class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
// car.drive();
car.startDrivingProcess();
//car.honk();

/* const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk(); */

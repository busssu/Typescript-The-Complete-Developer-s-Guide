const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
// const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake: string[][] = [];

// Help with inference
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100); // Yanlnızca string eklenmesi gereken bir dizi olduğunu bize gösteriyor.

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible Types
// const importantDates: (Date | string)[] = [new Date()];
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100); // Bu dizi ne tarih ne de string dir bu yüzden hata verir.

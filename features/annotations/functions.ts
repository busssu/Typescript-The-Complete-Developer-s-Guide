const add = (a: number, b: number): number => {
  return a + b;
};

const secondAdd = (a: number, b: number) => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// return edilmediği zamanlarda kullanılır.
const Logger = (message: string): void => {
  console.log(message);
};

// fonksiyonun hiçbir zaman hiçbir şey döndürmesini beklemediğimiz zaman never kullanılır.
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwSecondError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const throwThirdError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather(forecast);

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logTodaysWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logTodaysWeather(todaysWeather);

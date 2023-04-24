const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

/* const pepsi = ['brown', true, 40];
pepsi[0] = 40;
pepsi[2] = 'brown';
 */

/* const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40; // Hata alırız çünkü sıralamaya uymuyor
 */

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

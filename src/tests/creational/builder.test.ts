import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';

it('Should return main dish price', () => {
  const mainDish = new MainDishBuilder();
  mainDish.makeMeal();
  const price = mainDish.getPrice();
  expect(price).toBe(110);
});

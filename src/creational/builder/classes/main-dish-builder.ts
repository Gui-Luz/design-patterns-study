import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Rice, Beans, Beverage, Meat, Dessert } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  makeMeal(): this {
    const rice = new Rice('Arroz', 50);
    const meat = new Meat('Carne', 30);
    const beans = new Beans('Feijão', 30);
    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Soda', 10);
    this._meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Pudim', 10);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  reset(): void {
    this._meal = new MealBox();
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}

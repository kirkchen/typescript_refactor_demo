import IDiscounter from './idiscounter';

export default class NormalDiscounter implements IDiscounter {
    Calculate(totalPrice: number, totalQty: number): number {
        if (totalPrice > 1000 && totalQty > 3) {
            totalPrice = totalPrice * 0.85;
        }

        return totalPrice;
    }
}
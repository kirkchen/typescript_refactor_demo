import IDiscounter from './idiscounter';

export default class VipDiscounter implements IDiscounter {
    Calculate(totalPrice: number, totalQty: number): number {
        if (totalPrice > 500) {
            totalPrice = totalPrice * 0.8;
        }

        return totalPrice;
    }
}
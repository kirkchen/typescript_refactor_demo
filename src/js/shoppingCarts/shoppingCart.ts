import ShoppingCartData from './shoppingCartData';
import ShoppingCartResult from './shoppingCartResult';
import IDiscounter from './discounters/idiscounter';
import VipDiscounter from './discounters/vipDiscounter';

export default class ShoppingCart {
    Calculate(cartDatas: ShoppingCartData[], level: string): ShoppingCartResult {
        var totalPrice = cartDatas.reduce((s, i) => s += i.price * i.qty, 0);
        var totalQty = cartDatas.reduce((s, i) => s += i.qty, 0);

        var price = 0;
        if (level === 'VIP') {
            let discounter: IDiscounter = new VipDiscounter();
            price = discounter.Calculate(totalPrice, totalQty);
        }
        else if (level === 'Normal') {
            if (totalPrice > 1000 && totalQty > 3) {
                price = totalPrice * 0.85;
            }
            else {
                price = totalPrice;
            }
        }

        return {
            totalPrice,
            totalQty,
            price
        }
    }
}
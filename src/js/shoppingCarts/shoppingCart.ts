import ShoppingCartData from './shoppingCartData';
import ShoppingCartResult from './shoppingCartResult';

export default class ShoppingCart {
    Calculate(cartDatas: ShoppingCartData[], level: string): ShoppingCartResult {
        var totalPrice = cartDatas.reduce((s, i) => s += i.price * i.qty, 0);
        var totalQty = cartDatas.reduce((s, i) => s += i.qty, 0);

        var price = 0;
        if (level === 'VIP') {
            if (totalPrice > 500) {
                price = totalPrice * 0.8;
            }
            else {
                price = totalPrice;
            }
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
import ShoppingCartData from './shoppingCartData';
import ShoppingCartResult from './shoppingCartResult';
import IDiscounter from './discounters/idiscounter';
import DiscounterFactory from './discounters/discounterFactory';

export default class ShoppingCart {
    Calculate(cartDatas: ShoppingCartData[], level: string): ShoppingCartResult {
        var totalPrice = cartDatas.reduce((s, i) => s += i.price * i.qty, 0);
        var totalQty = cartDatas.reduce((s, i) => s += i.qty, 0);

        let discounter = DiscounterFactory.GetDiscounter(level);
        var price = discounter!.Calculate(totalPrice, totalQty);

        return {
            totalPrice,
            totalQty,
            price
        }
    }
}
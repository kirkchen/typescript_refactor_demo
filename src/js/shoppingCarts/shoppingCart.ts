import ShoppingCartData from './shoppingCartData';
import ShoppingCartResult from './shoppingCartResult';
import IDiscounter from './discounters/idiscounter';
import VipDiscounter from './discounters/vipDiscounter';
import NormalDiscounter from './discounters/normalDiscounter';

export default class ShoppingCart {
    Calculate(cartDatas: ShoppingCartData[], level: string): ShoppingCartResult {
        var totalPrice = cartDatas.reduce((s, i) => s += i.price * i.qty, 0);
        var totalQty = cartDatas.reduce((s, i) => s += i.qty, 0);

        var price = 0;
        let discounter: IDiscounter;
        if (level === 'VIP') {
            discounter = new VipDiscounter();
        }
        else if (level === 'Normal') {
            discounter = new NormalDiscounter();
        }
        price = discounter!.Calculate(totalPrice, totalQty);

        return {
            totalPrice,
            totalQty,
            price
        }
    }
}
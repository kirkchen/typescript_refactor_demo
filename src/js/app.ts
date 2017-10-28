/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/custom.css';

import ShoppingCartData from './shoppingCarts/shoppingCartData';
import ShoppingCart from './shoppingCarts/shoppingCart';

$(document).ready(function () {
    $('input[name=qty]').on('change', ShoppingCartCalculate);
    $('select').on('change', ShoppingCartCalculate);

    function ShoppingCartCalculate() {
        // 取得畫面購物車輸入的資料
        var cart: ShoppingCartData[] = [];
        $('.product').each(function () {
            let price: number = +($(this).find('p').text());
            let qty: number = $(this).find('input').val() as number;

            cart.push({
                price: price,
                qty: qty
            })
        });

        let level: string = $('select[name=memberLevel]').val() as string;

        // 計算邏輯
        const shoppingCart = new ShoppingCart();
        const { totalPrice, totalQty, price } = shoppingCart.Calculate(cart, level);

        // 把計算結果顯示到畫面
        $('#totalPrice').text(totalPrice);
        $('#totalQty').text(totalQty);
        $('#price').text(price);
    }
});


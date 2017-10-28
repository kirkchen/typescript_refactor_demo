/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/custom.css';

import ShoppingCartData from './shoppingCarts/shoppingCartData';

$(document).ready(function () {
    $('input[name=qty]').on('change', function () {
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

        var level = $('select[name=memberLevel]').val();

        var totalPrice = cart.reduce((s, i) => s += i.price * i.qty, 0);
        var totalQty = cart.reduce((s, i) => s += i.qty, 0);

        var price = 0;
        if (level === 'VIP') {
            if (totalPrice > 500) {
                price = totalPrice * 0.8;
                $('#price').text(price);
            }
            else {
                $('#price').text(totalPrice);
            }
        }
        else if (level === 'Normal') {
            if (totalPrice > 1000 && totalQty > 3) {
                price = totalPrice * 0.85;
                $('#price').text(price);
            }
            else {
                $('#price').text(totalPrice);
            }
        }

        // 把計算結果顯示到畫面
        $('#totalPrice').text(totalPrice);
        $('#totalQty').text(totalQty);
    });

    $('select').on('change', function () {
        var level = $(this).val();
        $('input[name=qty]:eq(0)').trigger('change');
    })
});


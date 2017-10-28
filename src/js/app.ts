/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('../css/custom.css');

$(document).ready(function () {
    $('input[name=qty]').on('change', function () {
        var cart: any[] = [];
        $('.product').each(function () {
            var price = $(this).find('p').text();
            var qty = $(this).find('input').val();

            cart.push({
                price: price,
                qty: qty
            })
        });

        var level = $('select[name=memberLevel]').val();

        var totalPrice = cart.reduce((s, i) => s += i.price * i.qty, 0);
        $('#totalPrice').text(totalPrice);

        var totalQty = cart.reduce((s, i) => s += parseInt(i.qty), 0);
        $('#totalQty').text(totalQty);

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
    });

    $('select').on('change', function () {
        var level = $(this).val();
        $('input[name=qty]:eq(0)').trigger('change');
    })
});


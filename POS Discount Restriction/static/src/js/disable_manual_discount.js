odoo.define('pos_discount_restriction.ProductScreen', function (require) {
    'use strict';

    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');

    const CustomProductScreen = (ProductScreen) =>
        class extends ProductScreen {
            async set_discount(discount) {
                const selectedOrder = this.env.pos.get_order();
                const selectedLine = selectedOrder.get_selected_orderline();

                if (selectedLine) {
                    const original_price = selectedLine.product.lst_price;
                    const actual_price = selectedLine.get_unit_price();

                    if (actual_price < original_price) {
                        this.showPopup('ErrorPopup', {
                            title: 'Discount Not Allowed',
                            body: 'This product already has a discount from the pricelist.',
                        });
                        return;
                    }
                }

                await super.set_discount(discount);
            }
        };

    Registries.Component.extend(ProductScreen, CustomProductScreen);

    return CustomProductScreen;
});

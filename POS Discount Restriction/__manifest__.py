{
    'name': 'POS Discount Restriction',
    'version': '1.0',
    'summary': 'Restrict manual discounts if pricelist discount is applied',
    'category': 'Point of Sale',
    'author': 'Abdulrahman Khalifa',
    'depends': ['point_of_sale'],
    'assets': {
        'point_of_sale.assets': [
            'pos_discount_restriction/static/src/js/disable_manual_discount.js',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
}

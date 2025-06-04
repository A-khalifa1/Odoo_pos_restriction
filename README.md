# Odoo_pos_restriction
Odoo module to restrict manual discounts on POS items that already have a discount via Pricelist.
# POS Discount Control – Odoo 17

## 📌 Overview
This custom Odoo 17 module prevents POS cashiers from applying manual line discounts to products that already have a discount applied through the pricelist. It helps ensure pricing consistency and prevents double-discounting in the retail process.

## 🚀 Features
- ✅ Blocks manual discount input on POS screen if a product already has a pricelist discount.
- 🔒 Designed to work even if cashiers don't have access to view or edit pricelists.
- 🛠️ Lightweight and easily extendable.

## 🧠 Use Case
In retail environments where discounts are centrally managed via pricelists, this module helps enforce rules by blocking additional manual discounts at the cashier level.

## 📂 Module Structure
```
pos_discount_control/
│
├── manifest.py
├── models/
│ └── init.py
├── static/
│ └── src/
│ └── js/
│ └── block_manual_discount.js
├── views/
│ └── assets.xml # (optional if not using manifest assets key)
```


## ⚙️ Installation
1. Add the module to your custom addons path.
2. Restart the Odoo server.
3. Activate developer mode.
4. Install the module from the Apps menu.

## 💡 Notes
- This module is built for Odoo 17.
- If you're using the assets approach in `__manifest__.py`, you may not need the XML file.
- You can customize the blocking logic inside `block_manual_discount.js`.

## 👨‍💻 Author
**Abdulrahman Khalifa**


import cart from '../data/cart.js';
import sneakers from '../data/sneakerData.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderTableRow from '../shopping-cart/renderTableRow.js';

const tbody = document.querySelector('tbody');

const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const sneaker = findById(sneakers, lineItem.id);
    const dom = renderTableRow(sneaker, lineItem);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, sneakers);
orderTotalCell.textContent = toUSD(orderTotal);

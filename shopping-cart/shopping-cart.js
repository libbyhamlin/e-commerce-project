import cart from '../data/cart.js';
import sneakers from '../data/sneakerData.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from '../shopping-cart/render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const sneaker = findById(sneakers, lineItem.id);
    const dom = renderLineItem(lineItem, sneaker);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, sneakers);
orderTotalCell.textContent = toUSD(orderTotal);

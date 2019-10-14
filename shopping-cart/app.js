import { renderTableRow } from '../shopping-cart/renderTableRow.js';
import sneakers from '../data/sneakerData.js';
import { makePrettyCurrency } from '../common/utils.js';

const tableElement = document.querySelector('tbody');

export const getById = (id, sneakers) => {
    let matchingSneaker;

    sneakers.forEach(sneaker => {
        if (sneaker.id === id) {
            matchingSneaker = sneaker;
        }
    });

    return matchingSneaker;
};

const getLineTotal = (order, item) => item.price * order.quantity;

const getCartTotal = (cart, sneakers) => {
    let cartTotal = 0;
    cart.forEach(order => {
        const orderSneaker = getById(order.id, sneakers);
        const lineTotal = getLineTotal(order, orderSneaker);

        cartTotal = cartTotal + lineTotal;
    });

    return cartTotal;
};

const addRow = (sneakerOrder, sneakers) => {
    const orderSneaker = getById(sneakerOrder.id, sneakers);
    const row = renderTableRow(orderSneaker, sneakerOrder);

    tableElement.appendChild(row);
};

const addRows = (cart, sneakers) => {
    cart.forEach(sneakerOrder => {
        addRow(sneakerOrder, sneakers);
    });
};

const buildTotalCell = (cart, sneakers) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = getCartTotal(cart, sneakers);

    totalCell.textContent = makePrettyCurrency(cartTotal);
};

const buildTable = (cart, sneakers) => {
    buildTotalCell(cart, sneakers);
    addRows(cart, sneakers);
};

const localStorageCart = localStorage.getItem('cart');
const parsedCartActualData = JSON.parse(localStorageCart);

buildTable(parsedCartActualData, sneakers);

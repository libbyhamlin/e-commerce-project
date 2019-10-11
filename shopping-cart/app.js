import { renderTableRow } from "../shopping-cart/renderTableRow.js";
import products, { cart } from "../data/sneakerData.js";
import { makePrettyCurrency } from "../common/utils.js";
import sneakers, { cart } from "../data/sneakerData.js";
import { makePrettyCurrency } from "../shopping-cart/renderTableRow.js";

const tableElement = document.querySelector("tbody");

export const getById = (id, sneakers) => {
  let matchingsneaker;

  skeakers.forEach(sneaker => {
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
    const lineTotal = getLineTotal(order, orderSneakers);

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
  const totalCell = document.getElementById("order-total-cell");
  const cartTotal = getCartTotal(cart, sneakers);

  totalCell.textContent = makePrettyCurrency(cartTotal);
};

const buildTable = (cart, sneakers) => {
  buildTotalCell(cart, sneakers);
  addRows(cart, sneakers);
};

const localStorageCart = localStorage.getItem("cart");
const parsedCartActualData = JSON.parse(localStorageCart);

buildTable(parsedCartActualData, dataSneakers);

// const tableElement = document.querySelector("tbody");

// cart.forEach(productOrder => {
//   sneaker.forEach(product => {
//       let sneakerTotal;
//   })
//   //storing order id in a readable variable
//   const sneakerIdFromOrder = sneakerOrder.id;

//   //looping through the fruits array to find the fruit that matches the fruit of this order
//   for (let i = 0; i < product.length; i++) {
//     //if the id of the fruit matches the id of the order...
//     if (sneaker.id === sneakerFromOrder) {
//       //go ahead and render the table row
//       const row = renderTableRow(sneakers[i], sneakerOrder);

//      tableElement.appendChild(row);
//     }
// }

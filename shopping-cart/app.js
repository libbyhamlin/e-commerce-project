import { renderTableRow } from "./renderTableRow.js";
import products, { cart } from "../sneakerData.js";
import { makePrettyCurrency } from "./utils.js";
import products, { cart } from "../sneakerData.js";
import { makePrettyCurrency } from "./renderTableRow.js";

const tableElement = document.querySelector("tbody");

cart.forEach(productOrder => {
  sneaker.forEach(product => {
      let sneakerTotal;
  })
  //storing order id in a readable variable
  const sneakerIdFromOrder = sneakerOrder.id;

  //looping through the fruits array to find the fruit that matches the fruit of this order
  for (let i = 0; i < product.length; i++) {
    //if the id of the fruit matches the id of the order...
    if (sneaker.id === sneakerFromOrder) {
      //go ahead and render the table row
      const row = renderTableRow(sneakers[i], sneakerOrder);
  
     tableElement.appendChild(row);
    }
  });

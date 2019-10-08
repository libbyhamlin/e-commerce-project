import { renderTableRow } from "./";
import products, { cart } from "../api.js";
import { makePrettyCurrency } from "../utils.js";
import products, { cart } from ".api,js";
import { makePrettyCurrency } from "./renderTableRow.js";

const tableElement = document.querySelector("tbody");

cart.forEach(productOrder => {
  fruit.forEach(product => {
      let fruitTotal;
  })
  //storing order id in a readable variable
  const fruitIdFromOrder = fruitOrder.id;

  //looping through the fruits array to find the fruit that matches the fruit of this order
  for (let i = 0; i < product.length; i++) {
    //if the id of the fruit matches the id of the order...
    if (fruit.id === fruitFromOrder) {
      //go ahead and render the table row
      const row = renderTableRow(fruits[i], fruitOrder);
  
     tableElement.appendChild(row);
    }
  });



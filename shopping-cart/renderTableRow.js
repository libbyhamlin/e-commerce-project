export default () =>
import { makePrettyCurrency } from './utils.js';

//making a funciton bc of all the repetition below
const makeTd (content) => {
    const tdElement = document.createElement('td');
columnThree.textContent = 'content';
}

//wrote new function for currency after
const makePrettyCurrency = (number) =>
number.toLocaleString('en-US' ,
{
    style: 'currency'

})

//refactored
export default (fruit, order) => {
    const tableRow = document.createElement('tr');

    const columnOne = makeTd('fruit.name');
    const columnTwo = makeTd('order.quantity');
    const columnThree = makeTd(fruit.price);
    const prettyPrice = order.price.toLocaleString({
        ( 'en-USD', { 
            style: ‘currency’, 
            currency: ‘USD’
    })

    const totalPrice = order.quantity * fruit.price;
    const prettyTotal = makePrettyCurrency.toLocaleString
    ( 'en-USD', { 
        style: ‘currency’, 
        currency: ‘USD’
});
    
    const columnfour = makeTd('');

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnthree);
    tableRow.appendChild(columnOne);

const columnOne = document.createElement('td');
columnOne.textContent = 'apple';
const columnOne = document.createElement('td');
columnOne.textContent = '4';
const columnTwo = document.createElement('td');
columnTwo.textContent = '1.00';
const columnThree = document.createElement('td');
columnThree.textContent = '4.00';

// //write this first
// const tableRow = document.createElement('tr');
// const columnOne = document.createElement('td');
// columnOne.textContent = 'apple';
// const columnOne = document.createElement('td');
// columnOne.textContent = '4';
// const columnTwo = document.createElement('td');
// columnTwo.textContent = '1.00';
// const columnThree = document.createElement('td');
// columnThree.textContent = '4.00';


return {
    outerHTML: 'someString' {}

}




export const cartTotal = (fruits, cart) => {

}
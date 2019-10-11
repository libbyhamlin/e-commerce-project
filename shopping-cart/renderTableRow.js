import { makePrettyCurrency } from '../common/utils.js';

//making a funciton bc of all the repetition below
const makeTd = content => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};

export default (sneakers, order) => {
    const tableRow = document.createElement('tr');

    const totalPrice = order.quantity * sneakers.price;
    const prettyPrice = makePrettyCurrency(sneakers.price);
    const prettyTotal = makePrettyCurrency(totalPrice);

    const columnOne = makeTd(sneakers.name);
    const columnTwo = makeTd(order.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};


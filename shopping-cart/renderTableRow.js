import { makePrettyCurrency } from '../common/utils.js';

//making a funciton bc of all the repetition below
const makeTd = content => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};

export default function renderTableRow(sneaker, cartObject) {
    const tableRow = document.createElement('tr');

    const totalPrice = cartObject.quantity * sneaker.price;
    const prettyPrice = makePrettyCurrency(sneaker.price);
    const prettyTotal = makePrettyCurrency(totalPrice);

    const columnOne = makeTd(sneaker.name);
    const columnTwo = makeTd(cartObject.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
}
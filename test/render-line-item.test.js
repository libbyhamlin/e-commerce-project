import sneakers from "../data/sneakerData.js";
import { findById } from "../common/utils.js";
import renderLineItem from "../shopping-cart/render-line-item.js";

const test = QUnit.test;

QUnit.module("Render Line Item");

test("renders a line item", assert => {
  // arrange
  const airJordan8 = {
    id: "airJordan8",
    quantity: 3
  };
  const airJordan8 = findById(sneakers, lineItem.id);
  const expected =
    '<tr><td class="align-left">Sneaker</td><td>3</td><td>$500.00</td><td class="line-item-total">$1500.00</td></tr>';

  // act
  const dom = renderLineItem(lineItem, "airJordan8");
  const html = dom.outerHTML;

  // assert
  assert.equal(html, expected);
});

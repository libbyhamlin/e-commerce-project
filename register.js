export function findProduct(items, code) {
  // loop the array
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

    // check the code against item.code
        if (item.code === code) {
            return item;
        }
    }

  // loop done
    return null;
}

export function calcLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}

// eslint-disable-next-line no-unused-vars
export function calcOrderTotal(cart, fruits) {
  // declare order total variable
  // loop the array of cart (line items)
  // lookup the product
  // calc line total
  // add to order total
  // return order total
}

import sneakers from '../data/sneakerData.js';
import cart from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {
  // arrange
    const id = 'airJordan3';
    const expected = 'Air-Jordan-III-Black-Cement';

  // act
    const foundSneaker = findById(sneakers, id);

  // assert
    assert.ok(foundSneaker);
    assert.equal(foundSneaker.name, expected);
});

test('find product by id returns null if not found', assert => {
  // arrange
    const id = 'not found';
    const expected = null;

  // act
    const foundSneaker = findById(sneakers, id);

  // assert
    assert.equal(foundSneaker, expected);
});

test('calculate line total', assert => {
  // arrange
    const quantity = 3;
    const price = 2.01;
    const expected = 6.03;

  // act
    const total = calcLineTotal(quantity, price);

  // assert
    assert.equal(total, expected);
});

// This one can be left to students to do...
test('calculate order total', assert => {
  // arrange
    const expected = 2000.0;

  // act
    const orderTotal = calcOrderTotal(cart, sneakers);

  // assert
    assert.equal(orderTotal, expected);
});

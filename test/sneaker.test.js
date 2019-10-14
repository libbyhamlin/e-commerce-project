import renderSneaker from '../products/render-sneaker.js';
import renderTableRow from '../shopping-cart/renderTableRow.js';

const test = QUnit.test;

test('Time to render Sneaker function', assert => {
    const airJordan8 = {
        id: 'air-Jordan-8',
        name: 'Air Jordan VIII',
        image: 'Air-Jordan-VIII-Aqua.jpg',
        description: 'Air Jordan VIII Cement Black',
        category: 'collectors-shoes',
        class: 'jordans',
        price: 500.0
    };

    const expected =
    '<li class="collectors-shoes" title="Air Jordan VIII Cement Black"><div class="jordans"><p id="air-Jordan-8">Air Jordan VIII</p><img src="Air-Jordan-VIII-Aqua.jpg"><p>Price: 500.00</p><button value="air-Jordan-8">Add To Cart</button></div></li>';

    const dom = renderSneaker(airJordan8);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

test('Render table row function', assert => {
    const cartItem =
        {
            id: 'airJordan8',
            quantity: 2,
            
        };

    const airJordan8 = {
        id: 'air-jordan-8',
        name: 'Air Jordan VIII',
        image: '../assets/Air-Jordan-VIII-Aqua.jpg',
        description: 'Air Jordan VIII',
        category: 'Collectors Shoes',
        price: 500.0
    };

    const expected =
    '<tr><td>Air Jordan VIII</td><td>2</td><td>$500.00</td><td>$1,000.00</td></tr>';

    // act
    const sneakerElementTr = renderTableRow(airJordan8, cartItem);
    const html = sneakerElementTr.outerHTML;

    // assert
    assert.equal(html, expected);
});
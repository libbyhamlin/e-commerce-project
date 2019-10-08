// IMPORT MODULES under test here:
import renderSneaker from '../sneaker-render.js';

const test = QUnit.test;

test('Time to render Sneaker function', function(assert) {
    const airJordan3 = {
        id: 'airJordan3',
        name: 'Air-Jordan-III-Black-Cement.jpg',
        description: 'Air Jordan III Cement Black',
        category: 'Collectors Shoes',
        price: 500.0
    };

    const expected =
    '<li><div><p> id="air-Jordan-8">name: Air Jordan VIII</p><img src="Air-Jordan-VIII-Aqua.jpg"><p>Price: 500.00</p></div></li>';

    assert.equal(html, expected);
});

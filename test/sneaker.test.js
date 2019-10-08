// IMPORT MODULES under test here:
import renderSneaker from '../sneaker-render.js';

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
    '<li class="collectors-shoes" title="Air Jordan VIII Cement Black"><div class="jordans"><p id="air-Jordan-8">Air Jordan VIII</p><img src="Air-Jordan-VIII-Aqua.jpg"><p>Price: 500.00</p></div></li>';

    const dom = renderSneaker(airJordan8);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});

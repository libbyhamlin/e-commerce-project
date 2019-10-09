//Put for loop here
import sneakers from '../sneakerData.js';
import sneakerRender from './sneaker-render.js';

const list = document.getElementById('sneakers');

for (let i = 0; i < sneakers.length; i++) {
    const sneaker = sneakers[i];
    const dom = sneakerRender(sneaker);
    list.appendChild(dom);
}

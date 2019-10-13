import sneakers from '../data/sneakerData.js';
import renderSneaker from './render-sneaker.js';

const list = document.getElementById('sneakers');

for (let i = 0; i < sneakers.length; i++) {
    const sneaker = sneakers[i];
    const dom = renderSneaker(sneaker);
    list.appendChild(dom);
}

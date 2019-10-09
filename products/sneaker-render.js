function sneakerRender(sneakers) {
    const li = document.createElement('li');
    li.className = sneakers.category;

    const div = document.createElement('div');
    div.className = sneakers.class;
    li.appendChild(div);
    li.title = sneakers.description;

    const p = document.createElement('p');
    p.id = sneakers.id;
    div.appendChild(p);
    p.textContent = sneakers.name;

    const img = document.createElement('img');
    img.src = sneakers.image;
    div.appendChild(img);

    const p1 = document.createElement('p');
    p1.textContent = 'Price: ' + sneakers.price.toFixed(2);
    div.appendChild(p1);

    const button = document.createElement('button');
    button.textContent = 'Add To Cart';
    button.value = sneakers.id;
    div.appendChild(button);
    

    return li;
}

export default sneakerRender;

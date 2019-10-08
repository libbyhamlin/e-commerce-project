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
    img.src = 'Air-Jordan-VIII-Aqua.jpg' + sneakers.img;
    li.appendChild(img);
    const p1 = document.createElement('p');
    p1.textContent = sneakers.price;
    li.appendChild(div);

    return li;
}

export default sneakerRender;

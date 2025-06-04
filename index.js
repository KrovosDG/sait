const products = [
    {
        name: 'Ноутбук ASUS',
        price: '75000 руб.',
        image: 'https://ogo1.ru/upload/resize_cache/iblock/b23/500_500_1/b23dd182da170cfbb2cb0ee691b65941.jpeg'
    },
    {
        name: 'Монитор Dell',
        price: '15000 руб.',
        image: 'https://avatars.mds.yandex.net/get-mpic/4737085/img_id6820835601639898154.jpeg/orig'
    },
    {
        name: 'Клавиатура Logitech',
        price: '3000 руб.',
        image: 'https://cdn1.ozone.ru/s3/multimedia-5/6381875081.jpg'
    }
];


function createProductNode(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const title = document.createElement('h3');
    title.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = product.price;

    productDiv.appendChild(img);
    productDiv.appendChild(title);
    productDiv.appendChild(price);

    return productDiv;
}


function renderCatalog() {
    const catalog = document.getElementById('catalog');

    while (catalog.firstChild) {
        catalog.removeChild(catalog.firstChild);
    }

    for (let i = 0; i < products.length; i++) {
        const productNode = createProductNode(products[i]);
        catalog.appendChild(productNode);
    }
}


const modal = document.getElementById('modal');
const addBtn = document.getElementById('addProductBtn');
const closeModalBtn = document.getElementById('closeModal');
const saveBtn = document.getElementById('saveProduct');

addBtn.onclick = function() {
    modal.style.display = 'block';
}

closeModalBtn.onclick = function() {
    modal.style.display = 'none';
    clearModalInputs();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        clearModalInputs();
    }
}

function clearModalInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productImage').value = '';
}


function addProduct() {
    const name = document.getElementById('productName').value.trim();
    const price = document.getElementById('productPrice').value.trim();
    const image = document.getElementById('productImage').value.trim();

    if (name && price && image) {
        products.push({name: name, price: price, image: image});
        renderCatalog();
        modal.style.display = 'none';
        clearModalInputs();
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
}

document.getElementById('saveProduct').onclick = function() {
    addProduct();
}

renderCatalog();

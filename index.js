const products = [
    { name: 'Ноутбук HP', price: '79 990 ₽', image: 'https://via.placeholder.com/300x200?text=HP' },
    { name: 'Процессор Intel Core i7', price: '29 990 ₽', image: 'https://via.placeholder.com/300x200?text=i7' },
    { name: 'Монитор Samsung UHD', price: '34 990 ₽', image: 'https://via.placeholder.com/300x200?text=Samsung' }
];

function renderProduct(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    card.appendChild(productImage);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'product-info';

    const productName = document.createElement('p');
    productName.className = 'product-name';
    productName.textContent = product.name;
    infoDiv.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.className = 'product-price';
    productPrice.textContent = `Цена: ${product.price}`;
    infoDiv.appendChild(productPrice);

    const productDesc = document.createElement('p');
    productDesc.className = 'product-desc';
    productDesc.textContent = 'Описание товара...'; 
    infoDiv.appendChild(productDesc);

    card.appendChild(infoDiv);

    return card;
}

document.addEventListener("DOMContentLoaded", () => {
    const catalogSection = document.getElementById('catalog');

    for(const product of products){
        const newCard = renderProduct(product);
        catalogSection.appendChild(newCard);
    }
});

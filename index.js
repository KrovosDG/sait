const products = [
    {
        name: 'Ноутбук ASUS ZenBook',
        description: 'Intel Core i7, 16GB RAM, SSD 512GB',
        price: 99990,
        imageUrl: 'https://img.5element.by/import/images/ut/goods/good_875a6e37-4e0c-11e8-8147-005056841710/good_img_7dfebf0b-4ead-11e8-80c3-00505684296c_600.jpg'
    },
    {
        name: 'Монитор BenQ ZOWIE XL2546K',
        description: 'IPS-матрица, частота 240Гц',
        price: 39990,
        imageUrl: 'https://cdn.cs.1worldsync.com/40/77/407780bc-e1b5-4c13-80d6-611d8b06c622.jpg'
    },
    {
        name: 'Клавиатура Corsair K95 RGB Platinum',
        description: 'Механические переключатели Cherry MX Speed Silver',
        price: 19990,
        imageUrl: 'https://yandex-images.clstorage.net/nL5N01s90/3899c9co1d/vh1-lVkKbCLOfnP2F6sMlmt91l9E_lRJqKGcKFmi2djYNkT-XsK-c2v5yhldeRpMwx0ig4V5oFib5HtSGC7JEfdccYxBXTQpynpmqla0AYIaW_ZwYsRjNY-DoUlHpsOR0D4D7wSo02AtprZmGlg6WeU3PvvAOP0X5LIcCkVbnmO2IAncMyxiEMN4cM1ekyarNE7HVW3TZiCsi6d3Wo3UsP0QScUDv_8vJKqWcCBoI079MifD3iTSEf-bMDJMarxengkc0QMmYBXUbEDQbbAEiTZt-lZoyXkJlIeMUWay9JbDHEfTCYXhIySjvl4QcyFlyzkQ6-cB0DjEpysPVXC9fJs5F-o5CG8B2Wd3wEqzL6s2fNt0WdduM4GWrk90ltS0zQJbzD2n3RoPpZ5eEH4ic-8hP-H5HNkt57QgN019tn-nJhHfNzJuIP1ZR91Ngim9IEHOZ0PvWQyht6thR6Tmr_Q_W8QBv8oqK6O8Tz58PG3oEQfc8BDDKu2DJwBXfYhHgjsIyA8BTzHVd0DRf4UkiQdI0nBl_38hgqONV2614J_aH0vnPK_qJzG9j2omXCB6yAQ12_0_-QzOgxssSlS8ZIsLLc8xEVEs2XJP816tD60MUuBgd-1fIJCGu0Jpqdqf2jNY1xKc7xo2kZZtM38uU_ktFPX4I-Mo_5gdF3ZVqkCBLxP5JCZ8EelNT-dQgjqmKWD5UFn3QC2WtKVTV7bUudMWaMg8jsgpObmxbwRZDVvYHCLX-i32BuyFIzFkSYBeugYc9iwgcQrATULIYZELqS1-31Bs9k8_tKKeZFmAyZf9E0X8J6PJIQibsFIqczlCzjkOx_Qp2SLTuAADXHu7UYErL845MWsG7HZg6XCQIb8ST_BjUcJbIrOyh0h_vsK07yJq6BO8_BQwpoJLG189XPg_J-nUJ_4P2Z0DMUtdi226FyHDNzF8JN5VdsR_tx63BkPvR2LQTw-xjK9RaYU'
    },
    {
        name: 'Геймпад Xbox Series X Elite',
        description: 'Беспроводное подключение, настраиваемые триггеры',
        price: 14990,
        imageUrl: 'https://avatars.mds.yandex.net/i?id=f37a12c7ae186b1c811f8dba7acd8ccc_l-5233211-images-thumbs&n=13'
    },
    {
        name: 'SSD Samsung 980 PRO',
        description: 'NVMe PCIe Gen4, объем 1TB',
        price: 12990,
        imageUrl: 'https://yandex-images.clstorage.net/nL5N01s90/3899c9co1d/vh1-lVkKbCLOfnP2F6sMlmt91l9E_lRJqKGcKFmi2djYNkT-Xsa9dW3xwxhHP0VKrER2gYJ5qwaT4n0DFy6dTf9dII1PDSki2Hlj5gnwXNZ3YpgISOpzOIeFqlhxleSy_AhU_B-T6Thwuo93LTAERdA6Lvn_Ouoj0po7F0Ftt0ubAy77ESFiDfd5RMJBlRGCNEzQZG7VXS22oKVPdIDHuvo2SdcIssQWOpCIYAF_DUnwLBTJ5i3yJsuiJQtua6xitzsnyjMcSiTidHTIQ5AGlgRR40dM918Oi6OgVWup_7bREHXoKJT6GjSGglofcw1A2AIk0uQGxC38ihwubEKXXqwGPtAyPk8U6U9O5kyEC50zQcREZ9VfH6qBkUt8k-qn8w5nzAi29AQombZ4I0omRvgCJN_nEOA104ACM2VXtE2nPibdOT1zC-96QNxNpS-jA1zDdWHDSSK_kotzS6zKhvYgVP46rc05KJGKYDR6AkDaEwrd-Q7nBeu9Cz9_UL56oAk83QcFVhb2bXjvbLQHjQRQ8XJs924ro4WtY22B6ZLQFn3vPJ3jGTiyt3AUdxhe6TYS_eUZxxDZugYQRXadepwlIfQzJl8m02pG_3KpC4gLctBaR9NlMZGVv3FNgPu35gN68wad4zUrgplDEUofcvAxB97rMPY5-JQDDF9SrGGaHh31JQJVAu1cU8hflDu3C2bedXLYQAOIpZFrUo39hfgSROwIu-oQG523UTZ5EFrXMzD4yDjXCM62AQJKfL98pDgP6Q8cbiviU1vOUo8StwZJ72ZD10QdrqWkal2f35PDJUraFZXEFTaprHw3cSF41g4e0vwhwS3ipg8GZViAQYcKN9s0E1UG0WtO30iDPowkaP5nacF7LIGWmV5JgtiD2gls5B621iQZvZhjAkQZReQXL_74P_cry4gvCEJ1imSEOCD9BC9uOt9mQN9foQyvMkXxQFbJbyCesqpMXa8'
    },
    {
        name: 'Рюкзак для ноутбука Timbuk2 Command',
        description: 'Материал Cordura, влагозащита',
        price: 11990,
        imageUrl: 'https://i.pinimg.com/originals/87/38/64/873864f0e6c6b8fe232125f4e8c4be73.jpg'
    },
    {
        name: 'Графическая карта MSI GeForce RTX 3080 Ti',
        description: 'Архитектура Ampere, объем VRAM 12ГБ',
        price: 149990,
        imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-8/c600/6758394524.jpg'
    },
    {
        name: 'Настольная лампа Philips Hue',
        description: 'Управление светом через приложение',
        price: 4990,
        imageUrl: 'https://yandex-images.clstorage.net/nL5N01s90/3899c9co1d/vh1-lVkKbCLOfnP2F6sMlmt91l9E_lRJqKGcKFmi2djYNkT-XsO6cWv9whBdeRpMwx0igIt8pFWb6HxVGyvLGP9Zco1AUjQpynpmqla0AYIaW_ZwYsRjNY-DoUlHpsOR0D4D7wSo02AtprZmGlg6WeU3PvvAOP0X5LIcCkVbnmO2IAncMyxiEMN4cM1ekyarNE7HVW3TZiCsi6d3Wo3UsP0QScUDv_8vJKqWcCBoI079MifD3iTSEf-bMDJMarxengkc0QMmYBXUbEDQbbAEiTZt-lZoyXkJlIeMUWay9JbDHEfTCYXhIySjvl4QcyFlyzkQ6-cB0DjEpysPVXC9fJs5F-o5CG8B2Wd3wEqzL6s2fNt0WdduM4GWrk90ltS0zQJbzD2n3RoPpZ5eEH4ic-8hP-H5HNkt57QgN019tn-nJhHfNzJuIP1ZR91Ngim9IEHOZ0PvWQyht6thR6Tmr_Q_W8QBv8oqK6O8Tz58PG3oEQfc8BDDKu2DJwBXfYhHgjsIyA8BTzHVd0DRf4UkiQdI0nBl_38hgqONV2614J_aH0vnPK_qJzG9j2omXCB6yAQ12_0_-QzOgxssSlS8ZIsLLc8xEVEs2XJP816tD60MUuBgd-1fIJCGu0Jpqdqf2jNY1xKc7xo2kZZtM38uU_ktFPX4I-Mo_5gdF3ZVqkCBLxP5JCZ8EelNT-dQgjqmKWD5UFn3QC2WtKVTV7bUudMWaMg8jsgpObmxbwRZDVvYHCLX-i32BuyFIzFkSYBeugYc9iwgcQrATULIYZELqS1-31Bs9k8_tKKeZFmAyZf9E0X8J6PJIQibsFIqczlCzjkOx_Qp2SLTuAADXHu7UYErL845MWsG7HZg6XCQIb8ST_BjUcJbIrOyh0h_vsK07yJq6BO8_BQwpoJLG189XPg_J-nUJ_4P2Z0DMUtdi226FyHDNzF8JN5VdsR_tx63BkPvR2LQTw-xjK9RaYU'
    },
    {
        name: 'Проектор Epson EH-TW6100',
        description: 'Разрешение Full HD, яркость 3200 люменов',
        price: 69990,
        imageUrl: 'https://yandex-images.clstorage.net/nL5N01s90/3899c9NdZI/uA8w2wQYNC7ebC_8WKgMgD0q2VRUtEVYr6DVZA_2m8aEcEmvSM69dWrxzRFFJ04c-hEghYMuoljM6CpTGHyYH_kLc5dDWS5yjS05qFCrCYIgd5pFSO5BBbXiiWpO_MPIhHVywjC2zh8RmrNvO14OSvIQI8mcOuY_9fA6CWNUkWGDHD35DiFoM9RoT-dsqwKkIk7Pf239aSC-l5FgT4_KoPsIXNcBk8EIFI-QZz1gE2HlMQ7n1hDhKNm_MwVDQqtRmgsl_BcZdi_7blTOQJMLlQBz51Z48FkqvJKGdH-S-YPZKl70PJDEEgumqGsWRi9exRcw69gG6xLHszMMa2ybSpggE_cgMU8K-Udv8luuEo8BUeJmc8tjBLOGi39Igt6A8ghe5R2y9QwcnL16NFg9euU1PvXEGd8w-4oYCktsm0ebNjfvDztRF_BSTOFQlgqCClLeeXX-bT6yp69BeJ_ZsfQeSNgIoe80K6OdWzF2DkjXLgfIxBHjKOy6PAxpfbVFhSgw3zcGWBvqVUbWV6EQgjRq-2Rs6VUNk7aHb3-T67b5Km_RFLbJJA2Ovk8XQCdZ0R4p6NQy3jjMtyYSWlitZZk_EMoFAVU00HNl1muNDasASfJUSe5rHY2ri2pwscqe0g5kyyam2zYtj6xqIVUgReseKcTHAvALyYohPkNfuEaXFiHjJC9QKMpXVM1ttjGqFm34cHfYfiqglrtVcKXEsecFQfk_lvUsMoKqWD9EHlrlOCDh9x3eGe65LhZkXY9gtB4A0hINUibfeUfQU5Ajtjxzw1l413YsrY2SVX2K9aLWCkXnGZbALT2QiE4EcxBs-BYO5NopxTTvsR80ZWChSoAHFvc-HVwi8F147XCiG4QHfPh0S-9jPbeBvm5fq-Sj_Bx61jal_RkpjY9eHV82UvM1HNX1PfEr2oQnCVd5kGaEGSDxFzN8LNdwcshzkAyiN0DDSEXibT2go4xNSYY'
    },
    {
        name: 'Микрофон Blue Yeti USB',
        description: 'Четкий звук, удобное управление',
        price: 12990,
        imageUrl: 'https://i.ebayimg.com/images/g/VuQAAOSwX1dgfAH5/s-l1600.jpg'
    }
];

const productsList = document.querySelector('#products-list');
const minPriceInput = document.querySelector('#min-price');
const maxPriceInput = document.querySelector('#max-price');
const filterForm = document.querySelector('#filter-form');

function renderProducts(filteredProducts) {
    productsList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = ` <img class="product-image" src="${product.imageUrl}" alt="${product.name}"> <h3 class="product-title">${product.name}</h3> <p class="product-description">${product.description}</p> <p class="product-price">₽${product.price.toLocaleString()}</p> `;

        productsList.appendChild(productCard);
    });
}

function filterProducts() {
    const minPrice = parseInt(minPriceInput.value) || 0;
    const maxPrice = parseInt(maxPriceInput.value) || Infinity;

    const filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);

    renderProducts(filteredProducts);
}

renderProducts(products);

filterForm.addEventListener('submit', e => {
    e.preventDefault(); 
    filterProducts(); 
});

const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme"); 
});

renderCatalog();

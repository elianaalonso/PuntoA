window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    header.classList.toggle("scrolled", window.scrollY > 20);

});


const products = [

    {
        name: "iPhone 17",
        storage: "256 GB",
        color: "Lavanda",
        price: "USD 999",
        battery: "100%",
        image: "assets/products/17.png",
        badge: "Nuevo"
    },

    {
        name: "iPhone 15 Pro",
        storage: "128 GB",
        color: "Titanio Azul",
        price: "USD 879",
        battery: "100%",
        image: "assets/products/15pro.png",
        badge: "Más vendido"
    },

    {
        name: "iPhone 14 Pro",
        storage: "256 GB",
        color: "Deep Purple",
        price: "USD 759",
        battery: "100%",
        image: "assets/products/14pro.png",
        badge: "Oferta"
    },

    {
        name: "iPhone 15",
        storage: "128 GB",
        color: "Midnight",
        price: "USD 549",
        battery: "100%",
        image: "assets/products/15.png",
        badge: ""
    }

];


const grid = document.getElementById("products-grid");


products.forEach(product => {

    grid.innerHTML += `

    <div class="product-card">

        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}

        <button class="favorite-btn">
            <i class="fa-regular fa-heart"></i>
        </button>

        <img src="${product.image}" alt="${product.name}">

        <div class="product-name">
            ${product.name}
        </div>

        <div class="product-memory">
            ${product.storage} · ${product.color}
        </div>

        <div class="product-footer">
            <div class="product-price">
                ${product.price}
            </div>

            <div class="product-battery">
                <span class="dot"></span>
                Batería ${product.battery}
            </div>
        </div>

    </div>

    `;

});
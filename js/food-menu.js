const menuItems = {
    burgers: [
        {name: "BBQ Burger", price: "12$", image: "img/burger-menu-img/burgers/bbq-burger.png"},
        {name: "Clasik Burger", price: "8$", image: "img/burger-menu-img/burgers/clasic-burger.png"},
        {name: "Chicken Burger", price: "8$", image: "img/burger-menu-img/burgers/chiken-burger.png"},
        {name: "Cheese Burger", price: "10$", image: "img/burger-menu-img/burgers/cheese-burger.png"},
        {name: "Double Burger", price: "12$", image: "img/burger-menu-img/burgers/doble-burger.png"}
    ],
    drinks: [
        {name: "Coca-cola", price: "3$", image: "img/burger-menu-img/drinks/coca-cola.png"},
        {name: "Coca-cola 0", price: "3$", image: "img/burger-menu-img/drinks/coca-cola-zero.png"},
        {name: "Fante", price: "3$", image: "img/burger-menu-img/drinks/fanta.png"},
        {name: "Sprite", price: "3$", image: "img/burger-menu-img/drinks/sprite.png"}
    ],
    other: [
        {name: "Fries", price: "4$", image: "img/burger-menu-img/other/fries.png"},
        {name: "Nuggets", price: "5$", image: "img/burger-menu-img/other/nuggets.png"},
        {name: "Apple pie", price: "3$", image: "img/burger-menu-img/other/apple-pie.png"},
        {name: "Сross fruit", price: "3$", image: "img/burger-menu-img/other/cross-fruit.png"},
        {name: "Muffin", price: "3$", image: "img/burger-menu-img/other/muffin.png"}
    ],
    icecream: [
        {name: "White-ice", price: "3$", image: "img/burger-menu-img/icecream/white-ice.png"},
        {name: "Chocolate-ice", price: "3$", image: "img/burger-menu-img/icecream/chocolate-ice.png"},
        {name: "Strabery-ice", price: "3$", image: "img/burger-menu-img/icecream/strabery-ice.png"}
    ],
    sauces: [
        {name: "Ketchup", price: "1$", image: "img/burger-menu-img/sauces/ketchup-sauce.png"},
        {name: "BBQ Sauce", price: "1$", image: "img/burger-menu-img/sauces/bbq-sauce.png"},
        {name: "HH Sauce", price: "1$", image: "img/burger-menu-img/sauces/hh-sauce.png"},
        {name: "Secret Sauce", price: "1$", image: "img/burger-menu-img/sauces/special-sauce.png"},
        {name: "Sweet-n-sour Sauce", price: "1$", image: "img/burger-menu-img/sauces/sweet-n-sour-sauce.png"},
        {name: "Sustard Sweet Sauce", price: "1$", image: "img/burger-menu-img/sauces/sweet-sustard-sauce.png"}
    ]
};

let currentCategoryIndex = 0;
const categories = Object.keys(menuItems);

function renderMenu(category) {
    const container = document.getElementById("menu-content");
    container.innerHTML = "";

    menuItems[category].forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `<img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>`;
        container.appendChild(card);
    });

    const title = document.getElementById("menu-title");
    if (title) title.textContent = categoryNameUa(category);
}

function categoryNameUa(key) {
    const map = {
        burgers: "Burgers",
        drinks: "Drinks",
        other: "Other",
        icecream: "Icecream",
        sauces: "Sauces"
    };
    return map[key];
}

document.querySelectorAll("#desktop-menu button").forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        renderMenu(category);
    });
});

document.getElementById("prev-btn").addEventListener("click", () => {
    currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
    renderMenu(categories[currentCategoryIndex]);
});
document.getElementById("next-btn").addEventListener("click", () => {
    currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
    renderMenu(categories[currentCategoryIndex]);
});

document.addEventListener("DOMContentLoaded", () => {
    renderMenu(categories[currentCategoryIndex]);
});

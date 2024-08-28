

const cardTemplate = document.getElementById("card-template");
const container = document.getElementById("container");

const numberOfCards = 10;

function createSkeletonCards(cardsNumber) {
    for (let i = 0; i < cardsNumber; i++) {
        const card = document.importNode(cardTemplate.content, true);
        container.appendChild(card);

    }
}

function populateCards(products) {
    container.innerHTML = "";

    products.forEach(product => {
        const card = cardTemplate.content.cloneNode(true);
        const image = card.querySelector("img");
        const title = card.querySelector('.title');
        const description = card.querySelector('.description');
        const price = card.querySelector('.price');

        image.src = product.image;
        title.textContent = product.title;
        description.textContent = product.description;
        price.textContent = product.price;

        const cardDiv = card.querySelector(".card");
        cardDiv.classList.remove("skeleton");

        container.appendChild(card);
    })
}

function loadProducts() {
    createSkeletonCards(numberOfCards);

    fetch('./assets/data.json')
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                populateCards(data);
            }, 3000);
        })
}

window.onload = loadProducts;
































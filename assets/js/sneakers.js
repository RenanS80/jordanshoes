const CARDS = document.querySelector('.main-cards');
const FIRST_CARD = document.querySelector('.card');

const cards = [
    {
        imageSrc: 'assets/images/jordan-green.png',
        name: 'Air Jordan 1 Mid Dutch Green',
        category: 'Tênis Air Jordan',
        price: 1199.99
    },
    {
        imageSrc: 'assets/images/jordan-tropical.png',
        name: 'Air Jordan 1 High Zoom CMFT Tropical Twist',
        category: 'Tênis Air Jordan',
        price: 1049.00
    },
    {
        imageSrc: 'assets/images/jordan-purple.png',
        name: 'Air Jordan 1 Mid Dutch Green',
        category: 'Tênis Air Jordan',
        price: 1350.00
    },
    {
        imageSrc: 'assets/images/jordan-gray.png',
        name: 'Air Jordan 1 Mid GS "Light Smoke Grey"',
        category: 'Tênis Air Jordan',
        price: 1585.00
    },
    {
        imageSrc: 'assets/images/jordan-citrus.png',
        name: 'Air Jordan 1 Mid SE Bright Citrus',
        category: 'Tênis Air Jordan',
        price: 949.00
    },
    {
        imageSrc: 'assets/images/jordan-gray-camo.png',
        name: 'Air Jordan 1 Mid Grey Camo',
        category: 'Tênis Air Jordan',
        price: 999.99
    }
]

cards.map(card => {
    const CARD_CLONE = FIRST_CARD.cloneNode(true);
    CARD_CLONE.querySelector(".card img").src = card.imageSrc;
    CARD_CLONE.querySelector(".card-info h4").innerHTML = card.name;
    CARD_CLONE.querySelector(".card-category").innerHTML = card.category;

    const PRICE = CARD_CLONE.querySelector(".card-price");
    PRICE.innerHTML = 'R$ ' +card.price.toFixed(2).replace('.', ',');
    
    CARDS.appendChild(CARD_CLONE);
})

FIRST_CARD.remove();


let coffeeProducts = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        productName: "Douwe Egberts Mocha Kenya Style",
        image: "../assets/img/douwe-egberts-mocha-kenya-style.png",
        price: 150,
        type: "Instant Coffee" 
    },
    {
        id: 2,
        productName: "Jacobs Caramel Flavour",
        image: "../assets/img/jacobs-caramel.png",
        price: 115,
        type: "Freeze Dried Coffee" 
    },
    {
        id: 3,
        productName: "Douwe Egberts Pure Gold",
        image: "../assets/img/douwe-egberts-pure-gold.png",
        price: 210,
        type: "Roasted Coffee" 
    },
    {
        id: 4,
        productName: "Jacobs Kronung Intense Dark Roasted 250g",
        image: "../assets/img/jacobs-kronung-dark-roasted.png",
        price: 80,
        type: "Roasted Coffee" 
    },
    {
        id: 5,
        productName: "Jacobs Espresso 12 Ristretto",
        image: "../assets/img//jacobs-espresso-12-ristretto-capsule.png",
        price: 70,
        type: "Capsule" 
    },
    {
        id: 6,
        productName: "jacobs Cappucino Sachets 10 X 18.7g",
        image: "../assets/img/jacobs-cappucino-sachets.png",
        price: 65,
        type: "Sachets" 
    },
    {
        id: 7,
        productName: "Jacobs Lungo Intense Capsule",
        image: "../assets/img/jacobs-lungo-intense-capsule.png",
        price: 75,
        type: "Capsules" 
    },
    {
        id: 8,
        productName: "Jacobs Kronung Pure Ground Coffee Classic",
        image: "../assets/img/My project.png",
        price: 85,
        type: "Ground Coffee" 
    }
];

//DOM manipulation for the cards
let productItems = document.querySelector('.product-items');
function display(){
    coffeeProducts.forEach((item)=>{
        productItems.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.productName}</h5>
            <h4>${item.type}</h4>
            <h4> R ${item.price}</h4>
            <button id="${item.id}" class="card-btn btn">BUY</button>
            </div>
        </div>
    `
  })
}
display();

let emptyArray = [];
localStorage.setItem('checkout', JSON.stringify(emptyArray))
let cardButton = document.querySelectorAll('.card-btn');
Object.keys(cardButton).forEach((cardBtn)=>{
    cardBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        emptyArray.push(coffeeProducts[video])
        console.log(checkoutItems)
        localStorage.setItem('checkout', JSON.stringify(emptyArray))
    })
})
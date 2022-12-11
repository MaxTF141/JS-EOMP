let coffeeProducts = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        productName: "Douwe Egberts Mocha Kenya Style",
        image: "../assets/img/douwe-egberts-mocha-kenya-style.png",
        price: 150,
        type: "Instant Coffee", 
        brandName: "Douwe Egberts"
    },
    {
        id: 2,
        productName: "Jacobs Caramel Flavour",
        image: "../assets/img/jacobs-caramel.png",
        price: 115,
        type: "Freeze Dried Coffee", 
        brandName: "Jacobs"
    },
    {
        id: 3,
        productName: "Douwe Egberts Pure Gold",
        image: "../assets/img/douwe-egberts-pure-gold.png",
        price: 210,
        type: "Roasted Coffee", 
        brandName: "Douwe Egberts"
    },
    {
        id: 4,
        productName: "Jacobs Kronung Intense Dark Roasted 250g",
        image: "../assets/img/jacobs-kronung-dark-roasted.png",
        price: 80,
        type: "Roasted Coffee", 
        brandName: "Jacobs"
    },
    {
        id: 5,
        productName: "Jacobs Espresso 12 Ristretto",
        image: "../assets/img//jacobs-espresso-12-ristretto-capsule.png",
        price: 70,
        type: "Capsule", 
        brandName: "Jacobs"
    },
    {
        id: 6,
        productName: "Jacobs Cappucino Sachets 10 X 18.7g",
        image: "../assets/img/jacobs-cappucino-sachets.png",
        price: 65,
        type: "Sachets",
        brandName: "Jacobs"
    },
    {
        id: 7,
        productName: "Jacobs Lungo Intense Capsule",
        image: "../assets/img/jacobs-lungo-intense-capsule.png",
        price: 75,
        type: "Capsules", 
        brandName: "Jacobs"
    },
    {
        id: 8,
        productName: "Jacobs Kronung Pure Ground Coffee Classic",
        image: "../assets/img/My project.png",
        price: 85,
        type: "Ground Coffee",
        brandName: "Jacobs"
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

//Adding items to checkout 
let checkoutItems = [];
let cardButton = document.querySelectorAll('.card-btn');
cardButton.forEach((cardBtn)=>{
    cardBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        checkoutItems.push(coffeeProducts[cardBtn.id -1]);
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        alert('Hooray!! You just added an item to the checkout ');
    })
})


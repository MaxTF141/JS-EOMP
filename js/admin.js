// localStorage.removeItem("products");

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
let tbody = document.querySelector('tbody');
function displayTable(){
    coffeeProducts.forEach((item)=>{
        tbody.innerHTML += `
        <tr>
        <th scope="row">${item.id}</th>
        <th>${item.brandName}</th>
        <td>${item.productName}</td>
        <td>${item.type}</td>
        <td>R ${item.price}</td>
        <td>
        <!-- Button trigger modal -->
        <button type="button" id="${item.id}" class="edit-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleMod">
          Edit
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleMod" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit the product</h1>
                    <button type="button" id="${item.id}" class="modal-btn btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="product" class="form-label">EDIT PRODUCT NAME</label>
                        <input type="text" id="${item.id}" class="product-name-edit form-control" aria-describedby="passwordHelpBlock">

                        <label for="url" class="form-label">EDIT Image URL</label>
                        <input type="url" id="${item.id}" class="img-url-edit form-control" aria-describedby="passwordHelpBlock">

                        <label for="inputPassword5" class="form-label">EDIT BRAND NAME</label>
                        <input type="text" id="${item.id}" class="brand-name-edit form-control" aria-describedby="passwordHelpBlock">

                        <label for="inputPassword5" class="form-label">EDIT TYPE</label>
                        <input type="text" id="${item.id}" class="product-type-edit form-control" aria-describedby="passwordHelpBlock">

                        <label for="inputPassword5" class="form-label">EDIT PRICE</label>
                        <input type="number" id="${item.id}" class="product-price-edit form-control" aria-describedby="passwordHelpBlock">
                    </div>
                    <div class="modal-footer">
                    <button type="button" id="${item.id}" class="edit-product-btn btn btn-primary">Click to edit</button>
                    </div>
                </div>
            </div>
        </div>
        </td>
        <td>
            <button type="button" id="${item.id}" class="delete-btn btn btn-success">DELETE</button>
        </td>
      </tr>
      `
  })
}
displayTable();

let createButton = document.querySelector('.create-btn');
createButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let productName = document.querySelector('#product-name').value;
    let image = document.querySelector('#img-url').value;
    let type = document.querySelector('#product-type').value;
    let price = document.querySelector('#product-price').value;
    let brandName = document.querySelector('#brand-name').value;

    coffeeProducts.push(
        {
        productName,
        type,
        image,
        price,
        brandName
        }
        )
        localStorage.setItem('products', JSON.stringify(coffeeProducts));
})

//Sorting and Filtering
let emptyArray = [];
//
    let filterPrice1 = document.querySelector('.filter-price1')
    filterPrice1.addEventListener('click', (e)=>{
        e.preventDefault();
        var newArray1 = coffeeProducts.filter(function (price1){
        return price1.price <= 99;
    })
    emptyArray.push(newArray1)
    console.log(emptyArray)
    // displayTable();
    // localStorage.setItem('products', JSON.stringify(coffeeProducts));
    emptyArray = [];
    display()
    })
//
    let filterPrice2 = document.querySelector('.filter-price2')
    filterPrice2.addEventListener('click', (e)=>{
        e.preventDefault();
        var newArray2 = coffeeProducts.filter(function (price2){
        return price2.price >= 100 && price2.price <= 149;
    })
        emptyArray.push(newArray2)
        console.log(emptyArray)
        emptyArray = []
    })

//
    let filterPrice3 = document.querySelector('.filter-price3')
    filterPrice3.addEventListener('click', (e)=>{
        e.preventDefault();
        var newArray3 = coffeeProducts.filter(function (price3){
        return price3.price >= 150 && price3.price <= 250;
    })
        emptyArray.push(newArray3)
        console.log(emptyArray)
        emptyArray = []
    })

    let deleteButton = document.querySelectorAll('.delete-btn');
    deleteButton.forEach((delButton)=>{
        delButton.addEventListener('click', (e)=>{
            e.preventDefault();

            console.log(coffeeProducts[delButton.id -1]);
                coffeeProducts.splice([delButton.id -1], 1);
                localStorage.setItem('products', JSON.stringify(coffeeProducts))

    
            // function deleteItem(item){
            // }
            location.reload()
            // deleteItem();
    
            
        })})
        // deleteItem()
        
        let editButton = document.querySelectorAll('.edit-product-btn');
        let productNameEdit = document.querySelector('.product-name-edit').value;
        
        let imageURLedit = document.querySelector('.img-url-edit').value;
        let brandNameEdit = document.querySelector('.brand-name-edit').value;
        let productTypeEdit = document.querySelector('.product-type-edit').value;
        let productPriceEdit = document.querySelector('.product-price-edit').value; 
        
let modalButton = document.querySelectorAll('.edit-btn');
modalButton.forEach((modalButtons)=>{
    modalButtons.addEventListener('click', (e)=>{
        e.preventDefault(); 
        console.log(coffeeProducts[modalButtons.id, 1])
    })
})

//Constructor function for edit button
function EditProduct(productNameEdit, typeEdit, imageURLedit, productPriceEdit, brandNameEdit){
    this.productNameEdit = productNameEdit;
    this.typeEdit = typeEdit;
    this.imageURLedit = imageURLedit;
    this.productPriceEdit = productPriceEdit;
    this.brandNameEdit = brandNameEdit;
}

editButton.forEach((editButtons)=>{
    editButtons.addEventListener('click', (e)=>{
        e.preventDefault();
        let FirstItem = new EditProduct(productNameEdit , productTypeEdit, imageURLedit, productPriceEdit, brandNameEdit)
        // console.log(coffeeProducts[editButtons.id, 1]);
        console.log(FirstItem); 
        // function updateItem(id){
            // const product = coffeeProducts.splice(id -1, 1);
            // const item = product[0]
            // console.log(item)
            // Object.keys(coffeeProducts).forEach((key) => {
            //     console.log(coffeeProducts[key]);
            // })
            // item.productName = productNameEdit
            // console.log(Object.keys(item))
            // localStorage.setItem('products', JSON.stringify(coffeeProducts))
            // localStorage.setItem('products', JSON.stringify(coffeeProducts))
        // }
        // updateItem()
        // location.reload()
        // deleteItem();

        // function editItem(id){
        //     console.log(id)
        //     // coffeeProducts.productName = productNameEdit;
        //     // localStorage.setItem('products', JSON.stringify(coffeeProducts))
        // }
        // location.reload()
        // editItem();

    })})

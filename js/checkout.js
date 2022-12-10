let emptyArray = JSON.parse(localStorage.getItem('checkout'));

let tableBody = document.querySelector('.table-body')
Object.keys(emptyArray).forEach((obj) => {
  if(emptyArray[obj]){
    tableBody.innerHTML +=
    `
          <tr>
            <th scope="row">${emptyArray[obj].productName}</th>
            <td>${emptyArray[obj].type}</td>
            <td>${emptyArray[obj].price}</td>
          </tr>
    `
  }
})
localStorage.setItem('checkout', JSON.stringify(emptyArray))

let purchaseItem = document.querySelector('#Purchase');
purchaseItem.addEventListener('click', ()=> {
  alert('Thank you for your purchase');
  emptyArray = [];
  localStorage.setItem('checkout', JSON.stringify(emptyArray));
  location.reload();
  // console.log(checkoutPage);
})
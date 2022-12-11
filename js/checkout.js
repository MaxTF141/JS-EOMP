let checkoutItems = JSON.parse(localStorage.getItem('checkout'));


let tableBody = document.querySelector('.table-data');
Object.keys(checkoutItems).forEach((obj)=>{
  if(checkoutItems[obj]){
    tableBody.innerHTML += 
        `
              <tr>
                <th scope="row">${checkoutItems[obj].productName}</th>
                <td>${checkoutItems[obj].type}</td>
                <td>${checkoutItems[obj].price}</td>
              </tr>
        `
      }
})
localStorage.setItem('checkout', JSON.stringify(checkoutItems));


//Total of the items
let sum = checkoutItems.reduce((a, b)=> {
  return a + b.price ;
}, 0);
console.log(sum)
let totalOutcome = document.querySelector('.total-outcome');
totalOutcome.append(sum);

//Checkout button
let checkoutButton = document.querySelector('.checkout-btn');
checkoutButton.addEventListener('click', (e)=>{
  alert(`-R ${sum}`)
  alert('Thank you for your Purchase')
  
})
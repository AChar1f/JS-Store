let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
? JSON.parse(localStorage.getItem('checkout'))
: []
document.querySelector('[counter]').textContent = checkoutItems.length || 0

function cartDisplay(){
    let container = document.querySelector('[data-container]')
    checkoutItems.forEach(product => {
        container.innerHTML += `
             <tr>
                <td>${product.productName}</td>
                <td>${product.category}</td>
                <td>${product.amount}</td>
                <td>${product.quantity}</td>
                <td >R${product.amount * product.id}</td>
            </tr>      
        `
    })
}
cartDisplay()


//Current Year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
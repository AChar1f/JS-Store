let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
? JSON.parse(localStorage.getItem('checkout'))
: []
document.querySelector('[counter]').textContent = checkoutItems.length || 0

function cartDisplay(){
    let container = document.querySelector('[data-container]')
    checkoutItems.forEach(product => {
        container.innerHTML += `
            <div class="col-2">${product.productName}</div>
            <div class="col-2">${product.category}</div>
            <div class="col-2">${product.amount}</div>
            <div class="col-4">${product.id}</div>
            <div class="col-2">${product.amount * product.id}</div>      
        `
    })
}
cartDisplay()


//Current Year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
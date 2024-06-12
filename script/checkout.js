let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
? JSON.parse(localStorage.getItem('checkout'))
: []
document.querySelector('[counter]').textContent = checkoutItems.length || 0

function cartDisplay(){
    let container = document.querySelector('[data-container]')
    checkoutItems.forEach(product => {
        container.innerHTML += `
            <div class="col-2"><img src="${product.img_url}" loading="lazy"></div>
            <div class="col-2">${product.productName}</div>
            <div class="col-3"><input type="number"></div>
            <div class="col-2">${product.amount}</div>
            <div class="col-2">${product.amount}</div>      
        `
    })
}
cartDisplay()


//Current Year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
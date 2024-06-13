let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
? JSON.parse(localStorage.getItem('checkout'))
: []
document.querySelector('[counter]').textContent = checkoutItems.length || 0

function cartDisplay(){
    try{
        let container = document.querySelector('[data-container]')
        checkoutItems.forEach(product => {
        container.innerHTML += `

             <tr>
                <td>${product.productName}</td>
                <td>${product.category}</td>
                <td>${product.amount}</td>
                <td>${product.quantity}</td>
                <td class="subtotal">R${product.amount * product.quantity}</td>
            </tr>
     
        `
    })
    } catch (e) {
        alert("Something went wrong... Please try again later.")
        container.innerHTML += `
        <div class="loader">Loading
        <span></span>
        </div>
    `
    setTimeout ( () => {
        location.reload()
    },
        3000
    )
    }

}
cartDisplay()

function calculateTotal() {
    let subtotalElements = document.querySelectorAll('.subtotal');
    let total = 0;

    subtotalElements.forEach(subtotalElement => {
        let subtotalValue = parseFloat(subtotalElement.textContent.replace('R', ''));
        total += subtotalValue;
    });

    return total;
}

let total = ("R"+calculateTotal())
document.querySelector('[total]').textContent = total


//Current Year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
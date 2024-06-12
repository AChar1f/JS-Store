let wrap = document.querySelector('[displayItems]')
let products = JSON.parse(localStorage.getItem('products'))
 
// displayItems()
function displayItems(args){
    wrap.innerHTML = ""
    try{
        args.forEach(product => {
            wrap.innerHTML +=`
            <tr>
                <td>${product.productName}</td>
                <td><img src="${product.img_url}" loading="lazy"></td>
                <td>${product.category}</td>
                <td>${product.amount}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
            </tr> 
            `
        })
    } catch (e) {
        wrap.innerHTML += `
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

displayItems(products)












//Current Year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
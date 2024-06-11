
let wrapper = document.querySelector('[recentProducts]')
let products = JSON.parse(localStorage.getItem('products'))
function recentProducts() {
    try{
        let arrSize = products.length 
    let latestProducts = products.reverse().slice(0, arrSize >> 1)
    latestProducts.forEach(product => {
        
        wrapper.innerHTML += `
        <div class="card my-2">
        <img src="${product.img_url}" loading="lazy" class="card-img-top" alt="${product.productName}">
        <div class="card-body">
            <h5 class="card-title">${product.productName}</h5>
            <p class="card-text">${product.description}</p>
        </div>
        </div>
        `
        })
    } catch(e) {
        wrapper.textContent = "Please contact our administrator."
        setTimeout(() => {
            location.reload()
        }, 
            2000
            )
    }
    
    }
recentProducts()    
//Current Year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
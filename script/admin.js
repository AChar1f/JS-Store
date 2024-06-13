let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
? JSON.parse(localStorage.getItem('checkout'))
: []
document.querySelector('[counter]').textContent = checkoutItems.length || 0

let wrap = document.querySelector('[displayMenu]')
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
                <td>
                <button class="menuButton" data-bs-toggle="modal" data-bs-target="#updateModal${product.id}">Edit</button>
                <div class="modal fade" id="updateModal${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>${product.productName}</h2>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
                
                </td>
                <td><button class="menuButton" onclick="deleteProduct(${JSON.stringify(product)})">Delete</button></td>
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


// function deleteProduct(index){
//     try{
//         sweetProducts.splice(index, 1);
//         localStorage.setItem('products', JSON.stringify(products));
//         displayProducts(products);
//         location.reload();
//     } catch(e) {
//         alert('Unable to Delete');
//     }
// }

function deleteProduct(product){
    try{
        let index = displayItems.findIndex(item => item.id == product.id)
        displayItems.splice(index, 1)
        localStorage.setItem('products', JSON.stringify(displayItems))
        displayMenu(products)
        location.reload()
        // retrieve the index of an object
        // make use of splice(index, 1)
        // Save the array content to the local storage
    }catch(e){
        alert("Unable to delete")
    }
}



//Current Year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
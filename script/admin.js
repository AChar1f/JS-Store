let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
? JSON.parse(localStorage.getItem('checkout'))
: []
document.querySelector('[counter]').textContent = checkoutItems.length || 0

let wrap = document.querySelector('[displayMenu]')
let products = JSON.parse(localStorage.getItem('products'))
? JSON.parse(localStorage.getItem('products'))
: localStorage.setItem('products', JSON.stringify (
    [
        {
            id: "1",
            productName: "Black Coffee",
            category: "Beverages",
            description: "Special Houseblend of Straight black Coffee.",
            amount: 25,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/black-coffee.jpg" 
        },
        {
            id: "2",
            productName: "Cappucino",
            category: "Beverages",
            description: "Our special blend crafted specifically for Cappucino.",
            amount: 28,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/red-cappucino.jpg"
        },
        {
            id: "3",
            productName: "Single Esspresso",
            category: "Beverages",
            description: "Single Shot of our special homeblend espresso.",
            amount: 10,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/single-expresso.jpg" 
        },
        {
            id: "4",
            productName: "Double Esspresso",
            category: "Beverages",
            description: "Double shot of our special homeblend esspresso.",
            amount: 18,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/double-expresso.jpg" 
        },
        {
            id: "5",
            productName: "Hot Choc",
            category: "Beverages",
            description: "Rich and Creamy Hot Chocolate Topped with Cream.",
            amount: 45,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/hot-chocolate.jpg" 
        },
        {
            id: "6",
            productName: "Choc Milkshake",
            category: "Beverages",
            description: "Shake with chocolate, cream and marshmallows.",
            amount: 40,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/Chocolate-milkshake.jpg" 
        },
        {
            id: "7",
            productName: "Blueberry Muffins",
            category: "Muffin",
            description: "Our freshly homemade blueberry muffins.",
            amount: 20,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/BlueberryMuffin.jpeg" 
        },
        {
            id: "8",
            productName: "Chocolate Chip Muffin",
            category: "Mufffin",
            description: "Our homemade muffin filled with chocolate chips.",
            amount: 20,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/choc-chip-muffin.jpg" 
        },
        {
            id: "9",
            productName: "Double Chocolate Muffin",
            category: "Muffin",
            description: "Our homemade chocolate muffins filled with chocolate chips.",
            amount: 25,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/double-choc-muffin.jpg" 
        },
        {
            id: "10",
            productName: "Red Velvet Muffin",
            category: "Muffin",
            description: "Our homemade red velvet muffin topped with frosting.",
            amount: 20,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/red-velvet-muffin.jpg" 
        },
        {
            id: "11",
            productName: "Vanilla Muffin",
            category: "Muffin",
            description: "Our homemade classic soft and airy vanilla muffin.",
            amount: 20,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/vanilla muffins.jpg" 
        },
        {
            id: "12",
            productName: "Tuna Melt Toast",
            category: "Sandwich",
            description: "Gourmet Tuna Sandwich garnished with greens of choice.",
            amount: 35,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/tunamelt-127584-1.jpg" 
        },
        {
            id: "13",
            productName: "Egg N Avo Sando",
            category: "Sandwich",
            description: "Our homestyle scrambled eggs topped with avo slices.",
            amount: 35,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/egg-and-avo.jpg" 
        },
        {
            id: "14",
            productName: "Jumbo Egg Sando",
            category: "Sandwich",
            description: "Our homestyle scrambled eggs with salad on jumbo slices of bread.",
            amount: 45,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/LH-Egg-Salad-fwbt-superJumbo.jpg" 
        },
        {
            id: "15",
            productName: "Egg Sando",
            category: "Sandwich",
            description: "Our homestyle scrambled eggs with salad.",
            amount: 30,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/egg_salad_sandwich-1-5.jpg" 
        },
        {
            id: "16",
            productName: "Gourmet Cheese Sando",
            category: "Sandwich",
            description: "Sandwich packed with highest quality of cheese and greens.",
            amount: 60,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/Gourmet-Cheese-Veggie-Sandwich.jpg" 
        },
        {
            id: "17",
            productName: "Chicken Sub",
            category: "Sandwich",
            description: "Classic chicken sub made with our special blend of herbs and spices.",
            amount:  50,
            quantity:1 ,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/Chicken-Sub.jpeg" 
        },
        {
            id: "18",
            productName: "Chicken Wrap",
            category: "Wrap",
            description: "Classic Chicken Wrap garnished salad.",
            amount: 65,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/chicken-wrap.jpg" 
        },
        {
            id: "19",
            productName: "Steak Wrap",
            category: "Wrap",
            description: "Classic Steak Wrap filled topped with cheese.",
            amount: 80,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/steak-wrap.jpg" 
        },
        {
            id: "20",
            productName: "Veggie Wrap",
            category: "Wrap",
            description: "Healthy choice of vegetables stuffed in a wrap.",
            amount: 40,
            quantity:1,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/veggie-wrap.jpg" 
        },
    ]
))
 
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
                <td>${"R"+product.amount}</td>
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
                    <form>
                      <div class="container">
                      <input class="form-control m-2" type="text" placeholder="Enter a Product Name" value="${product.productName}" name ="admin-name" id="admin-name${product.id}" required>
                      <input class="form-control m-2" type="text" placeholder="Enter a Product Name" value="${product.category}" name ="admin-name" id="admin-category${product.id}" required>
                      <input class="form-control m-2" type="text" placeholder="Enter Image URL" value="${product.img_url}" name="admin-image" id="admin-image${product.id}" required>
                      <textarea class="form-control m-2" placeholder="Enter your Product details" required name="admin-details" id="admin-details${product.id}">${product.description}</textarea>
                      <input class="form-control m-2" type="number" placeholder="Enter the Product Amount" value="${product.amount}" name="admin-amount" id="admin-amount${product.id}" required>
                      </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="UpdateProduct(${JSON.stringify(products)})">Save changes</button>
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

// update product
// function UpdateProduct(product, index){
//     try{
//         product.productName = document.querySelector(`#admin-name${product.id}`).value;
//         product.category = document.querySelector(`#admin-category${product.id}`).value;
//         product.description = document.querySelector(`#admin-details${product.id}`).value;
//         product.amount = document.querySelector(`#admin-amount${product.id}`).value;
//         product.img_url = document.querySelector(`#admin-image${product.id}`).value;
        
//         products[index] = Object.assign({}, product);
//         localStorage.setItem('products',JSON.stringify(products));
//         displayMenu(products);
//         location.reload();
//     } catch(e) {
//         alert('Unable to Edit the Products');
//     }
// }

function UpdateProduct(product, index){
    try {
        // Update the product with new values
        product.productName = document.querySelector(`#admin-name${product.id}`).value;
        product.category = document.querySelector(`#admin-category${product.id}`).value;
        product.description = document.querySelector(`#admin-details${product.id}`).value;
        product.amount = document.querySelector(`#admin-amount${product.id}`).value;
        product.img_url = document.querySelector(`#admin-image${product.id}`).value;

        // Update the product in the products array
        products[index] = Object.assign({}, product);

        // Update the products array in local storage
        localStorage.setItem('products', JSON.stringify(products));

        // Reload the display of items
        displayItems(products);

        // Close the modal
        let modalId = `#updateModal${product.id}`;
        $(modalId).modal('hide');
    } catch(e) {
        alert('Unable to Edit the Products');
    }
}



// Delete product
// function deleteProduct(product){
//     try{
//         let index = displayItems.findIndex(item => item.id == product.id)
//         displayItems.splice(index, 1)
//         localStorage.setItem('products', JSON.stringify(displayItems))
//         displayMenu(products)
//         location.reload()
//         // retrieve the index of an object
//         // make use of splice(index, 1)
//         // Save the array content to the local storage
//     }catch(e){
//         alert("Unable to delete")
//     }
// }

// Function to add new a product
// Add event listener to the "Add Item" button inside the modal
document.getElementById('saveNewProduct').addEventListener('click', function() {
    // Retrieve values entered by the user
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const productImage = document.getElementById('productImage').value;

    // Create a new product object
    const newProduct = {
        id: productIdMaker(), // Assuming you have a function to generate a unique product ID
        productName: productName,
        category: category,
        description: description,
        amount: price,
        img_url: productImage
    };

    // Push the new product object to the existing products array
    products.push(newProduct);

    // Update the products array in local storage
    localStorage.setItem('products', JSON.stringify(products));
    setTimeout ( () => {
        location.reload()
    },
        1000
    )
});

// Function to make an 
function productIdMaker() {
     // Find the maximum ID currently in the products array
     const maxId = products.reduce((max, product) => Math.max(max, parseFloat(product.id)), 0);
     const newId = maxId + 1;
     return newId.toString();
}



//Current Year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

let wrapper = document.querySelector('[recentProducts]')
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
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/black-coffee.jpg" 
        },
        {
            id: "2",
            productName: "Cappucino",
            category: "Beverages",
            description: "Our special blend crafted specifically for Cappucino.",
            amount: 28,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/red-cappucino.jpg"
        },
        {
            id: "3",
            productName: "Single Esspresso",
            category: "Beverages",
            description: "Single Shot of our special homeblend espresso.",
            amount: 10,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/single-expresso.jpg" 
        },
        {
            id: "4",
            productName: "Double Esspresso",
            category: "Beverages",
            description: "Double shot of our special homeblend esspresso.",
            amount: 18,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/double-expresso.jpg" 
        },
        {
            id: "5",
            productName: "Hot Choc",
            category: "Beverages",
            description: "Rich and Creamy Hot Chocolate Topped with Cream.",
            amount: 45,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/hot-chocolate.jpg" 
        },
        {
            id: "6",
            productName: "Choc Milkshake",
            category: "Beverages",
            description: "Shake with chocolate, cream and marshmallows.",
            amount: 40,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/Chocolate-milkshake.jpg" 
        },
        {
            id: "7",
            productName: "Blueberry Muffins",
            category: "Muffin",
            description: "Our freshly homemade blueberry muffins.",
            amount: 20,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/BlueberryMuffin.jpeg" 
        },
        {
            id: "8",
            productName: "Chocolate Chip Muffin",
            category: "Mufffin",
            description: "Our homemade muffin filled with chocolate chips.",
            amount: 20,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/choc-chip-muffin.jpg" 
        },
        {
            id: "9",
            productName: "Double Chocolate Muffin",
            category: "Muffin",
            description: "Our homemade chocolate muffins filled with chocolate chips.",
            amount: 25,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/double-choc-muffin.jpg" 
        },
        {
            id: "10",
            productName: "Red Velvet Muffin",
            category: "Muffin",
            description: "Our homemade red velvet muffin topped with frosting.",
            amount: 20,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/red-velvet-muffin.jpg" 
        },
        {
            id: "11",
            productName: "Vanilla Muffin",
            category: "Muffin",
            description: "Our homemade classic soft and airy vanilla muffin.",
            amount: 20,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/vanilla muffins.jpg" 
        },
        {
            id: "12",
            productName: "Tuna Melt Toast",
            category: "Sandwich",
            description: "Gourmet Tuna Sandwich garnished with greens of choice.",
            amount: 35,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/tunamelt-127584-1.jpg" 
        },
        {
            id: "13",
            productName: "Egg N Avo Sando",
            category: "Sandwich",
            description: "Our homestyle scrambled eggs topped with avo slices.",
            amount: 35,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/egg-and-avo.jpg" 
        },
        {
            id: "14",
            productName: "Jumbo Egg Sando",
            category: "Sandwich",
            description: "Our homestyle scrambled eggs with salad on jumbo slices of bread.",
            amount: 45,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/LH-Egg-Salad-fwbt-superJumbo.jpg" 
        },
        {
            id: "15",
            productName: "Egg Sando",
            category: "Sandwich",
            description: "Our homestyle scrambled eggs with salad.",
            amount: 30,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/egg_salad_sandwich-1-5.jpg" 
        },
        {
            id: "16",
            productName: "Gourmet Cheese Sando",
            category: "Sandwich",
            description: "Sandwich packed with highest quality of cheese and greens.",
            amount: 60,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/Gourmet-Cheese-Veggie-Sandwich.jpg" 
        },
        {
            id: "17",
            productName: "Chicken Sub",
            category: "Sandwich",
            description: "Classic chicken sub made with our special blend of herbs and spices.",
            amount:  50 ,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/Chicken-Sub.jpeg" 
        },
        {
            id: "18",
            productName: "Chicken Wrap",
            category: "Wrap",
            description: "Classic Chicken Wrap garnished salad.",
            amount: 65,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/chicken-wrap.jpg" 
        },
        {
            id: "19",
            productName: "Steak Wrap",
            category: "Wrap",
            description: "Classic Steak Wrap filled topped with cheese.",
            amount: 80,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/steak-wrap.jpg" 
        },
        {
            id: "20",
            productName: "Veggie Wrap",
            category: "Wrap",
            description: "Healthy choice of vegetables stuffed in a wrap.",
            amount: 40,
            img_url: "https://achar1f.github.io/projectimages/kafenioimages/veggie-wrap.jpg" 
        },
    ]
))

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
        wrapper.innerHTML += `
       <div class="loaderHP">Loading
        <span></span>
        </div>
        `
        setTimeout ( () => {
            location.reload()
        },
            2000
        )
    }
    
    }
recentProducts()   

// Cart Display
let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
? JSON.parse(localStorage.getItem('checkout'))
: []
document.querySelector('[counter]').textContent = checkoutItems.length || 0

//Current Year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()
// **************Navigation Scrolled Shadow**************
const navBar = document.querySelector('nav');

function navShadow(){
    window.onscroll = function() {
        if(window.scrollY > 22)
        {
            navBar.classList.add('scrolled');
        }
        else
        {
            navBar.classList.remove('scrolled');
        }
    };
} navShadow();


// **************Display Product items**************
const productitems = document.querySelector('#product-items');

if(productitems){
    displayProductitems();
}

function displayProductitems(){
    products.forEach(product => {
        const prod = document.createElement("div");
        prod.classList.add("prodbox");
        prod.innerHTML = `
            <img src="${product.imageProduct}"/>
            <div class="details"> 
                <h2 class="productname">${product.productName}</h2>
                <h3 class="price">${product.price}</h3>
            </div>
        `;
        productitems.appendChild(prod);
    });
}
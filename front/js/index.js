/**
 * Gère l'affichage des produits 
 */

items()

 async function items() {
  const products = await getProducts()

  for (product of products){ 
  displayProduct(product)
  }
}
function getProducts(){ 
return fetch("http://localhost:3000/api/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    return products
  })
  .catch((error) => {
    alert(error)
  })
}
/**
 * afficher les produits dans la page d'accueil
 */

function displayProduct(product) {
  document.getElementById("items").innerHTML += ` <article>
              <a href="./front/html/product.html"><img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="productName">"${product.name}"</h3>
              <p class="productDescription">"${product.description}"</p>
            </article>       
               `
  
}

/**let productData = [];

const fetchProduct = async () => {
    await fetch("http://localhost:3000/api/products")
    .then((response) => response.json())
    .then ((json) => { productData = json
  });
    
};
console.log(productData)
/**
 * afficher les produits dans la page d'accueil
 */

 /** const productDisplay = async () => {
    await fetchProduct();
    
    document.querySelector(".items").innerHTML += ` <article>
              <img src="${productData.imageUrl}" alt="${productData.atlTxt}">
              <h3 class="productName">"${productData.name}"</h3>
              <p class="productDescription">"${productData.description}"</p>
            </article>
          
   `
  
};

fetchProduct();*/


 
         
            
 
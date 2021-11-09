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
              <a id="${product.id} "href="./front/html/product.html?${product._id}">
              <img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="productName">"${product.name}"</h3>
              <p class="productDescription">"${product.description}"</p>
  </a>
            </article>       
             `

}


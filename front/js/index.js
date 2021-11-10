/**
 * Gère l'affichage des produits
 */

/*async function getProduct(products) {
  const response = await fetch("http://localhost:3000/api/products");
  return await response.json();*/

/**
 * afficher les produits dans la page d'accueil
 */
/*for (let i = 0; i < product.length; i++) {
    let product = new product();

    document.getElementById("items").innerHTML += ` <article>
              <a id="${product._id} "href="./front/html/product.html?id = ${product._id}">
                <img src="${product.imageUrl}" alt="${product.altTxt}">
                <h3 class="productName">"${product.name}"</h3>
                 <p>
                  Prix : <span id="price">"${product.price}"</span>€
                </p>
                <p class="productDescription">"${product.description}"</p>
              </a>
            </article>       
             `;
  }
  console.log(items);
}*/
async function getProduct(products) {
  let response = await fetch(`http://localhost:3000/api/products`);
  let data = await response.json();
  return data;
}

getProduct("products").then((product) => {
  for (let i = 0; i < product.length; i++) {
    let products = document.getElementById("items");
    products.innerHTML += ` <article>
              <a id="${product[i]._id} "href="./front/html/product.html?id=${product[i]._id}"> 
                <img src="${product[i].imageUrl}" alt="${product[i].altTxt}">
                <h3 class="productName">"${product[i].name}"</h3>
                 <p>
                  Prix : <span id="price">"${product[i].price}"</span>€
                </p>
                <p class="productDescription">"${product[i].description}"</p>
             </a>
            </article>       
             `;
  }
  console.log(product);
});

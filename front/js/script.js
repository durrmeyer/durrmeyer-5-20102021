/**
 * Gère l'affichage des produits
 */

async function getProduct(product) {
	let response = await fetch(`http://localhost:3000/api/products`);
	let data = await response.json();
	return data;
}
/**
 * afficher les produits dans la page
 */
getProduct('products').then((product) => {
	for (let i = 0; i < product.length; i++) {
		let products = document.getElementById('items');
		products.innerHTML += ` <article>
              <a id="${product[i]._id}" href="/front/html/product.html?id=${product[i]._id}"> 
                <img src="${product[i].imageUrl}" alt="${product[i].altTxt}">
                <h3 class="productName">${product[i].name}</h3>
                 <p>
                  Prix : <span id="price">${product[i].price}</span>€
                </p>
                <p class="productDescription">${product[i].description}</p>
             </a>
            </article>       
             `;
	}
});

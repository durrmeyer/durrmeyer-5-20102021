/**
 * Gère l'affichage des produits
 */
const products = document.getElementById('items');
async function getProducts() {
	let response = await fetch(`http://localhost:3000/api/products`);
	let data = await response.json();
	return data;
}
/**
 * afficher les produits dans la page
 */

getProducts()
	.then((product) => {
		for (let i = 0; i < product.length; i++) {
			products.innerHTML += ` <article>
              <a id="${product[i]._id}" href="product.html?id=${product[i]._id}"> 
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
	})
	.catch((error) => {
		alert('Erreur: ' + error.message);
	});

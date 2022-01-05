// Récupération de la requête dans l'URL//
const searchParams = window.location.search;

const urlSearchParams = new URLSearchParams(searchParams);
const id = urlSearchParams.get('id');

//affiche le produit selectionné//

async function getProduct(id) {
	const response = await fetch(`http://localhost:3000/api/products/${id}`);
	return await response.json();
}

/*** affiche le produit dans la page produit ***/

getProduct(id).then((product) => {
	document.querySelector('#imageUrl').innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;

	document.querySelector('#title').innerText = product.name;
	document.querySelector('#price').innerText = product.price;
	document.querySelector('#description').innerText = product.description;

	//------------------------------------ choix de la couleur----------------------------------------------//

	const selectColors = document.querySelector('#colors');
	for (const color of product.colors) {
		const option = document.createElement('option');
		option.value = color;
		option.innerText = color;
		selectColors.appendChild(option);
	}
	console.log(selectColors);
});
//-------------------------------------- choix de la quantité----------------------------------------------//
const optionQuantite = document.querySelector('#quantity');
const optionColor = document.querySelector('#colors');

//---------------------------------------- Gestion pour l'envoie au panier------------------------------------//
const button_envoyer = document.querySelector('#addToCart');
button_envoyer.addEventListener('click', (event) => {
	event.preventDefault();

	// récuperer les valeurs du produit//

	const optionProduct = {
		id: id,
		imageUrl: document.querySelector('#imageUrl').innerHTML,
		name: document.querySelector('#title').innerText,
		price: parseInt(document.querySelector('#price').innerText),
		color: optionColor.value,
		quantity: parseInt(optionQuantite.value)
	};
	//---------------------------------- enregistrement dans le local Storage-------------------------------//

	let panierArticle = JSON.parse(localStorage.getItem('panier'));

	let articleTrouve = false;

	if (panierArticle == null) {
		console.log('votre panier est vide');
	} else {
		for (let i in panierArticle) {
			//---------------------------------------produit identique trouvé alors on met à jour la quantité-----------//
			if (panierArticle[i].id === id && panierArticle[i].color === optionProduct.color) {
				panierArticle[i].quantity = panierArticle[i].quantity + optionProduct.quantity;
				articleTrouve = true;
			} else {
			}
		}
	}
	console.log(panierArticle);
	//-----------------------------------------mettre à jour le panier-------------------------------//
	if (articleTrouve == false) {
		panierArticle.push(optionProduct);
	}
	localStorage.setItem('panier', JSON.stringify(panierArticle));
	window.location.assign('cart.html');
});

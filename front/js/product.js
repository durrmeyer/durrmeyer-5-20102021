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

getProduct(id)
	.then((product) => {
		document.querySelector(
			'.item__img'
		).innerHTML = `<img src="${product.imageUrl}" alt="Photographie d'un canapé">`;
		document.querySelector('#title').innerText = product.name;
		document.querySelector('#price').innerText = product.price;
		document.querySelector('#description').innerText = product.description;
		document.querySelector('title').innerText = product.name;
		//------------------------------------ choix de la couleur----------------------------------------------//

		const selectColors = document.querySelector('#colors');
		for (const color of product.colors) {
			const option = document.createElement('option');
			option.value = color;
			option.innerText = color;
			selectColors.appendChild(option);
		}
	})
	.catch((error) => {
		alert('Erreur: ' + error.message);
	});

//-------------------------------------- choix de la quantité----------------------------------------------//
const optionQuantite = document.querySelector('#quantity');

//-------------------------------------- choix de la couleur---------------------------------------------//
const optionColor = document.querySelector('#colors');

//---------------------------------------- Gestion pour l'envoie au panier------------------------------------//
const button_envoyer = document.querySelector('#addToCart');
button_envoyer.addEventListener('click', (event) => {
	event.preventDefault();
	if (optionColor.value == '' || optionQuantite.value == 0) {
		alert('merci de bien choisir une option');

		return false;
	} else {
		alert('votre article est dans le panier');
		envoiArticlePanier();
		return true;
	}
	// récuperer les valeurs du produit//
	function envoiArticlePanier() {
		const optionProduct = {
			id: id,
			imageUrl: document.querySelector('.item__img').innerHTML,
			name: document.querySelector('#title').innerText,
			color: optionColor.value,
			quantity: parseInt(optionQuantite.value)
		};

		//----------------------------------recupérer dans le local Storage-------------------------------//

		let panierArticle = JSON.parse(localStorage.getItem('panier'));

		let articleTrouve = false;

		if (panierArticle == null) {
			panierArticle = [];
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

		//-----------------------------------------mettre à jour le panier-------------------------------//
		if (articleTrouve == false) {
			panierArticle.push(optionProduct);
		}
		localStorage.setItem('panier', JSON.stringify(panierArticle));
	}
});

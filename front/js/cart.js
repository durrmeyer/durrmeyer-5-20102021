//---------------------------------- recupération dans le local Storage----------------------------
const panierArticle = JSON.parse(localStorage.getItem('panier'));
const articles = document.querySelector('#cart__items');

if (panierArticle == null || panierArticle.length == 0) {
	articles.innerHTML = `
			<p> Votre panier est vide </p>
    		`;
	const cache = document.querySelector('.cart__order');

	cache.style.display = 'none';
} else {
	//----------------------------------Affichage des produits selectionnés-----------------------------//
	for (let i = 0; i < panierArticle.length; i++) {
		articles.innerHTML += `
    <section class="cart" id="cart__items">
           <article class="cart__item" data-id="${panierArticle[i].id}">
              <div class="cart__item__img">
           ${panierArticle[i].imageUrl}     
            </div>
    
              <div class="cart__item__content">
                <div class="cart__item__content__titlePrice">
                  <h2>${panierArticle[i].name}</h2>
                    <p>${panierArticle[i].color}</p>
                  <p>${panierArticle[i].price} €</p>
                </div>
                <div class="cart__item__content__settings">
                  <div class="cart__item__content__settings__quantity">
                    <p>Qté :</p>
                    <input
                      type="number"
                      class="itemQuantity"
                      name="itemQuantity"
                      min="1"
                      max="100"
                      value="${panierArticle[i].quantity}"
                    />
                </div>
                  <div class="cart__item__content__settings__delete">
                    <button class="deleteItem">Supprimer</button>
                  </div>
                </div>
             </div>
            </article>
            
          </section >`;
	}
}

//----------------------------------------  suppression d'un article------------------------------------//
let boutons = document.querySelectorAll('.deleteItem');

for (let i = 0; i < boutons.length; i++) {
	boutons[i].addEventListener('click', (event) => {
		event.preventDefault();
		const panierArticle = JSON.parse(localStorage.getItem('panier'));

		if (panierArticle.id === panierArticle.id && panierArticle.color === panierArticle.color) {
			panierArticle.splice(i, 1);
			document.location.reload();
			localStorage.setItem('panier', JSON.stringify(panierArticle));
		} else {
			panierArticle = false;
		}
	});
}

//--------------------------------------------------- mofification du nombre d'articles------------------------//

const choixArticles = document.querySelectorAll('.itemQuantity');
const article = document.querySelectorAll('input[type =number]');

for (let i = 0; i < choixArticles.length; i++) {
	choixArticles[i].addEventListener('change', (event) => {
		event.preventDefault();
		const panierArticle = JSON.parse(localStorage.getItem('panier'));
		article[i].setAttribute('value', article[i].value);
		panierArticle[i].quantity = article[i].value;
		localStorage.setItem('panier', JSON.stringify(panierArticle));
	});
}

//------------------------------------------------------quantité * le prix -----------------------------//
let totalPanier = [];
let totalArticle = [];

const total = document.getElementById('totalPrice');
const quantite = document.getElementById('totalQuantity');
if (panierArticle != null && panierArticle.length > 0) {
	for (let p = 0; p < panierArticle.length; p++) {
		let quantiteArticle = panierArticle[p].quantity++;

		totalArticle.push(quantiteArticle);

		let prixArticle = panierArticle[p].price * quantiteArticle;

		totalPanier.push(prixArticle);
	}
}

//------------------------------------------sommes total du panier-----------------------------------------------//
const prixTotal = totalPanier.reduce((acc, x) => acc + x, 0);

const articleTotal = totalArticle.reduce((acc, x) => acc + x, 0);

const reducer = (previousValue, currentValue) => previousValue + currentValue;

const somme = totalPanier.reduce(reducer, 0);
quantite.innerText = articleTotal;
total.innerText = prixTotal;

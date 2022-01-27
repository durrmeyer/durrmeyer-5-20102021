//---------------------------------- recupération dans le local Storage----------------------------
const panierArticle = JSON.parse(localStorage.getItem('panier'));
const articles = document.querySelector('#cart__items');

if (panierArticle == null) {
	articles.innerHTML = `
			<p> Votre panier est vide </p>
    		`;
	const cache = document.querySelector('.cart__order');

	cache.style.display = 'none';
} else {
	const quantite = document.getElementById('totalQuantity');
	const total = document.getElementById('totalPrice');
	let sommesTotal = 0;
	let articleTotal = 0;
	//----------------------------------Affichage des produits selectionnés-----------------------------//
	for (let i = 0; i < panierArticle.length; i++) {
		fetch(`http://localhost:3000/api/products/${panierArticle[i].id}`)
			.then((response) => response.json())
			.then((articleCatalogue) => {
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
                  <p>${articleCatalogue.price} €</p>
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

				let quantiteArticle = panierArticle[i].quantity;

				articleTotal = parseInt(articleTotal) + parseInt(quantiteArticle);
				sommesTotal = sommesTotal + quantiteArticle * articleCatalogue.price;

				quantite.innerText = articleTotal;
				total.innerText = sommesTotal;
			})
			.then(() => {
				//----------------------------------------  suppression d'un article------------------------------------//
				let boutons = document.querySelectorAll('.deleteItem');

				for (let i = 0; i < boutons.length; i++) {
					boutons[i].addEventListener('click', (event) => {
						event.preventDefault();
						const panierArticle = JSON.parse(localStorage.getItem('panier'));

						if (panierArticle.id === panierArticle.id && panierArticle.color === panierArticle.color) {
							panierArticle.splice(i, 1);
							if (panierArticle.length === 0) {
								localStorage.removeItem('panier');
							} else {
								localStorage.setItem('panier', JSON.stringify(panierArticle));
							}
							document.location.reload();
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
						document.location.reload();
					});
				}
			})
			.catch((error) => {
				alert('Erreur: ' + error.message);
			});
	}
}

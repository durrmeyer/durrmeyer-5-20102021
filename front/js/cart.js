//---------------------------------- recupération dans le local Storage----------------------------
const panierArticle = JSON.parse(localStorage.getItem('panier'));
const articles = document.querySelector('#cart__items');

let listArticle = []; //ajout

if (panierArticle == null || panierArticle.length == 0) {
	articles.innerHTML = `
			<p> Votre panier est vide </p>
    		`;
	const cache = document.querySelector('.cart__order');

	cache.style.display = 'none';
} else {
	/*let sommeTotal = 0;*/
	//----------------------------------Affichage des produits selectionnés-----------------------------//
	for (let i = 0; i < panierArticle.length; i++) {
		fetch(`http://localhost:3000/api/products/${panierArticle[i].id}`)
			.then((response) => response.json())
			.then((articleCatalogue) => {
				listArticle.push(articleCatalogue); //ajout
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
			})
			.then((sommeTotal) => {
				//----------------------------------------  suppression d'un article------------------------------------//
				let boutons = document.querySelectorAll('.deleteItem');

				for (let i = 0; i < boutons.length; i++) {
					boutons[i].addEventListener('click', (event) => {
						event.preventDefault();
						const panierArticle = JSON.parse(localStorage.getItem('panier'));

						if (panierArticle.id === panierArticle.id && panierArticle.color === panierArticle.color) {
							panierArticle.splice(i, 1);

							localStorage.setItem('panier', JSON.stringify(panierArticle));
							document.location.reload();
						} else {
							panierArticle = false;
						}
					});
				}
				//--------------------------------------------------- mofification du nombre d'articles------------------------//
				const choixArticles = document.querySelectorAll('.itemQuantity');
				console.log(choixArticles);

				const article = document.querySelectorAll('input[type =number]');
				console.log(article);

				for (let i = 0; i < choixArticles.length; i++) {
					choixArticles[i].addEventListener('change', (event) => {
						event.preventDefault();
						const panierArticle = JSON.parse(localStorage.getItem('panier'));
						console.log(panierArticle);
						article[i].setAttribute('value', article[i].value);
						panierArticle[i].quantity = article[i].value;
						localStorage.setItem('panier', JSON.stringify(panierArticle));
						document.location.reload();
					});
				}
				//------------------------------------------------------quantité * le prix -----------------------------//
				let totalArticle = [];
				let articleTotal = 0;

				const quantite = document.getElementById('totalQuantity');
				console.log(quantite);

				const total = document.getElementById('totalPrice');
				console.log(total);
				console.log(panierArticle);

				if (panierArticle != null && panierArticle.length > 0) {
					sommeTotal = 0;
					for (let p = 0; p < panierArticle.length; p++) {
						let quantiteArticle = panierArticle[p].quantity;
						console.log(quantiteArticle);
						totalArticle.push(quantiteArticle);

						/*-------	"return article._id == panierArticle[p].id;" Ce bout de code permet de ressortir de la liste "listArticle" tous les articles
			qui ont le même id que l'élément dans panierArticle.
			L'id est unique, donc il y aura toujours un seul élément trié.
			La fonction "Filter" renvoie une liste d'éléments, donc je mets un "[0]" à la fin pour récupérer le premier élément de ma liste (qui est un article). 
---------						*/
						let article = listArticle.filter((article) => {
							return article._id == panierArticle[p].id;
						})[0];
						//------------------------------------------sommes total du panier-----------------------------------------------//
						articleTotal = Number(articleTotal) + Number(quantiteArticle);
						sommeTotal = sommeTotal + article.price * quantiteArticle;
					}
				}

				//------------------------------------------affichage de la somme et du nombre d'articles-----------------------------------------------//
				quantite.innerText = articleTotal;
				total.innerText = sommeTotal;
			});
	}
}

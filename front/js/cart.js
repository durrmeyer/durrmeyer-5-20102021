//---------------------------------- recupération dans le local Storage----------------------------
const panierArticle = JSON.parse(localStorage.getItem('panier'));

if (panierArticle === null) {
} else {
	let articles = document.querySelector('#cart__items');
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
          </section>
         
   `;
	}
}

//----------------------------------------  suppression d'un article------------------------------------//
let boutons = document.querySelectorAll('.deleteItem');

for (let i = 0; i < boutons.length; i++) {
	boutons[i].addEventListener('click', (event) => {
		event.preventDefault();
		const panierArticle = JSON.parse(localStorage.getItem('panier'));

		if ((panierArticle.id === panierArticle.id && panierArticle.color) === panierArticle.color) {
			panierArticle.splice(i, 1);
			localStorage.setItem('panier', JSON.stringify(panierArticle));
		} else {
			panierArticle = false;
		}
		document.location.reload();
	});
}

//---------------------------------------------------bouton mofification du nombre d'articles------------------------//
let choixArticles = document.querySelectorAll('.itemQuantity');

console.log(choixArticles);
for (let i = 0; i < choixArticles.length; i++) {
	choixArticles[i].addEventListener('change', () => {
		let article = document.querySelector('itemQuantite');

		console.log(article, 'ici');
	});
}

//------------------------------------------------------quantité * le prix -----------------------------//
let totalPanier = [];
let totalArticle = [];

const total = document.getElementById('totalPrice');

for (let p = 0; p < panierArticle.length; p++) {
	let prixArticle = panierArticle[p].price * panierArticle[p].quantity;

	let quantiteArticle = panierArticle[p].quantity;

	totalPanier.push(prixArticle);
	totalArticle.push(quantiteArticle);
}

//------------------------------------------sommes total du panier-----------------------------------------------//
const prixTotal = totalPanier.reduce((acc, x) => acc + x);
const articleTotal = totalArticle.reduce((acc, x) => acc + x);
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const somme = totalPanier.reduce(reducer, 0);

total.innerHTML = `
     <div class="cart__price">
             <p>
               Total <span id="totalQuantity">${articleTotal}</span> articles :
               <span id="totalPrice">${prixTotal}</span> €
             </p>
           </div>
     `;

//---------------------formulaire---------------------------------------//

let prenom = document.getElementById('#firstName');
let nom = document.getElementById('lastName');
let adresse = document.getElementById('adress');
let ville = document.getElementById('city');
let email = document.getElementById('email');
let messageErreur = document.getElementById('firstNameErrorMsg');

const commander = document.getElementById('order');

let formulaire = document.querySelector('.cart__order__form');
console.log(formulaire);

const validationprenom = function(prenom) {
	let prenomRegExp = new RegExp("^[w'-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[]]{2,}$");
};

//------------------------------validation email--------------------//
email.addEventListener('change', function() {
	validationEmail(this);
});

const validationEmail = function(email) {
	let emailRegExp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
	let testEmail = emailRegExp.test(email.value);
	let p = email.nextElementSibling;
	if (testEmail) {
		p.innerHTML = `adresse valide`;
	} else {
		p.innerHTML = `adresse non valide`;
	}
};

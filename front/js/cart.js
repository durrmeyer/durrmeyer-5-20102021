//---------------------------------- recupération dans le local Storage----------------------------
const panierArticle = JSON.parse(localStorage.getItem("panier"));
console.table(panierArticle);

if (panierArticle === null) {

} else {
 
  let article = [];
  
  console.log(article);
    let articles = document.querySelector("#cart__items");
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

let boutonSupprimer = document.querySelectorAll(".deleteItem");
  let nouveauTableau = [];

for (let i = 0; i < boutonSupprimer.length; i++) {
  boutonSupprimer[i].addEventListener("click", (event) => {
    event.preventDefault();
   boutonSupprimer[i].parentElement.style.display ="none";
 
    let choixArticle = panierArticle[i].id && panierArticle[i].color;
    console.log(choixArticle);

    choixArticle = panierArticle.filter((article) => article.id && article.color !== choixArticle);
    console.log(choixArticle);
 
        localStorage.setItem("panier", JSON.stringify(choixArticle));

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
    console.log("prixArticle");
//---------------------------------------------------bouton mofification du nombre d'articles------------------------//
   


    //------------------------------------------sommes total du panier-----------------------------------------------//
    const prixTotal = totalPanier.reduce((acc, x) => acc + x);
    const articleTotal = totalArticle.reduce((acc, x) => acc + x);
    /* const reducer = (previousValue, currentValue) => previousValue + currentValue;
    
    const prixTotal = totalPanier.reduce(reducer, 0);*/
    console.log(prixTotal)
 
    total.innerHTML= `
    <div class="cart__price">
            <p>
              Total <span id="totalQuantity">${articleTotal}</span> articles :
              <span id="totalPrice">${prixTotal}</span> €
            </p>
          </div>
    `
   
   };










//---------------------------------- recupération dans le local Storage----------------------------
const panierArticle = JSON.parse(localStorage.getItem("panier"));
console.table(panierArticle);

if (panierArticle === null) {
  console.log("votre panier est vide");
} else {
  console.log("vous avez des articles");

  let article = [];
  
  console.log(article);
  let articles = document.querySelector("#cart__items");
  //----------------------------------Affichage des produits selectionnés-----------------------------//
  for (let i = 0; i < panierArticle.length; i++) {
    articles.innerHTML += `
    <section class="cart" id="cart__items">
           <article class="cart__item" data-id="{product-ID}">
              <div class="cart__item__img">
             ${panierArticle[i].imageUrl}         
            </div>
              <div class="cart__item__content">
                <div class="cart__item__content__titlePrice">
                  <h2>${panierArticle[i].title}</h2>
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

/*const supprimer = document.querySelectorAll(".deleteItem");
console.log(supprimer);


for (let i = 0; i < supprimer.length; i++) {
  supprimer[i].addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);
     boutonSupprimer.filter(panierArticle => panierArticle[i] !== 0);
   
  })
  
    localStorage.setItem("panier", JSON.stringify(panierArticle));
}*/



//------------------------------------------------------quantité * le prix -----------------------------//
let totalPanier = [];
let totalArticle = [];




const total = document.getElementById('totalPrice');
  for (let p = 0; p < panierArticle.length; p++) {
    let prixArticle = parseInt(panierArticle[p].price * panierArticle[p].quantity);

    let quantiteArticle = parseInt(panierArticle[p].quantity);
    
    console.log(quantiteArticle);

    totalPanier.push(prixArticle);
    totalArticle.push(quantiteArticle);

//---------------------------------------------------bouton mofification du nombre d'articles------------------------//
    /*let ajouterQuantite = [];
  
  const modifier = document.getElementsByClassName('.cart__item__content__settings');
 
    document.querySelector('.itemQuantity').addEventListener('click', function () {

     ajouterQuantite = parseInt(panierArticle[p].quantity) + 1;
     
      
     console.log(ajouterQuantite);
});*/
   

   
    //------------------------------------------sommes total du panier-----------------------------------------------//
    const prixTotal = totalPanier.reduce((acc, x) => acc + x);
    const articleTotal = totalArticle.reduce((acc, x) => acc + x);
    /* const reducer = (previousValue, currentValue) => previousValue + currentValue;
    
    const prixTotal = totalPanier.reduce(reducer, 0);*/
    console.log(prixTotal);
    console.log(articleTotal);
 
    total.innerHTML= `
    <div class="cart__price">
            <p>
              Total <span id="totalQuantity">${articleTotal}</span> articles :
              <span id="totalPrice">${prixTotal}</span> €
            </p>
          </div>
    `
   
  };
  










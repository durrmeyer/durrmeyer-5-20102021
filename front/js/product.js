// Récupération de la requête dans l'URL//
const SearchParams = window.location.search;

const urlSearchParams = new URLSearchParams(SearchParams);
const id = urlSearchParams.get("id");

//affiche le produit selectionné//

async function getProduct(id) {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  return await response.json();
}

/**
 * affiche le produit dans la page produit
 */
getProduct(id).then((product) => {
  document.querySelector(
    "#imageUrl"
  ).innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;

  document.querySelector("#title").innerText = product.name;
  document.querySelector("#price").innerText = product.price;
  document.querySelector("#description").innerText = product.description;

  const selectColors = document.querySelector("#colors");
  for (const color of product.colors) {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = color;
    selectColors.appendChild(option);
  }
});
/* Ajouter un article dans le panier */

const button_envoyer = document.querySelector("#addToCart");
const selectColors = document.querySelector("#colors");

button_envoyer.addEventListener("click", function (event) {
  event.preventDefault("");
  document.getElementById("price").innerText = ++parentClicks + "";
});

// Récuprération de la requête dans l'URL//
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

//extraire l'id avec slice pour enlever le ?//

const _id = queryString_url_id.slice(1);
console.log(_id);

//affiche le produit selectionné//
console.log(products);

const idProduct = products.find((element) => element._id === _id);
console.log(idProduct);

//

function displayArticle(product) {
    Document.querySelector("item").innerHTML = ``

};
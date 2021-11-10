// Récupération de la requête dans l'URL//
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

//extraire l'id avec slice pour enlever le ?//

const product_ID = queryString_url_id.slice(4);
console.log(product_ID);

//affiche le produit selectionné//

/*const article = product.find((Element) => Element._id === "_id");
console.log(article);*/

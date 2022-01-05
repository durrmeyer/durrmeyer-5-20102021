const formulaire = document.querySelector('.cart__order__form');
console.log(formulaire);

formulaire.firstName.addEventListener('change', function() {
	validationPrenom(this);
});
formulaire.lastName.addEventListener('change', function() {
	validationNom(this);
});

formulaire.address.addEventListener('change', function() {
	validationAdresse(this);
});

formulaire.city.addEventListener('change', function() {
	validationVille(this);
});
formulaire.email.addEventListener('change', function() {
	validationEmail(this);
});
//---------------ecoute de l'envoi---------------------------//
formulaire.addEventListener('submit', (event) => {
	event.preventDefault();
	if (validationPrenom(formulaire.firstName) && validationNom(formulaire.lastName));
	if (validationAdresse) formulaire.address && validationVille(formulaire.city) && validationEmail(formulaire.email);

	const client = {
		prenom: document.querySelector('#firstName').value,
		nom: document.querySelector('#lastName').value,
		adresse: document.querySelector('#address').value,
		ville: document.querySelector('#city').value,
		email: document.querySelector('#email').value
	};
	//----------------------------mettre le formulaire dans le localStorage-------------------//
	localStorage.setItem('client', JSON.stringify(client));

	//--------------------------récupération du ou des ID-------------------------//

	let idCommande = [];
	for (let i = 0; i < panierArticle.length; i++) {
		idCommande[i] = panierArticle[i].id;
	}
	console.log(idCommande);

	const order = {
		contact: {
			firstName: 'prenom',
			lastName: 'nom',
			address: 'adresse',
			city: 'ville',
			email: 'email'
		},

		products: idCommande
	};

	console.log(order),
		fetch('http://localhost:3000/api/products/order', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(order)
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				localStorage.setItem('idCommande', data.orderId);
				/*
				localStorage.clear();*/
				document.location.href = 'confirmation.html';
			})
			.catch((error) => {
				alert('Erreur: ' + error.message);
			});
});
//------------------------------------validation prenom------------------------------//
const validationPrenom = function(inputFirstName) {
	let prenomRegExp = new RegExp(/^[a-zA-Z\-]{2,20}$/);
	let testPrenom = prenomRegExp.test(inputFirstName.value);
	console.log(testPrenom);
	let p = inputFirstName.nextElementSibling;
	if (testPrenom) {
		p.innerHTML = `valide`;
		return true;
	} else {
		p.innerHTML = `non valide`;
		return false;
	}
};

//-------------------------------------validation Nom--------------------------------//
const validationNom = function(inputLastName) {
	let nomRegExp = new RegExp(/^[a-zA-Z\-]{2,20}$/);
	let testNom = nomRegExp.test(inputLastName.value);
	console.log(testNom);
	let p = inputLastName.nextElementSibling;
	if (testNom) {
		p.innerHTML = `valide`;
		return true;
	} else {
		p.innerHTML = `non valide`;
		return false;
	}
};
//------------------------------------validation adresse------------------------------//
const validationAdresse = function(inputAddress) {
	let adresseRegExp = new RegExp(/^[0-9]+[A-Za-z\s]{2,40}$/);
	let testAdresse = adresseRegExp.test(inputAddress.value);
	console.log(testAdresse);
	let p = inputAddress.nextElementSibling;
	if (testAdresse) {
		p.innerHTML = `valide`;
		return true;
	} else {
		p.innerHTML = `non valide`;
		return false;
	}
};
//------------------------------------validation ville------------------------------//

const validationVille = function(inputCity) {
	let villeRegExp = new RegExp(/^[A-Za-z\s-]{2,40}$/);
	let testVille = villeRegExp.test(inputCity.value);
	console.log(testVille);
	let p = inputCity.nextElementSibling;
	if (testVille) {
		p.innerHTML = `valide`;
		return true;
	} else {
		p.innerHTML = `non valide`;
		return false;
	}
};
//------------------------------------validation email------------------------------//

const validationEmail = function(inputEmail) {
	let emailRegExp = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
	let testEmail = emailRegExp.test(inputEmail.value);
	console.log(testEmail);
	let p = inputEmail.nextElementSibling;
	if (testEmail) {
		p.innerHTML = `valide`;
		return true;
	} else {
		p.innerHTML = `non valide`;
		return false;
	}
};

const formulaire = document.querySelector('.cart__order__form');

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
//--------------------------------------écoute de l'envoi-----------------------------------------//
formulaire.addEventListener('submit', (event) => {
	event.preventDefault();
	if (validationPrenom(formulaire.firstName) && validationNom(formulaire.lastName)) {
		if (
			validationAdresse(formulaire.address) &&
			validationVille(formulaire.city) &&
			validationEmail(formulaire.email)
		) {
			commandeEnregistre();
		}
	} else {
		console.log(' tous les champs ne sont pas valide');
	}
	function commandeEnregistre() {
		const client = {
			prenom: document.querySelector('#firstName').value,
			nom: document.querySelector('#lastName').value,
			adresse: document.querySelector('#address').value,
			ville: document.querySelector('#city').value,
			email: document.querySelector('#email').value
		};
		//--------------------------------mettre le formulaire dans le localStorage-------------------//
		localStorage.setItem('client', JSON.stringify(client));
		window.location.assign('confirmation.html');
		//-----------------------------------récupération du ou des ID--------------------------------//

		let idProduit = [];
		for (let i = 0; i < panierArticle.length; i++) {
			idProduit[i] = panierArticle[i].id;
		}
		console.log(panierArticle.length);
		const order = {
			contact: {
				firstName: 'client.prenom',
				lastName: 'client.nom',
				address: 'client.adresse',
				city: 'client.ville',
				email: 'client.email'
			},

			products: idProduit
		};
		console.log(order);
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
				document.location.href = 'confirmation.html?id= ' + data.orderId;
			})
			.catch((error) => {
				alert('Erreur: ' + error.message);
			});
	}
});
//------------------------------------validation prenom----------------------------------------//
const validationPrenom = function(inputFirstName) {
	let prenomRegExp = new RegExp(/^[a-zA-Z\-]{2,30}$/);
	let testPrenom = prenomRegExp.test(inputFirstName.value);
	console.log(testPrenom);
	let p = inputFirstName.nextElementSibling;
	if (testPrenom) {
		p.innerHTML = `valide`;
		return true;
	} else {
		p.innerHTML = `merci de bien vouloir rentrer votre prénom`;
		return false;
	}
	console.log(validationPrenom);
};

//-------------------------------------validation Nom--------------------------------//
const validationNom = function(inputLastName) {
	let nomRegExp = new RegExp(/^[a-zA-Z\-]{2,30}$/);
	let testNom = nomRegExp.test(inputLastName.value);
	console.log(testNom);
	let p = inputLastName.nextElementSibling;
	if (testNom) {
		p.innerHTML = `valide`;
		return true;
	} else {
		p.innerHTML = `merci de bien vouloir rentrer votre nom`;
		return false;
	}
};
//------------------------------------validation adresse------------------------------//
const validationAdresse = function(inputAddress) {
	let adresseRegExp = new RegExp(/^[0-9]+[A-Za-z._\s]{2,60}$/);
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
	let emailRegExp = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
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

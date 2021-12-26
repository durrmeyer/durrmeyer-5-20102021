//-------------------------------formulaire----------------------------------//
let formulaire = document.querySelector('.cart__order__form');
let messageErreur = document.getElementById('firstNameErrorMsg');

//----------------------------validation prenom----------------------------//
let prenom = document.getElementById('firstName');
prenom.addEventListener('change', function() {
	validationPrenom(this);
});

function validationPrenom() {
	let prenomRegExp = /^[a-zA-Z\-]{2,20}$/;
	let testPrenom = prenomRegExp.test(prenom.value);
	console.log(testPrenom);
	let p = prenom.nextElementSibling;
	if (testPrenom == true) {
		p.innerHTML = ` valide`;
	} else {
		p.innerHTML = `non valide`;
	}
}
//------------------------validation Nom----------------------------//
let nom = document.getElementById('lastName');
nom.addEventListener('change', function() {
	validationNom(this);
});

function validationNom() {
	let nomRegExp = /^[a-zA-Z\-]{2,20}$/;
	let testNom = nomRegExp.test(nom.value);
	console.log(testNom);
	let p = nom.nextElementSibling;
	if (testNom == true) {
		p.innerHTML = ` valide`;
	} else {
		p.innerHTML = `non valide`;
	}
}
//------------------------------validation adresse--------------------/
let adresse = document.getElementById('address');
adresse.addEventListener('change', function() {
	validationAdresse(this);
});

function validationAdresse() {
	let adresseRegExp = /^[0-9]+[A-Za-z\s]{2,40}$/;
	let testAdresse = adresseRegExp.test(adresse.value);
	console.log(testAdresse);
	let p = adresse.nextElementSibling;
	if (testAdresse) {
		p.innerHTML = `valide`;
	} else {
		p.innerHTML = `non valide`;
	}
}

//------------------------------validation ville--------------------//
let ville = document.getElementById('city');
ville.addEventListener('change', function() {
	validationVille(this);
});

const validationVille = function(ville) {
	let villeRegExp = /^[A-Za-z\s-]{2,40}$/;
	let testVille = villeRegExp.test(ville.value);
	let p = ville.nextElementSibling;
	if (testVille) {
		p.innerHTML = ` valide`;
	} else {
		p.innerHTML = ` non valide`;
	}
};
//------------------------------validation email--------------------//

let email = document.getElementById('email');
email.addEventListener('change', function() {
	validationEmail(this);
});

const validationEmail = function(email) {
	let emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let testEmail = emailRegExp.test(email.value);
	let p = email.nextElementSibling;
	if (testEmail) {
		p.innerHTML = `email valide`;
	} else {
		p.innerHTML = `email non valide`;
	}
};

//-------------------------envoi du formulaire----------------------------//

const validation = document.getElementById('order');

validation.addEventListener('click', (event) => {
	for (let i = 0; i < commander.length; i++) {
		event.preventDefault();
		if (nom.value == true) {
		}
	}
	const client = {
		prenom: document.getElementById('firstName').value,
		nom: document.getElementById('lastName').value,
		adresse: document.getElementById('address').value,
		ville: document.getElementById('city').value,
		email: document.getElementById('email').value
	};
	//----------------------------mettre le formulaire dans le localStorage-------------------//
	localStorage.setItem('client', JSON.stringify(client));
	/*window.location.assign('confirmation.html');*/
});

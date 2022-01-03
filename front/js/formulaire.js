//-------------------------------formulaire----------------------------------//
const formulaire = document.querySelector('.cart__order__form');

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
	if (testPrenom == '') {
		p.innerHTML = ` non valide`;
		return false;
	} else {
		p.innerHTML = `valide`;
		return true;
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
	if (testNom == '') {
		p.innerHTML = ` non valide`;
	} else {
		p.innerHTML = `valide`;
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
	if (testAdresse == '') {
		p.innerHTML = `non valide`;
	} else {
		p.innerHTML = `valide`;
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
	console.log(testVille);
	let p = ville.nextElementSibling;
	if (testVille == '') {
		p.innerHTML = `non valide`;
	} else {
		p.innerHTML = `valide`;
	}
};

//------------------------------validation email--------------------//
let email = document.getElementById('email');
ville.addEventListener('change', function() {
	validationVille(this);
});

const validationEmail = function(email) {
	let emailRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	let testEmail = emailRegExp.test(email.value);
	console.log(testEmail);
	let p = email.nextElementSibling;
	if (testEmail == '') {
	
		p.innerHTML = `email non valide`;
	} else {
			testEmail.disabled='true';
		p.innerHTML = `email valide`;
	}
};

//-------------------------envoi du formulaire----------------------------//

const boutonValidation = document.querySelector('#order');

boutonValidation.addEventListener('click', () => {

	//--------------------------envoi dans le localStorage---------------------//
	const client = {
		prenom: document.querySelector('#firstName').value,
		nom: document.querySelector('#lastName').value,
		adresse: document.querySelector('#address').value,
		ville: document.querySelector('#city').value,
		email: document.querySelector('#email').value
	};



	//----------------------------mettre le formulaire dans le localStorage-------------------//
	localStorage.setItem('client', JSON.stringify(client));


	//--------------------------confirmation par client-------------------------//
	order = {
		contact: {
			firstName: "prenom",
			lastName: "nom",
			address: "adresse",
			city: "ville",
			email: "email",
		
		},
		
		products: panierArticle,
		
	}
	fetch('http://localhost:3000/api/products/order', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(order)
	})
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			console.log(data)
	 	});
});
	


	

	
        
         /*   console.log(data);*/
          

        /*document.location.href = "confirmation.html";*/
     /*      .catch((err) => {
            alert ("Problème avec fetch : " + err.message);*/
    
		

	
        

		

	
	
	


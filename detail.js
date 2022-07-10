////////////////FUNCIONES/////////////////////////////////////////////////
let getPeopleId   = () => window.location.href.split('?')[1].split('=')[1];
let getPeopleInfo = (peopleId) => {
	/////informacion del personaje
	fetch('https://swapi.dev/api/people/'+peopleId+'/')
	.then(response => response.json())
	.then(data => {
		document.getElementById('information').innerHTML = '<ul class = "nav flex-column">'+
																'<li class = "nav-item"><b>Name</b>: '+data.name+'</li>'+
																'<li class = "nav-item"><b>Heigth</b>: '+data.height+'</li>'+
																'<li class = "nav-item"><b>Hair Color</b>: '+data.hair_color+'</li>'+
																'<li class = "nav-item"><b>Eye Color</b>: '+data.eye_color+'</li>'+
																'<li class = "nav-item"><b>Bird Year</b>: '+data.birth_year+'</li>'+
																'<li class = "nav-item"><b>Gender</b>: '+data.gender+'</li>'+
																'<li class = "nav-item"><b>Home Word</b>: '+getPlanetWordName(data.homeworld)+'</li>'+
															'</ul>';
		document.getElementById('films').innerHTML = '<ul class = "nav">'+
		getImgFilms(data.films)
		+'</ul>';
	});
}

let getImgFilms = (obj) =>{
	
} 

let getPlanetWordName = (uri) => fetch(uri).then(response => response.json()).then(data => {
	//// informacion del planeta de origen
	return data.name;
});

(function(){
	/**
	 * VARIABLES PARA MANIPULACION DEL DOM
	 * */
	let characte_info = document.getElementById('information');
	let character_id  = getPeopleId();
	/**
	 * EVENTOS PARA DESPLIEGUE DE INFORMACION
	 * */
	 getPeopleInfo(character_id);
}());
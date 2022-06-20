let character_search = () =>{
	for(let i = 0; i < 10; i++){
		let urlString = 'https://swapi.dev/api/people/?page='+i;
		fetch(urlString).
		then(response => response.json()).
		then(data => {
			console.log(data.results);
		});
	}
}

let display_modal = (modal_id, switsh) => {
	/**
	 * Funcion para mostrar una ventana modal*/
	 let modal = new bootstrap.Modal(document.getElementById(modal_id), {
	 	'backdrop' : true
	 });

	 modal.show();
}

let lista_personajes = (numero) =>{
	let nombres = "";
	fetch('https://swapi.dev/api/people/?page='+numero).
	then(response => response.json()).
	then(data => {
		data.results.forEach((characters) => {
			const people = characters.url.split("/");			
			nombres += "<li class = 'nav-item border border-buttom mb-2'><a class = 'btn btn-outline-warning w-100' href = 'detail.html?people="+people[5]+"'>"+characters.name+"</a></li>";
		});
		document.getElementById('cargar_nombres').innerHTML = nombres;
	});
}


let paginacion = ()=>{
	let paginas = "";
	let nro_paginas = document.getElementsByName('page[]');
	for(let i = 1; i < 10; i++){
		/**
		 *  Aqui se muestra la paginacion.
		 **/
		paginas += "<li class='page-item'><a class='page-link' href='#' name = 'page[]'>"+i+"</a></li>";
	}
	console.log(nro_paginas);
	document.getElementById('paginacion').innerHTML = paginas;
	for(let j=0; j < 10; j++){
		nro_paginas[j].addEventListener('click', (event)=>{
			event.preventDefault();
			lista_personajes(j+1);
		});
	}
}

//character_search();

lista_personajes(1);
paginacion();
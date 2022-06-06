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



let next_page = (int) => {
 /**
  *  Funcion para pasar a la siguiente lista de personajes.
  * */
}

//character_search();
lista_personajes();
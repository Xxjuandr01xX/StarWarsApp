let character_search = () =>{
	fetch('https://swapi.dev/api/people/').
	then(response => response.json).
	then(data => {
		let dat = JSON.parse(data);
		console.log(dat);
	});
}

character_search();
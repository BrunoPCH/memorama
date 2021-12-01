function barajaTarjetas() {
	var resultado;
 	resultado = totalTarjetas.sort(
	function() {
	return 0.5 - Math.random();
	});
	return resultado;
}

function reparteTarjetas() {
	var mesa = document.querySelector("#contenedor_cartas1");
	var tarjetasBarajadas = barajaTarjetas();

	mesa.innerHTML = "";
	
	tarjetasBarajadas.forEach(function(elemento) {
		var carta = document.createElement("div");
	
	carta.innerHTML = 
		"<div class='carta' data-valor= " + elemento +">" + 
		"<div class='carta__contenido'>" +
		elemento +
		"</div>" +
		"</div>" ;
	mesa.appendChild(carta);
	});
}
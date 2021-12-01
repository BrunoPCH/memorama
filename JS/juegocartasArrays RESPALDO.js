var grupoTarjetas = ["👩🏻","😘","🎁","🦄","🦋","🐙","🌈","🎆","🌠","🌅","❤️","🐥"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

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
function descubrir() {
	var descubiertas;
	var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
if (totalDescubiertas.length > 1) {
return
}	
this.classList.add("descubierta");
descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
if (descubiertas.length < 2 ) {
return;
}
comparar(descubiertas);

} 
function comparar(tarjetasAComparar){
	if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor){
	acierto(tarjetasAComparar);	
	}
	else {
		error(tarjetasAComparar);
	}

}

function acierto(lasTarjetas) {
	lasTarjetas.forEach(function(elemento) {
		elemento.classList.add("acertada");
	
	});
	console.log("Chingón!");
	document.getElementById('sonido_correcto').play();
	
	
}

function error(lasTarjetas){
	lasTarjetas.forEach(function(elemento) {
	elemento.classList.remove("descubierta");

});
	console.log ("Chale!");
	document.getElementById('sonido_error').play();
}


function comienzaJuego() {
	reparteTarjetas();
	document.querySelectorAll(".carta").forEach(function(elemento) {
		elemento.addEventListener("click", descubrir);

});
}

document.querySelector("#btn_reparte_cartas").addEventListener("click", comienzaJuego);
window.onload = comienzaJuego();



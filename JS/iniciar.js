function comienzaJuego() {
	reparteTarjetas();
	document.querySelectorAll(".carta").forEach(function(elemento) {
		elemento.addEventListener("click", descubrir);});
}
document.querySelector("#btn_reparte_cartas").addEventListener("click", comienzaJuego);
window.onload = comienzaJuego();



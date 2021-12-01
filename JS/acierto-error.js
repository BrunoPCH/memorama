function acierto(lasTarjetas) {
	lasTarjetas.forEach(function (elemento) {
		elemento.classList.add("acertada");

	});
	console.log("Chingón!");
	document.getElementById('sonido_correcto').play();


}

function error(lasTarjetas) {
	lasTarjetas.forEach(function (elemento) {
		elemento.classList.add("error");
		console.log("Chale!");
		document.getElementById('sonido_error').play();
	});
	setTimeout(
		function () {
			lasTarjetas.forEach(function (elemento) {
				elemento.classList.remove("descubierta");
				elemento.classList.remove("error");
			})

		}, 1000);

}
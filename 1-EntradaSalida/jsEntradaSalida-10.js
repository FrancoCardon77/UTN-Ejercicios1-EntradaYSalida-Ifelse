/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let disminucion;
	let sueldoDis;

	sueldo = parseInt(document.getElementById("txtIdImporte").value);

	disminucion = sueldo * 0.25;

	sueldoDis = sueldo - disminucion;

	document.getElementById("txtIdResultado").value = sueldoDis;

}

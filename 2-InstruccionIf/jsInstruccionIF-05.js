/*Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 17) {
		alert(`usted no es adolescente papu, dejese de joder y a laburar no te van a estar manteniendo toda la vida, total mandale que hasta los 21 safas`)
	}


}
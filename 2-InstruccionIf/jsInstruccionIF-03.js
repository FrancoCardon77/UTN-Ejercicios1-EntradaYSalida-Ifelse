/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		alert(`Es mayor de edad papu`)
	}
		else {
			alert(`papu, usted no se haga el bldo no es mayor`)
		}


}
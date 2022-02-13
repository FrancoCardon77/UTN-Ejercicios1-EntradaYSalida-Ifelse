/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas o igual de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >=18) {
		alert("Usted es mayor")
	}
		else if (edad >=13 && edad <=17) {
			alert ("usted es adolescente")
		}
		else if (edad < 13) {
			alert(`es un niño papu`)
		}
}
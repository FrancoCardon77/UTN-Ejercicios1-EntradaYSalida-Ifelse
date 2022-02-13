/*Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número''
si la edad es par , además mostrar , “sos par!!”.
además de los datos ya ingresados , solicitar el nombre .*/

function mostrar()
{
	let edad;
	let mensaje = "";
	let nombre

	edad = parseInt(document.getElementById("txtIdEdad").value);
	nombre = prompt(`Ingrese su nombre`)

	if(edad < 13){
		mensaje = "feliz dia";
				}
	if (edad >= 13 && edad <= 17){
		mensaje = "usted es adolescente"
		if (edad == 17) {
			mensaje = `${mensaje} ultimo año!!!`;
		} 
			}
	if(edad > 17 && edad <= 59){
		mensaje = "tenes edad de laburar"
		if (edad == 33) {
			mensaje = `${mensaje} como cristo`;
			}
			}
	if(edad >= 60 && edad <= 88 ){
		mensaje = `${mensaje} a jubilarse`
		if (edad == 88) {
			mensaje = `${mensaje} lindo numero`;
			} 
					}	
	if(edad % 2 === 0){
		mensaje = `${mensaje} sos par!!`;
	}
	
	alert(mensaje);
}
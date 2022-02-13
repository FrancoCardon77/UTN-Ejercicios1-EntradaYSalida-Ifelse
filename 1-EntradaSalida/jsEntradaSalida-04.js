/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	//creo una variable para reservar espacio en memoria
	let nombre;
	//le pido al usuario con "prompt" que me dé el dato para guardar en la variable
	nombre = prompt("ingrese su nombre");
	//copio el nombre que tengo guardado en la variable nombre, dentro de la caja de texto enbebida en la página HTML
	document.getElementById("txtIdNombre").value = nombre;
}


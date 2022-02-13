/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	let examen;

	examen = parseInt(Math.floor((Math.random() *10)+1));

	if (examen == 9 || examen == 10) {
		alert(`${examen} EXCELENTE PAPU`);
	}
		else if (examen >= 4 && examen <= 8) {
			alert (`${examen} APROBÓ`);	
		}
		else {
			alert(`${examen} Vamos, la próxima se puede`);
		}


}
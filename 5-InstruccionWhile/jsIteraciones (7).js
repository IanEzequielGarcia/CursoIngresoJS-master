function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
	{
		suma=prompt("Ingrese un numero");
		suma=parseInt(suma);
		acumulador=acumulador+suma;
		acumulador=parseInt(acumulador);
		respuesta=prompt("Quiere seguir la suma?si/no");
		contador+=1;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
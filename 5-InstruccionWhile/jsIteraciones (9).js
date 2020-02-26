function mostrar()
{

	var contador=0;
	var contadorPares;
	var maximo;
	var minimo;
	var numeroIngresado;
	// declarar variables
		
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numeroIngresado=prompt("ingrese numero menor a 10 y mayor que 0");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) || numeroIngresado>0 || numeroIngresado>10)
		{
			numeroIngresado=prompt("Error, intentelo de nuevo");
			numeroIngresado=parseInt(numeroIngresado);
		}

		contador=acumulador+numeroIngresado
		if(numeroIngresado%2==0)
		{
			contadorPares++;
		}
		/*
			if(numeroIngresado>maximo || contador==1)
			{
				maximo=numeroIngresado;
			}
			if(numeroIngresado<minimo || contador==1)
			{

		respuesta=prompt("ingrese `no`para salir");
		*/
	}

	document.getElementById("maximo").value=maximo
	document.getElementById("minimo").value=minimo
}//FIN DE LA FUNCIÓN
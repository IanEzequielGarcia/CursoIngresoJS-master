function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador=0;
	var numero;
	var multiplicacion=1;
	
	var respuesta='si';
	while(respuesta=="si")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
			if(numero>0)
			{
				positivo+=numero;
			}
			if(numero<0)
			{
				negativo=negativo*numero
			}
			
			respuesta=prompt("Quiere seguir la cuenta?si/no");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
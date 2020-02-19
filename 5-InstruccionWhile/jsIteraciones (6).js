function mostrar()
{
	var suma;
	var contador=0;
	var acumulador=0;
	var numerosIngresados=0;

	while(numerosIngresados<5)
	{
		suma=prompt("Ingrese un numero");
		suma=parseInt(suma);
		acumulador=acumulador+suma;
		acumulador=parseInt(acumulador);
		numerosIngresados+=1;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
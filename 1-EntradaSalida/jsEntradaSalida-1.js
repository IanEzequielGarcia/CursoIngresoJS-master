/* 
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
 */
function mostrar()
{
	var huesped, cantidadDePersonas, cantidadEstadia, formaPago, respuesta;
	var maximoPersonas, maximoDias, bandera, maximoHuesped, maximoPersonasEstadia;
	var pagoQR, pagoEFT, pagoTJT, formaPagoMax, contador;

	respuesta="no"
	bandera=0;
	pagoQR=0;
	pagoTJT=0;
	pagoEFT=0;
	maximoPersonas=0;
	contador=0;
	contador=parseInt(contador);

	while(respuesta!="si")
	{
		do
		{
			huesped=prompt("Quien en su huesped?");
		}while(!isNaN(huesped));
		do
		{
			cantidadDePersonas=prompt("cuantas personas?");
		}while(isNaN(cantidadDePersonas));
		do
		{
			cantidadEstadia=prompt("cuanto se quedan?");
			cantidadEstadia=parseInt(cantidadEstadia);
		}while(isNaN(cantidadEstadia));
		do
		{
			formaPago=prompt("como pagan?");
		}while(!isNaN(formaPago)||formaPago!="qr"&&formaPago!="eft"&&formaPago!="tjt");

		if(bandera==0||maximoPersonas<cantidadDePersonas)
		{
			maximoPersonas=cantidadDePersonas;
			maximoHuesped=huesped;
		}
		if(bandera==0||maximoDias<cantidadEstadia)
		{
			maximoDias=cantidadEstadia;
			maximoPersonasEstadia=cantidadDePersonas;
		}
		switch(formaPago)
		{
			case "qr":
				pagoQR++;
				break;
			case "eft":
				pagoEFT++;
				break;
			case "tjt":
				pagoTJT++;
				break;
		}
		if(pagoQR>pagoEFT&&pagoQR>pagoTJT)
		{
			formaPagoMax="QR"
		}
		else
		{
			if(pagoEFT>pagoTJT)
			{
				formaPagoMax="EFT"
			}
			else
			{
				formaPagoMax="TJT"
			}
		}

		bandera++;
		contador=contador+cantidadEstadia;

		respuesta=prompt("Queres parar el loop?")
	}
	promedio=contador/bandera;

	document.write("<br> maximo huesped "+maximoHuesped);
	document.write("<br> maximo personas "+maximoPersonas);
	document.write("<br> maximo dias "+maximoDias);
	document.write("<br> formaPagoMax "+formaPagoMax);
}


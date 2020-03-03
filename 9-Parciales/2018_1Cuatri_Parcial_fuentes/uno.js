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
    var nombre,cantidadDePersonas,cantidadDeDias,formaDePago,respuesta;
    var maximoPersonas,maximoPersonasNombre,contador,acumulador,promedio,maximoDeDias,maximoDeDiasCantidadDePersonas;
    var contadorQR,contadorTarjeta,contadorEFT,formaDePagoMasUtilizada;

    respuesta="s";
    contador=0;
    acumulador=0;
    contadorQR=0;
    contadorEFT=0;
    contadorTarjeta=0;

    while(respuesta=="s")
    {
        nombre=prompt("Ingrese nombre ");
        cantidadDePersonas=prompt("Ingrese cantidad de personas");
        while(isNaN(cantidadDePersonas)||cantidadDePersonas<1)
        {
            cantidadDePersonas=prompt("Ingrese cantidad de personas");
        }
        cantidadDeDias=prompt("Ingrese cantidad de dias");
        cantidadDeDias=parseInt(cantidadDeDias);
        while(isNaN(cantidadDeDias)||cantidadDeDias<1)
        {
            cantidadDeDias=prompt("Ingrese cantidad de Dias");
            cantidadDeDias=parseInt(cantidadDeDias);
        }
        formaDePago=prompt("Ingrese forma de pago");
        while(!isNaN(formaDePago)||formaDePago!="qr"&&formaDePago!="efectivo"&&formaDePago!="tarjeta")
        {
            formaDePago=prompt("Ingrese forma de pago");
        }
        if(contador==0||maximoPersonas<cantidadDePersonas)
        {
            maximoPersonas=cantidadDePersonas;
            maximoPersonasNombre=nombre;
        }
        if(contador==0||maximoDeDias<cantidadDePersonas)
        {
            maximoDeDias=cantidadDeDias;
            maximoDeDiasCantidadDePersonas=cantidadDePersonas;
        }
        switch(formaDePago)
        {
            case "qr":
                contadorQR++;
                break;
                case "efectivo":
                contadorEFT++;
                break;
                case "tarjeta":
                contadorTarjeta++;
                break;
        }
        if(contadorEFT>contadorTarjeta && contadorEFT>contadorQR)
        {
            formaDePagoMasUtilizada="efectivo";
        }
        else
        {
            if(contadorQR>contadorTarjeta)
            {
                formaDePagoMasUtilizada="qr";
            }
            else
            {
                formaDePagoMasUtilizada="tarjeta";
            }
        }

        contador++;
        acumulador=acumulador+cantidadDeDias;
        respuesta=prompt("Desea continuar? s/n");
    }//while
    promedio=acumulador/contador;
    console.log(maximoPersonasNombre);
    console.log(maximoDeDiasCantidadDePersonas);
    console.log(formaDePagoMasUtilizada);

    document.write("<br> nombre del huesped mas invitados "+maximoPersonasNombre);
    document.write("<br> cantidad "+maximoDeDiasCantidadDePersonas);
    document.write("<br> forma de pago "+formaDePagoMasUtilizada);
    document.write("<br> promedio "+promedio);
}


function mostrar()
{
    var numero, letra, respuesta, numerosPares, numerosImpares, ceros,promedio, bandera;
    var banderaPositivo, sumaNegativos, numMaximo, numMinimo, letraMax, letraMin;

    numerosPares=0;
    numerosImpares=0;
    promedio=0;
    promedio=parseInt(promedio);
    sumaNegativos=0;
    sumaNegativos=parseInt(sumaNegativos);
    banderaPositivo=0;
    bandera=0;
    ceros=0;
    respuesta="no";

    letra=prompt("Ingresa una letra");
    numero=prompt("Ingresa un numero");
    numero=parseInt(numero);

    if(!(numero>-101 && numero<101))
    {
        alert("No esta entre -100 y 100")
    }
    while(respuesta=="no")
    {    
        for(;numero>-101 && numero<101;numero--)
        {
            if(numero%2==0)
            {
                numerosPares++;
            }
            else
            {
                numerosImpares++;
            }
            if(numero%10==0)
            {
                ceros++;
            }
            if(numero>0)
            {
                promedio=promedio+numero
                banderaPositivo++;
            }
            else
            {
                sumaNegativos=sumaNegativos+numero;
            }
            if(bandera==0)
            {
                numMaximo=numero;
                numMinimo=numero;
            }
            else
            {
                if(numMaximo<numero)
                {
                    numMaximo=numero;
                    letraMax=letra;
                }
                else
                {
                    if(numMinimo>numero)
                    {
                        numMinimo=numero;
                        letraMin=letra;
                    }
                }
            }   
            bandera++;
        }
        respuesta=prompt("Quiere parar el bucle?si/no")
    }

    promedio=promedio/banderaPositivo;
    document.write("<br> Pares "+numerosPares);
    document.write("<br> Impares "+numerosImpares);
    document.write("<br> cantidad de 0 "+ceros);
    document.write("<br> promedioPostivos "+promedio);
    document.write("<br> sumaNegativos "+sumaNegativos);
    document.write("<br> numMaximo "+numMaximo+" y su letra es "+letraMax);
    document.write("<br> numMinimo "+numMinimo+" y su letra es "+letraMin);
}

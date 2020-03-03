function mostrar()
{
    var nombre,edad,notaFinal,respuesta;
    var varonesAprobados,promedioMenores,promedioAdolescentes,promedioMayores,adolescentes,mayores,bandera;
    var mujeresAprobadas,contadorAdolescente,contadorMayores,contadorMenores,promedioVarones,promedioMujeres;
    var banderaVaron,banderaMujer,banderaMenor,banderaMayor,banderaAdolescente;

    respuesta="s"
    bandera=0;
    varonesAprobados=0;
    mujeresAprobadas=0;
    contadorAdolescente=0;
    contadorMayores=0;
    contadorMenores=0;
    banderaAdolescente=0;
    banderaMujer=0;
    banderaMayor=0;
    banderaVaron=0;
    banderaMenor=0;

    while(respuesta=="s")
    {
        nombre=prompt("Ingrese su nombre");
        while(!isNaN(nombre))
        {
            nombre=prompt("Ingrese su nombre");
        }
        sexo=prompt("Ingrese su sexo");
        while( sexo!="m" && sexo!="f")
        {
            sexo=prompt("Ingrese su sexo");
        }
        edad=prompt("Ingrese su edad");
        edad=parseInt(edad);
        while(isNaN(edad))
        {
            edad=prompt("Ingrese su edad");
            edad=parseInt(edad);
        }
        notaFinal=prompt("Ingrese su notaFinal");
        notaFinal=parseInt(notaFinal);
        while(isNaN(notaFinal)&&notaFinal<11)
        {
            notaFinal=prompt("Ingrese su notaFinal");
            notaFinal=parseInt(notaFinal);
        }
        if(sexo=="m" && notaFinal>3)
        {
            varonesAprobados++;
            promedioVarones=+notaFinal;
            banderaVaron++;
        }
        if(sexo=="f" && notaFinal>3)
        {
            mujeresAprobadas++;
            promedioMujeres=+notaFinal;
            banderaMujer++;
        }
        if(edad<18)
        {
            contadorMenores=contadorMenores+notaFinal;
            banderaMenor++;
        }
        else
        {
            if(edad<16 && edad>11)
            {
                contadorAdolescente=contadorAdolescente+notaFinal;
                contadorAdolescente++;
            }
            else
            {
                contadorMayores=contadorMayores+notaFinal;
                banderaMayor++;
            }
        }

        respuesta=prompt("Quiere seguir cargando datos?s/n")
    }
        promedioMenores=contadorMenores/bandera;
        promedioAdolescentes=contadorAdolescente/bandera;
        promedioMayores=contadorMayores/bandera;
        promedioVarones=promedioVarones/bandera;
        promedioMujeres=promedioMujeres/bandera;
        
        document.write("<br>PromedioMenores "+promedioMenores);
        document.write("<br>PromedioAdolescentes "+promedioAdolescentes);
        document.write("<br>PromedioMayores "+promedioMayores);
        document.write("<br>PromedioVarones "+promedioVarones);
        document.write("<br>PromedioMujeres "+promedioMujeres);

}       

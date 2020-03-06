function mostrar()
{
    var nombre,edad,notaFinal,respuesta;
    var varonesAprobados,promedioMenores,promedioAdolescentes,promedioMayores;
    var mujeresAprobadas,contadorAdolescente,contadorMayores,contadorMenores,promedioVarones,promedioMujeres;
    var banderaVaron,banderaMujer,banderaMenor,banderaMayor,banderaAdolescente;

    respuesta="s"
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
    promedioVarones=0;
    promedioMujeres=0;

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
        if(notaFinal>3)
        {
           
            if(sexo=="m")
            {
                varonesAprobados++;
                promedioVarones=promedioVarones+notaFinal;
                banderaVaron++;
            }
            else
            {
                mujeresAprobadas++;
                promedioMujeres=promedioMujeres+notaFinal;
                banderaMujer++;
            }
        }
        else
        {
            if(sexo=="m")
            {
                promedioVarones=promedioVarones+notaFinal;
            }
            else
            {
                promedioMujeres=promedioMujeres+notaFinal;
            }
        }
        if(edad<16 && edad>11)
        {
            contadorAdolescente=contadorAdolescente+notaFinal;
            banderaAdolescente++;
        }
        else
        {
            if(18>edad)
            {
                contadorMenores=contadorMenores+notaFinal;
                banderaMenor++;
            }
            else
            {
                contadorMayores=contadorMayores+notaFinal;
                banderaMayor++;
            }
        }

        respuesta=prompt("Quiere seguir cargando datos?s/n")
    }
        promedioMenores=contadorMenores/banderaMenor;
        promedioAdolescentes=contadorAdolescente/banderaAdolescente;
        promedioMayores=contadorMayores/banderaMayor;
        promedioVarones=promedioVarones/banderaVaron;
        promedioMujeres=promedioMujeres/banderaMujer;
        
        document.write("<br>PromedioMenores "+promedioMenores);
        document.write("<br>PromedioAdolescentes "+promedioAdolescentes);
        document.write("<br>PromedioMayores "+promedioMayores);
        document.write("<br>PromedioVarones "+promedioVarones);
        document.write("<br>PromedioMujeres "+promedioMujeres);
        document.write("<br>VaronesAprobados "+varonesAprobados);
        document.write("<br>MujeresAprobadas "+mujeresAprobadas);

}       

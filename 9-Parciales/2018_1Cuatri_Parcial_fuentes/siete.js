function mostrar()
{
    var hombresAprobados, nota ,sexo, promedio, notaMaxima, notaMinima,bandera,sexoNotaMinima;

    promedio=0;
    promedio=parseInt(promedio);
    hombresAprobados=0;
    notaMinima=0;
    nota=0;
    for(bandera=0;bandera<5;bandera++)
    {
        nota=prompt("Que nota te sacaste?");
        nota=parseInt(nota);
        do
        {
            sexo=prompt("sos hombre o mujer? h/m"); 
        }while(sexo!="m"&&sexo!="h");

        if(nota>5 && sexo=="h")
        {
            hombresAprobados++;
        }
        if( notaMaxima<nota)
        {
            notaMaxima=nota;
        }
        else
        {
            if(bandera==0)
            {
                notaMaxima=nota;
                notaMinima=nota;
                sexoNotaMinima="Todas las notas fueron iguales";
            }
            if(notaMinima>nota)
            {
                notaMinima=nota
                if(sexo=="m")
                {
                    sexoNotaMinima="m"
                }
                else
                {
                    sexoNotaMinima="h"
                }
            }
        }
        promedio=promedio+nota;
        promedio=parseInt(promedio);
    }
    promedio=promedio/5
    alert("El promedio fue "+promedio);
    alert("la nota mas baja fue :"+notaMinima+" y lo logro un/a "+sexoNotaMinima )
    alert("cantidad de varones que su nota haya sido mayor o igual a 6. "+hombresAprobados)
}   

/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var datos,edad, sexo, estadoCivil, sueldoBruto, numeroL, nacionalidad;
    datos = 1;

    while(datos==1)
    { 
        edad=prompt("Ingrese su edad");
        edad=parseInt(edad)
        if(edad>17 && edad<91)
        {
            sexo=prompt("Ingrese su sexo (F Ó M)");
            if(sexo=="F")
            {
            sexo="F";
            }
            else
            {
                if(sexo=="M")
                {
                    sexo="M";
                }
                else
                {
                    sexo="Invalido";
                    datos=0;
                    break;
                }
            }
            estadoCivil=prompt("Indique su estado civil (soltero/casado/casado/viudo)")
            switch(estadoCivil)
            {
                case "soltero":
                    estadoCivil=1;
                    break;
                case "casado":
                    estadoCivil=2;
                    break;
                case "divorciado":
                    estadoCivil=3;
                    break;
                case "viudo":
                    estadoCivil=4;
                    break;
                default:
                    alert("Estado civil no valido");
                    datos=0;
                    estadoCivil="Invalido"
            break;
            }
            sueldoBruto=prompt("Ingrese su sueldo bruto");
            sueldoBruto=parseInt(sueldoBruto);
            if(sueldoBruto<7999||isNaN(sueldoBruto))
            {
                alert("Por debajo del minimo o invalido");
                sueldoBruto="Invalido";
                datos=0;
            }
            else
            {
                numeroL=prompt("Ingrese su numero de legajo");
                parseInt(numeroL);
                if(numeroL<999 || numeroL>9999)
                {
                    alert("Numero de legajo invalido");
                    numeroL="Invalido";
                    datos=0;
                }
                else
                {
                    nacionalidad=prompt("Ingrese su nationalidad(“A” para argentinos, “E” para extranjeros, “N” para nacionalizados.)");
                    if (nacionalidad=="A"||nacionalidad=="E"||nacionalidad=="N")
                    {
                        datos=0;
                    }
                    else
                    {
                        alert("Nacionalidad incorrecta");
                        nacionalidad="Incorrecto"
                        datos=0
                    }
                }
            }
        }
        else
        {
            alert("Edad no valida para continuar");
        }
        datos=0;
    }
    document.getElementById("Edad").value=edad;
    document.getElementById("Sexo").value=sexo;
    document.getElementById("EstadoCivil").value=estadoCivil;
    document.getElementById("Sueldo").value=sueldoBruto;
    document.getElementById("Legajo").value=numeroL;
    document.getElementById("Nacionalidad").value=nacionalidad;
}
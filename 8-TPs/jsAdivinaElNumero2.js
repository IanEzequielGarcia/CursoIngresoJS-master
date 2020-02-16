/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;
var numero;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=numRandom=Math.floor(Math.random() * 100) + 1;

}

function verificar()
{
	numero=document.getElementById("numero").value;

	if(numeroSecreto>numero)
	{
		alert("Falta")
		contadorIntentos+=1
	}
	else
	{
		if(numeroSecreto<numero)
		{
			alert("Te pasaste")
		}
		else
		{
			if (contadorIntentos==1)
			{
				alert("Usted es un Psiquico")
			}
			else
			{
				if (contadorIntentos==2)
				{
					alert("Usted tiene percepcion")
				}
				else
				{
					if (contadorIntentos==3)
					{
						alert("esto es suerte")
					}
					else
					{
						if (contadorIntentos==4)
						{
							alert("excelente tecnica")
						}
						else
						{
							if (contadorIntentos==5)
								{
									alert("esta en la media")
								}
							else
							{
								if (contadorIntentos>5 && contadorIntentos<10)
								{
									alert("falta tecnica")
								}
								else
								{
									alert("afortunado en el amor")
								}


							}
						}
					}
				}	
			}
		}
		contadorIntentos+=1
	}

	document.getElementById("intentos").value=contadorIntentos
}
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numRandom;
	numRandom=Math.floor(Math.random() * 10) + 1;
	if(numRandom>8)
	{
		console.log("Excelente");
	}
	else
	{
		if(numRandom>4)
		{
			console.log("Aprobaste");
		}
		else
		{
			console.log("Hasta la proximaa");
		}
	}

}//FIN DE LA FUNCIÓN
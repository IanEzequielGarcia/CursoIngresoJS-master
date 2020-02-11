function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numRandom;
	numRandom=Math.floor(Math.random() * 10) + 1;
	if(numRandom>5)
	{
		console.log("Aprobaste con: "+ numRandom);
	}
	else
	{
		console.log("Desaprovaste con: "+ numRandom);
	}

}//FIN DE LA FUNCIÓN
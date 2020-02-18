function mostrar()
{
    //tomo la edad  
    var laHora = document.getElementById('hora').value;
    laHora=parseInt(laHora);
    switch(laHora)
    {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana");
            break;
    }
    //alert (laHora);
	
	



}//FIN DE LA FUNCIÓN
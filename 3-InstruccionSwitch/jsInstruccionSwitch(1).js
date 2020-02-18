function mostrar()
{
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño)
    {
        case "Enero":
        //case "Febrero":
        //case "Abril":
            alert("que comiences bien el año");
            break;
        case "Marzo":
        //case "Junio":
            alert("A clases!");
            break;
        case "Julio":
            alert("se vienen las vacaciones");
            break;
        case "Diciembre":
            alert("Felices fiestas");
            break;


    }



}//FIN DE LA FUNCIÓN
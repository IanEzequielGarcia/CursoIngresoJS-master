function mostrar()
{
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño)
    {
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Este mes tiene 30 dias");
            break;
        case "Febrero":
            alert("Este mes tiene 29 dias");
            break;
        default:    
            alert("Este mes tiene 31 dias");
            break;
    }
    //alert (mesDelAño);
}//FIN DE LA FUNCIÓN
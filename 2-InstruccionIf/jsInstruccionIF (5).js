function mostrar()
{
    //tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;
    /* if(edad<18 && edad>12)
    {
    }	
    else
    {
        alert("La persona NO es adolescente");
    } */
    //ò
    if(!(edad<18 && edad>12))
    {
        alert("La persona NO es adolescente");
    }
    
    
    /* 
    && == and
    || == or
    !  == not
    */
}//FIN DE LA FUNCIÓN
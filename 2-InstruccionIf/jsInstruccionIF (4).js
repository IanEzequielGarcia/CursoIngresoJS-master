function mostrar()
{
    //tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;
    if(edad>12 && edad<18)
    {
        alert("Sos adolescente");
        /*if(edad<18)
        {
           
        } */
    }
    /* 
    si el primero ya es falso, el && ya no lo evalua
    */
}//FIN DE LA FUNCIÓN
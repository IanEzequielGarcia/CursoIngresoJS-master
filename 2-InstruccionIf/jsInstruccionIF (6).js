function mostrar()
//Al ingresar una edad debemos informar si la persona es mayor de edad
//(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;
    if(edad>17)
    {
        console.log("La persona es un adulto");
    }
    else
    {
        if(edad<13)
        {
            console.log("La persona es un niño");
        }
        else
        {
           console.log("La persona es un adolescente");
        }
    }
}//FIN DE LA FUNCIÓN

//HACER TPS 1 2 Y 3
// Economizar el uso de cpu
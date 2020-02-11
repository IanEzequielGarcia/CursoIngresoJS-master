function mostrar()
{
    //tomo la edad  
    var edad;
    var estadoCivil;
    edad=document.getElementById("edad").value;
    estadoCivil=document.getElementById("estadoCivil").value;
    if(edad>17 && estadoCivil=="Soltero")
    {
        console.log("Es soltero y no es menor.");
    }
    else
    {
        /*if(estadoCivil !="Soltero")
        {
            alert("Usted es muy pequeño para NO ser soltero.");
        }*/
    }
	


}//FIN DE LA FUNCIÓN
function mostrar()
{
    var numero;
    var i;
    var bandera=0;
    numero=prompt("Ingresa un numero")
    numero=parseInt(numero)
    for(i=2;i<numero;i++)
    {
        //console.log(i);
        if(numero%i==0)
        {
            bandera++;
            break;
        }
    }
    if(bandera==0)
    {
        alert("es primo");
    }
}//FIN DE LA FUNCIÓN
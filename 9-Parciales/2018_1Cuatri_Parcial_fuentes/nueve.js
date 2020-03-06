function mostrar()
{
    var producto, peso, temperatura,respuesta;
    var temperaturasPares,temperaturaCongelamiento,bandera,pesoMaximo,pesoMinimo;
    var marcaMasPesada,contador,promedio;

    respuesta="si";
    temperaturasPares=0;
    temperaturaCongelamiento=0;
    contador=0;
    pesoMaximo=0;
    promedio=0;


    for(;respuesta!="no";)
    {
        producto=prompt("Ingrese el nombre del producto");
        while(!isNaN(producto))
        {
            producto=prompt("Ingrese el nombre del producto");
        }
        do
        {
            peso=prompt("Ingrese el peso del producto");
            peso=parseInt(peso);
        }while(!(peso>0 && peso<100));
        do
        {
            temperatura=prompt("Ingrese la temperatura");
            temperatura=parseInt(temperatura);
        }while(!(temperatura>-30 && temperatura<30));
        if(temperatura%2==0)
        {
            temperaturasPares++;
        }
        if(temperatura<0)
        {
            temperaturaCongelamiento++;
        }
        if(bandera==0||pesoMaximo<peso)
        {
            pesoMaximo=peso;
            marcaMasPesada=producto;
        }
        else
        {
            if(pesoMinimo>peso)
            {
                pesoMinimo=peso
            }
        }
        bandera++;
        respuesta=prompt("Quiere que el loop continue?");
        contador=contador+peso;
    }
    promedio=contador/bandera;
    document.write("<br> temperaturas pares "+temperaturasPares);
    document.write("<br> mas pesao "+pesoMaximo);
    document.write("<br> congelamiento "+temperaturaCongelamiento);
    document.write("<br> promedio "+promedio);
    document.write("<br> max "+pesoMaximo);
    document.write("<br> min "+pesoMinimo);
}

function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio=prompt("Ingrese el precio");
    descuento=prompt("ingrese el porcentaje de descuento");
    precioFinal= (precio*descuento)/100;
    precioFinal= precio-descuento;
    document.getElementById("elPrecioFinal").value=precioFinal;

}

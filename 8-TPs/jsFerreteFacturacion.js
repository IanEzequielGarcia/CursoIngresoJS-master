/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioPrimero;
    var precioSegundo;
    var precioTercero;
    var resultado;
    precioPrimero=document.getElementById("PrecioUno").value;
    precioPrimero=parseInt(precioPrimero);
    precioSegundo=document.getElementById("PrecioDos").value;
    precioSegundo=parseInt(precioSegundo);
    precioTercero=document.getElementById("PrecioTres").value;
    precioTercero=parseInt(precioTercero);
    resultado=precioSegundo+precioTercero+precioPrimero;
    console.log("El resultado es: "+resultado)

}
function Promedio () 
{
	var precioPrimero;
    var precioSegundo;
    var precioTercero;
    var resultado;
    precioPrimero=document.getElementById("PrecioUno").value;
    precioPrimero=parseInt(precioPrimero);
    precioSegundo=document.getElementById("PrecioDos").value;
    precioSegundo=parseInt(precioSegundo);
    precioTercero=document.getElementById("PrecioTres").value;
    precioTercero=parseInt(precioTercero);
    resultado=(precioSegundo+precioTercero+precioPrimero)/3;
    console.log("El promedio es: "+resultado);
}
function PrecioFinal () 
{
	var precioPrimero;
    var precioSegundo;
    var precioTercero;
    var porcentaje;
    var resultado;
    precioPrimero=document.getElementById("PrecioUno").value;
    precioPrimero=parseInt(precioPrimero);
    precioSegundo=document.getElementById("PrecioDos").value;
    precioSegundo=parseInt(precioSegundo);
    precioTercero=document.getElementById("PrecioTres").value;
    precioTercero=parseInt(precioTercero);
    resultado=(precioSegundo+precioTercero+precioPrimero);
    porcentaje=(resultado*21/100);
    resultado=resultado+porcentaje
    console.log("El precio final es: "+resultado);
}
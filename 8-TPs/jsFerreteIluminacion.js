/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precio=parseInt(precio=35);
    var cantidad;
    var precioConDescuento;
    var porcentajeDescuento;
    var marca;

    cantidad=document.getElementById("Cantidad").value;
    cantidad=parseInt(cantidad)
    marca=document.getElementById("Marca").value;
    if(cantidad>=6)
    {
        porcentajeDescuento=precio*50/100;
        parseInt(porcentajeDescuento);
        precio=precio*cantidad
        parseInt(precio);
        precioConDescuento=precio-porcentajeDescuento;
        parseInt(precioConDescuento)
        document.getElementById("precioDescuento").value=precioConDescuento

    }
    else
    {
        if(cantidad==5)
        {
            if(marca=="ArgentinaLuz")
            {
                porcentajeDescuento=precio*40/100;
                parseInt(porcentajeDescuento);
                precio=precio*cantidad
                parseInt(precio);
                precioConDescuento=precio-porcentajeDescuento;
                parseInt(precioConDescuento)
                document.getElementById("precioDescuento").value=precioConDescuento
            }
            else
            {
                porcentajeDescuento=precio*30/100;
                parseInt(porcentajeDescuento);
                precio=precio*cantidad
                parseInt(precio);
                precioConDescuento=precio-porcentajeDescuento;
                parseInt(precioConDescuento)
                document.getElementById("precioDescuento").value=precioConDescuento
            }
        }// if cantidad 5
        if(cantidad==4)
        {
            if(marca=="ArgentinaLuz"||marca=="FelipeLamparas")
            {
                porcentajeDescuento=precio*25/100;
                parseInt(porcentajeDescuento);
                precio=precio*cantidad
                parseInt(precio);
                precioConDescuento=precio-porcentajeDescuento;
                parseInt(precioConDescuento)
                document.getElementById("precioDescuento").value=precioConDescuento
            }
            else
            {
                porcentajeDescuento=precio*20/100;
                parseInt(porcentajeDescuento);
                precio=precio*cantidad
                parseInt(precio);
                precioConDescuento=precio-porcentajeDescuento;
                parseInt(precioConDescuento)
                document.getElementById("precioDescuento").value=precioConDescuento
            }
        }// cantidad 4
        if(cantidad==3)
        {
            if(marca=="ArgentinaLuz")
            {
                porcentajeDescuento=precio*15/100;
                parseInt(porcentajeDescuento);
                precio=precio*cantidad
                parseInt(precio);
                precioConDescuento=precio-porcentajeDescuento;
                parseInt(precioConDescuento)
                document.getElementById("precioDescuento").value=precioConDescuento
            }
            if(marca=="FelipeLamparas")
            {
                porcentajeDescuento=precio*10/100;
                parseInt(porcentajeDescuento);
                precio=precio*cantidad
                parseInt(precio);
                precioConDescuento=precio-porcentajeDescuento;
                parseInt(precioConDescuento)
                document.getElementById("precioDescuento").value=precioConDescuento
            }
            if(marca!="ArgentinaLuz"&& marca!="FelipeLamparas")
            {
                porcentajeDescuento=precio*5/100;
                parseInt(porcentajeDescuento);
                precio=precio*cantidad
                parseInt(precio);
                precioConDescuento=precio-porcentajeDescuento;
                parseInt(precioConDescuento)
                document.getElementById("precioDescuento").value=precioConDescuento
            }   
        }
        else
        {
            precio=precio*cantidad
            parseInt(precio);
            document.getElementById("precioDescuento").value=precio
        }
    }//Else cantidades
    if(precioConDescuento>119)
    {
        precio=precio*cantidad
        porcentajeDescuento=precio*10/100;
        parseInt(porcentajeDescuento);
        precioConDescuento=precio+porcentajeDescuento;
        parseInt(precioConDescuento)
        document.getElementById("precioDescuento").value=precioConDescuento
        alert("Usted pago "+precioConDescuento)
    }

}
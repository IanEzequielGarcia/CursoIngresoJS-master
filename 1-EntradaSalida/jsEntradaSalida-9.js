/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var primerNumero;
    var porcentaje;
    var resultado;
    primerNumero=document.getElementById("sueldo").value;
    primerNumero=parseInt(primerNumero);
    resultado=parseInt(resultado);
    porcentaje=primerNumero*10/100;
    resultado=primerNumero+porcentaje
    document.getElementById("resultado").value=resultado;
}

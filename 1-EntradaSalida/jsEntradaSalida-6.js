/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var primerNumero;
    var segundoNumero;
    var resultado;
    primerNumero=document.getElementById("numeroUno").value;
    primerNumero=parseInt(primerNumero);
    segundoNumero=document.getElementById("numeroDos").value;
    segundoNumero=parseInt(segundoNumero);
    resultado=primerNumero+segundoNumero;
    alert("El resultado de la suma es: "+resultado);
}


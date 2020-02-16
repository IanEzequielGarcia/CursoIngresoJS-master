/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var temperatura;
var temperaturaR;

parseInt(temperaturaR);

temperatura=document.getElementById("Temperatura").value;

function FahrenheitCentigrados () 
{
    temperatura=document.getElementById("Temperatura").value;
    temperaturaR=(temperatura-32)/1.8
    console.log(temperaturaR)
}

function CentigradosFahrenheit () 
{
    temperatura=document.getElementById("Temperatura").value;
    temperaturaR=(temperatura*9/5)+32
    console.log(temperaturaR)
}

/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var intentos=1;
intentos=parseInt(intentos);
function comenzar()
{
  //Genero el número RANDOM entre 1 y 100
  numeroSecreto=numRandom=Math.floor(Math.random() * 100) + 1;

}

function verificar()
{
  numero=document.getElementById("numero").value;
  document.getElementById("intentos").value=intentos
  if(numeroSecreto>numero)
  {
    alert("Falta");
  }
  else
  {
    if(numeroSecreto<numero)
    {
      alert("Te pasaste");
    }
    else
    {
      alert("Genio! ganaste! y en solo "+intentos+" intentos!");
    }
    intentos+=1
  }
}
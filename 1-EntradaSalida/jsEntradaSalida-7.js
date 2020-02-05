/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var primerNumero;
    var segundoNumero;
    var resultado;
    /* las variables no pueden tener un numero como
    caracter y no pueden tener espacios*/

    primerNumero=document.getElementById("numeroUno").value;
    primerNumero=parseInt(primerNumero);
    console.log("se ingresò: "+primerNumero)
    segundoNumero=document.getElementById("numeroDos").value;
    segundoNumero=parseInt(segundoNumero);
    console.log("se ingresò: "+segundoNumero)

    resultado=primerNumero+segundoNumero;
    console.log("el resultado es: "+resultado);


    // alert no se usa mas a menos que te lo pida el ejercicio
    // ahora se debe usar console.log
}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

function mostrar()
{
    var contador=0;
    /*while(contador>10)
    {
        console.log(contador);// 0 al 9
        contador++;
        console.log(contador);// 1 al 10
    }ese while es lo mismo que el for de abajo*/
    for(contador==0;contador<10;contador++)
    {
        console.log("for: "+contador);
    }
     /*
     tambien funciona 
    contador==0
     for(;contador<10;contador++)
    {
        console.log("for: "+contador);
    }
     ó
     
    contador==0
    for(;contador<10;)
    {
        console.log("for: "+contador);
        contador++
    }
     
     */
}// usar do while para no poner prompt dos veces
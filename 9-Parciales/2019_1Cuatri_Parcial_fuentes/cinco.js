function mostrar()
{
    for(var index = 1; index <= 3; index++) {
        counter:
        for(var counter = 1; counter <= 5; counter++)
            if( counter % index === 0 && index % counter === 0) {
                console.log("Double Multiple Found!");
                break counter;
            }
    }
}

function* generator(seed, func ) {

    

    while (seed < 30) {
        yield seed;
        seed = func(seed);
    }

}

(function() {

    const myGen = generator(1, (value)=>value +3);

    console.log(myGen.next());
    console.log(myGen.next());
    console.log(myGen.next());
    console.log(myGen.next());


})();
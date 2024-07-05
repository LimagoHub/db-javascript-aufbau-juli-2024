class Container {
    #data = [10,20,30,40];


    // Consumer ein parametr keine Rückgabe
    // Supplier Rückgabe aber keinen Parameter
    // function ein p einen retval
    foreach(consumer) {
        for(const value of this.#data) {
            consumer(value);
        }
    }
}

class Akkumulator {
    #sum

    constructor() {
        this.#sum = 0;
    }

    sumUp(value) {
        this.#sum = this.#sum + value 
    }

    get sum () {
        return this.#sum
    }
}

function xyz(value) {
    console.log(value);
}

function operator(name) {
    const myDict = {add:(a,b)=>{return a + b},sub:(a,b)=>{return a - b}}
    return myDict[name];
}

(function(){
    const container = new Container();

    //container.foreach(console.log);

    const akku = new Akkumulator();
    let fptr = akku.sumUp.bind(akku);
    container.foreach(fptr);

    console.log(akku.sum);

    console.log(operator("sub")(3,4));
})();
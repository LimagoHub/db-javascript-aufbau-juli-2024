

class Punkt {
    #x = 0;
    #y = 0;

    constructor({x,y}={}) {
        
        this.#setX( x || 0);
        this.#setY( y || 0);
    
    }

    get x() {
        return this.#x;
    }

    #setX (value) {
        if(value < -10 || value> 10) return;
        this.#x = value;
    }

    #setY(value) {
        if(value < -10 || value> 10) return;
        this.#y = value;
    }

    // Overload
    rechts(offset = 1) {
        this.#setX(this.x + offset );
    }
    links() {
        this.#setX(this.x - 1);
    }
    oben() {
        this.#setY(this.y + 1);
    }
    unten() {
        this.#setY(this.y - 1);
    }


    toString() {
        return `Punkt: x=${this.#x}, y=${this.#y}`;
    }

}

class Kreis extends Punkt {
    #radius = 0;
    constructor({x,y, r}={}){
        super({x,y});
        this.radius = r || 0;
    }

    get radius() {
        return this.#radius;

    }

    set radius (value) {
        this.#radius = value;
    }

    // Override
    toString() {
        return super.toString() + ", Radius = " + this.radius;
    }
}

(function () {
   
    var p = new Kreis();
    for(let i = 0; i < 12 ; i++)
    {
        p.rechts();
        console.log(p.toString());
    }
        
   
    
})();
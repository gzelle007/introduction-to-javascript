// Parent parameter
class Animal {
    constructor(legs){
        this.legs = legs;
    }

    walk() {
        console.log(`Walking on ${this.legs} legs`);
    }
}

 // Child
// inheriting animal walks and adding fly
class Bird extends Animal{
    constructor(legs){
        super(legs);
    }

    //child with own methods
    fly () {
        console.log("Flying...")
    }
}

// to prove that child class not only owns method of its parent
// but also its own method
let bird = new Bird(2);
bird.walk();
bird.fly();

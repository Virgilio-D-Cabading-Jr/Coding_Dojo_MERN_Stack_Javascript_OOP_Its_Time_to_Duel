////////////////////////////////////////////////////
//  MAIN APPLICATION
////////////////////////////////////////////////////

//  //// CARD CLASS ////////////////////////////////
class Card {
    //  **** CONSTRUCTOR ***************************
    constructor (name, cost) {
        this.name = name;       // Name of Card
        this.cost = cost;       // Cost of Card to Play
    }
}

//  //// UNIT CLASS ////////////////////////////////
class Unit extends Card {
    //  **** CONSTRUCTOR ***************************
    constructor (name, cost, power, res) {
        super (name, cost);     // Card Constructor
        this.power = power;     // Power of this Unit
        this.res = res;         // Resilience of this unit
    }

    //  **** ATTACK METHOD *************************
    //  Reduce the target resilience according to this Unit's power
    attack (target) {
        if ( target instanceof Unit) {  // Check to make sure target is an instance of Unit Class
            target.res -= this.power;   // Reduce the target's resilience by amount of power of this Unit
        } else {
            throw new Error ( "Target musst be a Unit!" );
        }
    }
}

//  //// EFFECT CLASS //////////////////////////////
class Effect extends Card {
    //  **** CONSTRUCTOR ***************************
    constructor (name, cost, text, stat, magnitude) {
        super ( name, cost );           // Card Constructor
        this.text = text;               // Text describes card's effect on a unit
        this.stat = stat;               // Specific stat (power or resilience) of a Unit that Effect card will modify
        this.magnitude = magnitude;     // Magnitude is the ammount of change this Effect card will have on the Specified Stat
    }

    //  **** Play Method ***************************
    play ( target ) {
        if ( target instanceof Unit ) { // Check to make sure that Target is an instance of Unit Class
            this.stat == "power"
                ? target.power += this.magnitude
                : target.res += this.magnitude;
        } else {
            throw new Error ( "Target must be a unit!" );
        }
    }
}

//  //// MAIN EXECUTABLE SECTION /////////////////////

console.log("***************************************");
console.log("Make an instance of Red Belt Ninja\n");

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 3);
console.log(redBeltNinja);

console.log("\n***************************************");
console.log("Make an instance of Hard Algorithm and play it on Red Belt Ninja\n");

const hardAlgorithm = new Effect( "Hard Algorithm",  2, "Increase target's resilience by 3", "resilience", 3);
console.log(hardAlgorithm);
hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja);

console.log("\n***************************************");
console.log("Make an instance of Black Belt Ninja\n");

const blackBeltNinja = new Unit( "Black Belt Ninja", 4, 5, 4 );
console.log(blackBeltNinja);

console.log("\n***************************************");
console.log("Make an instance of Unhandled Promise Rejection and play it on Red Belt Ninja\n");

const unhandledPromiseRejection = new Effect ( "Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
console.log(unhandledPromiseRejection);
unhandledPromiseRejection.play(redBeltNinja);
console.log(redBeltNinja);

console.log("\n***************************************");
console.log("Make an instance of Pair Programming and play it on Red Belt Ninja\n");

const pairProgramming = new Effect( "Pair Programming", 3, "Increases target's power by 2" , "power", 2);
console.log(pairProgramming);
pairProgramming.play(redBeltNinja);
console.log(redBeltNinja);

console.log("\n***************************************");
console.log("Red Belt Ninja Attacks Black Belt Ninja\n");

redBeltNinja.attack(blackBeltNinja);
console.log(redBeltNinja);
console.log(blackBeltNinja);
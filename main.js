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
    constructor (name, cost) {
        
    }
}
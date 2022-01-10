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
        this.res = res;         // Resistance of this unit
    }

    //  **** ATTACK METHOD *************************
    //  Reduce the target resistance according to this Unit's power
    attack (target) {
        target.res -= this.power;
    }
}
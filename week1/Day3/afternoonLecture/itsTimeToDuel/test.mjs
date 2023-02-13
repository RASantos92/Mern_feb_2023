import { Unit,Effect } from "./cards.mjs";

const redBeltNinja = new Unit("redBeltNinja",3,3,4)
const hardAlgo = new Effect("hardAlgo", 2, "increase target's resilience by 3", "resilience", +3)
hardAlgo.playEffect(redBeltNinja);

const blackBeltNinja = new Unit("blackBeltNinja",4,5,4)

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1, "reduce target's resilience by 2", "resilience", -2)

unhandledPromiseRejection.playEffect(redBeltNinja);


const pairProgramming = new Effect("pair programming", 3, "increase target's power by 2", "power", 2 )

pairProgramming.playEffect(redBeltNinja);
redBeltNinja.attack(blackBeltNinja)
console.log(blackBeltNinja.displayCard());

class Card{
    constructor(name = "", cost = 0){
        this.name = name;
        this.cost = cost;
    }

    displayCard(){
        let output = "******************************\n" 
        + "name: " + this.name + "\ncost: " + this.cost + "\n"
        return output;
    }
}

export class Unit extends Card {
    constructor(name = "", cost = 0, power = 0, resilience = 0){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    alterAttributes(effectCard){
        this[effectCard.stat] += effectCard.magnitude;
    }

    attack(target){
        target.alterAttributes({
            stat: "resilience",
            magnitude : -this.power
        })
    }

    displayCard(){
        let output = super.displayCard();
        output += "power: " + this.power + "\nresilience: " + this.resilience;
        return output;
    }
}

export class Effect extends Card {
    constructor(name = "", cost = 0, text = "", stat = "", magnitude = 0){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    playEffect(unitCard){
        unitCard.alterAttributes(this)
    }

    displayCard(){
        let output = super.displayCard();
        output += "text: " + this.text + "\nstat: " + this.stat + "\nmagnitude: " + this.magnitude;
        return output;
    }
}
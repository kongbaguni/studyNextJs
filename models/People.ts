import { Card } from "./Card";

export class People {
    public readonly name:String ;
    public readonly cards:Array<Card> = [];
        
    constructor(name:String) {
        this.name = name;
        console.log("People 생성 : " + name + " " + this.name);
    }

    public addCard(cards:Array<Card>) {
        for(var i=0; i<cards.length; i++) {
            this.cards.push(cards[i]);
        }
    }

    public removAllCards() {
        while(this.cards.length > 0) {
            this.cards.pop();
        }
    }

    public getCardsImages():Array<string> {
        let result = [];
        for(var i= 0; i<this.cards.length; i++) {
            result.push(this.cards[i].image)
        }
        return result;
    }
}
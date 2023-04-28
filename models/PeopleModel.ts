import { CardModel } from "./CardModel";

export class PeopleModel {
    public readonly name:String ;
    public readonly cards:Array<CardModel> = [];
        
    constructor(name:String) {
        this.name = name;
        console.log("People 생성 : " + name + " " + this.name);
    }

    public addCard(cards:Array<CardModel>) {
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
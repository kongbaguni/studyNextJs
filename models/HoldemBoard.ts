import { GameManager } from "../instance/GameManager";
import { Card } from "./Card";
import { Dealer } from "./Dealer";
import { Player } from "./Player";

export class HoldemBoard {
    public readonly dealer:Dealer = new Dealer("딜러");
    public readonly players:Array<Player> = [];   
    public readonly comunityCards:Array<Card> = [];

    public comunityCardStringValue:String = "";

    constructor(playerNames:Array<String>) {
        for(var idx = 0; idx < playerNames.length; idx ++) {
            const p = new Player(playerNames[idx]);
            this.players.push(p);
        }                
    }
    
    public shuffleCard() {
        for(var i = 0; i< this.players.length; i++) {
            this.players[i].removAllCards();            
            this.players[i].addCard(GameManager.getInstance().popCard(2));
        }
        const cards = GameManager.getInstance().popCard(5);
        let str = ""
        while(this.comunityCards.length > 0) {
            this.comunityCards.pop();
        }
        for(var i=0; i<cards.length; i++) {
            this.comunityCards.push(cards[i]);
            if(str != "") {
                str += ","
            }
            str+= cards[i].value            
        }        
        this.comunityCardStringValue = str
    }

    public checkAllHands() {        
        for(var i=0; i<this.players.length; i++) {
            this.checkHands(this.players[i])
        }
    }

    private checkHands(player:Player) {
        const cards = player.cards;
        const cc = this.comunityCards;
        const hands = [
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[1],cc[2]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[1],cc[3]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[1],cc[4]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[2],cc[3]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[2],cc[4]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[1],cc[2],cc[3]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[1],cc[2],cc[4]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[1],cc[3],cc[4]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[2],cc[3],cc[4]]),   
        ]
        const newHands = hands.sort((a,b)=>a.point - b.point);

        console.log(hands);
        console.log("--------------------");
        console.log(newHands);
        player.handRank = newHands[newHands.length-1].value;
    }
}
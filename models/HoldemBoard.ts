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
        const idxs = [
            [0,1,2],
            [0,1,3],
            [0,1,4],
            [0,2,3],
            [0,2,4],
            [0,3,4],
            [1,2,3],
            [1,2,4],
            [1,3,4],
            [2,3,4]
        ];

        const hands = [
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[1],cc[2]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[1],cc[3]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[1],cc[4]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[2],cc[3]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[2],cc[4]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[0],cc[3],cc[4]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[1],cc[2],cc[3]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[1],cc[2],cc[4]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[1],cc[3],cc[4]]),
            GameManager.getInstance().getHandRank([cards[0],cards[1],cc[2],cc[3],cc[4]]),   
        ];

        let result = hands[0];
        let s_idx = idxs[0];
        for(let i=1; i< hands.length; i++) {
            const isRankPointUp = result.point < hands[i].point;
            const isEqualRank = result.point == hands[i].point;
            const isTotalPointUp =  result.totalPoint < hands[i].totalPoint;
            if(isRankPointUp || (isEqualRank && isTotalPointUp)) {
                result = hands[i];
                s_idx = idxs[i];
            }
        }        

        console.log(hands);
        console.log("--------------------");
        console.log(result);
        player.handRank = result.value;
        player.comunityIdxs = s_idx;

    }
}
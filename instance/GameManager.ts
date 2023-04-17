import { Card } from "../models/Card"
import '/extensions/Array'
export class GameManager {
    private static instance : GameManager
    private constructor() {

    }

    private cardDeck : Array<Card> = Array<Card>()

    public static getInstance() : GameManager {
        if(!GameManager.instance) {
            GameManager.instance = new GameManager()
        }
        return GameManager.instance
    }

    public addCardShuffle() {
        const cards = [
            "2C","2D","2H","2S",
            "3C","3D","3H","3S",
            "4C","4D","4H","4S",
            "5C","5D","5H","5S",
            "6C","6D","6H","6S",
            "7C","7D","7H","7S",
            "8C","8D","8H","8S",
            "9C","9D","9H","9S",
            "AC","AD","AH","AS",
            "JC","JD","JH","JS",
            "KC","KD","KH","KS",
            "QC","QD","QH","QS",
            "TC","TD","TH","TS"                    
        ]
        let cardArr = Array<Card>()
        cards.map((item)=> {
            console.log(cards)
            const card = new Card(item)
            cardArr.push(card)
        })
        cardArr.shuffle()
        for(let i = 0; i< cardArr.length; i++) {
            this.cardDeck.push(cardArr[i])
        }
        console.log(this.cardDeck)
    }
    

    public popCard():Card {
        if(this.cardDeck.length == 0) {
            this.addCardShuffle()
        }
        const card = this.cardDeck.pop()
        console.log("popCard : " + card.value)
        return card
    }

    public getHandRank(hand: Card[]): string {
        // 숫자와 무늬를 따로 분리합니다.
        const ranks = hand.map(card => card.rank);
        const suits = hand.map(card => card.suit);
        for(const idx in hand) {
            console.log("getHandRank card : " + idx + " : " + hand[idx].value);
        }
        if(hand.length < 5) {
            console.log("card 숫자가 모자라다.")
        }
        
      
        // 패를 족보 순으로 정렬합니다.
        ranks.sort((a, b) => ranks.indexOf(a) - ranks.indexOf(b));
        
        // 각 족보에 해당하는 패를 판정합니다.
        const isFlush = suits.every(suit => suit === suits[0]);
    
         
        const isStraight = ranks.every((rank, index) => index === 0 || ranks[index - 1] === rank - 1);
        const numPairs = ranks.filter((rank, index) => index === 0 || ranks[index - 1] === rank).length;
        const numTriples = ranks.filter((rank, index) => ranks.filter(r => r === rank).length === 3).length;
        const numFours = ranks.filter((rank, index) => ranks.filter(r => r === rank).length === 4).length;

        if (isFlush && isStraight && ranks[0] === 10) {
          return "RoyalFlush";
        } else if (isFlush && isStraight) {
          return "StraightFlush";
        } else if (numFours === 1) {
          return "FourOfAKind";
        } else if (numTriples === 1 && numPairs === 1) {
          return "FullHouse";
        } else if (isFlush) {
          return "Flush";
        } else if (isStraight) {
          return "Straight";
        } else if (numTriples === 1) {
          return "ThreeOfAKind";
        } else if (numPairs === 2) {
          return "TwoPair";
        } else if (numPairs === 1) {
          return "OnePair";
        } else {
          return "HighCard";
        }
      }  
      
      getCardDeckLength() {
        return this.cardDeck.length;
      }
}
import { Card } from "../models/Card"
import { HandRank } from "../models/HandRank"
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
            console.log(cards);
            const card = new Card(item);
            cardArr.push(card);
        })
        cardArr.shuffle();
        for(let i = 0; i< cardArr.length; i++) {
            this.cardDeck.push(cardArr[i]);
        }
        console.log(this.cardDeck);
    }
    

    public popCard(length:number):Array<Card> {
      if(this.cardDeck.length < length) {
        this.addCardShuffle();
      }
      let list = Array<Card>()
      for(let i = 0; i<length; i++) {
        const card = this.cardDeck.pop();
        console.log("popCard : " + card.value);
        list.push(card);
      }
        
      return list;
    }

    public getHandRank(hand: Card[]): HandRank {
        // 숫자와 무늬를 따로 분리합니다.
        let ranks = hand.map(card => card.rank);
        const suits = hand.map(card => card.suit);
        for(const idx in hand) {
            console.log("getHandRank card : " + idx + " : " + hand[idx].value);
        }
        if(hand.length < 5) {
            console.log("card 숫자가 모자라다.");
        }
        
        console.log("rank sort before _----------------")
        console.log(ranks);
        
        // 패를 족보 순으로 정렬합니다.
        
        ranks = ranks.sort((a, b) => a - b);
        console.log("rank sort after_----------------")
        console.log(ranks);


        // 각 족보에 해당하는 패를 판정합니다.
        const isFlush = suits.every(suit => suit === suits[0]);
        const isStraight = ranks.every((rank, index) => index === 0 || ranks[index - 1] === rank - 1);
        const numPairs =  ranks.findDuplicateNumbers(2);
        const numTriples =  ranks.findDuplicateNumbers(3);
        const numFours = ranks.findDuplicateNumbers(4);
        console.log("isStraght : " + isStraight);
        console.log("numPairs : " + numPairs);
        console.log("numTriples : " + numTriples);
        console.log("numFours :" + numFours);

        let totalPoint = 0;
        for(let i = 0 ; i < hand.length; i++) {
          totalPoint += hand[i].rank
        }
        
        if (isFlush && isStraight && ranks[0] === 10) {
          return new HandRank("RoyalFlush", totalPoint);
        } else if (isFlush && isStraight) {
          return new HandRank("StraightFlush", totalPoint);
        } else if (numFours === 1) {
          return new HandRank("FourOfAKind", totalPoint);
        } else if (numTriples === 1 && numPairs === 1) {
          return new HandRank("FullHouse", totalPoint);
        } else if (isFlush) {
          return new HandRank("Flush", totalPoint);
        } else if (isStraight) {
          return new HandRank("Straight", totalPoint);
        } else if (numTriples === 1) {
          return new HandRank("ThreeOfAKind", totalPoint);
        } else if (numPairs === 2) {
          return new HandRank("TwoPair", totalPoint);
        } else if (numPairs === 1) {
          return new HandRank("OnePair", totalPoint);
        } else {
          return new HandRank("HighCard", totalPoint);
        }
      }  
      
      getCardDeckLength() {
        return this.cardDeck.length;
      }
}
import { CardModel } from "../models/CardModel"
import { HandRankModel } from "../models/HandRankModel"
import { HoldemBoard } from "../models/HoldemBoard"
import '/extensions/Array'
export class GameManager {

    private static instance : GameManager
    public static getInstance() : GameManager {
        if(!GameManager.instance) {
            GameManager.instance = new GameManager()
        }
        return GameManager.instance
    }
    
    private constructor() {

    }

    private cardDeck : Array<CardModel> = Array<CardModel>()


    public holdemBoard = new HoldemBoard(["서태지","신해철","양현석","이주노","김건모","심신애"])
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
        let cardArr = Array<CardModel>()
        cards.map((item)=> {
            console.log(cards);
            const card = new CardModel(item);
            cardArr.push(card);
        })
        cardArr.shuffle();
        for(let i = 0; i< cardArr.length; i++) {
            this.cardDeck.push(cardArr[i]);
        }
        console.log(this.cardDeck);
    }
    

    public popCard(length:number):Array<CardModel> {
      if(this.cardDeck.length < length) {
        this.addCardShuffle();
      }
      let list = Array<CardModel>()
      for(let i = 0; i<length; i++) {
        const card = this.cardDeck.pop();
        console.log("popCard : " + card.value);
        list.push(card);
      }
        
      return list;
    }

    public getHandRank(hand: CardModel[]): HandRankModel {
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
          return new HandRankModel("RoyalFlush", totalPoint);
        } else if (isFlush && isStraight) {
          return new HandRankModel("StraightFlush", totalPoint);
        } else if (numFours === 1) {
          return new HandRankModel("FourOfAKind", totalPoint);
        } else if (numTriples === 1 && numPairs === 1) {
          return new HandRankModel("FullHouse", totalPoint);
        } else if (isFlush) {
          return new HandRankModel("Flush", totalPoint);
        } else if (isStraight) {
          return new HandRankModel("Straight", totalPoint);
        } else if (numTriples === 1) {
          return new HandRankModel("ThreeOfAKind", totalPoint);
        } else if (numPairs === 2) {
          return new HandRankModel("TwoPair", totalPoint);
        } else if (numPairs === 1) {
          return new HandRankModel("OnePair", totalPoint);
        } else {
          return new HandRankModel("HighCard", totalPoint);
        }
      }  
      
      getCardDeckLength() {
        return this.cardDeck.length;
      }
}
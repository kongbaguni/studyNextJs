export class HandRank {
    public readonly value;
    public readonly point;   
    public readonly totalPoint;
    constructor(value:String, totalPoint:number) {    
        this.value = value;        
        this.totalPoint = totalPoint;
        switch (value) {
            case "RoyalFlush": 
                this.point = 10;
                break;
            case "StraightFlush":
                this.point = 9;
                break;
            case "FourOfAKind":
                this.point = 8;
                break;
            case "FullHouse":
                this.point = 7;
                break;
            case "Flush":
                this.point = 6;
                break;
            case "Straight":
                this.point = 5;
                break;
            case "ThreeOfAKind":
                this.point = 4;
                break;
            case "TwoPair":
                this.point = 3;
                break;
            case "OnePair":
                this.point = 2;
                break;
            case "HighCard":
                this.point = 1;
                break;
            default:
                this.point = 0;
                break;
        }
    }


}
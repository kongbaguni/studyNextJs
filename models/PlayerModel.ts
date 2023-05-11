import React from "react";
import { PeopleModel } from "./PeopleModel";
// import { HandRank } from "./HandRankModel";

export class PlayerModel extends PeopleModel {    
    public point:number = 0;    
    public bettingPoint:number = 0;
    /** 족보 */
    public handRank:String = "";
    /** 족보 만드는데 사용한 커뮤니티카드(3장) 의 idx  */
    public comunityIdxs:Array<number> = [];    
    public betting(point:number):boolean {
        if(this.point > point) {
            this.point -= point;
            this.bettingPoint +=+ point;
            return true;
        }
        return false;
    }

    public addPoint(point:number):void {
        this.point += point;
    }

    public getCardsValue():string {
        let result = ""
        for(let i=0; i<this.cards.length; i++) {
            if(result != "") {
                result += ","
            }
            result += this.cards[i].value
        }
        return result
    }    
    
}